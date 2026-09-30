/**
 * @file App.tsx
 * @description React Router 기반 루트 애플리케이션 컴포넌트. 페이지 라우팅과 스크롤 동작을 중앙에서 관리합니다.
 * @component App
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
import { ServicesPage } from './components/pages/ServicesPage';
import { members } from './constants/members';

/**
 * 경로가 바뀌면 맨 위로, 해시(#service-3 등)가 있으면 해당 요소 위치로 스크롤합니다.
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return undefined;
    }
    // 새 페이지가 그려진 다음 위치를 찾습니다.
    const timer = window.setTimeout(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}

/**
 * 구성원 상세 페이지 라우트. URL 파라미터에서 ID를 파싱하고, 데이터가 없으면 목록 페이지로 리다이렉션합니다.
 */
function MemberDetailRoute() {
  const { memberId } = useParams<{ memberId: string }>();
  const member = useMemo(() => members.find((m) => m.id === Number(memberId)), [memberId]);

  if (!member) {
    return <Navigate to="/members" replace />;
  }

  return (
    <PageLayout>
      <MemberDetailPage member={member} />
    </PageLayout>
  );
}

/**
 * @component App
 * @description 공통 헤더·푸터와 라우트 테이블을 렌더링합니다.
 */
export default function App() {
  return (
    <>
      <SiteHeader />
      <ScrollManager />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
          <Route path="/services" element={<PageLayout><ServicesPage /></PageLayout>} />
          <Route path="/members" element={<PageLayout><MembersPage /></PageLayout>} />
          <Route path="/members/:memberId" element={<MemberDetailRoute />} />
          <Route path="/news" element={<PageLayout><NewsPage /></PageLayout>} />
          <Route path="/location" element={<PageLayout><LocationPage /></PageLayout>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
