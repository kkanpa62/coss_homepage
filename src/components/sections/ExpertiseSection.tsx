/**
 * 홈 페이지 업무분야 미리보기 섹션
 *
 * 업무분야 앞 FEATURED_SERVICE_COUNT개(constants/services.ts)를 표시합니다.
 * 각 항목을 누르면 업무분야 페이지의 해당 위치로 이동합니다.
 */

import { useI18n } from '../../i18n/I18nProvider';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';
import { ServiceSummary } from '../services/ServiceSummary';

export function ExpertiseSection() {
  const { content, featuredServices } = useI18n();

  return (
    <section className="section">
      <div className="container">
        <SectionHeader {...content.home.sections.expertise} />
        <Reveal className="service-summary-grid">
          {featuredServices.map((service) => (
            <ServiceSummary key={service.id} service={service} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
