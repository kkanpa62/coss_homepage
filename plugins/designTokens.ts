/**
 * @file designTokens.ts
 * @description 빌드 도구가 사이트 디자인 토큰(src/styles/tokens.css의 밝은 테마 :root)을 읽습니다.
 *              대표 그림 색을 사이트 색과 같게 두기 위해서입니다(색을 바꾸면 그림도 따라 바뀜).
 */

import { readFileSync } from 'node:fs';
import path from 'node:path';

const TOKENS_FILE = path.resolve('src/styles/tokens.css');

/** 첫 :root 블록(밝은 테마)에서 이름이 같은 토큰 값을 꺼냅니다. 없으면 빌드를 멈춥니다. */
export function readLightTokens<const T extends string>(names: readonly T[]): Record<T, string> {
  const css = readFileSync(TOKENS_FILE, 'utf8');
  const root = css.match(/:root\s*\{([^}]*)\}/)?.[1] ?? '';
  return Object.fromEntries(names.map((name) => {
    const value = root.match(new RegExp(`--${name}:\s*([^;]+);`))?.[1].trim();
    if (!value) throw new Error(`tokens.css의 :root에 --${name}이 없습니다`);
    return [name, value];
  })) as Record<T, string>;
}
