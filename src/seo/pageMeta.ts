/**
 * @file pageMeta.ts
 * @description 페이지별 제목·설명·대표 그림 규칙(한 곳). 빌드(plugins/staticPages.ts가 페이지 HTML을 만들 때)와
 *              화면(DocumentMeta가 탭 제목을 바꿀 때)이 같이 씁니다. 브라우저·Vite 전용 기능을 쓰지 않습니다.
 *              문구는 새로 쓰지 않고 content/{ko,ja}.ts와 리포트 데이터에 이미 있는 것을 씁니다.
 */

import type { SiteContent } from '../content/types';
import type { MemberId } from '../constants/members';
import { DEFAULT_LOCALE, LOCALES, localizePath, SITE_URL, type Locale } from '../i18n/locales';
import { formatMonth } from '../utils/format';

/** 제목 뒤에 붙는 사이트 이름 */
const SITE_NAME = 'COSS KNP GROUP';

/** 리포트 페이지에 필요한 최소 정보(ReportSummary의 일부) */
export interface ReportMetaSource {
  month: string;
  text: Record<Locale, { title: string; lead: string }>;
}

export interface PageMeta {
  title: string;
  description: string;
  /** 대표 그림 경로(사이트 루트 기준) */
  image: string;
}

/** 대표 그림 경로 — 빌드가 같은 이름으로 그림을 만듭니다(plugins/ogImage.ts). */
export const ogImagePath = {
  common: (locale: Locale) => `/og/common-${locale}.png`,
  report: (month: string, locale: Locale) => `/og/reports/${month}-${locale}.png`,
};

/** 언어별 대체 주소(hreflang) — [hreflang, 전체 주소]. 한국어·일본어와 기본(x-default, 한국어) */
export function alternateLinks(path: string): [string, string][] {
  return [
    ...LOCALES.map((code): [string, string] => [code, `${SITE_URL}${localizePath(path, code)}`]),
    ['x-default', `${SITE_URL}${localizePath(path, DEFAULT_LOCALE)}`],
  ];
}

/** 정적 페이지로 만들 언어 공통 경로 목록(언어 접두어 없이). 구성원·리포트가 늘면 자동으로 늘어납니다. */
export function sitePaths(memberIds: readonly MemberId[], reportMonths: readonly string[]): string[] {
  return [
    '/',
    '/about',
    '/services',
    '/members',
    ...memberIds.map((id) => `/members/${id}`),
    '/news',
    ...reportMonths.map((month) => `/news/reports/${month}`),
    '/location',
  ];
}

/** 설명 문구는 검색 결과에 맞게 한 문장 정도로 줄입니다. */
const firstSentence = (text: string) => {
  const end = text.search(/[.。]\s|[.。]$/);
  return end >= 0 ? text.slice(0, end + 1) : text;
};

const withSiteName = (title: string) => `${title} | ${SITE_NAME}`;

/**
 * 언어 공통 경로(예: "/news/reports/2026-05")의 제목·설명·대표 그림.
 * 모르는 경로는 홈 정보를 돌려줍니다.
 */
export function pageMeta(
  path: string,
  locale: Locale,
  content: SiteContent,
  reports: readonly ReportMetaSource[],
): PageMeta {
  const home: PageMeta = { title: content.meta.title, description: content.meta.description, image: ogImagePath.common(locale) };
  const page = (title: string, description = content.meta.description): PageMeta => ({
    title: withSiteName(title),
    description,
    image: ogImagePath.common(locale),
  });

  const report = path.match(/^\/news\/reports\/(\d{4}-\d{2})$/);
  if (report) {
    const found = reports.find((r) => r.month === report[1]);
    if (!found) return home;
    return {
      title: withSiteName(`${formatMonth(found.month, locale)} ${content.reports.listIntro.title}`),
      description: found.text[locale].lead,
      image: ogImagePath.report(found.month, locale),
    };
  }

  const member = path.match(/^\/members\/(\d+)$/);
  if (member) {
    const text = content.members.items[Number(member[1]) as MemberId];
    if (!text) return home;
    return page(`${text.name} ${text.department}`, text.bio ? firstSentence(text.bio) : text.position);
  }

  switch (path) {
    case '/about':
      return page(content.navigation.about, firstSentence(content.about.paragraphs[0]));
    case '/services':
      return page(content.navigation.services, content.services.intro.description);
    case '/members':
      return page(content.navigation.members, content.members.intro.description);
    case '/news':
      return page(content.navigation.news, content.news.intro.description);
    case '/location':
      return page(content.navigation.location, `${content.location.address.street} ${content.location.address.building}`);
    default:
      return home;
  }
}
