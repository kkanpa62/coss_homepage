/**
 * @file services.ts
 * @description 업무분야의 언어와 무관한 데이터(ID·아이콘)와 위치(해시) 규칙. 문구는 content/{ko,ja}.ts에 있습니다.
 */

import { Award, Globe, Palette, Scale, Shield, Target } from 'lucide-react';

/** 업무분야 목록 — 배열 순서가 표시 순서입니다. */
export const serviceDefs = [
  { id: 1, icon: Scale },
  { id: 2, icon: Globe },
  { id: 3, icon: Award },
  { id: 4, icon: Target },
  { id: 5, icon: Palette },
  { id: 6, icon: Shield },
] as const;

export type ServiceId = (typeof serviceDefs)[number]['id'];

/** 홈에 표시할 주요 업무분야 수 */
export const FEATURED_SERVICE_COUNT = 4;

/**
 * 업무분야 상세 위치(언어 공통 경로). 실제 링크는 useI18n().path()로 언어 접두어를 붙여 씁니다.
 */
export const serviceAnchorId = (id: number) => `service-${id}`;
export const servicePath = (id: number) => `/services#${serviceAnchorId(id)}`;
