/**
 * @file ScrollRail.tsx
 * @description 한 줄 가로 스크롤 목록 — 카드 단위 스냅, 스크롤 위치 막대, 이전/다음 버튼.
 *              항목 모양은 renderItem으로 받으므로 구성원 외 다른 목록에도 쓸 수 있습니다.
 *              키보드(목록에 포커스 후 화살표)·트랙패드·터치 스와이프는 브라우저 기본 스크롤을 그대로 씁니다.
 */

import { Key, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { labels } from '../../constants/labels';
import { prefersReducedMotion } from '../../utils/motion';

/** 버튼 한 번에 이동하는 거리(보이는 폭 대비) */
const PAGE_RATIO = 0.8;

/** 끝에 닿았다고 보는 여유(px) — 소수점 스크롤 위치와 스냅 오차를 흡수합니다. */
const EDGE_TOLERANCE = 4;

interface ScrollRailProps<T> {
  items: T[];
  getKey: (item: T) => Key;
  renderItem: (item: T) => ReactNode;
  /** 목록 이름(스크린 리더용) */
  label: string;
  className?: string;
}

interface RailState {
  canPrev: boolean;
  canNext: boolean;
  /** 보이는 폭 비율(0~1) */
  visible: number;
  /** 스크롤 진행률(0~1) */
  progress: number;
}

const INITIAL_STATE: RailState = { canPrev: false, canNext: false, visible: 1, progress: 0 };

export function ScrollRail<T>({ items, getKey, renderItem, label, className }: ScrollRailProps<T>) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [state, setState] = useState<RailState>(INITIAL_STATE);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setState({
      canPrev: track.scrollLeft > EDGE_TOLERANCE,
      canNext: track.scrollLeft < max - EDGE_TOLERANCE,
      visible: track.scrollWidth > 0 ? track.clientWidth / track.scrollWidth : 1,
      progress: max > 0 ? track.scrollLeft / max : 0,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    measure();
    track.addEventListener('scroll', onScroll, { passive: true });
    // 스크롤이 멈추면 프레임을 기다리지 않고 바로 확정합니다(끝 위치 판정이 정확해짐).
    track.addEventListener('scrollend', measure);
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener('scroll', onScroll);
      track.removeEventListener('scrollend', measure);
      observer.disconnect();
    };
  }, [measure, items.length]);

  const page = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * PAGE_RATIO,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  // 막대는 보이는 비율만큼의 길이로, 남은 길이 안에서 진행률만큼 이동합니다.
  const thumbStyle = {
    width: `${state.visible * 100}%`,
    transform: `translateX(${(state.progress * (1 - state.visible) * 100) / state.visible}%)`,
  };
  const scrollable = state.canPrev || state.canNext;

  return (
    <div className={clsx('scroll-rail', className)}>
      <ul ref={trackRef} className="scroll-rail__track" tabIndex={0} aria-label={label}>
        {items.map((item) => (
          <li key={getKey(item)} className="scroll-rail__item">
            {renderItem(item)}
          </li>
        ))}
      </ul>

      {scrollable && (
        <div className="scroll-rail__controls">
          <div className="scroll-rail__bar" aria-hidden="true">
            <span className="scroll-rail__thumb" style={thumbStyle} />
          </div>
          <div className="scroll-rail__buttons">
            <button type="button" className="icon-button" onClick={() => page(-1)} disabled={!state.canPrev} aria-label={labels.railPrev}>
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" className="icon-button" onClick={() => page(1)} disabled={!state.canNext} aria-label={labels.railNext}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
