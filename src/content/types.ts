/**
 * @file types.ts
 * @description 언어별 문구 파일(ko.ts, ja.ts)이 따라야 하는 구조입니다.
 *              구성원·업무분야·뉴스 등은 constants의 ID를 키로 쓰므로, 한 언어에 항목이 빠지면 타입 검사(빌드)가 실패합니다.
 */

import { KnpId } from '../constants/about';
import { StrengthId } from '../constants/home';
import { MemberId } from '../constants/members';
import { NewsId } from '../constants/news';
import { ServiceId } from '../constants/services';
import { ReportSectionId } from './reports/types';
import { PageIntro, PageType, SectionIntro, ServiceHighlight } from '../types';

export interface MemberText {
  name: string;
  /** 이름 읽는 법 — 일본어 페이지에서 한자 이름일 때 가타카나로 적습니다. */
  reading?: string;
  /** 영문 이름과 직함 */
  position: string;
  /** 직급 */
  department: string;
  bio?: string;
  education?: string[];
  experience?: string[];
  expertise?: string[];
}

export interface ServiceText {
  title: string;
  description: string;
  highlights: ServiceHighlight[];
  services: string[];
}

export interface NewsText {
  title: string;
  date: string;
  description: string;
  source: string;
}

export interface SiteContent {
  /** 탭 제목·검색엔진 설명 */
  meta: {
    title: string;
    description: string;
  };

  /** 여러 화면에서 함께 쓰는 짧은 문구(링크·버튼·스크린 리더용 이름) */
  labels: {
    more: string;
    allMembers: string;
    home: string;
    openMenu: string;
    closeMenu: string;
    mainMenu: string;
    scrollDown: string;
    serviceIndex: string;
    railPrev: string;
    railNext: string;
    themeToLight: string;
    themeToDark: string;
    language: string;
  };

  navigation: Record<PageType, string>;

  home: {
    hero: {
      eyebrow: string;
      title: string[];
      description: string;
    };
    sections: Record<'members' | 'expertise' | 'strengths', SectionIntro>;
    strengths: Record<StrengthId, { title: string; description: string }>;
  };

  about: {
    intro: PageIntro;
    paragraphs: string[];
    /** COSS 설명 문장 — before와 after 사이에 영문 표제(Creation of Original …)가 들어갑니다. */
    coss: { lead: string; before: string; after: string };
    knpIntro: { title: string; subtitle: string };
    knp: Record<KnpId, { title: string; subtitle: string; description: string }>;
  };

  services: {
    intro: PageIntro;
    scopeLabel: string;
    items: Record<ServiceId, ServiceText>;
  };

  members: {
    intro: PageIntro;
    detailLabels: { back: string; bio: string; education: string; experience: string; expertise: string };
    items: Record<MemberId, MemberText>;
  };

  news: {
    intro: PageIntro;
    /** 원문 기사 링크 이름(일본어는 원문이 한국어라는 안내 포함) */
    linkLabel: string;
    items: Record<NewsId, NewsText>;
  };

  /** 월간 지식재산 뉴스 리포트(목록·상세) 화면 문구 — 리포트 내용은 content/reports/YYYY-MM.json */
  reports: {
    /** 뉴스 페이지의 리포트 목록 머리 */
    listIntro: SectionIntro;
    /** 뉴스 페이지의 기존 소식 목록 머리 */
    newsListIntro: SectionIntro;
    /** 리포트 상세 페이지 머리 위 라벨 */
    eyebrow: string;
    sections: Record<ReportSectionId, string>;
    /** 목록 카드의 "기사 {count}건" — {count} 자리에 숫자 */
    articleCount: string;
    /** 분류 머리의 "{count}건" */
    sectionCount: string;
    open: string;
    /** 짧은 버전 아래 긴 버전 펼치기 / 접기 */
    readFull: string;
    collapse: string;
    back: string;
    sectionIndex: string;
    newer: string;
    older: string;
    /** 기사 본문을 받는 동안 / 받지 못했을 때 */
    loading: string;
    loadFailed: string;
    reload: string;
    /** 원문 링크 이름 */
    link: { original: string; related: string };
    /** 링크 대상이 한국어 기사라는 안내(한국어 페이지는 빈 문자열) */
    sourceLanguageNote: string;
  };

  location: {
    intro: PageIntro;
    contactLabels: { address: string; phone: string; email: string; postalCode: string };
    address: { street: string; building: string };
    /** 화면에 보이는 전화번호(한국어는 국내 표기, 일본어는 국제 표기) */
    phoneDisplay: string;
    businessHours: { weekday: string; lunch: string };
    emailInfo: { availability: string; responseTime: string };
    map: {
      iframeTitle: string;
      loading: string;
      missingKeyTitle: string;
      missingKeyMessage: string;
      errorTitle: string;
      errorMessage: string;
      retry: string;
      openInMaps: string;
      openLarge: string;
    };
  };

  footer: {
    addressTitle: string;
    contactTitle: string;
  };
}
