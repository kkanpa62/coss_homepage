/**
 * @file members.ts
 * @description 구성원의 언어와 무관한 데이터(ID·사진 경로). 이름·직함·약력 등 문구는 content/{ko,ja}.ts에 있습니다.
 *              구성원을 추가하면 두 언어 파일에도 같은 ID로 문구를 넣어야 타입 검사(npm run build)가 통과합니다.
 */

import { MemberImages } from '../types';

/** 정사각형 사진 3종(홈 768px, 목록 300px, 상세 원본) 경로 규칙 */
const boxImages = (slug: string): MemberImages => ({
  preview: `/images/members/${slug}_box-768x768.jpg`,
  list: `/images/members/${slug}_box-300x300.jpg`,
  detail: `/images/members/${slug}.jpg`,
});

/** 사진이 한 장뿐인 경우 */
const singleImage = (file: string): MemberImages => ({ preview: file, list: file, detail: file });

/** 구성원 목록 — 배열 순서가 구성원 페이지의 표시 순서입니다. */
export const memberProfiles = [
  { id: 1, images: boxImages('kimsungho') },
  { id: 2, images: boxImages('sonjaeyong') },
  { id: 3, images: boxImages('parkyangho') },
  { id: 4, images: boxImages('ohyongtaek') },
  { id: 5, images: boxImages('moonhyundon') },
  { id: 6, images: boxImages('sungjinsol') },
  { id: 7, images: boxImages('giljinsung') },
  // id 8(최충헌)은 2026-10 퇴사로 삭제. 새 구성원은 ID를 다시 쓰지 말고 10부터 씁니다.
  { id: 9, images: singleImage('/images/members/murakami.png') },
] as const;

export type MemberId = (typeof memberProfiles)[number]['id'];
