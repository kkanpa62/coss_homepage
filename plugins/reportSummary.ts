/**
 * @file reportSummary.ts
 * @description 월간 리포트 요약을 빌드할 때 계산하는 Vite 플러그인.
 *              `YYYY-MM.json?summary`를 가져오면 그 달 데이터 전체 대신 요약(ReportSummary)만 담은 모듈을 돌려줍니다.
 *              그래서 목록 카드는 요약만 기본 JS에 넣고, 기사 본문은 달마다 나뉜 파일로 상세 페이지에서 받습니다
 *              (src/content/reports/index.ts). 요약 계산은 화면과 같은 함수(structure.ts)를 씁니다.
 */

import type { Plugin } from 'vite';
import { summarizeReport } from '../src/content/reports/structure';
import { readReport } from './reportData';

const QUERY = '?summary';
/** 가상 모듈 ID — \0으로 시작하면 다른 플러그인이 건드리지 않고, 끝을 .js로 하면 Vite의 JSON 변환을 거치지 않습니다. */
const PREFIX = '\0report-summary:';
const SUFFIX = '.summary.js';

export function reportSummary(): Plugin {
  return {
    name: 'coss:report-summary',
    enforce: 'pre',
    async resolveId(source, importer) {
      if (!source.endsWith(`.json${QUERY}`)) return null;
      const resolved = await this.resolve(source.slice(0, -QUERY.length), importer, { skipSelf: true });
      return resolved && `${PREFIX}${resolved.id}${SUFFIX}`;
    },
    load(id) {
      if (!id.startsWith(PREFIX)) return null;
      const file = id.slice(PREFIX.length, -SUFFIX.length);
      this.addWatchFile(file);
      return `export default ${JSON.stringify(summarizeReport(readReport(file)))};`;
    },
  };
}
