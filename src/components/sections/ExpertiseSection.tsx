/**
 * 홈 페이지 업무분야 미리보기 섹션
 *
 * 주요 업무분야 4개(특허, 표준특허, 상표, IP 컨설팅)를 표시합니다.
 * 각 항목을 누르면 업무분야 페이지의 해당 위치로 이동합니다.
 */

import { homeSections } from '../../constants/home';
import { featuredServices } from '../../constants/services';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';
import { ServiceSummary } from '../services/ServiceSummary';

export function ExpertiseSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader {...homeSections.expertise} />
        <Reveal className="service-summary-grid">
          {featuredServices.map((service) => (
            <ServiceSummary key={service.id} service={service} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
