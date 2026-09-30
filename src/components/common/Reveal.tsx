/**
 * @file Reveal.tsx
 * @description 감싼 내용이 화면에 들어올 때 서서히 나타나게 합니다.
 */

import { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';
import { useInView } from '../../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  /** 나타나기 전 지연(ms) — 목록에서 순서대로 나타나게 할 때 사용 */
  delay?: number;
  className?: string;
  id?: string;
}

export function Reveal({ children, delay = 0, className, id }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  return (
    <div ref={ref} id={id} className={clsx('reveal', inView && 'is-visible', className)} style={style}>
      {children}
    </div>
  );
}
