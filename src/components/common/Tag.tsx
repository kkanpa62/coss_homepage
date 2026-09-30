/**
 * @file Tag.tsx
 * @description kbd 모양의 작은 꼬리표와 꼬리표 목록입니다.
 */

import { ReactNode } from 'react';
import clsx from 'clsx';

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={clsx('tag', className)}>{children}</span>;
}

export function TagList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={clsx('tag-list', className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
