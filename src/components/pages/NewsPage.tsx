/**
 * NewsPage 컴포넌트
 *
 * COSS KNP GROUP의 최신 뉴스 및 소식을 표시하는 페이지입니다.
 */

import { useI18n } from '../../i18n/I18nProvider';
import { PageHeader } from '../common/PageHeader';
import { Reveal } from '../common/Reveal';
import { NewsEntry } from '../news/NewsEntry';

export function NewsPage() {
  const { content, news } = useI18n();

  return (
    <>
      <PageHeader {...content.news.intro} />
      <div>
        {news.map((item, index) => (
          <Reveal key={item.id} delay={index * 80}>
            <NewsEntry news={item} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
