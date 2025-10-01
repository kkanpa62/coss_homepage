/**
 * 페이지 레이아웃 래퍼 컴포넌트
 * 
 * 모든 페이지에서 공통으로 사용되는 레이아웃 구조를 제공합니다.
 * 일관된 페이지 간격과 스타일을 적용하여 코드 중복을 제거합니다.
 */

import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;      // 페이지 내용
  withPadding?: boolean;    // 상단 패딩 추가 여부 (네비게이션 바와의 간격 조정용)
}

/**
 * PageLayout 컴포넌트
 * 
 * @param children - 페이지 본문 내용
 * @param withPadding - true일 경우 상단에 패딩 추가 (기본값: false)
 * 
 * @example
 * // 일반 페이지 (Hero 섹션이 있는 경우)
 * <PageLayout>
 *   <Hero />
 *   <About />
 * </PageLayout>
 * 
 * @example
 * // 상단 패딩이 필요한 페이지 (구성원 목록 등)
 * <PageLayout withPadding>
 *   <MembersGrid />
 * </PageLayout>
 */
export function PageLayout({ children, withPadding = false }: PageLayoutProps) {
  return (
    <div className={withPadding ? 'pt-16' : ''}>
      {children}
    </div>
  );
}
