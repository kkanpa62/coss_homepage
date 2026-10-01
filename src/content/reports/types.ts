/**
 * @file types.ts
 * @description 월간 지식재산 뉴스 리포트의 데이터 구조.
 *              리포트 한 달치 = 데이터 파일 하나(`YYYY-MM.json`). `scripts/reports.py import`가 워드 원문에서 만들고,
 *              빌드 전에 `scripts/reports.py check`가 원문 일치·번역·링크를 검사합니다(통과해야 빌드됨).
 */

import { OutletId } from '../../constants/outlets';
import { Locale } from '../../i18n/locales';

/**
 * 리포트 안의 분류. 화면 순서는 REPORT_SECTION_ORDER를 따릅니다.
 * 워드 원문의 《訴訟関係》《行政》《その他》가 각각 litigation·administration·other로 들어갑니다.
 * 사이트 표기는 내용에 맞춰 분쟁(紛争)·정책·행정(政策・行政)·기술·산업(技術・産業)입니다(content/{ko,ja}.ts).
 */
export type ReportSectionId = 'litigation' | 'administration' | 'other' | 'features';

/** 데이터·검사에서 다루는 모든 분류 */
export const REPORT_SECTION_ORDER: ReportSectionId[] = ['litigation', 'administration', 'other', 'features'];

/**
 * 리포트 상세 페이지에 보이는 분류와 순서. 주요 기사(features, 긴 버전)는 따로 분류를 두지 않고,
 * 분류 안에 실린 짧은 버전의 「전문 보기」로 펼쳐 보입니다. 짧은 버전이 없는 주요 기사는 기술·산업에 실립니다.
 */
export const REPORT_DETAIL_SECTIONS: ReportSectionId[] = ['litigation', 'administration', 'other'];

/** 링크를 직접 열어 기사와 맞는지 확인한 기록 */
export interface LinkVerification {
  /** 확인한 날(YYYY-MM-DD) */
  on: string;
  /** 링크한 기사의 실제 제목 */
  headline: string;
  /** 링크한 기사 본문에서 찾은 고유 정보(숫자·이름 등). 실린 기사 내용에도 있어야 함 */
  evidence: string[];
  method?: 'browser' | 'fetch';
}

/** 원문 링크
 * - original: 리포트에 적힌 매체의 원문 기사를 직접 열어 확인한 링크
 * - related : 원문을 찾지 못해 같은 내용을 다룬 다른 매체 기사로 대신한 링크(outlet에 그 매체)
 * 링크를 찾지 못한 기사는 link를 생략합니다.
 */
export type ReportLink =
  | { kind: 'original'; url: string; verified: LinkVerification }
  | { kind: 'related'; url: string; outlet: OutletId; verified: LinkVerification };

/** 한 언어의 기사 문구 — 요약 기사는 문단 하나, 주요 기사는 여러 문단(제목은 선택) */
export interface ReportArticleText {
  title?: string;
  body: string[];
}

export interface ReportArticle {
  /** 워드 원문 순서의 ID(예: litigation-1) */
  id: string;
  /** 워드 꼬리표에 적힌 날짜 */
  docDate: string;
  /** 화면에 보이는 게재일 — 원문을 확인했으면 실제 게재일, 아니면 docDate */
  date: string;
  /** 리포트에 적힌 출처 매체 */
  outlet: OutletId;
  /** 주요 기사의 짧은 버전이면, 「전문 보기」로 펼칠 긴 버전(features)의 id */
  full?: string;
  link?: ReportLink;
  /** ja: 워드 원문 그대로, ko: 번역 */
  text: Record<Locale, ReportArticleText>;
}

export interface MonthlyReport {
  /** 리포트 월(YYYY-MM) — 주소(/news/reports/2026-08)와 파일 이름에 그대로 씁니다. */
  month: string;
  /** 원문 워드 파일 경로(이 PC에만 보관, 저장소에는 올리지 않음) */
  source: string;
  /** 원문 구조의 지문(SHA-256) — 원본이 없는 곳에서도 일본어가 바뀌지 않았는지 확인 */
  sourceDigest: string;
  text: Record<Locale, { title: string; lead: string }>;
  /** 워드에 없지만 승인을 받아 넣은 일본어 문구(예: 주요 기사 제목) */
  additions: string[];
  sections: Record<ReportSectionId, ReportArticle[]>;
}
