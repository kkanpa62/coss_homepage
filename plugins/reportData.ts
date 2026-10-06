/**
 * @file reportData.ts
 * @description 빌드 도구가 월간 리포트 데이터 파일(src/content/reports/YYYY-MM.json)을 읽는 곳 한 군데.
 *              요약 플러그인(reportSummary.ts)과 페이지 생성 플러그인(staticPages.ts)이 같이 씁니다.
 */

import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import type { MonthlyReport } from '../src/content/reports/types';

export const REPORT_DIR = path.resolve('src/content/reports');
const REPORT_FILE = /^\d{4}-\d{2}\.json$/;

export const readReport = (file: string) => JSON.parse(readFileSync(file, 'utf8')) as MonthlyReport;

/** 모든 리포트(최신 달이 앞) */
export function readAllReports(): MonthlyReport[] {
  return readdirSync(REPORT_DIR)
    .filter((name) => REPORT_FILE.test(name))
    .map((name) => readReport(path.join(REPORT_DIR, name)))
    .sort((a, b) => b.month.localeCompare(a.month));
}
