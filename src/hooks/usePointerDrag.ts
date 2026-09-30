/**
 * @file usePointerDrag.ts
 * @description 요소를 누른 채 끄는 동작을 가로 이동 거리로 알려 주는 훅입니다.
 *              threshold만큼 움직이기 전까지는 끌기로 보지 않아 평소 클릭이 그대로 동작하고,
 *              끌기가 있었으면 손을 뗀 직후의 클릭 한 번을 막습니다(끌다가 링크가 열리지 않도록).
 */

import { RefObject, useEffect, useRef } from 'react';

export interface PointerDragOptions {
  /** 누르는 순간. false를 돌려주면 이번 누름은 끌기로 다루지 않습니다. */
  onPress?: (event: PointerEvent) => boolean | void;
  /** threshold를 넘어 끌기가 시작된 순간(한 번) */
  onDragStart?: () => void;
  /** 누른 지점에서 가로로 움직인 거리(px) */
  onMove: (deltaX: number) => void;
  /** 손을 뗀 순간. dragged는 threshold를 넘겨 끌었는지 여부 */
  onRelease?: (dragged: boolean) => void;
  /** 끌기로 볼 최소 이동 거리(px) */
  threshold?: number;
  /** true면 마우스만 처리(터치·펜은 브라우저 기본 동작에 맡김) */
  mouseOnly?: boolean;
}

export function usePointerDrag<T extends HTMLElement>(ref: RefObject<T | null>, options: PointerDragOptions) {
  // 매 렌더마다 바뀌는 콜백을 이벤트 등록 없이 최신으로 유지합니다.
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    let pointerId: number | null = null;
    let startX = 0;
    let dragged = false;

    const blockClick = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      const deltaX = event.clientX - startX;
      const { threshold = 0, onDragStart, onMove } = optionsRef.current;
      if (!dragged) {
        if (Math.abs(deltaX) < threshold) return;
        dragged = true;
        onDragStart?.();
      }
      event.preventDefault();
      onMove(deltaX);
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      optionsRef.current.onRelease?.(dragged);
      if (dragged) {
        // 손을 뗀 직후 발생하는 클릭만 막고, 클릭이 오지 않더라도 다음 클릭에는 영향을 주지 않습니다.
        element.addEventListener('click', blockClick, { capture: true, once: true });
        window.setTimeout(() => element.removeEventListener('click', blockClick, { capture: true }), 0);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const { mouseOnly = false, onPress } = optionsRef.current;
      if (event.button !== 0 || (mouseOnly && event.pointerType !== 'mouse')) return;
      if (onPress?.(event) === false) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      dragged = false;
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);
    };

    // 링크·이미지의 기본 끌어다 놓기(고스트 이미지)를 막습니다.
    const onDragStartNative = (event: DragEvent) => event.preventDefault();

    element.addEventListener('pointerdown', onPointerDown);
    element.addEventListener('dragstart', onDragStartNative);
    return () => {
      element.removeEventListener('pointerdown', onPointerDown);
      element.removeEventListener('dragstart', onDragStartNative);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [ref]);
}
