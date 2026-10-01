/**
 * @file location.ts
 * @description 위치·연락처의 언어와 무관한 데이터. 주소 표기·영업시간 등 문구는 content/{ko,ja}.ts에 있습니다.
 */

export const locationInfo = {
  address: {
    postalCode: '06253',
    /** 지도 검색·임베드용 주소 — 지도 정확도를 위해 언어와 상관없이 한국어 주소를 씁니다. */
    mapQuery: '서울특별시 강남구 도곡로 111 미진빌딩',
  },
  contact: {
    /** 전화 걸기 링크용 국제 번호(국내·해외 모두 동작) */
    phoneIntl: '+82-2-552-8381',
    email: 'mail@coss-knp.com',
  },
  /**
   * Vite 환경 변수에서 Google Maps API 키를 읽습니다(빌드 시점에 주입, 배포는 GitHub Secret).
   * 키가 없으면 빈 문자열이고, 지도 컴포넌트가 안내 문구를 보여 줍니다.
   */
  googleMapsApiKey: (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string) || '',
};

/** 구글맵 검색 페이지 URL */
export const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationInfo.address.mapQuery)}`;
