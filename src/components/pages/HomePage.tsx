/**
 * @file HomePage.tsx
 * @description 홈 화면 — 히어로, 구성원, 업무분야, 차별화된 강점 섹션을 조합합니다.
 */

import { ExpertiseSection } from '../sections/ExpertiseSection';
import { HOME_FIRST_SECTION_ID, HeroSection } from '../sections/HeroSection';
import { MembersSection } from '../sections/MembersSection';
import { StrengthsSection } from '../sections/StrengthsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MembersSection id={HOME_FIRST_SECTION_ID} />
      <ExpertiseSection />
      <StrengthsSection />
    </>
  );
}
