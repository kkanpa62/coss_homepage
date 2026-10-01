/**
 * @file index.ts
 * @description 월간 리포트 목록. 이 폴더에 `YYYY-MM.json` 파일을 추가하면 자동으로 등록됩니다(따로 적을 필요 없음).
 *              데이터의 정확성(원문 일치·번역·링크)은 빌드 전에 scripts/reports.py check가 검사합니다.
 */

import { MonthlyReport, ReportArticle, ReportSectionId, REPORT_DETAIL_SECTIONS } from './types';

const modules = import.meta.glob<{ default: MonthlyReport }>('./[0-9][0-9][0-9][0-9]-[0-9][0-9].json', { eager: true });

/** 최신 달이 앞에 오도록 정렬한 리포트 목록 */
export const reports: MonthlyReport[] = Object.values(modules)
  .map((module) => module.default)
  .sort((a, b) => b.month.localeCompare(a.month));

/** 리포트 상세 경로(언어 공통). 실제 링크는 useI18n().path()로 언어 접두어를 붙여 씁니다. */
export const reportPath = (month: string) => `/news/reports/${month}`;

export const findReport = (month: string | undefined) => reports.find((report) => report.month === month);

/** 앞뒤 달 리포트(newer: 더 최근, older: 더 이전) */
export function adjacentReports(month: string) {
  const index = reports.findIndex((report) => report.month === month);
  return {
    newer: index > 0 ? reports[index - 1] : undefined,
    older: index >= 0 && index < reports.length - 1 ? reports[index + 1] : undefined,
  };
}

/** 분류 안의 기사를 최신순으로 */
export const sortArticles = (articles: ReportArticle[]) => [...articles].sort((a, b) => b.date.localeCompare(a.date));

/** 상세 페이지에 보이는 분류(순서대로, 기사가 있는 것만) */
export const visibleSections = (report: MonthlyReport): ReportSectionId[] =>
  REPORT_DETAIL_SECTIONS.filter((id) => report.sections[id].length > 0);

/** 상세 페이지에 실리는 기사 수 */
export const countArticles = (report: MonthlyReport) =>
  REPORT_DETAIL_SECTIONS.reduce((sum, id) => sum + report.sections[id].length, 0);

/** 모든 리포트의 주요 기사(최신순) — 뉴스/소식 페이지의 「소식」 목록에 싣습니다. */
export const featureArticles = (): ReportArticle[] => sortArticles(reports.flatMap((report) => report.sections.features));

export * from './types';
