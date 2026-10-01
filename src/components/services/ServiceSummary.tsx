/**
 * @file ServiceSummary.tsx
 * @description 업무분야 요약 — 번호·아이콘·제목·설명·자세히 보기. 홈에서 쓰며 업무분야 상세 위치로 이동합니다.
 */

import { Link } from 'react-router-dom';
import { servicePath } from '../../constants/services';
import { useI18n } from '../../i18n/I18nProvider';
import { ServiceData } from '../../types';
import { formatIndex } from '../../utils/format';
import { TextLink } from '../common/TextLink';

export function ServiceSummary({ service }: { service: ServiceData }) {
  const { content, path } = useI18n();
  const Icon = service.icon;

  return (
    <Link to={path(servicePath(service.id))} className="service-summary">
      <span className="index-number">{formatIndex(service.id)}</span>
      <div className="service-summary__head">
        <Icon className="service-summary__icon" aria-hidden="true" />
        <h3 className="service-summary__title">{service.title}</h3>
      </div>
      <p className="service-summary__description">{service.description}</p>
      <TextLink>{content.labels.more}</TextLink>
    </Link>
  );
}
