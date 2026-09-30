/**
 * @file motion.ts
 * @description 움직임 관련 공용 판단 함수입니다.
 */

/**
 * 사용자가 운영체제에서 '동작 줄이기'를 켰는지 확인합니다.
 */
export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
