/**
 * @file DetailRow.tsx
 * @description 왼쪽 라벨 · 오른쪽 내용의 2단 행과 줄표 목록입니다(구성원 상세 등).
 */

import { ReactNode } from 'react';

interface DetailRowProps {
  label: string;
  icon?: ReactNode;
  children: ReactNode;
}

export function DetailRow({ label, icon, children }: DetailRowProps) {
  return (
    <section className="detail-row">
      <h2 className="detail-row__label">
        {icon}
        {label}
      </h2>
      <div className="detail-row__body">{children}</div>
    </section>
  );
}

export function PlainList({ items }: { items: string[] }) {
  return (
    <ul className="plain-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
