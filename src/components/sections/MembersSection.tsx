/**
 * 홈 페이지 구성원 섹션
 *
 * HOME_MEMBER_ORDER에 정한 구성원을 한 줄 가로 스크롤(ScrollRail)로 보여 줍니다.
 */

import { useI18n } from '../../i18n/I18nProvider';
import { Reveal } from '../common/Reveal';
import { ScrollRail } from '../common/ScrollRail';
import { SectionHeader } from '../common/SectionHeader';
import { TextLink } from '../common/TextLink';
import { MemberCard } from '../members/MemberCard';

export function MembersSection({ id }: { id?: string }) {
  const { content, homeMembers, path } = useI18n();
  const intro = content.home.sections.members;

  return (
    <section id={id} className="section">
      <div className="container">
        <SectionHeader {...intro} action={<TextLink to={path('/members')}>{content.labels.allMembers}</TextLink>} />
        <Reveal>
          <ScrollRail
            items={homeMembers}
            getKey={(member) => member.id}
            renderItem={(member) => <MemberCard member={member} image="preview" />}
            label={intro.title}
          />
        </Reveal>
      </div>
    </section>
  );
}
