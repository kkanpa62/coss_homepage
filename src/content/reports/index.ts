/**
 * @file index.ts
 * @description 월간 리포트 목록과 불러오기. 이 폴더에 `YYYY-MM.json` 파일을 추가하면 자동으로 등록됩니다(따로 적을 필요 없음).
 *              - 요약(월·제목·머리말·기사 수·분류): 빌드할 때 계산해 기본 JS에 넣습니다(plugins/reportSummary.ts). 목록·상세 머리에 씀
 *              - 기사 본문: 달마다 따로 나눈 파일. 상세 페이지를 열 때, 또는 미리 받기(preloadReport)로 받습니다
 *              데이터의 정확성(원문 일치·번역·링크)은 작업 폴더(coss_homepage_edit)의 리포트 검사로 push 전에 확인합니다.
 */

import { MonthlyReport, ReportSummary } from './types';

const summaryModules = import.meta.glob<ReportSummary>('./[0-9][0-9][0-9][0-9]-[0-9][0-9].json', {
  query: '?summary',
  import: 'default',
  eager: true,
});
const reportLoaders = import.meta.glob<MonthlyReport>('./[0-9][0-9][0-9][0-9]-[0-9][0-9].json', { import: 'default' });

/** 최신 달이 앞에 오도록 정렬한 리포트 요약 목록 */
export const reports: ReportSummary[] = Object.values(summaryModules).sort((a, b) => b.month.localeCompare(a.month));

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

/* ---------- 기사 본문 불러오기 ---------- */

const loaded = new Map<string, MonthlyReport>();
const pending = new Map<string, Promise<MonthlyReport>>();

/** 이미 받아 둔 리포트(없으면 undefined) — 미리 받은 달은 상세 페이지가 기다림 없이 바로 그립니다. */
export const getLoadedReport = (month: string) => loaded.get(month);

/** 리포트 본문을 받습니다. 같은 달을 동시에 여러 번 불러도 한 번만 받습니다. */
export function loadReport(month: string): Promise<MonthlyReport> {
  const done = loaded.get(month);
  if (done) return Promise.resolve(done);

  let request = pending.get(month);
  if (!request) {
    const loader = reportLoaders[`./${month}.json`];
    if (!loader) return Promise.reject(new Error(`리포트가 없습니다: ${month}`));
    request = loader()
      .then((report) => {
        loaded.set(month, report);
        return report;
      })
      .finally(() => pending.delete(month));
    pending.set(month, request);
  }
  return request;
}

/** 휴대폰 데이터 절약 모드 */
const saveData = () =>
  typeof navigator !== 'undefined' &&
  (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;

/**
 * 곧 열 것 같은 달을 미리 받습니다(카드·이전/다음 달 링크에 마우스·초점·손가락이 닿을 때, 뉴스 목록이 한가할 때 최신 달).
 * 데이터 절약 모드면 받지 않고, 실패해도 조용히 넘어갑니다(실제로 열 때 다시 받음).
 */
export function preloadReport(month: string) {
  if (loaded.has(month) || pending.has(month) || saveData()) return;
  loadReport(month).catch(() => undefined);
}

export * from './structure';
export * from './types';
