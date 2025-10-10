/**
 * @file Navigation.tsx
 * @description React Router와 연동된 상단 네비게이션 바. 경로 기반으로 활성화 상태를 추적하고, 모바일 메뉴 토글을 제어합니다.
 * @component Navigation
 */

import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { navigationItems } from '../constants/navigation';
import { PageType } from '../types';

type NavigateHandler = (path: string, options?: { closeMobileMenu?: boolean }) => void;

/**
 * @component Logo
 * @description 웹사이트 로고 컴포넌트. 클릭 시 홈 라우트로 이동합니다.
 */
const Logo = ({ onNavigate }: { onNavigate: () => void }) => (
  <button
    onClick={onNavigate}
    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    aria-label="홈으로 이동"
  >
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-chart-1 to-chart-5" />
    <span className="text-lg font-semibold">COSS KNP GROUP</span>
  </button>
);

/**
 * @component DesktopMenu
 * @description 데스크탑 화면용 네비게이션 메뉴. 현재 경로를 기반으로 버튼 상태를 표시합니다.
 */
const DesktopMenu = ({
  currentPage,
  onNavigate,
}: {
  currentPage: PageType;
  onNavigate: NavigateHandler;
}) => (
  <div className="hidden md:flex items-center gap-2">
    {navigationItems.map((item) => (
      <Button
        key={item.id}
        variant={currentPage === item.id ? 'default' : 'ghost'}
        onClick={() => onNavigate(item.path)}
        className="transition-all"
      >
        {item.label}
      </Button>
    ))}
  </div>
);

/**
 * @component MobileMenu
 * @description 모바일 화면용 네비게이션 메뉴. 시트를 닫으면서 라우터 네비게이션을 호출합니다.
 */
const MobileMenu = ({
  currentPage,
  onNavigate,
  isOpen,
  onOpenChange,
}: {
  currentPage: PageType;
  onNavigate: NavigateHandler;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <div className="md:hidden">
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-4 pt-8">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.id ? 'secondary' : 'ghost'}
              onClick={() => onNavigate(item.path, { closeMobileMenu: true })}
              className="w-full justify-start text-lg"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  </div>
);

/**
 * @component Navigation
 * @description 라우터 경로 변화를 감지해 메뉴 활성화를 업데이트하고, 공통 내비게이션 바를 렌더링합니다.
 */
export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /**
   * 현재 경로를 PageType으로 변환해 버튼 활성화 상태를 계산합니다.
   */
  const currentPage = useMemo<PageType>(() => {
    const [, segment] = location.pathname.split('/');
    switch (segment) {
      case 'about':
        return 'about';
      case 'services':
        return 'services';
      case 'members':
        return 'members';
      case 'news':
        return 'news';
      case 'location':
        return 'location';
      case '':
      case undefined:
        return 'home';
      default:
        return 'home';
    }
  }, [location.pathname]);

  /**
   * 라우터 네비게이션 헬퍼. 필요 시 모바일 시트를 닫습니다.
   */
  const handleNavigate = useCallback<NavigateHandler>(
    (path, options) => {
      navigate(path);
      if (options?.closeMobileMenu) {
        setIsMobileOpen(false);
      }
    },
    [navigate],
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo onNavigate={() => handleNavigate('/')} />
          <DesktopMenu currentPage={currentPage} onNavigate={handleNavigate} />
          <MobileMenu
            currentPage={currentPage}
            onNavigate={handleNavigate}
            isOpen={isMobileOpen}
            onOpenChange={setIsMobileOpen}
          />
        </div>
      </div>
    </motion.nav>
  );
}
