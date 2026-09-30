/**
 * NewsPage 컴포넌트
 *
 * COSS KNP GROUP의 최신 뉴스 및 소식을 표시하는 페이지입니다.
 */

import { newsIntro, newsItems } from '../../constants/news';
import { PageHeader } from '../common/PageHeader';
import { Reveal } from '../common/Reveal';
import { NewsEntry } from '../news/NewsEntry';

export function NewsPage() {
  return (
    <>
      <PageHeader {...newsIntro} />
      <div>
        {newsItems.map((news, index) => (
          <Reveal key={news.id} delay={index * 80}>
            <NewsEntry news={news} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
