/**
 * @file TextLink.tsx
 * @description 화살표가 붙은 글자 링크. 내부 경로는 라우터 Link(→), 외부 주소는 새 창(↗)으로 엽니다.
 *              카드 전체가 링크인 경우처럼 링크 모양만 필요하면 `to`/`href` 없이 span으로 씁니다.
 */

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface TextLinkProps {
  children: ReactNode;
  /** 내부 경로 */
  to?: string;
  /** 외부 주소 */
  href?: string;
  /** 화살표 방향(기본: 내부 →, 외부 ↗) */
  arrow?: '→' | '←' | '↗' | '↓';
  className?: string;
}

export function TextLink({ children, to, href, arrow, className }: TextLinkProps) {
  const mark = arrow ?? (href ? '↗' : '→');
  const leading = mark === '←';
  const content = (
    <>
      {leading && <span className="text-link__arrow" aria-hidden="true">{mark}</span>}
      <span>{children}</span>
      {!leading && <span className="text-link__arrow" aria-hidden="true">{mark}</span>}
    </>
  );
  const classes = clsx('text-link', className);

  if (to) {
    return <Link to={to} className={classes}>{content}</Link>;
  }
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a>;
  }
  return <span className={classes}>{content}</span>;
}
