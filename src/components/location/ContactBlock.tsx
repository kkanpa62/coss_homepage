/**
 * @file ContactBlock.tsx
 * @description 연락처 한 묶음 — 아이콘·제목 / 주 정보 / 보조 정보(여러 줄).
 */

import { ReactNode } from 'react';

interface ContactBlockProps {
  icon: ReactNode;
  title: string;
  /** 주 정보(주소·전화번호·이메일) — 한 줄씩 */
  primary: ReactNode[];
  /** 보조 정보(우편번호·영업시간 등) — 한 줄씩 */
  secondary: string[];
}

const joinLines = (lines: ReactNode[]) =>
  lines.map((line, index) => (
    <span key={index}>
      {index > 0 && <br />}
      {line}
    </span>
  ));

export function ContactBlock({ icon, title, primary, secondary }: ContactBlockProps) {
  return (
    <section className="contact-block">
      <h2 className="detail-row__label">
        {icon}
        {title}
      </h2>
      <p className="contact-block__primary">{joinLines(primary)}</p>
      <p className="contact-block__secondary">{joinLines(secondary)}</p>
    </section>
  );
}
