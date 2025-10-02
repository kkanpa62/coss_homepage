/**
 * @file App.tsx
 * @description COSS KNP GROUP 웹사이트의 루트 애플리케이션 컴포넌트입니다.
 *              페이지 라우팅, 상태 관리 등 애플리케이션의 최상위 로직을 담당합니다.
 * @component App
 */

import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { PageLayout } from './components/layout/PageLayout';

// 페이지 및 섹션 컴포넌트 임포트
import { HeroSection } from './components/sections/HeroSection';
import { MembersPreviewSection } from './components/sections/MembersPreviewSection';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { MembersPage } from './components/pages/MembersPage';
import { MemberDetailPage } from './components/pages/MemberDetailPage';
import { NewsPage } from './components/pages/NewsPage';
import { LocationPage } from './components/pages/LocationPage';

import { members } from './constants/members';
import { PageType, NavigationOptions } from './types';

/**
 * @component App
 * @description 애플리케이션의 메인 컴포넌트. 상태에 따라 적절한 페이지를 렌더링합니다.
 * @returns {JSX.Element}
 */
export default function App() {
  // --- STATE MANAGEMENT ---
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);
  const [targetServiceId, setTargetServiceId] = useState<number | null>(null);

  // --- NAVIGATION HANDLERS ---

  /**
   * 페이지를 전환하는 핸들러 함수입니다.
   * @param {PageType} page - 이동할 대상 페이지의 타입
   * @param {NavigationOptions} [options] - 네비게이션에 필요한 추가 옵션 (예: 스크롤 타겟 ID)
   */
  const handleNavigate = (page: PageType, options?: NavigationOptions) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'services' && options?.serviceId) {
      setTargetServiceId(options.serviceId);
    } else {
      setTargetServiceId(null);
    }
  };

  /**
   * 구성원 프로필 클릭 시 상세 페이지로 이동하는 핸들러 함수입니다.
   * @param {number} memberId - 선택된 구성원의 ID
   */
  const handleMemberClick = (memberId: number) => {
    setSelectedMemberId(memberId);
    setCurrentPage('member-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * 구성원 상세 페이지에서 목록으로 돌아가는 핸들러 함수입니다.
   */
  const handleBackToMembers = () => {
    setCurrentPage('members');
    setSelectedMemberId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- SIDE EFFECTS ---

  /**
   * '업무분야' 페이지로 이동 시, 특정 서비스 섹션으로 부드럽게 스크롤하는 효과입니다.
   * `setTimeout`을 사용하여 DOM이 렌더링된 후 스크롤을 실행합니다.
   */
  useEffect(() => {
    if (currentPage === 'services' && targetServiceId) {
      const scrollToAction = () => {
        const element = document.getElementById(`service-${targetServiceId}`);
        if (element) {
          const offset = 100; // 상단 네비게이션 바 높이를 고려한 여백
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        // 스크롤 실행 후 타겟 ID 초기화
        setTargetServiceId(null);
      };
      
      // 페이지 컴포넌트가 렌더링될 시간을 확보하기 위해 짧은 지연 후 실행
      const timer = setTimeout(scrollToAction, 100);
      return () => clearTimeout(timer);
    }
  }, [currentPage, targetServiceId]);

  // --- DATA ---
  const selectedMember = selectedMemberId ? members.find(m => m.id === selectedMemberId) : null;

  // --- PAGE RENDERING LOGIC ---

  /**
   * 홈 페이지 컴포넌트
   */
  const HomePage = () => (
    <PageLayout>
      <HeroSection onNavigate={handleNavigate} />
      <MembersPreviewSection onMemberClick={handleMemberClick} />
      <ExpertiseSection onNavigate={handleNavigate} />
      <ProjectsSection />
    </PageLayout>
  );

  /**
   * 페이지 타입에 따라 렌더링할 컴포넌트를 매핑하는 객체입니다.
   * `switch` 문 대신 사용하여 가독성과 확장성을 높입니다.
   */
  const pageComponentMap: Record<PageType, JSX.Element | null> = {
    home: <HomePage />,
    about: <PageLayout><AboutPage /></PageLayout>,
    services: <PageLayout><ServicesPage /></PageLayout>,
    members: <PageLayout withPadding><MembersPage onMemberClick={handleMemberClick} /></PageLayout>,
    'member-detail': selectedMember ? <PageLayout><MemberDetailPage member={selectedMember} onBack={handleBackToMembers} /></PageLayout> : null,
    news: <PageLayout><NewsPage /></PageLayout>,
    location: <PageLayout><LocationPage /></PageLayout>,
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {pageComponentMap[currentPage]}
      </main>
    </div>
  );
}
