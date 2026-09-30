/**
 * @file PageHeader.tsx
 * @description 하위 페이지 머리 — 영문 라벨, 스크램블 제목(h1), 설명.
 */

import { PageIntro } from '../../types';
import { ScrambleText } from './ScrambleText';

export function PageHeader({ eyebrow, title, description }: PageIntro) {
  return (
    <header className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <ScrambleText as="h1" lines={title} className="display-title" duration={1200} />
      {description && <p className="page-header__description">{description}</p>}
    </header>
  );
}
