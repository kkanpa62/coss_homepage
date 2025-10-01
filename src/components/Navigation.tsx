/**
 * 네비게이션 바 컴포넌트
 * 
 * 웹사이트 상단에 고정되는 메인 네비게이션 메뉴입니다.
 * 로고, 메뉴 항목, 그리고 현재 페이지 하이라이트 기능을 제공합니다.
 */

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { navigationItems } from '../constants/navigation';
import { PageType } from '../types';

interface NavigationProps {
  currentPage: PageType;                      // 현재 활성화된 페이지
  onNavigate: (page: PageType) => void;       // 페이지 이동 핸들러
}

/**
 * Navigation 컴포넌트
 * 
 * @param currentPage - 현재 활성화된 페이지 (하이라이트 표시용)
 * @param onNavigate - 메뉴 클릭 시 실행될 페이지 이동 함수
 */
export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 로고 영역 */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-chart-1 to-chart-5" />
            <span className="text-lg">COSS KNP GROUP</span>
          </button>

          {/* 메뉴 항목들 */}
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

          {/* 모바일 메뉴 버튼 (향후 구현 가능) */}
          <div className="md:hidden">
            {/* 햄버거 메뉴 아이콘 추가 가능 */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
