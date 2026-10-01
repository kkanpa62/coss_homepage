/**
 * NewsPage 컴포넌트
 *
 * 뉴스/소식 — 위: 월간 지식재산 뉴스 묶음(최신 달이 맨 위, 누르면 그 달 리포트 — 워드의 모든 기사),
 *             아래: 「소식」(기존 뉴스).
 */

import { reports } from '../../content/reports';
import { useI18n } from '../../i18n/I18nProvider';
import { PageHeader } from '../common/PageHeader';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';
import { NewsEntry } from '../news/NewsEntry';
import { ReportCard } from '../reports/ReportCard';

export function NewsPage() {
  const { content, news } = useI18n();

  return (
    <>
      <PageHeader {...content.news.intro} />

      {reports.length > 0 && (
        <section className="news-group">
          <SectionHeader {...content.reports.listIntro} />
          <div>
            {reports.map((report, index) => (
              <Reveal key={report.month} delay={index * 80}>
                <ReportCard report={report} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="news-group">
        <SectionHeader {...content.reports.newsListIntro} />
        <div>
          {news.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <NewsEntry news={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
