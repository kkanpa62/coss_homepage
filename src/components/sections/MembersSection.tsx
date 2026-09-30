/**
 * 홈 페이지 구성원 섹션
 *
 * HOME_MEMBER_ORDER에 정한 구성원 8명을 순서대로 보여 줍니다.
 */

import { useMemo } from 'react';
import { HOME_MEMBER_ORDER, homeSections } from '../../constants/home';
import { labels } from '../../constants/labels';
import { members } from '../../constants/members';
import { SectionHeader } from '../common/SectionHeader';
import { TextLink } from '../common/TextLink';
import { MemberGrid } from '../members/MemberGrid';

export function MembersSection({ id }: { id?: string }) {
  const displayMembers = useMemo(
    () =>
      HOME_MEMBER_ORDER.map((memberId) => members.find((member) => member.id === memberId)).filter(
        (member): member is (typeof members)[number] => Boolean(member),
      ),
    [],
  );

  return (
    <section id={id} className="section">
      <div className="container">
        <SectionHeader {...homeSections.members} action={<TextLink to="/members">{labels.allMembers}</TextLink>} />
        <MemberGrid members={displayMembers} image="preview" />
      </div>
    </section>
  );
}
