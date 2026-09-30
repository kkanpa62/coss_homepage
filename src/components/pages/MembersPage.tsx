/**
 * 구성원 페이지 컴포넌트
 *
 * 전체 구성원을 사진·이름·영문 직함·직급 카드 그리드로 표시합니다.
 */

import { members, membersIntro } from '../../constants/members';
import { PageHeader } from '../common/PageHeader';
import { MemberGrid } from '../members/MemberGrid';

export function MembersPage() {
  return (
    <>
      <PageHeader {...membersIntro} />
      <MemberGrid members={members} image="list" showDepartment />
    </>
  );
}
