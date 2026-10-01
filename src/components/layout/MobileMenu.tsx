/**
 * @file MobileMenu.tsx
 * @description 좁은 화면용 전체 화면 메뉴. 열려 있는 동안 본문 스크롤을 막고, Esc로 닫습니다.
 */

import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { locationInfo } from '../../constants/location';
import { navigationItems } from '../../constants/navigation';
import { useI18n } from '../../i18n/I18nProvider';
import { formatIndex } from '../../utils/format';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { content, path } = useI18n();

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
      <nav aria-label={content.labels.mainMenu}>
        <ul className="mobile-menu__list">
          {navigationItems.map((item, index) => (
            <li key={item.id}>
              <NavLink to={path(item.path)} end={item.path === '/'} className="mobile-menu__link" onClick={onClose}>
                <span className="index-number">{formatIndex(index + 1)}</span>
                {content.navigation[item.id]}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <p className="mobile-menu__foot">
        {content.location.phoneDisplay}
        <br />
        {locationInfo.contact.email}
      </p>
    </div>
  );
}
