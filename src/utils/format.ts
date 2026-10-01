/**
 * @file format.ts
 * @description 화면 표기용 형식 도우미입니다.
 */

import { Locale } from '../i18n/locales';

/**
 * 순번을 두 자리로 표기합니다(1 → "01").
 */
export function formatIndex(value: number): string {
  return String(value).padStart(2, '0');
}

const DATE_UNITS: Record<Locale, { year: string; month: string; day: string; gap: string }> = {
  ko: { year: '년', month: '월', day: '일', gap: ' ' },
  ja: { year: '年', month: '月', day: '日', gap: '' },
};

/**
 * 날짜(YYYY-MM-DD)를 언어별로 표기합니다. ("2026-08-11" → "2026년 8월 11일" / "2026年8月11日")
 */
export function formatDate(iso: string, locale: Locale): string {
  const [year, month, day] = iso.split('-').map(Number);
  const u = DATE_UNITS[locale];
  return [`${year}${u.year}`, `${month}${u.month}`, `${day}${u.day}`].join(u.gap);
}

/**
 * 월(YYYY-MM)을 언어별로 표기합니다. ("2026-08" → "2026년 8월" / "2026年8月")
 */
export function formatMonth(yearMonth: string, locale: Locale): string {
  const [year, month] = yearMonth.split('-').map(Number);
  const u = DATE_UNITS[locale];
  return [`${year}${u.year}`, `${month}${u.month}`].join(u.gap);
}

/**
 * "기사 {count}건"처럼 {이름} 자리를 값으로 바꿉니다.
 */
export function fillTemplate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
