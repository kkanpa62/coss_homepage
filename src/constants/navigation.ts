/**
 * 네비게이션 메뉴 항목 정의
 * 
 * 상단 네비게이션 바에 표시될 메뉴 항목들을 중앙에서 관리합니다.
 * 새로운 페이지를 추가하거나 메뉴 순서를 변경할 때 이 파일만 수정하면 됩니다.
 */

import { NavigationItem } from '../types';

/**
 * 네비게이션 메뉴 항목 배열
 * 배열의 순서대로 네비게이션 바에 표시됩니다.
 */
export const navigationItems: NavigationItem[] = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '회사소개' },
  { id: 'services', label: '업무분야' },
  { id: 'members', label: '구성원' },
  { id: 'news', label: '뉴스/소식' },
  { id: 'location', label: '오시는길' },
];
