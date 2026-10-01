/**
 * @file LanguageSwitch.tsx
 * @description 언어 전환 — 지구본 아이콘과 현재 언어 코드를 보여 주는 버튼.
 *              언어가 2개면 누르는 즉시 다른 언어로 이동하고, 3개 이상이면 언어 목록을 펼쳐 고르게 합니다
 *              (어느 언어든 클릭 두 번 이내). 이동할 때 같은 페이지·해시 위치를 유지합니다.
 */

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useI18n } from '../../i18n/I18nProvider';
import { Locale, LOCALE_NAMES, LOCALES, localizePath, stripLocale } from '../../i18n/locales';

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9s1.3-6.5 3.8-9z" />
    </svg>
  );
}

/** 현재 페이지를 다른 언어로 연 주소 */
function useTargetPath() {
  const { pathname, hash } = useLocation();
  const commonPath = stripLocale(pathname);
  return (target: Locale) => `${localizePath(commonPath, target)}${hash}`;
}

export function LanguageSwitch() {
  const { locale, content } = useI18n();
  const targetPath = useTargetPath();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const others = LOCALES.filter((code) => code !== locale);
  const current = LOCALE_NAMES[locale];

  // 펼친 목록: 바깥을 누르거나 Esc, 페이지 이동 시 닫기
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const face = (
    <>
      <GlobeIcon />
      <span>{current.short}</span>
    </>
  );

  // 언어가 2개: 한 번에 다른 언어로 이동
  if (others.length === 1) {
    const [target] = others;
    const targetName = LOCALE_NAMES[target].full;
    return (
      <Link
        to={targetPath(target)}
        hrefLang={target}
        className="language-switch"
        title={targetName}
        aria-label={`${content.labels.language}: ${targetName}`}
      >
        {face}
      </Link>
    );
  }

  // 언어가 3개 이상: 목록을 펼쳐 고르기
  return (
    <div ref={rootRef} className="language-menu">
      <button
        type="button"
        className="language-switch"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={content.labels.language}
        onClick={() => setOpen((value) => !value)}
      >
        {face}
      </button>
      {open && (
        <ul className="language-menu__list">
          {LOCALES.map((code) => (
            <li key={code}>
              <Link
                to={targetPath(code)}
                lang={code}
                hrefLang={code}
                aria-current={code === locale ? 'true' : undefined}
                className={clsx('language-menu__item', code === locale && 'is-current')}
              >
                <span className="language-menu__code">{LOCALE_NAMES[code].short}</span>
                {LOCALE_NAMES[code].full}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
