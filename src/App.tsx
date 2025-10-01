/**
 * COSS KNP GROUP 웹사이트 메인 애플리케이션
 * 
 * 이 파일은 전체 애플리케이션의 진입점(Entry Point)으로,
 * 페이지 라우팅과 상태 관리를 담당합니다.
 * 
 * 📁 컴포넌트 구조:
 * - /components/pages        → 전체 페이지 컴포넌트
 * - /components/sections     → 홈페이지 섹션 컴포넌트
 * - /components/common       → 공통 컴포넌트
 */

import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';

// 섹션 컴포넌트 (홈페이지용)
import { HeroSection } from './components/sections/HeroSection';
import { MembersPreviewSection } from './components/sections/MembersPreviewSection';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { ProjectsSection } from './components/sections/ProjectsSection';

// 페이지 컴포넌트
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { MembersPage } from './components/pages/MembersPage';
import { MemberDetailPage } from './components/pages/MemberDetailPage';
import { NewsPage } from './components/pages/NewsPage';
import { LocationPage } from './components/pages/LocationPage';

import { PageLayout } from './components/layout/PageLayout';
import { members } from './constants/members';
import { PageType, NavigationOptions } from './types';

export default function App() {
  // 현재 활성화된 페이지를 관리하는 상태
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  
  // 선택된 구성원의 ID를 관리하는 상태 (구성원 상세 페이지용)
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

  // 업무분야 페이지에서 스크롤할 서비스 ID
  const [targetServiceId, setTargetServiceId] = useState<number | null>(null);

  /**
   * 페이지 이동 핸들러
   * @param page - 이동할 페이지 타입
   * @param options - 추가 옵션 (예: 특정 섹션으로 스크롤)
   */
  const handleNavigate = (page: PageType, options?: NavigationOptions) => {
    setCurrentPage(page);
    
    // 업무분야 페이지로 이동 시 특정 서비스 ID가 있으면 저장
    if (page === 'services' && options?.serviceId) {
      setTargetServiceId(options.serviceId);
    } else {
      setTargetServiceId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  /**
   * 업무분야 페이지에서 특정 섹션으로 스크롤
   */
  useEffect(() => {
    if (currentPage === 'services' && targetServiceId) {
      // DOM이 렌더링될 때까지 약간 대기
      setTimeout(() => {
        const element = document.getElementById(`service-${targetServiceId}`);
        if (element) {
          // 네비게이션 바 높이를 고려하여 스크롤
          const offset = 100; // 상단 여백
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      
      // 스크롤 후 targetServiceId 초기화
      setTargetServiceId(null);
    }
  }, [currentPage, targetServiceId]);

  /**
   * 구성원 클릭 핸들러
   * 구성원 카드 클릭 시 해당 구성원의 상세 페이지로 이동
   * @param memberId - 선택된 구성원의 ID
   */
  const handleMemberClick = (memberId: number) => {
    setSelectedMemberId(memberId);
    setCurrentPage('member-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * 구성원 목록으로 돌아가기 핸들러
   * 구성원 상세 페이지에서 뒤로 가기 버튼 클릭 시 실행
   */
  const handleBackToMembers = () => {
    setCurrentPage('members');
    setSelectedMemberId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 선택된 구성원 데이터 조회
  const selectedMember = selectedMemberId ? members.find(m => m.id === selectedMemberId) : null;

  /**
   * 현재 페이지에 따라 적절한 컴포넌트를 렌더링
   * @returns 현재 페이지에 해당하는 JSX 요소
   */
  const renderPage = () => {
    switch (currentPage) {
      // 홈 페이지: Hero, 구성원 미리보기, 업무분야 미리보기, 프로젝트
      case 'home':
        return (
          <PageLayout>
            <HeroSection onNavigate={handleNavigate} />
            <MembersPreviewSection onMemberClick={handleMemberClick} />
            <ExpertiseSection onNavigate={handleNavigate} />
            <ProjectsSection />
          </PageLayout>
        );

      // 회사소개 페이지
      case 'about':
        return (
          <PageLayout>
            <AboutPage />
          </PageLayout>
        );

      // 업무분야 페이지
      case 'services':
        return (
          <PageLayout>
            <ServicesPage />
          </PageLayout>
        );

      // 구성원 전체 목록 페이지
      case 'members':
        return (
          <PageLayout withPadding>
            <MembersPage onMemberClick={handleMemberClick} />
          </PageLayout>
        );

      // 구성원 상세 페이지
      case 'member-detail':
        return selectedMember ? (
          <PageLayout>
            <MemberDetailPage member={selectedMember} onBack={handleBackToMembers} />
          </PageLayout>
        ) : null;

      // 뉴스/소식 페이지
      case 'news':
        return (
          <PageLayout>
            <NewsPage />
          </PageLayout>
        );

      // 오시는길 페이지
      case 'location':
        return (
          <PageLayout>
            <LocationPage />
          </PageLayout>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* 상단 네비게이션 바 */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* 현재 페이지 렌더링 */}
      {renderPage()}
    </div>
  );
}
