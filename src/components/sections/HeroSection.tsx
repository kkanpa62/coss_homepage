/**
 * Hero 섹션 컴포넌트 (홈페이지용)
 *
 * 홈페이지 최상단 — 스크램블 메인 타이틀, 서브 타이틀, 스크롤 안내.
 */

import { useI18n } from '../../i18n/I18nProvider';
import { ScrambleText } from '../common/ScrambleText';

/** 스크롤 안내가 가리키는 첫 섹션의 id */
export const HOME_FIRST_SECTION_ID = 'home-members';

export function HeroSection() {
  const { content } = useI18n();
  const { hero } = content.home;

  return (
    <section className="hero">
      <div className="container">
        <p className="eyebrow">{hero.eyebrow}</p>
        <ScrambleText as="h1" lines={hero.title} className="hero__title" duration={1800} />
        <p className="hero__description">{hero.description}</p>
        <a href={`#${HOME_FIRST_SECTION_ID}`} className="hero__cue" aria-label={content.labels.scrollDown}>
          ↓
        </a>
      </div>
    </section>
  );
}
