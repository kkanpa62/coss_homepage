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
  /** 이름 읽는 법(일본어 페이지에서 한자 이름 아래에 가타카나로 표시). 없으면 표시하지 않음 */
  reading?: string;
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
 * @property {PageType} id - 메뉴 항목이 연결될 페이지의 식별자(메뉴 이름은 언어별 content의 navigation)
 * @property {string} path - 언어 공통 경로(실제 링크는 언어 접두어를 붙여 씀)
 */
export interface NavigationItem {
  id: PageType;
  path: string;
}

/**
 * 아래 타입은 언어 공통 데이터(constants)와 언어별 문구(content)를 합친, 화면에서 쓰는 형태입니다.
 */

/** 업무분야 하이라이트 */
export interface ServiceHighlight {
  title: string;
  description: string;
}

/** 업무분야 한 개 */
export interface ServiceData {
  id: number;
  icon: import('lucide-react').LucideIcon;
  title: string;
  description: string;
  highlights: ServiceHighlight[];
  services: string[];
}

/** 뉴스 한 건 */
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  source: string;
  url: string;
}

/** 차별화된 강점 한 개 */
export interface Strength {
  id: string;
  title: string;
  description: string;
  image: string;
}

/** 회사소개 K·N·P 항목 한 개 */
export interface KnpItem {
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  icon: import('lucide-react').LucideIcon;
}
