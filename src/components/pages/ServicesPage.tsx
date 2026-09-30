/**
 * 업무분야 페이지 컴포넌트
 *
 * 6개 업무분야의 상세와 상단 바로가기를 표시합니다.
 * `/services#service-N`으로 들어오면 App의 스크롤 처리로 해당 분야 위치로 이동합니다.
 */

import { Link } from 'react-router-dom';
import { labels } from '../../constants/labels';
import { servicePath, servicesData, servicesIntro } from '../../constants/services';
import { formatIndex } from '../../utils/format';
import { PageHeader } from '../common/PageHeader';
import { Reveal } from '../common/Reveal';
import { ServiceDetail } from '../services/ServiceDetail';

export function ServicesPage() {
  return (
    <>
      <PageHeader {...servicesIntro} />

      <nav aria-label={labels.serviceIndex}>
        <ul className="tag-list service-index">
          {servicesData.map((service) => (
            <li key={service.id}>
              <Link to={servicePath(service.id)} className="tag">
                {formatIndex(service.id)} {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {servicesData.map((service) => (
        <Reveal key={service.id}>
          <ServiceDetail service={service} />
        </Reveal>
      ))}
    </>
  );
}
