/**
 * @file SiteFooter.tsx
 * @description 모든 페이지 하단 — 회사명·소개 문구, 주소, 연락처(오시는길 데이터 재사용).
 */

import { locationInfo } from '../../constants/location';
import { useI18n } from '../../i18n/I18nProvider';

export function SiteFooter() {
  const { content } = useI18n();
  const { address, phoneDisplay, businessHours, contactLabels } = content.location;
  const { contact } = locationInfo;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__title">COSS KNP GROUP</p>
            <p>{content.home.hero.description}</p>
          </div>
          <div>
            <p className="site-footer__title">{content.footer.addressTitle}</p>
            <p>
              {address.street} {address.building}
              <br />
              {contactLabels.postalCode} {locationInfo.address.postalCode}
            </p>
          </div>
          <div>
            <p className="site-footer__title">{content.footer.contactTitle}</p>
            <p>
              <a href={`tel:${contact.phoneIntl}`}>{phoneDisplay}</a>
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
