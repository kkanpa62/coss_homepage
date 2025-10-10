/**
 * @file HomePage.tsx
 * @description 홈 화면 라우트용 컨테이너. 기존 섹션 컴포넌트를 조합하고 라우터 내비게이션 핸들러를 제공합니다.
 */

import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../layout/PageLayout';
import { HeroSection } from '../sections/HeroSection';
import { MembersPreviewSection } from '../sections/MembersPreviewSection';
import { ExpertiseSection } from '../sections/ExpertiseSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { NavigationOptions, PageType } from '../../types';

/**
 * 홈 화면 라우트 컴포넌트.
 * - 기존 상태 기반 내비게이션을 라우터 기반으로 치환합니다.
 * - 다른 페이지로 이동할 때 필요한 부가 정보를 state로 전달합니다.
 */
export function HomePage() {
  const navigate = useNavigate();

  /**
   * 라우트별 경로 매핑을 메모이제이션하여 중복 계산을 방지합니다.
   */
  const routeMap = useMemo<Record<PageType, string>>(
    () => ({
      home: '/',
      about: '/about',
      services: '/services',
      members: '/members',
      news: '/news',
      location: '/location',
      'member-detail': '/members',
    }),
    [],
  );

  /**
   * 섹션에서 요청하는 페이지 이동을 라우터 내비게이션으로 변환합니다.
   */
  const handleNavigate = useCallback(
    (page: PageType, options?: NavigationOptions) => {
      const targetPath = routeMap[page];
      if (!targetPath) return;

      if (page === 'services' && options?.serviceId) {
        navigate(targetPath, { state: { targetServiceId: options.serviceId } });
        return;
      }

      navigate(targetPath);
    },
    [navigate, routeMap],
  );

  /**
   * 구성원 카드를 클릭했을 때 상세 페이지 라우트로 이동합니다.
   */
  const handleMemberClick = useCallback(
    (memberId: number) => {
      navigate(`/members/${memberId}`);
    },
    [navigate],
  );

  return (
    <PageLayout>
      <HeroSection onNavigate={handleNavigate} />
      <MembersPreviewSection onMemberClick={handleMemberClick} />
      <ExpertiseSection onNavigate={handleNavigate} />
      <ProjectsSection />
    </PageLayout>
  );
}
