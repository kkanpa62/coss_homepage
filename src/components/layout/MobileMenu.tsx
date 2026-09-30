/**
 * @file MobileMenu.tsx
 * @description 좁은 화면용 전체 화면 메뉴. 열려 있는 동안 본문 스크롤을 막고, Esc로 닫습니다.
 */

import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { labels } from '../../constants/labels';
import { locationInfo } from '../../constants/location';
import { navigationItems } from '../../constants/navigation';
import { formatIndex } from '../../utils/format';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div id="mobile-menu" className={clsx('mobile-menu', open && 'is-open')} aria-hidden={!open}>
      <nav aria-label={labels.mainMenu}>
        <ul className="mobile-menu__list">
          {navigationItems.map((item, index) => (
            <li key={item.id}>
              <NavLink to={item.path} end={item.path === '/'} className="mobile-menu__link" onClick={onClose}>
                <span className="index-number">{formatIndex(index + 1)}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <p className="mobile-menu__foot">
        {locationInfo.contact.phone}
        <br />
        {locationInfo.contact.email}
      </p>
    </div>
  );
}
