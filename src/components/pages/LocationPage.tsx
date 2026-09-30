/**
 * @file LocationPage.tsx
 * @description 오시는길 — 주소·전화번호·이메일과 지도.
 */

import { Mail, MapPin, Phone } from 'lucide-react';
import { contactLabels, locationInfo, locationIntro } from '../../constants/location';
import { PageHeader } from '../common/PageHeader';
import { Reveal } from '../common/Reveal';
import { ContactBlock } from '../location/ContactBlock';
import { GoogleMap } from '../location/GoogleMap';

export function LocationPage() {
  const { address, contact, businessHours, emailInfo } = locationInfo;

  return (
    <>
      <PageHeader {...locationIntro} />

      <Reveal className="contact-grid">
        <ContactBlock
          icon={<MapPin aria-hidden="true" />}
          title={contactLabels.address}
          primary={[address.street, address.building]}
          secondary={[`${contactLabels.postalCode}: ${address.postalCode}`]}
        />
        <ContactBlock
          icon={<Phone aria-hidden="true" />}
          title={contactLabels.phone}
          primary={[<a href={`tel:${contact.phone}`}>{contact.phone}</a>]}
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
