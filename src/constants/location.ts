/**
 * @file location.ts
 * @description COSS KNP GROUP의 위치, 연락처, 운영 시간 등 오시는길 페이지에 필요한 모든 상수 데이터를 정의합니다.
 * @exports locationInfo - 위치 및 연락처 정보를 담고 있는 객체
 */

/**
 * @interface LocationInfo
 * @description locationInfo 객체의 데이터 구조를 정의하는 타입입니다.
 */
interface LocationInfo {
  /** @property {object} address - 회사 주소 정보 */
  address: {
    /** @property {string} street - 도로명 주소 */
    street: string;
    /** @property {string} building - 건물 및 층 정보 */
    building: string;
    /** @property {string} postalCode - 우편번호 */
    postalCode: string;
    /** @property {string} fullAddress - Google Maps 검색 및 임베드에 사용될 전체 주소 */
    fullAddress: string;
    /** @property {string} mapUrl - '구글맵에서 보기' 링크에 사용될 URL */
    mapUrl: string;
  };
  /** @property {object} contact - 연락처 정보 */
  contact: {
    /** @property {string} phone - 대표 전화번호 */
    phone: string;
    /** @property {string} email - 대표 이메일 주소 */
    email: string;
  };
  /** @property {object} businessHours - 영업시간 정보 */
  businessHours: {
    /** @property {string} weekday - 평일 영업시간 */
    weekday: string;
    /** @property {string} lunch - 점심시간 */
    lunch: string;
  };
  /** @property {object} emailInfo - 이메일 관련 추가 정보 */
  emailInfo: {
    /** @property {string} availability - 이메일 접수 가능 시간 */
    availability: string;
    /** @property {string} responseTime - 예상 응답 시간 */
    responseTime: string;
  };
  /** @property {string} googleMapsApiKey - Google Maps Embed API에 사용될 API 키 */
  googleMapsApiKey: string;
  /** @property {string} [mapStyleId] - Google Maps 스타일 ID (예: 다크 모드 테마) */
  mapStyleId?: string;
}

/**
 * @constant locationInfo
 * @description COSS KNP GROUP의 위치 및 연락처 정보를 담고 있는 객체입니다.
 *              데이터를 한 곳에서 관리하여 유지보수성을 높입니다.
 */
export const locationInfo: LocationInfo = {
  address: {
    street: '서울특별시 강남구 도곡로 111',
    building: '미진빌딩 5층',
    postalCode: '06253',
    fullAddress: '서울특별시 강남구 도곡로 111 미진빌딩',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=서울특별시+강남구+도곡로+111+미진빌딩',
  },
  
  contact: {
    phone: '02-552-8381',
    email: 'mail@coss-knp.com',
  },
  
  businessHours: {
    weekday: '평일 09:00 - 18:00',
    lunch: '점심시간 12:00 - 13:00',
  },
  
  emailInfo: {
    availability: '24시간 접수 가능',
    responseTime: '영업일 기준 24시간 이내 답변',
  },
  
  /**
   * Vite 환경 변수에서 Google Maps API 키를 안전하게 로드합니다.
   * `import.meta.env`는 Vite의 기능으로, 빌드 시점에 환경 변수 값을 코드에 주입합니다.
   * 키가 없을 경우 빈 문자열을 반환하며, UI 컴포넌트에서 이를 처리합니다.
   */
  googleMapsApiKey: (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string) || '',
  mapStyleId: 'affa67138d1b2e28c065ae55',
};
