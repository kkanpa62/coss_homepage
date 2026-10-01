/**
 * @file ReportArticle.tsx
 * @description 리포트 기사 하나 — 날짜·매체 / 제목 · 본문 · 원문 링크.
 *              주요 기사의 짧은 버전이면 「전문 보기」를 누를 때 그 자리에서 긴 버전 본문으로 펼칩니다.
 */

import { useId, useState } from 'react';
import { outlets } from '../../constants/outlets';
import { ReportArticle as ReportArticleData } from '../../content/reports';
import { useI18n } from '../../i18n/I18nProvider';
import { formatDate } from '../../utils/format';
import { Tag } from '../common/Tag';
import { SourceLink } from './SourceLink';

interface ReportArticleProps {
  article: ReportArticleData;
  /** 짧은 버전이 펼칠 긴 버전(주요 기사) */
  full?: ReportArticleData;
}

export function ReportArticle({ article, full }: ReportArticleProps) {
  const { locale, content } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const bodyId = useId();
  const text = article.text[locale];
  const paragraphs = expanded && full ? full.text[locale].body : text.body;

  return (
    <article className="report-article">
      <div className="report-article__meta">
        <time className="report-article__date" dateTime={article.date}>
          {formatDate(article.date, locale)}
        </time>
        <Tag>{outlets[article.outlet][locale]}</Tag>
      </div>
      <div className="report-article__body">
        {text.title && <h3 className="report-article__title">{text.title}</h3>}
        <div id={bodyId} className={expanded ? 'report-article__text is-expanded' : 'report-article__text'}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="report-article__actions">
          {full && (
            <button
              type="button"
              className="report-article__toggle"
              aria-expanded={expanded}
              aria-controls={bodyId}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? content.reports.collapse : content.reports.readFull}
              <span aria-hidden="true">{expanded ? '↑' : '↓'}</span>
            </button>
          )}
          {article.link && <SourceLink link={article.link} />}
        </div>
      </div>
    </article>
  );
}
