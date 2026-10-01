/**
 * @file GoogleMap.tsx
 * @description Google Maps를 iframe으로 임베드하고, 로딩·오류·API 키 없음 상태를 표시합니다.
 *              지도 안 글자도 현재 언어로 보이도록 language 값을 함께 넘깁니다.
 */

import { ReactNode, useCallback, useState } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { googleMapsSearchUrl, locationInfo } from '../../constants/location';
import { useI18n } from '../../i18n/I18nProvider';
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
  const { locale, content } = useI18n();
  const text = content.location.map;
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
      return <MapNotice title={text.missingKeyTitle} message={text.missingKeyMessage} />;
    }

    if (mapError) {
      return (
        <MapNotice title={text.errorTitle} message={text.errorMessage}>
          <div className="map__actions">
            {retryCount < MAX_RETRIES && (
              <button type="button" className="map__retry" onClick={handleRetry}>
                <RefreshCw aria-hidden="true" width={13} height={13} /> {text.retry} ({MAX_RETRIES - retryCount})
              </button>
            )}
            <TextLink href={googleMapsSearchUrl}>{text.openInMaps}</TextLink>
          </div>
        </MapNotice>
      );
    }

    const params = new URLSearchParams({ key: googleMapsApiKey, q: address.mapQuery, language: locale });

    return (
      <>
        {isLoading && (
          <div className="map__state">
            <div>
              <div className="map__spinner" />
              <p>{text.loading}</p>
            </div>
          </div>
        )}
        <iframe
          key={`${locale}-${retryCount}`} // 재시도·언어 변경 시 iframe을 새로 그립니다
          src={`https://www.google.com/maps/embed/v1/place?${params.toString()}`}
          style={{ visibility: isLoading ? 'hidden' : 'visible' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={text.iframeTitle}
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
          <TextLink href={googleMapsSearchUrl}>{text.openLarge}</TextLink>
        </p>
      )}
    </div>
  );
}
