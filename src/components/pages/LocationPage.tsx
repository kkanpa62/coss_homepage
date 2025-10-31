/**
 * @file LocationPage.tsx
 * @description COSS KNP GROUP의 위치 및 연락처 정보를 표시하는 페이지 컴포넌트입니다.
 * @component LocationPage
 * @imports React, framer-motion, lucide-react, custom UI components, constants
 */

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { MapPin, Phone, Mail, AlertCircle, RefreshCw } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { locationInfo } from '../../constants/location';

/**
 * @interface ContactItemProps
 * @description 연락처 정보 아이템 컴포넌트의 props 타입을 정의합니다.
 * @property {React.ReactNode} icon - 아이템 좌측에 표시될 아이콘
 * @property {string} title - 정보의 제목 (예: "주소")
 * @property {React.ReactNode} content - 정보의 상세 내용
 * @property {string} colorClass - 아이콘 배경색을 위한 Tailwind CSS 클래스
 */
interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  colorClass: string;
}

/**
 * @component ContactItem
 * @description 아이콘, 제목, 내용으로 구성된 연락처 정보 아이템을 렌더링합니다.
 * @param {ContactItemProps} props - 컴포넌트 props
 * @returns {JSX.Element}
 */
function ContactItem({ icon, title, content, colorClass }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 rounded-lg ${colorClass} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="mb-1">{title}</h4>
        <div className="text-muted-foreground">
          {content}
        </div>
      </div>
    </div>
  );
}

/**
 * @component MissingApiKeyWarning
 * @description Google Maps API 키가 없을 때 표시되는 경고 컴포넌트입니다.
 * @returns {JSX.Element}
 */
const MissingApiKeyWarning = () => (
  <Card className="aspect-video bg-muted flex items-center justify-center">
    <div className="text-center p-4">
      <div className="flex items-center justify-center gap-2 mb-2">
        <AlertCircle className="w-5 h-5 text-red-500" />
        <h4 className="font-medium text-red-500">지도 로딩 실패</h4>
      </div>
      <p className="text-sm text-muted-foreground">
        Google Maps API 키가 설정되지 않았습니다.
      </p>
    </div>
  </Card>
);

/**
 * @component MapLoadingIndicator
 * @description 지도를 불러오는 동안 표시되는 로딩 스피너 컴포넌트입니다.
 * @returns {JSX.Element}
 */
const MapLoadingIndicator = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
    <div className="text-center">
      <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
      <p className="text-sm text-muted-foreground">지도를 불러오는 중...</p>
    </div>
  </div>
);

/**
 * @interface MapErrorDisplayProps
 * @description 지도 로딩 에러 컴포넌트의 props 타입을 정의합니다.
 * @property {() => void} onRetry - '다시 시도' 버튼 클릭 시 호출될 함수
 * @property {boolean} canRetry - 재시도 가능 여부
 * @property {number} retriesLeft - 남은 재시도 횟수
 * @property {string} fullAddress - 구글맵에서 보기 링크에 사용될 전체 주소
 */
interface MapErrorDisplayProps {
  onRetry: () => void;
  canRetry: boolean;
  retriesLeft: number;
  fullAddress: string;
}

/**
 * @component MapErrorDisplay
 * @description 지도 로딩에 실패했을 때 표시되는 에러 UI 컴포넌트입니다.
 * @param {MapErrorDisplayProps} props - 컴포넌트 props
 * @returns {JSX.Element}
 */
const MapErrorDisplay = ({ onRetry, canRetry, retriesLeft, fullAddress }: MapErrorDisplayProps) => (
  <Card className="aspect-video bg-muted flex items-center justify-center">
    <div className="text-center p-6 max-w-md">
      <div className="flex items-center justify-center gap-2 mb-4">
        <AlertCircle className="w-6 h-6 text-orange-500" />
        <h4 className="font-medium text-orange-600">지도 로딩 중 오류</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Google Maps를 표시할 수 없습니다. 인터넷 연결이나 API 키 설정을 확인해주세요.
      </p>
      <div className="flex gap-2 justify-center">
        {canRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            다시 시도 ({retriesLeft})
          </button>
        )}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-chart-1 to-chart-5 text-white rounded-lg hover:shadow-lg transition-all"
        >
          <MapPin className="w-4 h-4" />
          구글맵에서 보기
        </a>
      </div>
    </div>
  </Card>
);

/**
 * @component GoogleMap
 * @description Google Maps를 iframe으로 임베드하고, 로딩 및 에러 상태를 관리하는 컴포넌트입니다.
 * @returns {JSX.Element}
 */
function GoogleMap() {
  const { address, googleMapsApiKey, mapStyleId } = locationInfo;
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const MAX_RETRIES = 2;

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    setMapError(false);
  }, []);

  const handleIframeError = useCallback(() => {
    setIsLoading(false);
    setMapError(true);
  }, []);

  const handleRetry = useCallback(() => {
    if (retryCount < MAX_RETRIES) {
      setIsLoading(true);
      setMapError(false);
      setRetryCount(prev => prev + 1);
    }
  }, [retryCount]);

  if (!googleMapsApiKey) {
    return <MissingApiKeyWarning />;
  }

  if (mapError) {
    return (
      <MapErrorDisplay
        onRetry={handleRetry}
        canRetry={retryCount < MAX_RETRIES}
        retriesLeft={MAX_RETRIES - retryCount}
        fullAddress={address.fullAddress}
      />
    );
  }

  const params = new URLSearchParams({
    key: googleMapsApiKey,
    q: address.fullAddress,
  });

  if (mapStyleId) {
    params.append('map_id', mapStyleId);
  }

  const embedUrl = `https://www.google.com/maps/embed/v1/place?${params.toString()}`;

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden aspect-video bg-muted hover:shadow-xl transition-all duration-300 relative">
        {isLoading && <MapLoadingIndicator />}
        <iframe
          key={retryCount} // 재시도 시 iframe을 강제로 리렌더링
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, visibility: isLoading ? 'hidden' : 'visible' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="COSS KNP GROUP 위치"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </Card>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.fullAddress)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-chart-1 to-chart-5 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        <MapPin className="w-5 h-5" />
        <span>구글맵에서 크게 보기</span>
      </a>
    </div>
  );
}

/**
 * @component LocationPage
 * @description '오시는길' 페이지의 전체 레이아웃과 컨텐츠를 구성합니다.
 * @returns {JSX.Element}
 */
export function LocationPage() {
  const { address, contact, businessHours, emailInfo } = locationInfo;

  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6 text-chart-1" />,
      title: "주소",
      content: <>{address.street}<br />{address.building}<br />우편번호: {address.postalCode}</>,
      colorClass: "bg-chart-1/10"
    },
    {
      icon: <Phone className="w-6 h-6 text-chart-2" />,
      title: "전화번호",
      content: <>{contact.phone}<br /><br />{businessHours.weekday}<br />{businessHours.lunch}</>,
      colorClass: "bg-chart-2/10"
    },
    {
      icon: <Mail className="w-6 h-6 text-chart-3" />,
      title: "이메일",
      content: <>{contact.email}<br /><br />{emailInfo.availability}<br />{emailInfo.responseTime}</>,
      colorClass: "bg-chart-3/10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-chart-5/5 to-background py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="오시는길" />

        <div className="max-w-5xl mx-auto">
          {/* 연락처 정보 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <ContactItem {...item} />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 지도 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <GoogleMap />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
