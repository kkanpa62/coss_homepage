/**
 * @file NewsEntry.tsx
 * @description 「소식」 목록의 기사 한 건 — 날짜·출처 / 제목·본문·원문 링크.
 *              기존 뉴스(NewsItem)와 월간 리포트의 주요 기사(ReportArticle)를 같은 모양으로 보여 줍니다.
 */

import { ReactNode } from 'react';
import { outlets } from '../../constants/outlets';
import { ReportArticle } from '../../content/reports';
import { useI18n } from '../../i18n/I18nProvider';
import { NewsItem } from '../../types';
import { formatDate } from '../../utils/format';
import { Tag } from '../common/Tag';
import { TextLink } from '../common/TextLink';
import { SourceLink } from '../reports/SourceLink';

interface NewsEntryViewProps {
  date: ReactNode;
  source: string;
  title: string;
  paragraphs: string[];
  link?: ReactNode;
}

/** 표시 전용 — 데이터 종류와 무관한 공통 모양 */
function NewsEntryView({ date, source, title, paragraphs, link }: NewsEntryViewProps) {
  return (
    <article className="news-entry">
      <div className="news-entry__meta">
        <span className="news-entry__date">{date}</span>
        <Tag>{source}</Tag>
      </div>
      <div>
        <h2 className="news-entry__title">{title}</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="news-entry__description">
            {paragraph}
          </p>
        ))}
        {link}
      </div>
    </article>
  );
}

/** 기존 뉴스 한 건 */
export function NewsEntry({ news }: { news: NewsItem }) {
  const { content } = useI18n();
  return (
    <NewsEntryView
      date={news.date}
      source={news.source}
      title={news.title}
      paragraphs={[news.description]}
      link={<TextLink href={news.url}>{content.news.linkLabel}</TextLink>}
    />
  );
}

/** 월간 리포트의 주요 기사 한 건 */
export function FeatureNewsEntry({ article }: { article: ReportArticle }) {
  const { locale } = useI18n();
  const text = article.text[locale];
  return (
    <NewsEntryView
      date={<time dateTime={article.date}>{formatDate(article.date, locale)}</time>}
      source={outlets[article.outlet][locale]}
      title={text.title ?? ''}
      paragraphs={text.body}
      link={article.link && <SourceLink link={article.link} />}
    />
  );
}
