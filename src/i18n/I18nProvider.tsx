/**
 * @file I18nProvider.tsx
 * @description 현재 언어를 하위 컴포넌트에 알려 줍니다. 언어는 주소 접두어(/ja)로 정해지며 App의 라우트에서 넘겨받습니다.
 *              컴포넌트는 useI18n()으로 문구(content)·화면 데이터·언어별 주소 변환(path)을 꺼내 씁니다.
 */

import { createContext, ReactNode, useContext, useMemo } from 'react';
import { siteData, SiteData } from '../content';
import { DEFAULT_LOCALE, Locale, localizePath } from './locales';

interface I18nValue extends SiteData {
  locale: Locale;
  /** 언어 공통 경로를 현재 언어 주소로 바꿉니다. ("/about" → "/ja/about") */
  path: (commonPath: string) => string;
}

const buildValue = (locale: Locale): I18nValue => ({
  locale,
  ...siteData[locale],
  path: (commonPath) => localizePath(commonPath, locale),
});

const I18nContext = createContext<I18nValue>(buildValue(DEFAULT_LOCALE));

export function I18nProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo(() => buildValue(locale), [locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
