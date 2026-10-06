/**
 * @file DocumentMeta.tsx
 * @description 현재 페이지에 맞게 <html lang>, 탭 제목, 검색엔진 설명, 언어별 대체 주소(hreflang)를 바꿉니다.
 *              제목·설명 규칙은 빌드가 만드는 페이지 HTML과 같습니다(seo/pageMeta.ts).
 *              lang 속성은 글꼴 선택(tokens.css의 :root[lang="ja"])과 한자 글리프 선택에도 쓰입니다.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { reports } from '../content/reports';
import { alternateLinks, pageMeta } from '../seo/pageMeta';
import { useI18n } from './I18nProvider';
import { stripLocale } from './locales';

/** 빌드가 넣은 대체 주소도 이 표시로 찾아 바꿉니다(plugins/staticPages.ts). */
const ALTERNATE_ATTR = 'data-hreflang';

export function DocumentMeta() {
  const { locale, content } = useI18n();
  const { pathname } = useLocation();
  const commonPath = stripLocale(pathname.replace(/(.)\/$/, '$1'));

  useEffect(() => {
    const meta = pageMeta(commonPath, locale, content, reports);
    document.documentElement.lang = locale;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [commonPath, locale, content]);

  useEffect(() => {
    document.querySelectorAll(`link[${ALTERNATE_ATTR}]`).forEach((link) => link.remove());
    alternateLinks(commonPath).forEach(([hreflang, href]) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href;
      link.setAttribute(ALTERNATE_ATTR, '');
      document.head.appendChild(link);
    });
  }, [commonPath]);

  return null;
}
