/**
 * @file ScrambleText.tsx
 * @description 글자가 닮은 글자·노이즈로 흔들리다 하나씩 제자리에 고정되는 제목입니다.
 *              처음 나타날 때, 마우스를 올릴 때, 테마를 바꿀 때 재생됩니다.
 *              애니메이션은 React 렌더링 없이 각 글자 span의 textContent만 바꿉니다.
 */

import { useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { THEME_CHANGE_EVENT } from '../../hooks/useTheme';
import { prefersReducedMotion } from '../../utils/motion';
import { isWideChar, scrambleGlyph } from '../../utils/scramble';

/** 글자를 바꾸는 최소 간격 — 너무 짧으면 흐릿하게 번져 보입니다. */
const SWAP_INTERVAL_MS = 55;
const HOVER_DURATION_MS = 900;
const THEME_DURATION_MS = 700;

interface ScrambleTextProps {
  /** 한 줄씩 나눈 문구 */
  lines: string[];
  /** 렌더링할 태그 */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
  className?: string;
  /** 처음 재생 시간(ms) */
  duration?: number;
}

export function ScrambleText({ lines, as: Tag = 'h1', className, duration = 1600 }: ScrambleTextProps) {
  const cellsRef = useRef<HTMLSpanElement[]>([]);
  const frameRef = useRef<number | null>(null);
  const text = lines.join('\n');

  const scramble = useCallback((ms: number) => {
    if (prefersReducedMotion()) return;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

    const cells = cellsRef.current.filter(Boolean);
    const settleAt = cells.map(() => 0.25 + Math.random() * 0.75); // 글자마다 고정되는 시점
    const startedAt = performance.now();
    let lastSwap = 0;

    const reset = () =>
      cells.forEach((cell) => {
        cell.textContent = cell.dataset.char ?? '';
        cell.classList.remove('is-glitch');
      });

    const tick = (now: number) => {
      const t = (now - startedAt) / ms;
      if (now - lastSwap > SWAP_INTERVAL_MS) {
        lastSwap = now;
        cells.forEach((cell, i) => {
          const original = cell.dataset.char ?? '';
          if (t >= settleAt[i]) {
            cell.textContent = original;
            cell.classList.remove('is-glitch');
          } else if (Math.random() < 0.45) {
            cell.textContent = scrambleGlyph(original);
            cell.classList.toggle('is-glitch', Math.random() < 0.25);
          }
        });
      }
      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        reset();
        frameRef.current = null;
      }
    };
    frameRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    scramble(duration);
    const replay = () => scramble(THEME_DURATION_MS);
    window.addEventListener(THEME_CHANGE_EVENT, replay);
    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, replay);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [scramble, duration, text]);

  let cellIndex = 0;
  cellsRef.current = [];

  return (
    <Tag className={clsx('scramble', className)} onMouseEnter={() => scramble(HOVER_DURATION_MS)}>
      <span className="sr-only">{lines.join(' ')}</span>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="scramble__line" aria-hidden="true">
          {[...line].map((char, charIndex) => {
            if (char === ' ') {
              return <span key={charIndex} className="scramble__space"> </span>;
            }
            const index = cellIndex++;
            return (
              <span
                key={charIndex}
                ref={(cell) => {
                  if (cell) cellsRef.current[index] = cell;
                }}
                data-char={char}
                className={clsx('scramble__ch', isWideChar(char) && 'scramble__ch--wide')}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
