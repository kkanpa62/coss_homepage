/**
 * @file news.ts
 * @description 뉴스의 언어와 무관한 데이터(ID·원문 링크). 제목·날짜·요약·출처는 content/{ko,ja}.ts에 있습니다.
 */

/** 뉴스 목록 — 배열 순서가 표시 순서입니다(최신순). */
export const newsLinks = [
  { id: 1, url: 'https://www.theguru.co.kr/news/article.html?no=91418' },
  { id: 2, url: 'https://www.hankookilbo.com/News/Read/A2025081815420004675' },
] as const;

export type NewsId = (typeof newsLinks)[number]['id'];
