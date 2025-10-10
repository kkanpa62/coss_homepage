/**
 * @file App.tsx
 * @description React Router 기반 루트 애플리케이션 컴포넌트. 페이지 라우팅과 스크롤 동작을 중앙에서 관리합니다.
 * @component App
 */

import { useCallback, useEffect, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { PageLayout } from './components/layout/PageLayout';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { MembersPage } from './components/pages/MembersPage';
import { MemberDetailPage } from './components/pages/MemberDetailPage';
import { NewsPage } from './components/pages/NewsPage';
import { LocationPage } from './components/pages/LocationPage';
import { members } from './constants/members';

/**
 * 라우트 변경 시 페이지 최상단으로 스크롤을 이동시키는 유틸리티 컴포넌트입니다.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

/**
 * 구성원 목록 페이지 라우트. 기존 페이지 컴포넌트를 재사용하면서 라우터 네비게이션을 연결합니다.
 */
function MembersRoute() {
  const navigate = useNavigate();

  /**
   * 구성원 카드를 클릭하면 해당 ID를 가진 상세 페이지로 이동합니다.
   */
  const handleMemberClick = useCallback(
    (memberId: number) => {
      navigate(`/members/${memberId}`);
    },
    [navigate],
  );

  return (
    <PageLayout withPadding>
      <MembersPage onMemberClick={handleMemberClick} />
    </PageLayout>
  );
}

/**
 * 구성원 상세 페이지 라우트. URL 파라미터에서 ID를 파싱하고, 데이터가 없으면 목록 페이지로 리다이렉션합니다.
 */
function MemberDetailRoute() {
  const { memberId } = useParams<{ memberId: string }>();
  const navigate = useNavigate();

  const member = useMemo(() => members.find((m) => m.id === Number(memberId)), [memberId]);

  /**
   * 상세 페이지 내 '목록으로' 버튼을 눌렀을 때 라우터로 되돌아갑니다.
   */
  const handleBack = useCallback(() => {
    navigate('/members');
  }, [navigate]);

  if (!member) {
    return <Navigate to="/members" replace />;
  }

  return (
    <PageLayout>
      <MemberDetailPage member={member} onBack={handleBack} />
    </PageLayout>
  );
}

/**
 * @component App
 * @description 글로벌 네비게이션과 라우트 테이블을 렌더링합니다.
 */
export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <PageLayout>
                <AboutPage />
              </PageLayout>
            }
          />
          <Route
            path="/services"
            element={
              <PageLayout>
                <ServicesPage />
              </PageLayout>
            }
          />
          <Route path="/members" element={<MembersRoute />} />
          <Route path="/members/:memberId" element={<MemberDetailRoute />} />
          <Route
            path="/news"
            element={
              <PageLayout>
                <NewsPage />
              </PageLayout>
            }
          />
          <Route
            path="/location"
            element={
              <PageLayout>
                <LocationPage />
              </PageLayout>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
