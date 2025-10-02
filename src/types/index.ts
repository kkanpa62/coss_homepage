/**
 * @file index.ts
 * @description 애플리케이션 전역에서 사용되는 TypeScript 타입과 인터페이스를 정의합니다.
 *              데이터 구조의 일관성을 유지하고 타입 안정성을 보장하는 역할을 합니다.
 */

/**
 * @type PageType
 * @description 웹사이트의 모든 페이지 종류를 나타내는 식별자입니다.
 *              App.tsx의 라우팅 로직과 Navigation 컴포넌트에서 사용됩니다.
 */
export type PageType = 
  | 'home'
  | 'about'
  | 'services'
  | 'members'
  | 'news'
  | 'location'
  | 'member-detail';

/**
 * @interface Member
 * @description 구성원 한 명의 상세 정보를 나타내는 데이터 구조입니다.
 * @property {number} id - 각 구성원을 식별하는 고유 ID
 * @property {string} name - 구성원의 이름
 * @property {string} position - 영문 이름 및 직책
 * @property {string} department - 소속 부서 또는 직급
 * @property {string} image - 프로필 이미지 경로 (public 디렉토리 기준)
 * @property {string} [bio] - 구성원의 약력 또는 소개 (선택 사항)
 * @property {string[]} [education] - 학력 사항 목록 (선택 사항)
 * @property {string[]} [experience] - 경력 사항 목록 (선택 사항)
 * @property {string[]} [expertise] - 전문 분야 목록 (선택 사항)
 */
export interface Member {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  bio?: string;
  education?: string[];
  experience?: string[];
  expertise?: string[];
}

/**
 * @interface NavigationItem
 * @description 상단 네비게이션 메뉴의 각 항목을 정의하는 데이터 구조입니다.
 * @property {PageType} id - 메뉴 항목이 연결될 페이지의 식별자
 * @property {string} label - 메뉴에 표시될 텍스트
 */
export interface NavigationItem {
  id: PageType;
  label: string;
}

/**
 * @interface NavigationOptions
 * @description 페이지 이동 함수(`handleNavigate`)에 전달될 수 있는 추가 옵션입니다.
 * @property {number} [serviceId] - '업무분야' 페이지로 이동 시, 특정 서비스 섹션으로 스크롤하기 위한 ID (선택 사항)
 */
export interface NavigationOptions {
  serviceId?: number;
}
