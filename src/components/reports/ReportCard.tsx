/**
 * @file ReportCard.tsx
 * @description 뉴스 페이지의 월간 리포트 묶음 카드 — 월 · 제목 · 머리말 · 기사 수. 카드 전체가 그 달 리포트로 가는 링크입니다.
 *              카드에 마우스·키보드·손가락이 닿으면 그 달 본문을 미리 받습니다.
 */

import { Link } from 'react-router-dom';
import { preloadReport, reportPath, ReportSummary } from '../../content/reports';
import { useI18n } from '../../i18n/I18nProvider';
import { intentHandlers } from '../../utils/browser';
import { fillTemplate, formatMonth } from '../../utils/format';
import { Tag } from '../common/Tag';
import { TextLink } from '../common/TextLink';

export function ReportCard({ report }: { report: ReportSummary }) {
  const { locale, content, path } = useI18n();
  const labels = content.reports;
  const text = report.text[locale];

  return (
    <Link to={path(reportPath(report.month))} className="report-card" {...intentHandlers(() => preloadReport(report.month))}>
      <div className="report-card__month">{formatMonth(report.month, locale)}</div>
      <div className="report-card__body">
        <h3 className="report-card__title">{text.title}</h3>
        <p className="report-card__lead">{text.lead}</p>
        <div className="report-card__foot">
          <Tag>{fillTemplate(labels.articleCount, { count: report.count })}</Tag>
          <TextLink>{labels.open}</TextLink>
        </div>
      </div>
    </Link>
  );
}
