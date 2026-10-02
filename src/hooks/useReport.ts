/**
 * @file useReport.ts
 * @description 월간 리포트 본문을 받아 오는 훅. 미리 받아 둔 달은 첫 화면부터 바로 돌려줍니다.
 *              받기에 실패하면 한 번 새로고침해(배포 직후 예전 파일 이름을 찾는 경우) 새 버전을 받고, 그래도 안 되면 failed를 알립니다.
 *              달이 바뀌면 다시 받아야 하므로, 쓰는 쪽에서 key={month}로 컴포넌트를 새로 만듭니다.
 */

import { useEffect, useState } from 'react';
import { getLoadedReport, loadReport, MonthlyReport } from '../content/reports';
import { forgetReload, reloadOnce } from '../utils/browser';

export function useReport(month: string): { report?: MonthlyReport; failed: boolean } {
  const [report, setReport] = useState(() => getLoadedReport(month));
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (report) return undefined;
    let active = true;
    const reloadKey = `report:${month}`;

    loadReport(month).then(
      (data) => {
        forgetReload(reloadKey);
        if (active) setReport(data);
      },
      () => {
        if (active && !reloadOnce(reloadKey)) setFailed(true);
      },
    );
    return () => {
      active = false;
    };
  }, [month, report]);

  return { report, failed };
}
