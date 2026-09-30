/**
 * @file index.ts
 * @description 애플리케이션 전역에서 사용되는 TypeScript 타입과 인터페이스를 정의합니다.
 *              데이터 구조의 일관성을 유지하고 타입 안정성을 보장하는 역할을 합니다.
 */

/**
 * @type PageType
 * @description 웹사이트의 모든 페이지 종류를 나타내는 식별자입니다.
 */
export type PageType =
  | 'home'
  | 'about'
  | 'services'
  | 'members'
  | 'news'
  | 'location';

/**
 * @interface PageIntro
 * @description 하위 페이지 상단(PageHeader)에 표시되는 문구입니다.
 * @property {string} [eyebrow] - 제목 위 작은 영문 라벨
 * @property {string[]} title - 제목(한 줄씩)
 * @property {string} [description] - 제목 아래 설명
 */
export interface PageIntro {
  eyebrow?: string;
  title: string[];
  description?: string;
}

/**
 * @interface SectionIntro
 * @description 홈 섹션 머리(SectionHeader)에 표시되는 문구입니다.
 */
export interface SectionIntro {
  title: string;
  description?: string;
}

/**
 * @interface Member
 * @description 구성원 한 명의 상세 정보를 나타내는 데이터 구조입니다.
 * @property {number} id - 각 구성원을 식별하는 고유 ID
 * @property {string} name - 구성원의 이름
 * @property {string} position - 영문 이름 및 직책
 * @property {string} department - 소속 부서 또는 직급
 * @property {MemberImages} images - 프로필 이미지 경로 모음 (public 디렉토리 기준)
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
  images: MemberImages;
  bio?: string;
  education?: string[];
  experience?: string[];
  expertise?: string[];
}

/**
 * @interface MemberImages
 * @description 구성원 이미지 변형을 모아둔 객체입니다.
 * @property {string} preview - 홈 구성원 섹션(768x768)에 사용될 이미지
 * @property {string} list - 구성원 목록 카드(300x300)에 사용될 이미지
 * @property {string} detail - 상세 페이지의 큰 이미지
 */
export interface MemberImages {
  preview: string;
  list: string;
  detail: string;
}

/**
 * @interface NavigationItem
 * @description 상단 네비게이션 메뉴의 각 항목을 정의하는 데이터 구조입니다.
 * @property {PageType} id - 메뉴 항목이 연결될 페이지의 식별자
 * @property {string} label - 메뉴에 표시될 텍스트
 * @property {string} path - React Router에서 사용할 실제 경로
 */
export interface NavigationItem {
  id: PageType;
  label: string;
  path: string;
}
