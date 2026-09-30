/**
 * @file PageLayout.tsx
 * @description 하위 페이지 공통 틀 — 헤더 높이만큼 띄운 본문과 폭(넓게/좁게)을 정합니다.
 * @component PageLayout
 */

import { ReactNode } from 'react';
import clsx from 'clsx';

interface PageLayoutProps {
  children: ReactNode;
  /** 'narrow'는 글 위주 페이지(620px), 'wide'는 그리드 페이지(1080px) */
  width?: 'narrow' | 'wide';
}

export function PageLayout({ children, width = 'wide' }: PageLayoutProps) {
  return (
    <div className="page">
      <div className={clsx('container', width === 'narrow' && 'container--narrow')}>{children}</div>
    </div>
  );
}
