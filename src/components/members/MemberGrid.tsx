/**
 * @file MemberGrid.tsx
 * @description 구성원 카드 그리드(순서대로 나타남).
 */

import { Member } from '../../types';
import { Reveal } from '../common/Reveal';
import { MemberCard } from './MemberCard';

interface MemberGridProps {
  members: Member[];
  image: 'preview' | 'list';
  showDepartment?: boolean;
}

export function MemberGrid({ members, image, showDepartment }: MemberGridProps) {
  return (
    <div className="member-grid">
      {members.map((member, index) => (
        <Reveal key={member.id} delay={(index % 4) * 60}>
          <MemberCard member={member} image={image} showDepartment={showDepartment} />
        </Reveal>
      ))}
    </div>
  );
}
