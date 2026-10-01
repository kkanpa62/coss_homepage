/**
 * @file about.ts
 * @description 회사소개의 언어와 무관한 데이터. 영문 표제(COSS)와 K·N·P 글자·아이콘은 두 언어에서 같습니다.
 */

import { Lightbulb, Rocket, Users } from 'lucide-react';

/**
 * "Creation of Original / Strategic & Standard" 표제. 줄별 단어 목록이며,
 * 머리글자를 강조할 단어(COSS의 C·O·S·S)는 initial을 true로 둡니다.
 */
export const cossLines: { word: string; initial: boolean }[][] = [
  [
    { word: 'Creation', initial: true },
    { word: 'of', initial: false },
    { word: 'Original', initial: true },
  ],
  [
    { word: 'Strategic', initial: true },
    { word: '&', initial: false },
    { word: 'Standard', initial: true },
  ],
];

/** K·N·P 항목 — 배열 순서가 표시 순서입니다. */
export const knpDefs = [
  { id: 'K', icon: Lightbulb },
  { id: 'N', icon: Rocket },
  { id: 'P', icon: Users },
] as const;

export type KnpId = (typeof knpDefs)[number]['id'];
