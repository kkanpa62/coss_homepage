/**
 * @file structure.ts
 * @description 리포트 데이터에서 화면 구성을 계산하는 순수 함수 — 분류별 기사, 짧은 버전의 긴 버전, 기사 수, 요약.
 *              브라우저와 빌드(plugins/reportSummary.ts가 요약을 만들 때) 양쪽에서 쓰므로 브라우저·Vite 전용 기능을 쓰지 않습니다.
 */

import { MonthlyReport, ReportArticle, ReportSectionId, ReportSummary, REPORT_DETAIL_SECTIONS } from './types';

/** 분류 안의 기사를 최신순으로 */
export const sortArticles = (articles: ReportArticle[]) => [...articles].sort((a, b) => b.date.localeCompare(a.date));

/** 짧은 버전이 없어 따로 실어야 하는 주요 기사 */
const standaloneFeatures = (report: MonthlyReport) => {
  const linked = new Set(REPORT_DETAIL_SECTIONS.flatMap((id) => report.sections[id].map((a) => a.full)));
  return report.sections.features.filter((feature) => !linked.has(feature.id));
};

/** 분류 하나에 실리는 기사(최신순). 기술·산업에는 짧은 버전이 없는 주요 기사도 함께 실립니다. */
export const sectionArticles = (report: MonthlyReport, id: ReportSectionId): ReportArticle[] =>
  sortArticles(id === 'other' ? [...report.sections.other, ...standaloneFeatures(report)] : report.sections[id]);

/** 짧은 버전이 펼칠 긴 버전(주요 기사) */
export const fullArticleOf = (report: MonthlyReport, article: ReportArticle) =>
  article.full ? report.sections.features.find((feature) => feature.id === article.full) : undefined;

/** 상세 페이지에 보이는 분류(순서대로, 기사가 있는 것만) */
export const visibleSections = (report: MonthlyReport): ReportSectionId[] =>
  REPORT_DETAIL_SECTIONS.filter((id) => sectionArticles(report, id).length > 0);

/** 상세 페이지에 실리는 기사 수 */
export const countArticles = (report: MonthlyReport) =>
  REPORT_DETAIL_SECTIONS.reduce((sum, id) => sum + sectionArticles(report, id).length, 0);

/** 목록·상세 머리에 쓰는 요약 */
export const summarizeReport = (report: MonthlyReport): ReportSummary => ({
  month: report.month,
  text: report.text,
  count: countArticles(report),
  sections: visibleSections(report),
});
