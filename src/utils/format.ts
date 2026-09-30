/**
 * @file format.ts
 * @description 화면 표기용 형식 도우미입니다.
 */

/**
 * 순번을 두 자리로 표기합니다(1 → "01").
 */
export function formatIndex(value: number): string {
  return String(value).padStart(2, '0');
}
