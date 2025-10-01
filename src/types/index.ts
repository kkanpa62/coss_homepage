/**
 * COSS KNP GROUP 웹사이트 타입 정의
 * 
 * 애플리케이션 전역에서 사용되는 TypeScript 타입과 인터페이스를 정의합니다.
 */

/**
 * 페이지 타입
 * 웹사이트의 모든 페이지를 나타내는 유니온 타입
 */
export type PageType = 
  | 'home'           // 홈 페이지
  | 'about'          // 회사소개
  | 'services'       // 업무분야
  | 'members'        // 구성원 목록
  | 'news'           // 뉴스/소식
  | 'location'       // 오시는길
  | 'member-detail'; // 구성원 상세 페이지

/**
 * 구성원 정보 인터페이스
 * 각 구성원의 상세 정보를 담는 데이터 구조
 */
export interface Member {
  id: number;              // 고유 식별자
  name: string;            // 이름
  position: string;        // 직책/직위
  department: string;      // 소속 부서
  image: string;           // 프로필 이미지 URL
  bio?: string;            // 간단한 소개 (선택적)
  education?: string[];    // 학력 목록 (선택적)
  experience?: string[];   // 경력 목록 (선택적)
  expertise?: string[];    // 전문 분야 목록 (선택적)
}

/**
 * 네비게이션 아이템 인터페이스
 * 상단 네비게이션 메뉴의 각 항목을 나타냄
 */
export interface NavigationItem {
  id: PageType;     // 페이지 식별자 (PageType과 연결)
  label: string;    // 메뉴에 표시될 텍스트
}

/**
 * 네비게이션 옵션
 * 페이지 이동 시 추가 옵션을 전달하기 위한 인터페이스
 */
export interface NavigationOptions {
  serviceId?: number;  // 업무분야 페이지의 특정 섹션 ID (스크롤 타겟)
}
