/**
 * 업무분야 페이지 컴포넌트
 *
 * 6개 업무분야의 상세와 상단 바로가기를 표시합니다.
 * `/services#service-N`(일본어는 `/ja/services#service-N`)으로 들어오면 App의 스크롤 처리로 해당 분야 위치로 이동합니다.
 */

import { Link } from 'react-router-dom';
import { servicePath } from '../../constants/services';
import { useI18n } from '../../i18n/I18nProvider';
import { formatIndex } from '../../utils/format';
import { PageHeader } from '../common/PageHeader';
import { Reveal } from '../common/Reveal';
import { ServiceDetail } from '../services/ServiceDetail';

export function ServicesPage() {
  const { content, services, path } = useI18n();

  return (
    <>
      <PageHeader {...content.services.intro} />

      <nav aria-label={content.labels.serviceIndex}>
        <ul className="tag-list service-index">
          {services.map((service) => (
            <li key={service.id}>
              <Link to={path(servicePath(service.id))} className="tag">
                {formatIndex(service.id)} {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((service) => (
        <Reveal key={service.id}>
          <ServiceDetail service={service} />
        </Reveal>
      ))}
    </>
  );
}
