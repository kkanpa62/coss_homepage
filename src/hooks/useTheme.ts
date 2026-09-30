/**
 * @file useTheme.ts
 * @description 다크/라이트 테마 상태와 전환. 전환할 때 새 화면을 저해상도 무작위 픽셀 마스크로 드러냅니다
 *              (View Transition API를 지원하지 않거나 '동작 줄이기'가 켜져 있으면 즉시 전환).
 */

import { useCallback, useState } from 'react';
import { flushSync } from 'react-dom';
import { prefersReducedMotion } from '../utils/motion';

export type Theme = 'dark' | 'light';

/** localStorage 키 — index.html의 첫 화면 스크립트와 같은 값이어야 합니다. */
export const THEME_STORAGE_KEY = 'theme';

/** 테마가 바뀔 때 window에 보내는 이벤트(스크램블 제목이 다시 재생됩니다). */
export const THEME_CHANGE_EVENT = 'themechange';

/** 마스크 해상도(작을수록 픽셀이 굵어짐)와 전환 시간 */
const MASK_WIDTH = 96;
const MASK_HEIGHT = 54;
const DISSOLVE_MS = 650;

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { ready: Promise<void>; finished: Promise<void> };
};

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // 저장할 수 없는 환경(사생활 보호 모드 등)에서는 이번 방문에만 적용합니다.
  }
}

/**
 * update를 실행하면서, 새 화면이 무작위 픽셀 순서로 나타나게 합니다.
 */
function dissolve(update: () => void) {
  const doc = document as ViewTransitionDocument;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!doc.startViewTransition || !context || prefersReducedMotion()) {
    update();
    return;
  }

  const root = document.documentElement;
  canvas.width = MASK_WIDTH;
  canvas.height = MASK_HEIGHT;
  const thresholds = Float32Array.from({ length: MASK_WIDTH * MASK_HEIGHT }, () => Math.random());

  const drawMask = (progress: number) => {
    const image = context.createImageData(MASK_WIDTH, MASK_HEIGHT);
    for (let i = 0; i < thresholds.length; i++) {
      image.data[i * 4 + 3] = thresholds[i] < progress ? 255 : 0;
    }
    context.putImageData(image, 0, 0);
    root.style.setProperty('--dissolve', `url(${canvas.toDataURL()})`);
  };

  drawMask(0);
  const transition = doc.startViewTransition(update);
  transition.ready
    .then(() => {
      const startedAt = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - startedAt) / DISSOLVE_MS);
        drawMask(t * t * (3 - 2 * t)); // smoothstep
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    })
    .catch(() => undefined);
  transition.finished.finally(() => root.style.removeProperty('--dissolve'));
}

/**
 * 현재 테마와 전환 함수를 돌려줍니다.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggleTheme = useCallback(() => {
    const next: Theme = readTheme() === 'light' ? 'dark' : 'light';
    dissolve(() => {
      applyTheme(next);
      // 전환 스냅샷에 버튼 아이콘까지 새 상태로 담기도록 즉시 반영합니다.
      flushSync(() => setTheme(next));
    });
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  return { theme, toggleTheme };
}
