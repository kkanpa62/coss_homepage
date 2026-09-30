/**
 * @file home.ts
 * @description 홈 페이지(히어로·구성원·업무분야·차별화된 강점 섹션)에 표시되는 문구와 데이터를 정의합니다.
 */

import { SectionIntro } from '../types';

/**
 * @constant heroContent
 * @description 홈 최상단 히어로 영역의 문구입니다.
 */
export const heroContent = {
  eyebrow: 'COSS KNP GROUP',
  title: ['인공지능으로', '미래를 설계합니다'],
  description:
    '고도화된 AI 기술력과 풍부한 실무 경험으로 고객의 성장 동력을 확보하고 차별화된 지식재산 솔루션을 선사합니다.',
};

/**
 * @constant homeSections
 * @description 홈 각 섹션 머리의 제목과 설명입니다.
 */
export const homeSections: Record<'members' | 'expertise' | 'strengths', SectionIntro> = {
  members: {
    title: '구성원',
    description: '각 분야 최고의 전문가들이 함께합니다.',
  },
  expertise: {
    title: '업무분야',
    description: '지식재산권 전 분야에 걸친 차별화된 전문 서비스를 제공합니다',
  },
  strengths: {
    title: '차별화된 강점',
    description: '전문성과 글로벌 네트워크를 바탕으로 고객의 지식재산권을 보호합니다',
  },
};

/**
 * @constant HOME_MEMBER_ORDER
 * @description 홈 구성원 섹션에 표시할 구성원 ID와 순서입니다.
 */
export const HOME_MEMBER_ORDER = [1, 6, 7, 2, 5, 3, 4, 8];

/**
 * @interface Strength
 * @description 차별화된 강점 항목 하나의 데이터 구조입니다.
 */
export interface Strength {
  title: string;
  description: string;
  image: string;
}

/**
 * @constant strengths
 * @description 차별화된 강점 3개 항목입니다.
 */
export const strengths: Strength[] = [
  {
    title: '혁신적 기술 전문성',
    description: '메타버스, AI, 로봇, 바이오텍, 화학 등 첨단 기술 분야에서 축적된 전문 지식과 경험을 바탕으로 고객의 혁신적인 아이디어를 효과적으로 보호합니다.',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkxNjQyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: '전문 변리사팀',
    description: '각 분야 전문가들이 고객 맞춤형 솔루션을 제공하며, 지속적인 연구와 학습을 통해 최신 법률 동향에 발빠르게 대응합니다.',
    image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGF0YXxlbnwxfHx8fDE3NTkxMzE3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: '글로벌 네트워크',
    description: 'PCT, 마드리드 의정서 등 국제 출원 시스템과 전 세계 현지 대리인 네트워크를 활용하여 글로벌 시장에서의 지식재산권 보호를 지원합니다.',
    image: 'https://images.unsplash.com/photo-1681505526188-b05e68c77582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwYnVzaW5lc3MlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3NTkzMDM3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];
