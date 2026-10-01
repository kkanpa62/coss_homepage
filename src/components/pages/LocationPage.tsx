/**
 * @file LocationPage.tsx
 * @description 오시는길 — 주소·전화번호·이메일과 지도.
 */

import { Mail, MapPin, Phone } from 'lucide-react';
import { locationInfo } from '../../constants/location';
import { useI18n } from '../../i18n/I18nProvider';
import { PageHeader } from '../common/PageHeader';
import { Reveal } from '../common/Reveal';
import { ContactBlock } from '../location/ContactBlock';
import { GoogleMap } from '../location/GoogleMap';

export function LocationPage() {
  const { content } = useI18n();
  const { intro, contactLabels, address, phoneDisplay, businessHours, emailInfo } = content.location;
  const { contact } = locationInfo;

  return (
    <>
      <PageHeader {...intro} />

      <Reveal className="contact-grid">
        <ContactBlock
          icon={<MapPin aria-hidden="true" />}
          title={contactLabels.address}
          primary={[address.street, address.building]}
          secondary={[`${contactLabels.postalCode}: ${locationInfo.address.postalCode}`]}
        />
        <ContactBlock
          icon={<Phone aria-hidden="true" />}
          title={contactLabels.phone}
          primary={[<a href={`tel:${contact.phoneIntl}`}>{phoneDisplay}</a>]}
          secondary={[businessHours.weekday, businessHours.lunch]}
        />
        <ContactBlock
          icon={<Mail aria-hidden="true" />}
          title={contactLabels.email}
          primary={[<a href={`mailto:${contact.email}`}>{contact.email}</a>]}
          secondary={[emailInfo.availability, emailInfo.responseTime]}
        />
      </Reveal>

      <Reveal>
        <GoogleMap />
      </Reveal>
    </>
  );
}
