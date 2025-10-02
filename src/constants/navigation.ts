/**
 * @file navigation.ts
 * @description 웹사이트의 상단 네비게이션 메뉴 항목을 정의합니다.
 *              메뉴의 순서나 이름을 변경할 때 이 파일을 수정합니다.
 * @exports navigationItems - NavigationItem 타입의 배열로 구성된 메뉴 데이터
 */

import { NavigationItem } from '../types';

/**
 * @constant navigationItems
 * @type {NavigationItem[]}
 * @description 상단 네비게이션 바에 표시될 메뉴 항목의 배열입니다.
 *              배열의 순서가 실제 메뉴의 순서를 결정합니다.
 */
export const navigationItems: NavigationItem[] = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '회사소개' },
  { id: 'services', label: '업무분야' },
  { id: 'members', label: '구성원' },
  { id: 'news', label: '뉴스/소식' },
  { id: 'location', label: '오시는길' },
];
