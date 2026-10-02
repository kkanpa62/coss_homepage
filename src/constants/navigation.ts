/**
 * @file navigation.ts
 * @description 상단 메뉴의 순서와 경로(언어 공통). 메뉴 이름은 content/{ko,ja}.ts의 navigation에 있습니다.
 */

import { NavigationItem } from '../types';

/** 배열 순서가 실제 메뉴 순서입니다. */
export const navigationItems: NavigationItem[] = [
  { id: 'home', path: '/' },
  { id: 'about', path: '/about' },
  { id: 'services', path: '/services' },
  { id: 'members', path: '/members' },
  { id: 'news', path: '/news', highlight: true }, // 매달 리포트가 올라오는 메뉴라 강조
  { id: 'location', path: '/location' },
];
