/**
 * @file SectionHeader.tsx
 * @description 홈 섹션 머리 — 제목(h2), 설명, 오른쪽 보조 링크(선택).
 */

import { ReactNode } from 'react';
import { SectionIntro } from '../../types';

interface SectionHeaderProps extends SectionIntro {
  /** 제목 오른쪽에 둘 보조 요소(예: 전체 보기 링크) */
  action?: ReactNode;
}

export function SectionHeader({ title, description, action }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        <h2 className="section-header__title">{title}</h2>
        {description && <p className="section-header__description">{description}</p>}
      </div>
      {action}
    </div>
  );
}
