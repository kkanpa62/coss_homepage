/**
 * @file DocumentMeta.tsx
 * @description 현재 언어에 맞게 <html lang>, 탭 제목, 검색엔진 설명, 언어별 대체 주소(hreflang)를 바꿉니다.
 *              lang 속성은 글꼴 선택(tokens.css의 :root[lang="ja"])과 한자 글리프 선택에도 쓰입니다.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from './I18nProvider';
import { DEFAULT_LOCALE, LOCALES, localizePath, SITE_URL, stripLocale } from './locales';

const ALTERNATE_ATTR = 'data-hreflang';

export function DocumentMeta() {
  const { locale, content } = useI18n();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description);
  }, [locale, content]);

  useEffect(() => {
    const commonPath = stripLocale(pathname);
    document.querySelectorAll(`link[${ALTERNATE_ATTR}]`).forEach((link) => link.remove());

    const alternates = [
      ...LOCALES.map((code) => [code, localizePath(commonPath, code)] as const),
      ['x-default', localizePath(commonPath, DEFAULT_LOCALE)] as const,
    ];
    alternates.forEach(([hreflang, href]) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = `${SITE_URL}${href}`;
      link.setAttribute(ALTERNATE_ATTR, '');
      document.head.appendChild(link);
    });
  }, [pathname]);

  return null;
}
