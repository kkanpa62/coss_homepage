/**
 * @file NewsEntry.tsx
 * @description 뉴스 한 건 — 날짜·출처 / 제목·요약·원문 링크.
 */

import { labels } from '../../constants/labels';
import { NewsItem } from '../../constants/news';
import { Tag } from '../common/Tag';
import { TextLink } from '../common/TextLink';

export function NewsEntry({ news }: { news: NewsItem }) {
  return (
    <article className="news-entry">
      <div className="news-entry__meta">
        <span className="news-entry__date">{news.date}</span>
        <Tag>{news.source}</Tag>
      </div>
      <div>
        <h2 className="news-entry__title">{news.title}</h2>
        <p className="news-entry__description">{news.description}</p>
        <TextLink href={news.url}>{labels.more}</TextLink>
      </div>
    </article>
  );
}
