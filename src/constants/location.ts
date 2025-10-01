/**
 * COSS KNP GROUP 위치 및 연락처 정보
 * 
 * 오시는길 페이지에서 사용되는 회사의 주소, 연락처 등의 정보를 관리합니다.
 */

export const locationInfo = {
  address: {
    street: '서울특별시 강남구 도곡로 111',
    building: '미진빌딩 5층',
    postalCode: '06253',
    // 구글맵 검색용 전체 주소
    fullAddress: '서울특별시 강남구 도곡로 111',
    // 구글맵 URL
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=서울특별시+강남구+도곡로+111',
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
  
  // 구글맵 API 키
  // 배포 시에는 환경 변수를 사용하고, 개발 환경에서는 하드코딩된 값 사용
  googleMapsApiKey: (() => {
    try {
      return (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GOOGLE_MAPS_API_KEY) || 'AIzaSyCqPIOLnMxToQm-T8Fl4avdHpej4xQHq_o';
    } catch {
      return 'AIzaSyCqPIOLnMxToQm-T8Fl4avdHpej4xQHq_o';
    }
  })(),
};
