/**
 * @file ReportPending.tsx
 * @description 리포트 본문을 받는 동안의 자리. 빨리 받으면 아무것도 보이지 않고(안내는 잠시 뒤에 나타남),
 *              받지 못하면 다시 불러오기 버튼을 보여 줍니다.
 */

import { useI18n } from '../../i18n/I18nProvider';

export function ReportPending({ failed }: { failed: boolean }) {
  const { content } = useI18n();
  const labels = content.reports;

  if (failed) {
    return (
      <div className="report-pending" role="alert">
        <p>{labels.loadFailed}</p>
        <button type="button" className="report-article__toggle" onClick={() => window.location.reload()}>
          {labels.reload}
        </button>
      </div>
    );
  }

  return (
    <div className="report-pending" aria-busy="true">
      <p className="report-pending__note">{labels.loading}</p>
    </div>
  );
}
