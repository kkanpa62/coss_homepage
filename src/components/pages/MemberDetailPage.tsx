/**
 * 구성원 상세 페이지 컴포넌트
 *
 * 프로필(사진·이름·영문 직함·직급)과 소개·학력·경력·전문 분야를 표시합니다. 없는 항목은 생략합니다.
 */

import { Award, Briefcase, GraduationCap, UserRound } from 'lucide-react';
import { useI18n } from '../../i18n/I18nProvider';
import { Member } from '../../types';
import { DetailRow, PlainList } from '../common/DetailRow';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { ScrambleText } from '../common/ScrambleText';
import { TagList } from '../common/Tag';
import { TextLink } from '../common/TextLink';

export function MemberDetailPage({ member }: { member: Member }) {
  const { content, path } = useI18n();
  const memberDetailLabels = content.members.detailLabels;

  return (
    <>
      <p className="member-detail__back">
        <TextLink to={path('/members')} arrow="←">
          {memberDetailLabels.back}
        </TextLink>
      </p>

      <div className="member-detail">
        {/* 좌측: 프로필 (넓은 화면에서 스크롤 시 고정) */}
        <div className="member-detail__profile">
          <figure className="member-detail__figure">
            <ImageWithFallback src={member.images.detail} alt={member.name} loading="eager" />
          </figure>
          <div>
            <ScrambleText as="h1" lines={[member.name]} className="member-detail__name" duration={1000} />
            {member.reading && <p className="member-detail__reading">{member.reading}</p>}
            <p className="member-detail__position">{member.position}</p>
            <p className="member-detail__department">{member.department}</p>
          </div>
        </div>

        {/* 우측: 상세 정보 */}
        <div className="member-detail__body">
          {member.bio && (
            <DetailRow label={memberDetailLabels.bio} icon={<UserRound aria-hidden="true" />}>
              <p className="member-detail__bio">{member.bio}</p>
            </DetailRow>
          )}
          {member.education && (
            <DetailRow label={memberDetailLabels.education} icon={<GraduationCap aria-hidden="true" />}>
              <PlainList items={member.education} />
            </DetailRow>
          )}
          {member.experience && (
            <DetailRow label={memberDetailLabels.experience} icon={<Briefcase aria-hidden="true" />}>
              <PlainList items={member.experience} />
            </DetailRow>
          )}
          {member.expertise && (
            <DetailRow label={memberDetailLabels.expertise} icon={<Award aria-hidden="true" />}>
              <TagList items={member.expertise} />
            </DetailRow>
          )}
        </div>
      </div>
    </>
  );
}
