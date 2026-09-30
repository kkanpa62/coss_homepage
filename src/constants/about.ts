/**
 * @file about.ts
 * @description 회사소개 페이지(소개·COSS의 의미·KNP의 의미)에 표시되는 문구와 데이터를 정의합니다.
 */

import { Lightbulb, LucideIcon, Rocket, Users } from 'lucide-react';
import { PageIntro } from '../types';

/**
 * @constant aboutIntro
 * @description 회사소개 페이지 머리 문구입니다.
 */
export const aboutIntro: PageIntro = {
  eyebrow: 'About COSS KNP GROUP',
  title: ['COSS KNP와 함께하는', '지식재산권의 미래'],
};

/**
 * @constant aboutParagraphs
 * @description 회사소개 본문 문단입니다.
 */
export const aboutParagraphs: string[] = [
  'COSS KNP Group은 급변하는 기술 환경에서 고객의 혁신적인 아이디어와 창작물을 법적으로 보호하고, 그 가치를 극대화하는 것을 목표로 설립되었습니다.',
  '우리는 단순한 법률 서비스를 넘어서, 고객의 사업 전략과 연계된 종합적인 지식재산권 솔루션을 제공하여 고객의 경쟁력 강화에 기여하고 있습니다.',
];

/**
 * @constant cossLines
 * @description "Creation of Original / Strategic & Standard" 표제. 줄별 단어 목록이며,
 *              머리글자를 강조할 단어(COSS의 C·O·S·S)는 initial을 true로 둡니다.
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

/**
 * @constant cossStatement
 * @description COSS 설명 문장. 괄호 안에는 cossLines의 단어가 머리글자 강조와 함께 들어갑니다.
 *              "COSS KNP Group은 … 표준 (Creation of Original Strategic & Standard)을 …"
 */
export const cossStatement = {
  lead: 'COSS',
  before: ' KNP Group은 창조적이고 독창적인 전략과 표준 (',
  after: ')을 만들어가며, 고객의 혁신적인 아이디어를 보호하고 발전시키는 것을 목표로 합니다.',
};

/**
 * @constant knpIntro
 * @description KNP 영역 제목과 부제입니다.
 */
export const knpIntro = {
  title: 'KNP',
  subtitle: 'Key Strategy · New Technology · Partner',
};

/**
 * @interface KnpItem
 * @description K·N·P 각 항목의 데이터 구조입니다.
 */
export interface KnpItem {
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

/**
 * @constant knpItems
 * @description Key Strategy, New Technology, Partner 각각의 정보입니다.
 */
export const knpItems: KnpItem[] = [
  {
    letter: 'K',
    title: 'Key Strategy',
    subtitle: '핵심 전략 수립의 전문가',
    description: 'COSS KNP Group은 고객을 위한 핵심전략 수립의 전문가입니다. 고객의 IP와 컨설팅을 통해 고객의 지식재산 가치를 극대화하고, 새로운 시장을 고객과 함께 열어나갑니다.',
    icon: Lightbulb,
  },
  {
    letter: 'N',
    title: 'New Technology',
    subtitle: 'Navigation of your high technology',
    description: 'COSS KNP Group은 메타버스, 로봇, AI, 터치센서, 바이오텍, 화학 분야 등 첨단기술의 전문가입니다. 고객의 첨단 기술 항로를 개척하고 특허를 발굴합니다.',
    icon: Rocket,
  },
  {
    letter: 'P',
    title: 'Partner',
    subtitle: '고객의 든든한 파트너',
    description: 'COSS KNP Group은 고객을 만족시킬 수 있는 최고의 지식재산 서비스와 최선의 솔루션을 제공합니다. 언제나 신뢰받을 수 있는 고객의 든든한 파트너가 되겠습니다.',
    icon: Users,
  },
];
