/**
 * @file ReportPage.tsx
 * @description 월간 지식재산 뉴스 리포트 상세 — 머리(월·제목·머리말), 분류 바로가기, 분류별 기사(소송→행정→기타→주요 기사),
 *              이전/다음 달 이동.
 */

import { Link } from 'react-router-dom';
import { adjacentReports, MonthlyReport, reportPath, visibleSections } from '../../content/reports';
import { useI18n } from '../../i18n/I18nProvider';
import { formatIndex, formatMonth } from '../../utils/format';
import { PageHeader } from '../common/PageHeader';
import { TextLink } from '../common/TextLink';
import { reportSectionAnchor, ReportSection } from '../reports/ReportSection';

export function ReportPage({ report }: { report: MonthlyReport }) {
  const { locale, content, path } = useI18n();
  const labels = content.reports;
  const text = report.text[locale];
  const sections = visibleSections(report);
  const { newer, older } = adjacentReports(report.month);

  return (
    <>
      <p className="page-back">
        <TextLink to={path('/news')} arrow="←">
          {labels.back}
        </TextLink>
      </p>

      <PageHeader eyebrow={labels.eyebrow} title={[formatMonth(report.month, locale)]} description={text.lead} />

      <nav aria-label={labels.sectionIndex}>
        <ul className="tag-list service-index">
          {sections.map((id, index) => (
            <li key={id}>
              <Link to={`${path(reportPath(report.month))}#${reportSectionAnchor(id)}`} className="tag">
                {formatIndex(index + 1)} {labels.sections[id]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map((id, index) => (
        <ReportSection key={id} report={report} id={id} index={index + 1} />
      ))}

      {(newer || older) && (
        <nav className="report-pager">
          {older ? (
            <TextLink to={path(reportPath(older.month))} arrow="←">
              {labels.older} · {formatMonth(older.month, locale)}
            </TextLink>
          ) : (
            <span />
          )}
          {newer && (
            <TextLink to={path(reportPath(newer.month))}>
              {labels.newer} · {formatMonth(newer.month, locale)}
            </TextLink>
          )}
        </nav>
      )}
    </>
  );
}
