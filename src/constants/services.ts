/**
 * COSS KNP GROUP 업무분야 데이터
 * 
 * 지식재산권 관련 서비스 정보를 중앙에서 관리합니다.
 * Services 페이지와 홈 페이지에서 공통으로 사용됩니다.
 */

import { Scale, Globe, Award, Target, Palette, Shield, LucideIcon } from 'lucide-react';

/**
 * 서비스 하이라이트 타입
 */
export interface ServiceHighlight {
  title: string;
  description: string;
}

/**
 * 서비스 데이터 타입
 */
export interface ServiceTheme {
  leftCardGradient: string;
  leftCardBorderColor: string;
  headerGradient: string;
  iconGradient: string;
  descriptionColor: string;
  highlightTitleColor: string;
  highlightDescriptionColor: string;
  bulletRingColor: string;
  bulletDotColor: string;
  rightCardGradient: string;
  rightCardBorderColor: string;
  rightIconBackground: string;
  serviceItemBackground: string;
  serviceItemBorderColor: string;
  serviceItemTextColor: string;
}

export interface ServiceData {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  highlights: ServiceHighlight[];
  services: string[];
  theme: ServiceTheme;
}

/**
 * 업무분야 전체 데이터
 */
export const servicesData: ServiceData[] = [
  {
    id: 1,
    icon: Scale,
    title: '특허',
    description: '혁신적인 발명과 기술을 법적으로 보호하고, 경쟁 우위를 확보할 수 있도록 특허 출원부터 등록, 활용까지 전 과정을 지원합니다. AI 기술 특허를 포함한 첨단 기술 분야의 전문적인 특허 전략을 제공합니다.',
    color: 'chart-1',
    highlights: [
      { title: '특허 출원', description: '국내외 특허 출원 대행 및 AI 기술 특허 전략' },
      { title: '특허 분석', description: '선행기술 조사 및 특허맵 작성' }
    ],
    services: [
      '특허 출원 및 중간처리',
      '실용신안 출원 및 등록',
      '선행기술 조사 및 특허성 판단',
      '특허 포트폴리오 구축 및 관리',
      '무효심판 및 정정심판',
      '특허 라이센싱 및 기술이전'
    ],
    theme: {
      leftCardGradient: 'linear-gradient(135deg, #2c1206 0%, #140704 100%)',
      leftCardBorderColor: 'rgba(255,138,24,0.35)',
      headerGradient: 'linear-gradient(135deg, #ffb347 0%, #ff7a18 100%)',
      iconGradient: 'linear-gradient(135deg, rgba(255,212,128,0.9) 0%, rgba(255,122,24,0.9) 100%)',
      descriptionColor: 'rgba(255,236,217,0.9)',
      highlightTitleColor: 'rgba(255,248,236,0.95)',
      highlightDescriptionColor: 'rgba(255,225,200,0.8)',
      bulletRingColor: 'rgba(255,138,24,0.55)',
      bulletDotColor: '#ff8a18',
      rightCardGradient: 'linear-gradient(135deg, rgba(17,24,39,0.88) 0%, rgba(11,15,25,0.95) 100%)',
      rightCardBorderColor: 'rgba(148,163,184,0.25)',
      rightIconBackground: 'linear-gradient(135deg, rgba(255,138,24,0.25), rgba(255,122,24,0.08))',
      serviceItemBackground: 'rgba(30,41,59,0.45)',
      serviceItemBorderColor: 'rgba(100,116,139,0.35)',
      serviceItemTextColor: 'rgba(226,232,240,0.92)',
    },
  },
  {
    id: 2,
    icon: Globe,
    title: '표준 특허',
    description: '국제 표준 및 산업 표준에 필수적인 기술에 대한 특허로, 표준화 과정에서의 특허 전략 수립과 FRAND 라이센싱을 지원합니다.',
    color: 'chart-2',
    highlights: [
      { title: '표준화 전략', description: '표준 특허 포트폴리오 구축' },
      { title: 'FRAND 라이센싱', description: '공정하고 합리적인 라이센싱' }
    ],
    services: [
      '표준 필수 특허(SEP) 분석',
      '표준화 기구 대응 전략',
      'FRAND 선언 및 관리',
      '표준 특허 풀 참여 지원',
      '표준 특허 가치 평가',
      '표준 특허 분쟁 대응'
    ],
    theme: {
      leftCardGradient: 'linear-gradient(135deg, #2c1b04 0%, #130902 100%)',
      leftCardBorderColor: 'rgba(245,158,11,0.35)',
      headerGradient: 'linear-gradient(135deg, #fde68a 0%, #f59e0b 100%)',
      iconGradient: 'linear-gradient(135deg, rgba(253,230,138,0.9), rgba(245,158,11,0.9))',
      descriptionColor: 'rgba(255,249,219,0.9)',
      highlightTitleColor: 'rgba(255,250,210,0.95)',
      highlightDescriptionColor: 'rgba(253,230,170,0.8)',
      bulletRingColor: 'rgba(245,158,11,0.55)',
      bulletDotColor: '#f59e0b',
      rightCardGradient: 'linear-gradient(135deg, rgba(15,20,35,0.9) 0%, rgba(9,12,22,0.98) 100%)',
      rightCardBorderColor: 'rgba(156,163,175,0.25)',
      rightIconBackground: 'linear-gradient(135deg, rgba(245,158,11,0.25), rgba(245,158,11,0.07))',
      serviceItemBackground: 'rgba(30,41,59,0.45)',
      serviceItemBorderColor: 'rgba(148,163,184,0.32)',
      serviceItemTextColor: 'rgba(226,232,240,0.9)',
    },
  },
  {
    id: 3,
    icon: Award,
    title: '상표',
    description: '브랜드 가치를 보호하고 시장에서의 경쟁력을 강화할 수 있도록 상표 출원부터 권리 보호까지 종합적인 서비스를 제공합니다.',
    color: 'chart-3',
    highlights: [
      { title: '브랜드 보호', description: '상표권 확보 및 관리' },
      { title: '국제 상표', description: '마드리드 의정서 활용' }
    ],
    services: [
      '상표 출원 및 등록',
      '상표 검색 및 등록가능성 조사',
      '서비스표 출원 및 등록',
      '상표 갱신 및 관리',
      '상표 이의신청 및 취소심판',
      '상표권 침해 대응 및 소송'
    ],
    theme: {
      leftCardGradient: 'linear-gradient(135deg, #06251c 0%, #02140d 100%)',
      leftCardBorderColor: 'rgba(16,185,129,0.35)',
      headerGradient: 'linear-gradient(135deg, #34d399 0%, #0ea5e9 100%)',
      iconGradient: 'linear-gradient(135deg, rgba(52,211,153,0.9), rgba(14,165,233,0.9))',
      descriptionColor: 'rgba(214,255,247,0.9)',
      highlightTitleColor: 'rgba(214,255,237,0.95)',
      highlightDescriptionColor: 'rgba(191,239,255,0.78)',
      bulletRingColor: 'rgba(14,165,233,0.55)',
      bulletDotColor: '#22c55e',
      rightCardGradient: 'linear-gradient(135deg, rgba(16,25,37,0.9) 0%, rgba(8,13,26,0.98) 100%)',
      rightCardBorderColor: 'rgba(56,189,248,0.28)',
      rightIconBackground: 'linear-gradient(135deg, rgba(14,165,233,0.25), rgba(14,165,233,0.07))',
      serviceItemBackground: 'rgba(17,25,40,0.55)',
      serviceItemBorderColor: 'rgba(56,189,248,0.35)',
      serviceItemTextColor: 'rgba(226,232,240,0.9)',
    },
  },
  {
    id: 4,
    icon: Target,
    title: 'IP 컨설팅',
    description: '기업의 지식재산권 전략 수립부터 포트폴리오 관리까지 체계적이고 전문적인 컨설팅 서비스를 제공합니다.',
    color: 'chart-4',
    highlights: [
      { title: '전략 수립', description: 'IP 포트폴리오 기획' },
      { title: '기술 분석', description: '특허맵 및 FTO 분석' }
    ],
    services: [
      'IP 포트폴리오 전략 수립',
      '특허맵 작성 및 기술동향 분석',
      '자유실시 분석(FTO Analysis)',
      'IP 실사(Due Diligence)',
      '기술이전 및 라이센싱 전략',
      'IP 교육 및 임직원 연수'
    ],
    theme: {
      leftCardGradient: 'linear-gradient(135deg, #1b102f 0%, #0c0517 100%)',
      leftCardBorderColor: 'rgba(129,140,248,0.32)',
      headerGradient: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
      iconGradient: 'linear-gradient(135deg, rgba(168,85,247,0.9), rgba(99,102,241,0.9))',
      descriptionColor: 'rgba(233,231,255,0.9)',
      highlightTitleColor: 'rgba(224,231,255,0.95)',
      highlightDescriptionColor: 'rgba(196,181,253,0.78)',
      bulletRingColor: 'rgba(129,140,248,0.6)',
      bulletDotColor: '#a855f7',
      rightCardGradient: 'linear-gradient(135deg, rgba(18,23,45,0.92) 0%, rgba(10,13,26,0.98) 100%)',
      rightCardBorderColor: 'rgba(129,140,248,0.3)',
      rightIconBackground: 'linear-gradient(135deg, rgba(129,140,248,0.28), rgba(99,102,241,0.08))',
      serviceItemBackground: 'rgba(21,24,45,0.55)',
      serviceItemBorderColor: 'rgba(129,140,248,0.35)',
      serviceItemTextColor: 'rgba(228,233,255,0.92)',
    },
  },
  {
    id: 5,
    icon: Palette,
    title: '디자인',
    description: '제품의 독창적인 외관 디자인을 보호하여 시장에서의 차별화와 경쟁 우위를 확보할 수 있도록 지원합니다.',
    color: 'chart-5',
    highlights: [
      { title: '의장 등록', description: '제품 외관 디자인 보호' },
      { title: '해외 디자인', description: '국제 디자인 보호 전략' }
    ],
    services: [
      '디자인 출원 및 등록',
      '디자인 검색 및 등록가능성 조사',
      '복수디자인 출원 전략 수립',
      '디자인권 침해 분석 및 대응',
      '무효심판 및 권리범위확인심판',
      '헤이그 협정을 통한 해외 출원'
    ],
    theme: {
      leftCardGradient: 'linear-gradient(135deg, #311405 0%, #170701 100%)',
      leftCardBorderColor: 'rgba(249,115,22,0.35)',
      headerGradient: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
      iconGradient: 'linear-gradient(135deg, rgba(251,191,36,0.9), rgba(249,115,22,0.9))',
      descriptionColor: 'rgba(255,243,222,0.9)',
      highlightTitleColor: 'rgba(254,243,199,0.95)',
      highlightDescriptionColor: 'rgba(253,230,138,0.78)',
      bulletRingColor: 'rgba(249,115,22,0.55)',
      bulletDotColor: '#f97316',
      rightCardGradient: 'linear-gradient(135deg, rgba(17,24,39,0.88) 0%, rgba(11,15,25,0.96) 100%)',
      rightCardBorderColor: 'rgba(251,191,36,0.28)',
      rightIconBackground: 'linear-gradient(135deg, rgba(249,115,22,0.25), rgba(249,115,22,0.08))',
      serviceItemBackground: 'rgba(30,41,59,0.45)',
      serviceItemBorderColor: 'rgba(250,204,21,0.3)',
      serviceItemTextColor: 'rgba(255,247,220,0.92)',
    },
  },
  {
    id: 6,
    icon: Shield,
    title: '소송 및 분쟁',
    description: '지식재산권 침해 및 분쟁 상황에서 효과적인 법적 대응을 통해 고객의 권익을 보호하고 최적의 해결 방안을 제시합니다.',
    color: 'chart-1',
    highlights: [
      { title: '침해 대응', description: '신속한 권리 구제' },
      { title: '분쟁 해결', description: '전략적 소송 수행' }
    ],
    services: [
      '특허 침해 소송 및 방어',
      '상표권 분쟁 해결',
      '무효심판 및 취소심판',
      '권리범위확인심판',
      '손해배상 청구 소송',
      '대안적 분쟁 해결(ADR)'
    ],
    theme: {
      leftCardGradient: 'linear-gradient(135deg, #300812 0%, #170309 100%)',
      leftCardBorderColor: 'rgba(244,63,94,0.4)',
      headerGradient: 'linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)',
      iconGradient: 'linear-gradient(135deg, rgba(251,113,133,0.9), rgba(244,63,94,0.9))',
      descriptionColor: 'rgba(255,229,235,0.9)',
      highlightTitleColor: 'rgba(255,239,241,0.96)',
      highlightDescriptionColor: 'rgba(254,205,211,0.8)',
      bulletRingColor: 'rgba(244,63,94,0.55)',
      bulletDotColor: '#f43f5e',
      rightCardGradient: 'linear-gradient(135deg, rgba(19,20,37,0.92) 0%, rgba(10,11,24,0.98) 100%)',
      rightCardBorderColor: 'rgba(248,113,113,0.28)',
      rightIconBackground: 'linear-gradient(135deg, rgba(244,63,94,0.25), rgba(244,63,94,0.07))',
      serviceItemBackground: 'rgba(31,35,56,0.52)',
      serviceItemBorderColor: 'rgba(248,113,113,0.32)',
      serviceItemTextColor: 'rgba(255,228,230,0.9)',
    },
  }
];

/**
 * 홈 페이지에 표시할 주요 업무분야 (4개)
 */
export const featuredServices = servicesData.slice(0, 4);
