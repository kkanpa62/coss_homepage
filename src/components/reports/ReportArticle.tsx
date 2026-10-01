/**
 * @file ReportArticle.tsx
 * @description 리포트 기사 하나 — 날짜·매체 / (제목) · 본문 문단 · 원문 링크. 요약 기사와 주요 기사 모두 이 부품을 씁니다.
 */

import clsx from 'clsx';
import { outlets } from '../../constants/outlets';
import { ReportArticle as ReportArticleData } from '../../content/reports';
import { useI18n } from '../../i18n/I18nProvider';
import { formatDate } from '../../utils/format';
import { Tag } from '../common/Tag';
import { SourceLink } from './SourceLink';

export function ReportArticle({ article, featured = false }: { article: ReportArticleData; featured?: boolean }) {
  const { locale } = useI18n();
  const text = article.text[locale];

  return (
    <article className={clsx('report-article', featured && 'report-article--featured')}>
      <div className="report-article__meta">
        <time className="report-article__date" dateTime={article.date}>
          {formatDate(article.date, locale)}
        </time>
        <Tag>{outlets[article.outlet][locale]}</Tag>
      </div>
      <div className="report-article__body">
        {text.title && <h3 className="report-article__title">{text.title}</h3>}
        {text.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        {article.link && (
          <p className="report-article__link">
            <SourceLink link={article.link} />
          </p>
        )}
      </div>
    </article>
  );
}
