/**
 * 홈 페이지 구성원 섹션
 *
 * HOME_MEMBER_ORDER에 정한 구성원을 한 줄 가로 스크롤(ScrollRail)로 보여 줍니다.
 */

import { useMemo } from 'react';
import { HOME_MEMBER_ORDER, homeSections } from '../../constants/home';
import { labels } from '../../constants/labels';
import { members } from '../../constants/members';
import { Member } from '../../types';
import { Reveal } from '../common/Reveal';
import { ScrollRail } from '../common/ScrollRail';
import { SectionHeader } from '../common/SectionHeader';
import { TextLink } from '../common/TextLink';
import { MemberCard } from '../members/MemberCard';

export function MembersSection({ id }: { id?: string }) {
  const displayMembers = useMemo(
    () =>
      HOME_MEMBER_ORDER.map((memberId) => members.find((member) => member.id === memberId)).filter(
        (member): member is Member => Boolean(member),
      ),
    [],
  );

  return (
    <section id={id} className="section">
      <div className="container">
        <SectionHeader {...homeSections.members} action={<TextLink to="/members">{labels.allMembers}</TextLink>} />
        <Reveal>
          <ScrollRail
            items={displayMembers}
            getKey={(member) => member.id}
            renderItem={(member) => <MemberCard member={member} image="preview" />}
            label={homeSections.members.title}
          />
        </Reveal>
      </div>
    </section>
  );
}
