/**
 * COSS KNP Group의 차별화된 강점 섹션
 *
 * 혁신적 기술 전문성, 전문 변리사팀, 글로벌 네트워크 — 이미지·번호·제목·설명.
 */

import { useI18n } from '../../i18n/I18nProvider';
import { formatIndex } from '../../utils/format';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Reveal } from '../common/Reveal';
import { SectionHeader } from '../common/SectionHeader';

export function StrengthsSection() {
  const { content, strengths } = useI18n();

  return (
    <section className="section">
      <div className="container">
        <SectionHeader {...content.home.sections.strengths} />
        <div className="strength-grid">
          {strengths.map((strength, index) => (
            <Reveal key={strength.id} delay={index * 80}>
              <article className="strength">
                <figure className="strength__figure">
                  <ImageWithFallback src={strength.image} alt={strength.title} />
                </figure>
                <h3 className="strength__title">
                  <span className="index-number">{formatIndex(index + 1)}</span>
                  {strength.title}
                </h3>
                <p className="strength__description">{strength.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
