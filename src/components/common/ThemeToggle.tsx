/**
 * @file ThemeToggle.tsx
 * @description 다크/라이트 테마 전환 버튼입니다.
 */

import { useTheme } from '../../hooks/useTheme';
import { useI18n } from '../../i18n/I18nProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { labels } = useI18n().content;
  const label = theme === 'dark' ? labels.themeToLight : labels.themeToDark;

  return (
    <button type="button" className="icon-button" onClick={toggleTheme} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4a8 8 0 0 0 0 16z" fill="currentColor" />
      </svg>
    </button>
  );
}
