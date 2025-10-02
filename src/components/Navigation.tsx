/**
 * @file Navigation.tsx
 * @description 웹사이트 상단에 고정되는 메인 네비게이션 바 컴포넌트입니다.
 * @component Navigation
 */

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { navigationItems } from '../constants/navigation';
import { PageType } from '../types';

/**
 * @interface NavigationProps
 * @description Navigation 컴포넌트의 props 타입을 정의합니다.
 * @property {PageType} currentPage - 현재 활성화된 페이지 (메뉴 하이라이트용)
 * @property {(page: PageType) => void} onNavigate - 페이지 이동을 처리하는 콜백 함수
 */
interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

/**
 * @component Logo
 * @description 웹사이트 로고 컴포넌트. 클릭 시 홈으로 이동합니다.
 * @param {{ onNavigate: (page: 'home') => void }} props - onNavigate 콜백 함수
 * @returns {JSX.Element}
 */
const Logo = ({ onNavigate }: { onNavigate: (page: 'home') => void }) => (
  <button 
    onClick={() => onNavigate('home')}
    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    aria-label="홈으로 이동"
  >
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-chart-1 to-chart-5" />
    <span className="text-lg font-semibold">COSS KNP GROUP</span>
  </button>
);

/**
 * @component DesktopMenu
 * @description 데스크탑 화면용 네비게이션 메뉴입니다.
 * @param {NavigationProps} props - currentPage와 onNavigate 콜백 함수
 * @returns {JSX.Element}
 */
const DesktopMenu = ({ currentPage, onNavigate }: NavigationProps) => (
  <div className="hidden md:flex items-center gap-2">
    {navigationItems.map((item) => (
      <Button
        key={item.id}
        variant={currentPage === item.id ? 'default' : 'ghost'}
        onClick={() => onNavigate(item.id)}
        className="transition-all"
      >
        {item.label}
      </Button>
    ))}
  </div>
);

/**
 * @component MobileMenu
 * @description 모바일 화면용 네비게이션 메뉴 (햄버거 버튼 및 사이드 시트).
 * @param {NavigationProps} props - currentPage와 onNavigate 콜백 함수
 * @returns {JSX.Element}
 */
const MobileMenu = ({ currentPage, onNavigate }: NavigationProps) => (
  <div className="md:hidden">
    <Sheet>
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
              onClick={() => onNavigate(item.id)}
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
 * @description 웹사이트의 메인 네비게이션 바. 로고, 데스크탑 메뉴, 모바일 메뉴를 포함합니다.
 * @param {NavigationProps} props - currentPage와 onNavigate 콜백 함수
 * @returns {JSX.Element}
 */
export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo onNavigate={onNavigate} />
          <DesktopMenu currentPage={currentPage} onNavigate={onNavigate} />
          <MobileMenu currentPage={currentPage} onNavigate={onNavigate} />
        </div>
      </div>
    </motion.nav>
  );
}
