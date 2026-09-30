/**
 * @file SiteFooter.tsx
 * @description 모든 페이지 하단 — 회사명·소개 문구, 주소, 연락처(오시는길 데이터 재사용).
 */

import { heroContent } from '../../constants/home';
import { locationInfo } from '../../constants/location';

export function SiteFooter() {
  const { address, contact, businessHours } = locationInfo;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__title">COSS KNP GROUP</p>
            <p>{heroContent.description}</p>
          </div>
          <div>
            <p className="site-footer__title">ADDRESS</p>
            <p>
              {address.street} {address.building}
              <br />
              우편번호 {address.postalCode}
            </p>
          </div>
          <div>
            <p className="site-footer__title">CONTACT</p>
            <p>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              <br />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <br />
              {businessHours.weekday}
            </p>
          </div>
        </div>
        <p className="site-footer__bottom">© {new Date().getFullYear()} COSS KNP GROUP</p>
      </div>
    </footer>
  );
}
