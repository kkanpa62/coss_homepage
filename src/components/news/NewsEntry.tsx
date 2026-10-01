/**
 * @file NewsEntry.tsx
 * @description 뉴스 한 건 — 날짜·출처 / 제목·요약·원문 링크.
 */

import { useI18n } from '../../i18n/I18nProvider';
import { NewsItem } from '../../types';
import { Tag } from '../common/Tag';
import { TextLink } from '../common/TextLink';

export function NewsEntry({ news }: { news: NewsItem }) {
  const { content } = useI18n();

  return (
    <article className="news-entry">
      <div className="news-entry__meta">
        <span className="news-entry__date">{news.date}</span>
        <Tag>{news.source}</Tag>
      </div>
      <div>
        <h2 className="news-entry__title">{news.title}</h2>
        <p className="news-entry__description">{news.description}</p>
        <TextLink href={news.url}>{content.news.linkLabel}</TextLink>
      </div>
    </article>
  );
}
