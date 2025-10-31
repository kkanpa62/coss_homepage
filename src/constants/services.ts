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
  highlightTextClass: string;
  backgroundClass: string;
  iconGradientPrimary: string;
  iconGradientSecondary: string;
  rangeBackgroundClass: string;
  badgeClass: string;
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
      highlightTextClass: 'text-chart-1',
      backgroundClass: 'bg-gradient-to-br from-background via-chart-1/15 to-background',
      iconGradientPrimary: 'bg-gradient-to-br from-chart-1 to-chart-5',
      iconGradientSecondary: 'bg-gradient-to-br from-chart-1 to-chart-3',
      rangeBackgroundClass: 'bg-gradient-to-br from-background via-chart-1/20 to-background',
      badgeClass: 'bg-background/85 text-foreground border border-border/30 hover:bg-background',
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
      highlightTextClass: 'text-chart-2',
      backgroundClass: 'bg-gradient-to-br from-background via-chart-2/15 to-background',
      iconGradientPrimary: 'bg-gradient-to-br from-chart-2 to-chart-5',
      iconGradientSecondary: 'bg-gradient-to-br from-chart-2 to-chart-3',
      rangeBackgroundClass: 'bg-gradient-to-br from-background via-chart-2/20 to-background',
      badgeClass: 'bg-background/85 text-foreground border border-border/30 hover:bg-background',
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
      highlightTextClass: 'text-chart-3',
      backgroundClass: 'bg-gradient-to-br from-background via-chart-3/15 to-background',
      iconGradientPrimary: 'bg-gradient-to-br from-chart-3 to-chart-5',
      iconGradientSecondary: 'bg-gradient-to-br from-chart-3 to-chart-1',
      rangeBackgroundClass: 'bg-gradient-to-br from-background via-chart-3/20 to-background',
      badgeClass: 'bg-background/85 text-foreground border border-border/30 hover:bg-background',
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
      highlightTextClass: 'text-chart-4',
      backgroundClass: 'bg-gradient-to-br from-background via-chart-4/15 to-background',
      iconGradientPrimary: 'bg-gradient-to-br from-chart-4 to-chart-5',
      iconGradientSecondary: 'bg-gradient-to-br from-chart-4 to-chart-3',
      rangeBackgroundClass: 'bg-gradient-to-br from-background via-chart-4/20 to-background',
      badgeClass: 'bg-background/85 text-foreground border border-border/30 hover:bg-background',
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
      highlightTextClass: 'text-chart-5',
      backgroundClass: 'bg-gradient-to-br from-background via-chart-5/15 to-background',
      iconGradientPrimary: 'bg-gradient-to-br from-chart-5 to-chart-1',
      iconGradientSecondary: 'bg-gradient-to-br from-chart-5 to-chart-3',
      rangeBackgroundClass: 'bg-gradient-to-br from-background via-chart-5/20 to-background',
      badgeClass: 'bg-background/85 text-foreground border border-border/30 hover:bg-background',
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
      highlightTextClass: 'text-chart-1',
      backgroundClass: 'bg-gradient-to-br from-background via-chart-1/15 to-background',
      iconGradientPrimary: 'bg-gradient-to-br from-chart-1 to-chart-5',
      iconGradientSecondary: 'bg-gradient-to-br from-chart-1 to-chart-3',
      rangeBackgroundClass: 'bg-gradient-to-br from-background via-chart-1/20 to-background',
      badgeClass: 'bg-background/85 text-foreground border border-border/30 hover:bg-background',
    },
  }
];

/**
 * 홈 페이지에 표시할 주요 업무분야 (4개)
 */
export const featuredServices = servicesData.slice(0, 4);
