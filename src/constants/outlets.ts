/**
 * @file outlets.ts
 * @description 언론 매체 목록 — 매체 ID별 한국어·일본어 이름. 월간 리포트의 기사 출처와 관련 기사 링크에 씁니다.
 *              일본어 이름은 월간 리포트 원문(워드 파일) 말미의 매체 정식 명칭 표를 따릅니다.
 *              새 매체가 나오면 여기에 한 줄 추가합니다.
 */

import { Locale } from '../i18n/locales';

export const outlets = {
  // 월간 리포트 원문의 매체 정식 명칭 표
  chosunbiz: { ko: '조선비즈', ja: '朝鮮ビズ' },
  sedaily: { ko: '서울경제', ja: 'ソウル経済新聞' },
  goodkyung: { ko: '굿모닝경제', ja: 'グッドモーニング経済' },
  ebn: { ko: 'EBN산업경제', ja: 'EBN産業経済' },
  etnews: { ko: '전자신문', ja: '電子新聞' },
  dt: { ko: '디지털타임스', ja: 'デジタルタイムス' },
  yonhap: { ko: '연합뉴스', ja: '聯合ニュース' },
  lawjournal: { ko: '법률저널', ja: '法律ジャーナル' },
  mt: { ko: '머니투데이', ja: 'マネートゥデイ' },
  news1: { ko: '뉴스1', ja: 'ニュース１' },
  newsis: { ko: '뉴시스', ja: 'ニューシス' },
  zdnet: { ko: '지디넷코리아', ja: 'ZDNETコリア' },
  theasian: { ko: '아시아엔', ja: 'アジアN' },
  dailian: { ko: '데일리안', ja: 'デイリーアン' },
  genews: { ko: '글로벌이코노믹', ja: 'グローバルエコノミック' },
  pnp: { ko: 'P&P뉴스', ja: 'P&Pニュース' },
  energydaily: { ko: '에너지데일리', ja: 'エネルギーデイリー' },
  chosun: { ko: '조선일보', ja: '朝鮮日報' },
  lawtimes: { ko: '법률신문', ja: '法律新聞' },
  hankyung: { ko: '한국경제', ja: '韓国経済新聞' },
  mk: { ko: '매일경제', ja: '毎日経済新聞' },
  newscj: { ko: '천지일보', ja: '天地日報' },
  edaily: { ko: '이데일리', ja: 'イーデイリー' },
  asiae: { ko: '아시아경제', ja: 'アジア経済新聞' },
  fnnews: { ko: '파이낸셜뉴스', ja: 'ファイナンシャルニュース' },
  naeil: { ko: '내일신문', ja: '明日新聞' },
  idomin: { ko: '경남도민일보', ja: '慶南道民日報' },

  // 원문 대신 연결하는 관련 기사 매체
  etoday: { ko: '이투데이', ja: 'イートゥデイ' },
  heraldcorp: { ko: '헤럴드경제', ja: 'ヘラルド経済' },
  seoul: { ko: '서울신문', ja: 'ソウル新聞' },
  khan: { ko: '경향신문', ja: '京郷新聞' },
  newswire: { ko: '뉴스와이어', ja: 'ニュースワイヤー' },
} as const satisfies Record<string, Record<Locale, string>>;

export type OutletId = keyof typeof outlets;
