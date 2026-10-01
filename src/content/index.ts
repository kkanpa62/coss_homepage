/**
 * @file index.ts
 * @description 언어 공통 데이터(constants)와 언어별 문구(ko·ja)를 합쳐, 화면이 바로 쓸 수 있는 형태로 만듭니다.
 *              언어마다 한 번만 계산해 두고 useI18n()으로 꺼내 씁니다.
 */

import { knpDefs } from '../constants/about';
import { HOME_MEMBER_ORDER, strengthDefs } from '../constants/home';
import { memberProfiles } from '../constants/members';
import { newsLinks } from '../constants/news';
import { FEATURED_SERVICE_COUNT, serviceDefs } from '../constants/services';
import { Locale } from '../i18n/locales';
import { KnpItem, Member, NewsItem, ServiceData, Strength } from '../types';
import { ja } from './ja';
import { ko } from './ko';
import { SiteContent } from './types';

export interface SiteData {
  content: SiteContent;
  /** 구성원 페이지 순서 */
  members: Member[];
  /** 홈 구성원 섹션 순서 */
  homeMembers: Member[];
  services: ServiceData[];
  featuredServices: ServiceData[];
  news: NewsItem[];
  strengths: Strength[];
  knpItems: KnpItem[];
}

function buildSiteData(content: SiteContent): SiteData {
  const members: Member[] = memberProfiles.map(({ id, images }) => ({ id, images, ...content.members.items[id] }));
  const services: ServiceData[] = serviceDefs.map(({ id, icon }) => ({ id, icon, ...content.services.items[id] }));

  return {
    content,
    members,
    homeMembers: HOME_MEMBER_ORDER.map((id) => members.find((member) => member.id === id)).filter(
      (member): member is Member => Boolean(member),
    ),
    services,
    featuredServices: services.slice(0, FEATURED_SERVICE_COUNT),
    news: newsLinks.map(({ id, url }) => ({ id, url, ...content.news.items[id] })),
    strengths: strengthDefs.map(({ id, image }) => ({ id, image, ...content.home.strengths[id] })),
    knpItems: knpDefs.map(({ id, icon }) => ({ letter: id, icon, ...content.about.knp[id] })),
  };
}

export const siteData: Record<Locale, SiteData> = {
  ko: buildSiteData(ko),
  ja: buildSiteData(ja),
};
