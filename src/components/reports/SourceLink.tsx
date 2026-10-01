/**
 * @file SourceLink.tsx
 * @description 리포트 기사의 원문 링크. 원문(original)이면 "원문 기사", 다른 매체로 대신한 링크(related)면
 *              "관련 기사 · 매체명"으로 구분해 표시합니다. 일본어 페이지에서는 한국어 기사라는 안내를 덧붙입니다.
 */

import { outlets } from '../../constants/outlets';
import { ReportLink } from '../../content/reports';
import { useI18n } from '../../i18n/I18nProvider';
import { TextLink } from '../common/TextLink';

export function SourceLink({ link }: { link: ReportLink }) {
  const { locale, content } = useI18n();
  const labels = content.reports;
  const name =
    link.kind === 'original' ? labels.link.original : `${labels.link.related} · ${outlets[link.outlet][locale]}`;

  return (
    <TextLink href={link.url} className={`source-link source-link--${link.kind}`}>
      {name}
      {labels.sourceLanguageNote}
    </TextLink>
  );
}
