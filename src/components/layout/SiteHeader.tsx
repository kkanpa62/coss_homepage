/**
 * @file SiteHeader.tsx
 * @description 고정 헤더 — 로고, 주 메뉴(데스크톱), 테마 전환, 모바일 메뉴 버튼.
 *              스크롤하면 반투명 배경이 생기고, 경로가 바뀌면 모바일 메뉴가 닫힙니다.
 */

import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { labels } from '../../constants/labels';
import { navigationItems } from '../../constants/navigation';
import { ThemeToggle } from '../common/ThemeToggle';
import { MobileMenu } from './MobileMenu';

const SCROLL_THRESHOLD = 8;

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrolled;
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <header className={clsx('site-header', scrolled && 'is-scrolled', menuOpen && 'is-menu-open')}>
        <div className="container site-header__inner">
          <Link to="/" className="site-brand" aria-label={labels.home}>
            <span className="site-brand__mark" aria-hidden="true" />
            COSS KNP GROUP
          </Link>

          <div className="site-header__actions">
            <nav className="site-nav" aria-label={labels.mainMenu}>
              {navigationItems.map((item) => (
                <NavLink key={item.id} to={item.path} end={item.path === '/'} className="site-nav__link">
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <ThemeToggle />
            <button
              type="button"
              className="icon-button menu-button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
              <span className="sr-only">{menuOpen ? labels.closeMenu : labels.openMenu}</span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
