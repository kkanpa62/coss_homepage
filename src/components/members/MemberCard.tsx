/**
 * @file MemberCard.tsx
 * @description 구성원 카드 — 사진·이름·영문 직함(·직급). 홈 구성원 섹션과 구성원 목록에서 함께 씁니다.
 *              카드 전체가 상세 페이지로 가는 링크입니다.
 */

import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider';
import { Member, MemberImages } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface MemberCardProps {
  member: Member;
  /** 사용할 이미지 변형 */
  image: keyof Pick<MemberImages, 'preview' | 'list'>;
  /** 직급 표시 여부 */
  showDepartment?: boolean;
}

export function MemberCard({ member, image, showDepartment = false }: MemberCardProps) {
  const { path } = useI18n();

  return (
    <Link to={path(`/members/${member.id}`)} className="member-card">
      <figure className="member-card__figure">
        <ImageWithFallback src={member.images[image]} alt={member.name} className="member-card__image" />
      </figure>
      <h3 className="member-card__name">
        {member.name}
        <span className="member-card__arrow" aria-hidden="true">→</span>
      </h3>
      {member.reading && <p className="member-card__reading">{member.reading}</p>}
      <p className="member-card__position">{member.position}</p>
      {showDepartment && <p className="member-card__department">{member.department}</p>}
    </Link>
  );
}
