/**
 * @file home.ts
 * @description 홈의 언어와 무관한 데이터(구성원 표시 순서·강점 이미지). 문구는 content/{ko,ja}.ts에 있습니다.
 */

import { MemberId } from './members';

/** 홈 구성원 섹션에 표시할 구성원 ID와 순서 */
export const HOME_MEMBER_ORDER: MemberId[] = [1, 6, 7, 2, 5, 3, 4, 8];

/** 차별화된 강점 3개 — 배열 순서가 표시 순서입니다. */
export const strengthDefs = [
  {
    id: 'technology',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkxNjQyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'team',
    image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGF0YXxlbnwxfHx8fDE3NTkxMzE3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'network',
    image: 'https://images.unsplash.com/photo-1681505526188-b05e68c77582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwYnVzaW5lc3MlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3NTkzMDM3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
] as const;

export type StrengthId = (typeof strengthDefs)[number]['id'];
