/**
 * COSS KNP GROUP 뉴스 및 소식 데이터
 * 
 * 뉴스/소식 페이지에서 사용되는 최신 뉴스 정보를 관리합니다.
 */

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  source: string;
  url: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: '\'밀어서 잠금해제\' 특허소송, 애플 승소 확정',
    date: '2025년 9월 5일',
    description: '미국 연방대법원이 애플의 \'밀어서 잠금해제(slide to unlock)\' 특허 관련 소송에서 최종 승소 판결을 내렸습니다. 이는 스마트폰 UI 특허의 중요성을 재확인하는 판례로 평가되고 있습니다.',
    source: '더구루',
    url: 'https://www.theguru.co.kr/news/article.html?no=91418',
  },
  {
    id: 2,
    title: '특허청, \'지식재산처\'로 격상 추진 본격화',
    date: '2025년 8월 19일',
    description: '정부가 특허청을 \'지식재산처\'로 격상시키는 방안을 본격 추진한다고 발표했습니다. 지식재산권의 중요성이 커지면서 정부 차원의 정책 추진력을 강화하고, 국가 지식재산 전략의 컨트롤타워 역할을 확대할 예정입니다.',
    source: '한국일보',
    url: 'https://www.hankookilbo.com/News/Read/A2025081815420004675',
  },
];