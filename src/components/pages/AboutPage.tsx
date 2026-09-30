/**
 * 회사소개 페이지 컴포넌트
 *
 * 1. 회사 소개 및 비전
 * 2. COSS의 의미 (Creation of Original Strategic & Standard)
 * 3. K, N, P 각각의 의미와 전문성
 */

import { Fragment } from 'react';
import { aboutIntro, aboutParagraphs, cossLines, cossStatement, knpIntro, knpItems } from '../../constants/about';
import { PageHeader } from '../common/PageHeader';
import { Reveal } from '../common/Reveal';

/** 단어 목록을 머리글자 강조와 함께 한 줄로 그립니다. */
function CossWords({ words }: { words: (typeof cossLines)[number] }) {
  return (
    <>
      {words.map(({ word, initial }, index) => (
        <span key={word}>
          {index > 0 && ' '}
          {initial ? (
            <>
              <span className="initial">{word[0]}</span>
              {word.slice(1)}
            </>
          ) : (
            word
          )}
        </span>
      ))}
    </>
  );
}

export function AboutPage() {
  return (
    <>
      {/* 첫 번째 영역: 회사 소개 */}
      <PageHeader {...aboutIntro} />
      <div className="measure prose">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {/* 두 번째 영역: COSS 의미 */}
      <Reveal className="about-coss">
        {/* 한 줄에 한 단어, 머리글자(C·O·S·S)는 왼쪽 열에 세로로 정렬 */}
        <h2 className="about-coss__title">
          <span className="sr-only">{cossLines.flat().map(({ word }) => word).join(' ')}</span>
          <span className="coss-stack" aria-hidden="true">
            {cossLines.flat().map(({ word, initial }) => (
              <Fragment key={word}>
                <span className="coss-stack__initial">{initial ? word[0] : ''}</span>
                <span className="coss-stack__rest">{initial ? word.slice(1) : word}</span>
              </Fragment>
            ))}
          </span>
        </h2>
        <p className="about-coss__statement">
          <strong>{cossStatement.lead}</strong>
          {cossStatement.before}
          {cossLines.map((words, index) => (
            <span key={index}>
              {index > 0 && ' '}
              <CossWords words={words} />
            </span>
          ))}
          {cossStatement.after}
        </p>
      </Reveal>

      {/* 세 번째 영역: KNP 설명 */}
      <section className="about-knp">
        <div className="about-knp__head">
          <h2 className="about-knp__title">{knpIntro.title}</h2>
          <p className="about-knp__subtitle">{knpIntro.subtitle}</p>
        </div>
        <div className="knp-grid">
          {knpItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.letter} delay={index * 100} className="knp-item">
                <div className="knp-item__letter" aria-hidden="true">
                  {item.letter}
                  <Icon />
                </div>
                <h3 className="knp-item__title">{item.title}</h3>
                <p className="knp-item__subtitle">{item.subtitle}</p>
                <p className="knp-item__description">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
