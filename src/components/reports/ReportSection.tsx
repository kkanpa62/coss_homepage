/**
 * @file ReportSection.tsx
 * @description 리포트의 분류 하나(분쟁 / 정책·행정 / 기술·산업) — 분류 머리(번호·이름·기사 수)와 최신순 기사 목록.
 */

import { fullArticleOf, MonthlyReport, ReportSectionId, sectionArticles } from '../../content/reports';
import { useI18n } from '../../i18n/I18nProvider';
import { fillTemplate, formatIndex } from '../../utils/format';
import { Reveal } from '../common/Reveal';
import { ReportArticle } from './ReportArticle';

/** 바로가기 링크가 가리키는 분류 위치 */
export const reportSectionAnchor = (id: ReportSectionId) => `report-${id}`;

interface ReportSectionProps {
  report: MonthlyReport;
  id: ReportSectionId;
  index: number;
}

export function ReportSection({ report, id, index }: ReportSectionProps) {
  const { content } = useI18n();
  const articles = sectionArticles(report, id);

  return (
    <section id={reportSectionAnchor(id)} className="report-section">
      <header className="report-section__head">
        <span className="index-number">{formatIndex(index)}</span>
        <h2 className="report-section__title">{content.reports.sections[id]}</h2>
        <span className="report-section__count">{fillTemplate(content.reports.sectionCount, { count: articles.length })}</span>
      </header>
      <div className="report-section__list">
        {articles.map((article) => (
          <Reveal key={article.id}>
            <ReportArticle article={article} full={fullArticleOf(report, article)} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
