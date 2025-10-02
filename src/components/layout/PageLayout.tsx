/**
 * @file PageLayout.tsx
 * @description 모든 페이지에서 공통으로 사용되는 레이아웃 래퍼 컴포넌트입니다.
 * @component PageLayout
 */

import { ReactNode } from 'react';
import clsx from 'clsx';

/**
 * @interface PageLayoutProps
 * @description PageLayout 컴포넌트의 props 타입을 정의합니다.
 * @property {ReactNode} children - 페이지에 렌더링될 자식 요소들
 * @property {boolean} [withPadding=false] - true일 경우, 상단 네비게이션 바와의 간격을 위한 패딩을 추가합니다.
 */
interface PageLayoutProps {
  children: ReactNode;
  withPadding?: boolean;
}

/**
 * @component PageLayout
 * @description 모든 페이지의 공통적인 레이아웃 구조를 제공하여 일관성을 유지하고 코드 중복을 줄입니다.
 * @param {PageLayoutProps} props - 컴포넌트 props
 * @returns {JSX.Element}
 * 
 * @example
 * // Hero 섹션 등 상단에 붙는 컨텐츠가 있는 페이지
 * <PageLayout>
 *   <HeroSection />
 * </PageLayout>
 * 
 * @example
 * // 컨텐츠가 바로 시작되는 페이지
 * <PageLayout withPadding>
 *   <ContentGrid />
 * </PageLayout>
 */
export function PageLayout({ children, withPadding = false }: PageLayoutProps) {
  return (
    <div className={clsx(withPadding && 'pt-16')}>
      {children}
    </div>
  );
}
