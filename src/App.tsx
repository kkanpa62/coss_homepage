/**
 * @file App.tsx
 * @description React Router 기반 루트 애플리케이션 컴포넌트.
 *              언어마다 같은 페이지 구성(LocaleSite)을 주소 접두어 아래에 붙입니다 — 한국어는 "/", 일본어는 "/ja".
 */

import { useEffect, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';
import { AboutPage } from './components/pages/AboutPage';
import { HomePage } from './components/pages/HomePage';
import { LocationPage } from './components/pages/LocationPage';
import { MemberDetailPage } from './components/pages/MemberDetailPage';
import { MembersPage } from './components/pages/MembersPage';
import { NewsPage } from './components/pages/NewsPage';
import { ReportPage } from './components/pages/ReportPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { findReport } from './content/reports';
import { DocumentMeta } from './i18n/DocumentMeta';
import { I18nProvider, useI18n } from './i18n/I18nProvider';
import { DEFAULT_LOCALE, Locale, LOCALES, localePrefix } from './i18n/locales';
import { whenElement } from './utils/browser';

/**
 * 경로가 바뀌면 맨 위로, 해시(#service-3 등)가 있으면 해당 요소 위치로 스크롤합니다.
 * 리포트 기사처럼 나중에 받아 그리는 요소는 나타날 때까지 기다립니다.
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return undefined;
    }
    // 새 페이지가 그려진 다음 위치를 찾습니다.
    let cancel: () => void = () => undefined;
    const timer = window.setTimeout(() => {
      cancel = whenElement(decodeURIComponent(hash.slice(1)), (element) =>
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      );
    }, 50);
    return () => {
      window.clearTimeout(timer);
      cancel();
    };
  }, [pathname, hash, key]);

  return null;
}

/**
 * 구성원 상세 페이지 라우트. URL 파라미터에서 ID를 파싱하고, 데이터가 없으면 목록 페이지로 리다이렉션합니다.
 */
function MemberDetailRoute() {
  const { memberId } = useParams<{ memberId: string }>();
  const { members, path } = useI18n();
  const member = useMemo(() => members.find((m) => m.id === Number(memberId)), [members, memberId]);

  if (!member) {
    return <Navigate to={path('/members')} replace />;
  }

  return (
    <PageLayout>
      <MemberDetailPage member={member} />
    </PageLayout>
  );
}

/**
 * 월간 리포트 상세 라우트. 없는 월이면(요약으로 바로 판단) 뉴스 목록으로 보냅니다.
 */
function ReportRoute() {
  const { month } = useParams<{ month: string }>();
  const { path } = useI18n();
  const summary = findReport(month);

  if (!summary) {
    return <Navigate to={path('/news')} replace />;
  }

  return (
    <PageLayout>
      <ReportPage key={summary.month} summary={summary} />
    </PageLayout>
  );
}

/** 없는 주소는 현재 언어의 홈으로 보냅니다. */
function NotFoundRoute() {
  const { path } = useI18n();
  return <Navigate to={path('/')} replace />;
}

/**
 * 한 언어의 사이트 전체 — 공통 헤더·푸터와 페이지 라우트. 아래 경로는 언어 접두어 기준 상대 경로입니다.
 */
function LocaleSite({ locale }: { locale: Locale }) {
  return (
    <I18nProvider locale={locale}>
      <DocumentMeta />
      <SiteHeader />
      <ScrollManager />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<PageLayout><AboutPage /></PageLayout>} />
          <Route path="services" element={<PageLayout><ServicesPage /></PageLayout>} />
          <Route path="members" element={<PageLayout><MembersPage /></PageLayout>} />
          <Route path="members/:memberId" element={<MemberDetailRoute />} />
          <Route path="news" element={<PageLayout><NewsPage /></PageLayout>} />
          <Route path="news/reports/:month" element={<ReportRoute />} />
          <Route path="location" element={<PageLayout><LocationPage /></PageLayout>} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </main>
      <SiteFooter />
    </I18nProvider>
  );
}

/**
 * @component App
 * @description 접두어가 있는 언어(/ja)를 먼저, 기본 언어(한국어, "/")를 마지막에 둡니다.
 */
export default function App() {
  const prefixedLocales = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

  return (
    <Routes>
      {prefixedLocales.map((locale) => (
        <Route key={locale} path={`${localePrefix(locale)}/*`} element={<LocaleSite locale={locale} />} />
      ))}
      <Route path="/*" element={<LocaleSite locale={DEFAULT_LOCALE} />} />
    </Routes>
  );
}
