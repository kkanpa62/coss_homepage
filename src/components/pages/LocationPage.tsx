/**
 * LocationPage 컴포넌트
 * 
 * COSS KNP GROUP의 위치 및 연락처 정보를 표시하는 페이지입니다.
 * 주소, 전화번호, 이메일, 운영시간 정보와 함께 구글맵을 제공합니다.
 */

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { MapPin, Phone, Mail, Clock, AlertCircle, RefreshCw } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { locationInfo } from '../../constants/location';

/**
 * 연락처 정보 아이템 컴포넌트
 */
interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  colorClass: string;
}

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
 * 구글맵 컴포넌트 - 강화된 에러 핸들링과 상태 관리
 */
function GoogleMap() {
  const { address, googleMapsApiKey } = locationInfo;
  const [mapError, setMapError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  // API 키가 없을 경우 에러 표시
  if (!googleMapsApiKey) {
    console.error('Google Maps API key is missing!');
    return (
      <Card className="aspect-video bg-muted flex items-center justify-center">
        <div className="text-center p-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <h4 className="font-medium text-red-500">지도 로딩 실패</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Google Maps API 키가 설정되지 않았습니다.
            <br />
            <code>.env</code> 파일에 <code>VITE_GOOGLE_MAPS_API_KEY</code>를 설정해주세요.
          </p>
        </div>
      </Card>
    );
  }

  // iframe URL 생성
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(address.fullAddress)}`;

  // 현재 환경 확인
  const isDevelopment = typeof import.meta !== 'undefined' && import.meta.env?.DEV;
  const currentDomain = typeof window !== 'undefined' ? window.location.hostname : '';

  // 개발 환경에서 도메인 제한 경고 로그
  if (isDevelopment && retryCount === 0) {
    console.log('🗺️ 지도 초기화 시작');
    console.log('📍 도메인:', currentDomain);
    console.log('🔗 URL:', embedUrl);

    if (currentDomain === 'localhost' || currentDomain === '127.0.0.1' || currentDomain.includes('localhost')) {
      console.warn('⚠️ localhost에서 Google Maps 제한 가능성 존재');
      console.warn('🔧 해결 방법: https://console.cloud.google.com/google/maps-apis');
    }
  }

  // iframe 에러 핸들러
  const handleIframeError = useCallback(() => {
    console.error('❌ 지도 로딩 실패 (시도 횟수: ' + (retryCount + 1) + ')');
    setMapError(true);
    setIsLoading(false);
  }, [retryCount]);

  // iframe 로드 성공 핸들러
  const handleIframeLoad = useCallback(() => {
    console.log('✅ 지도 로딩 성공');
    setMapError(false);
    setIsLoading(false);
  }, []);

  // 다시 시도 핸들러
  const handleRetry = useCallback(() => {
    setMapError(false);
    setIsLoading(true);
    setRetryCount(prev => prev + 1);
    console.log('🔄 지도 로딩 재시도...');
  }, []);

  // 최대 재시도 횟수 확인
  const maxRetries = 2;
  const canRetry = !isLoading && mapError && retryCount < maxRetries;

  // 에러 상태 UI
  if (mapError) {
    return (
      <Card className="aspect-video bg-muted flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-orange-500" />
            <h4 className="font-medium text-orange-600">지도 로딩 중 오류</h4>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground mb-4">
            <p>Google Maps를 표시할 수 없습니다. 다음 중 하나의 문제일 수 있습니다:</p>
            <ul className="text-left space-y-1 ml-4">
              <li>• API 키가 유효하지 않거나 제한됨</li>
              <li>• Maps Embed API가 활성화되지 않음</li>
              <li>• 인터넷 연결 문제</li>
              <li>• 일시적인 Google 서비스 장애</li>
            </ul>
          </div>

          <div className="flex gap-2 justify-center">
            {canRetry && (
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                다시 시도 ({maxRetries - retryCount})
              </button>
            )}

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-chart-1 to-chart-5 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <MapPin className="w-4 h-4" />
              구글맵에서 보기
            </a>
          </div>

          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-xs text-muted-foreground hover:text-foreground">
              🛠️ 개발자 정보
            </summary>
            <div className="mt-2 text-xs font-mono bg-muted p-2 rounded">
              <div>Domain: {currentDomain}</div>
              <div>API Key: {googleMapsApiKey ? `${googleMapsApiKey.slice(0, 20)}...` : '없음'}</div>
              <div>Address: {address.fullAddress}</div>
              <div>Env: {isDevelopment ? 'development' : 'production'}</div>
            </div>
          </details>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* 구글맵 임베드 */}
      <Card className="overflow-hidden aspect-video bg-muted hover:shadow-xl transition-all duration-300 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">지도를 불러오는 중...</p>
            </div>
          </div>
        )}

        <iframe
          key={retryCount} // 재시도 시 iframe을 강제로 리렌더링
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy={isDevelopment ? "no-referrer" : "no-referrer-when-downgrade"}
          title="COSS KNP GROUP 위치"
          onError={handleIframeError}
          onLoad={handleIframeLoad}
        />
      </Card>

      {/* 구글맵에서 보기 버튼 */}
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

export function LocationPage() {
  const { address, contact, businessHours, emailInfo } = locationInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-chart-5/5 to-background py-20">
      <div className="container mx-auto px-4">
        {/* 페이지 헤더 */}
        <SectionHeader 
          title="오시는길"
        />

        <div className="max-w-5xl mx-auto">
          {/* 연락처 정보 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* 주소 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <ContactItem
                  icon={<MapPin className="w-6 h-6 text-chart-1" />}
                  title="주소"
                  content={
                    <>
                      {address.street}
                      <br />
                      {address.building}
                      <br />
                      우편번호: {address.postalCode}
                    </>
                  }
                  colorClass="bg-chart-1/10"
                />
              </Card>
            </motion.div>

            {/* 전화번호 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <ContactItem
                  icon={<Phone className="w-6 h-6 text-chart-2" />}
                  title="전화번호"
                  content={
                    <>
                      {contact.phone}
                      <br />
                      <br />
                      {businessHours.weekday}
                      <br />
                      {businessHours.lunch}
                    </>
                  }
                  colorClass="bg-chart-2/10"
                />
              </Card>
            </motion.div>

            {/* 이메일 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <ContactItem
                  icon={<Mail className="w-6 h-6 text-chart-3" />}
                  title="이메일"
                  content={
                    <>
                      {contact.email}
                      <br />
                      <br />
                      {emailInfo.availability}
                      <br />
                      {emailInfo.responseTime}
                    </>
                  }
                  colorClass="bg-chart-3/10"
                />
              </Card>
            </motion.div>
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
