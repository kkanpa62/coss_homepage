/**
 * @file locales.ts
 * @description 지원 언어와 언어별 주소 규칙.
 *              한국어는 접두어 없이(/about), 그 밖의 언어는 접두어를 붙입니다(/ja/about).
 */

export const LOCALES = ['ko', 'ja'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ko';

/** 사이트 주소 — 검색엔진용 언어 대체 링크(hreflang)에 씁니다. */
export const SITE_URL = 'https://coss-knp.com';

/** 언어 전환 버튼에 보이는 짧은 이름과 전체 이름 */
export const LOCALE_NAMES: Record<Locale, { short: string; full: string }> = {
  ko: { short: 'KO', full: '한국어' },
  ja: { short: 'JA', full: '日本語' },
};

/** 언어별 주소 접두어 */
export const localePrefix = (locale: Locale) => (locale === DEFAULT_LOCALE ? '' : `/${locale}`);

/**
 * 주소에서 언어 접두어를 떼어 냅니다. ("/ja/about" → "/about", "/ja" → "/")
 */
export function stripLocale(pathname: string): string {
  for (const locale of LOCALES) {
    const prefix = localePrefix(locale);
    if (!prefix) continue;
    if (pathname === prefix) return '/';
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname || '/';
}

/**
 * 언어 공통 경로를 해당 언어 주소로 바꿉니다. ("/about" → "/ja/about", "/" → "/ja")
 * 해시(#service-1)가 붙은 경로도 그대로 처리합니다.
 */
export function localizePath(path: string, locale: Locale): string {
  const prefix = localePrefix(locale);
  if (!prefix) return path;
  if (path === '/') return prefix;
  if (path.startsWith('/#')) return `${prefix}${path.slice(1)}`;
  return `${prefix}${path}`;
}
