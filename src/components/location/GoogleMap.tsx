/**
 * @file GoogleMap.tsx
 * @description Google Maps를 iframe으로 임베드하고, 로딩·오류·API 키 없음 상태를 표시합니다.
 */

import { ReactNode, useCallback, useState } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { googleMapsSearchUrl, locationInfo } from '../../constants/location';
import { TextLink } from '../common/TextLink';

const MAX_RETRIES = 2;

/** 지도 위에 겹쳐 보이는 상태 안내(키 없음·오류) */
function MapNotice({ title, message, children }: { title: string; message: string; children?: ReactNode }) {
  return (
    <div className="map__state">
      <div>
        <p className="map__state-title">
          <AlertCircle aria-hidden="true" />
          {title}
        </p>
        <p>{message}</p>
        {children}
      </div>
    </div>
  );
}

export function GoogleMap() {
  const { address, googleMapsApiKey } = locationInfo;
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setMapError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setMapError(true);
  }, []);

  const handleRetry = useCallback(() => {
    if (retryCount < MAX_RETRIES) {
      setIsLoading(true);
      setMapError(false);
      setRetryCount((prev) => prev + 1);
    }
  }, [retryCount]);

  const renderMap = () => {
    if (!googleMapsApiKey) {
      return <MapNotice title="지도 로딩 실패" message="Google Maps API 키가 설정되지 않았습니다." />;
    }

    if (mapError) {
      return (
        <MapNotice
          title="지도 로딩 중 오류"
          message="Google Maps를 표시할 수 없습니다. 인터넷 연결이나 API 키 설정을 확인해주세요."
        >
          <div className="map__actions">
            {retryCount < MAX_RETRIES && (
              <button type="button" className="map__retry" onClick={handleRetry}>
                <RefreshCw aria-hidden="true" width={13} height={13} /> 다시 시도 ({MAX_RETRIES - retryCount})
              </button>
            )}
            <TextLink href={googleMapsSearchUrl}>구글맵에서 보기</TextLink>
          </div>
        </MapNotice>
      );
    }

    const params = new URLSearchParams({ key: googleMapsApiKey, q: address.fullAddress });

    return (
      <>
        {isLoading && (
          <div className="map__state">
            <div>
              <div className="map__spinner" />
              <p>지도를 불러오는 중...</p>
            </div>
          </div>
        )}
        <iframe
          key={retryCount} // 재시도 시 iframe을 강제로 리렌더링
          src={`https://www.google.com/maps/embed/v1/place?${params.toString()}`}
          style={{ visibility: isLoading ? 'hidden' : 'visible' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="COSS KNP GROUP 위치"
          onLoad={handleLoad}
          onError={handleError}
        />
      </>
    );
  };

  const showLargeMapLink = googleMapsApiKey && !mapError;

  return (
    <div>
      <div className="map">{renderMap()}</div>
      {showLargeMapLink && (
        <p className="map__link">
          <TextLink href={googleMapsSearchUrl}>구글맵에서 크게 보기</TextLink>
        </p>
      )}
    </div>
  );
}
