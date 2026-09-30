/**
 * @file ThemeToggle.tsx
 * @description 다크/라이트 테마 전환 버튼입니다.
 */

import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = theme === 'dark' ? '밝은 테마로 전환' : '어두운 테마로 전환';

  return (
    <button type="button" className="icon-button" onClick={toggleTheme} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4a8 8 0 0 0 0 16z" fill="currentColor" />
      </svg>
    </button>
  );
}
