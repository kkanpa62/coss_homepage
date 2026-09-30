/**
 * @file ServiceDetail.tsx
 * @description 업무분야 상세 — 번호·아이콘·제목 / 설명·하이라이트·서비스 범위.
 */

import { SERVICE_SCOPE_LABEL, ServiceData, serviceAnchorId } from '../../constants/services';
import { formatIndex } from '../../utils/format';

export function ServiceDetail({ service }: { service: ServiceData }) {
  const Icon = service.icon;

  return (
    <article id={serviceAnchorId(service.id)} className="service-detail">
      <div className="service-detail__aside">
        <span className="index-number">{formatIndex(service.id)}</span>
        <Icon className="service-detail__icon" aria-hidden="true" />
        <h2 className="service-detail__title">{service.title}</h2>
      </div>

      <div>
        <p className="service-detail__description">{service.description}</p>

        <dl className="service-detail__highlights">
          {service.highlights.map((highlight) => (
            <div key={highlight.title} className="service-detail__highlight">
              <dt>{highlight.title}</dt>
              <dd>{highlight.description}</dd>
            </div>
          ))}
        </dl>

        <div className="service-detail__scope">
          <h3 className="eyebrow">{SERVICE_SCOPE_LABEL}</h3>
          <ol className="scope-list">
            {service.services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
