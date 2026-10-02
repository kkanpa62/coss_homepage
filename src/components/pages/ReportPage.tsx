/**
 * @file ReportPage.tsx
 * @description 월간 지식재산 뉴스 리포트 상세 — 머리(월·제목·머리말), 분류 바로가기, 분류별 기사(분쟁→정책·행정→기술·산업),
 *              이전/다음 달 이동. 머리와 바로가기는 요약으로 바로 그리고, 기사는 그 달 본문을 받은 뒤 그립니다.
 *              달이 바뀌면 key={month}로 새로 만들어 씁니다(App.tsx).
 */

import { Link } from 'react-router-dom';
import { adjacentReports, preloadReport, reportPath, ReportSummary } from '../../content/reports';
import { useReport } from '../../hooks/useReport';
import { useI18n } from '../../i18n/I18nProvider';
import { formatIndex, formatMonth } from '../../utils/format';
import { PageHeader } from '../common/PageHeader';
import { TextLink } from '../common/TextLink';
import { ReportPending } from '../reports/ReportPending';
import { reportSectionAnchor, ReportSection } from '../reports/ReportSection';

export function ReportPage({ summary }: { summary: ReportSummary }) {
  const { locale, content, path } = useI18n();
  const labels = content.reports;
  const { report, failed } = useReport(summary.month);
  const { newer, older } = adjacentReports(summary.month);

  return (
    <>
      <p className="page-back">
        <TextLink to={path('/news')} arrow="←">
          {labels.back}
        </TextLink>
      </p>

      <PageHeader eyebrow={labels.eyebrow} title={[formatMonth(summary.month, locale)]} description={summary.text[locale].lead} />

      <nav aria-label={labels.sectionIndex}>
        <ul className="tag-list service-index">
          {summary.sections.map((id, index) => (
            <li key={id}>
              <Link to={`${path(reportPath(summary.month))}#${reportSectionAnchor(id)}`} className="tag">
                {formatIndex(index + 1)} {labels.sections[id]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {report ? (
        summary.sections.map((id, index) => <ReportSection key={id} report={report} id={id} index={index + 1} />)
      ) : (
        <ReportPending failed={failed} />
      )}

      {(newer || older) && (
        <nav className="report-pager">
          {older ? (
            <TextLink to={path(reportPath(older.month))} arrow="←" onIntent={() => preloadReport(older.month)}>
              {labels.older} · {formatMonth(older.month, locale)}
            </TextLink>
          ) : (
            <span />
          )}
          {newer && (
            <TextLink to={path(reportPath(newer.month))} onIntent={() => preloadReport(newer.month)}>
              {labels.newer} · {formatMonth(newer.month, locale)}
            </TextLink>
          )}
        </nav>
      )}
    </>
  );
}
