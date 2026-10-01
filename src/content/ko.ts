/**
 * @file ko.ts
 * @description 한국어 화면 문구 전체. 구조는 types.ts의 SiteContent를 따릅니다.
 */

import { SiteContent } from './types';

export const ko: SiteContent = {
  meta: {
    title: 'COSS KNP GROUP',
    description: '고도화된 AI 기술력과 풍부한 실무 경험으로 고객의 성장 동력을 확보하고 차별화된 지식재산 솔루션을 선사합니다.',
  },

  labels: {
    more: '자세히 보기',
    allMembers: '구성원 전체 보기',
    home: '홈으로 이동',
    openMenu: '메뉴 열기',
    closeMenu: '메뉴 닫기',
    mainMenu: '주 메뉴',
    scrollDown: '아래로 스크롤',
    serviceIndex: '업무분야 바로가기',
    railPrev: '이전 항목 보기',
    railNext: '다음 항목 보기',
    themeToLight: '밝은 테마로 전환',
    themeToDark: '어두운 테마로 전환',
    language: '언어 선택',
  },

  navigation: {
    home: '홈',
    about: '회사소개',
    services: '업무분야',
    members: '구성원',
    news: '뉴스/소식',
    location: '오시는길',
  },

  home: {
    hero: {
      eyebrow: 'COSS KNP GROUP',
      title: ['인공지능으로', '미래를 설계합니다'],
      description:
        '고도화된 AI 기술력과 풍부한 실무 경험으로 고객의 성장 동력을 확보하고 차별화된 지식재산 솔루션을 선사합니다.',
    },
    sections: {
      members: { title: '구성원', description: '각 분야 최고의 전문가들이 함께합니다.' },
      expertise: { title: '업무분야', description: '지식재산권 전 분야에 걸친 차별화된 전문 서비스를 제공합니다' },
      strengths: { title: '차별화된 강점', description: '전문성과 글로벌 네트워크를 바탕으로 고객의 지식재산권을 보호합니다' },
    },
    strengths: {
      technology: {
        title: '혁신적 기술 전문성',
        description: '메타버스, AI, 로봇, 바이오텍, 화학 등 첨단 기술 분야에서 축적된 전문 지식과 경험을 바탕으로 고객의 혁신적인 아이디어를 효과적으로 보호합니다.',
      },
      team: {
        title: '전문 변리사팀',
        description: '각 분야 전문가들이 고객 맞춤형 솔루션을 제공하며, 지속적인 연구와 학습을 통해 최신 법률 동향에 발빠르게 대응합니다.',
      },
      network: {
        title: '글로벌 네트워크',
        description: 'PCT, 마드리드 의정서 등 국제 출원 시스템과 전 세계 현지 대리인 네트워크를 활용하여 글로벌 시장에서의 지식재산권 보호를 지원합니다.',
      },
    },
  },

  about: {
    intro: {
      eyebrow: 'About COSS KNP GROUP',
      title: ['COSS KNP와 함께하는', '지식재산권의 미래'],
    },
    paragraphs: [
      'COSS KNP Group은 급변하는 기술 환경에서 고객의 혁신적인 아이디어와 창작물을 법적으로 보호하고, 그 가치를 극대화하는 것을 목표로 설립되었습니다.',
      '우리는 단순한 법률 서비스를 넘어서, 고객의 사업 전략과 연계된 종합적인 지식재산권 솔루션을 제공하여 고객의 경쟁력 강화에 기여하고 있습니다.',
    ],
    coss: {
      lead: 'COSS',
      before: ' KNP Group은 창조적이고 독창적인 전략과 표준 (',
      after: ')을 만들어가며, 고객의 혁신적인 아이디어를 보호하고 발전시키는 것을 목표로 합니다.',
    },
    knpIntro: {
      title: 'KNP',
      subtitle: 'Key Strategy · New Technology · Partner',
    },
    knp: {
      K: {
        title: 'Key Strategy',
        subtitle: '핵심 전략 수립의 전문가',
        description: 'COSS KNP Group은 고객을 위한 핵심전략 수립의 전문가입니다. 고객의 IP와 컨설팅을 통해 고객의 지식재산 가치를 극대화하고, 새로운 시장을 고객과 함께 열어나갑니다.',
      },
      N: {
        title: 'New Technology',
        subtitle: 'Navigation of your high technology',
        description: 'COSS KNP Group은 메타버스, 로봇, AI, 터치센서, 바이오텍, 화학 분야 등 첨단기술의 전문가입니다. 고객의 첨단 기술 항로를 개척하고 특허를 발굴합니다.',
      },
      P: {
        title: 'Partner',
        subtitle: '고객의 든든한 파트너',
        description: 'COSS KNP Group은 고객을 만족시킬 수 있는 최고의 지식재산 서비스와 최선의 솔루션을 제공합니다. 언제나 신뢰받을 수 있는 고객의 든든한 파트너가 되겠습니다.',
      },
    },
  },

  services: {
    intro: {
      eyebrow: 'Services',
      title: ['업무분야'],
      description: '지식재산권 전 분야에 걸친 차별화된 전문 서비스를 제공합니다',
    },
    scopeLabel: '서비스 범위',
    items: {
      1: {
        title: '특허',
        description: '혁신적인 발명과 기술을 법적으로 보호하고, 경쟁 우위를 확보할 수 있도록 특허 출원부터 등록, 활용까지 전 과정을 지원합니다. AI 기술 특허를 포함한 첨단 기술 분야의 전문적인 특허 전략을 제공합니다.',
        highlights: [
          { title: '특허 출원', description: '국내외 특허 출원 대행 및 AI 기술 특허 전략' },
          { title: '특허 분석', description: '선행기술 조사 및 특허맵 작성' },
        ],
        services: [
          '특허 출원 및 중간처리',
          '실용신안 출원 및 등록',
          '선행기술 조사 및 특허성 판단',
          '특허 포트폴리오 구축 및 관리',
          '무효심판 및 정정심판',
          '특허 라이센싱 및 기술이전',
        ],
      },
      2: {
        title: '표준 특허',
        description: '국제 표준 및 산업 표준에 필수적인 기술에 대한 특허로, 표준화 과정에서의 특허 전략 수립과 FRAND 라이센싱을 지원합니다.',
        highlights: [
          { title: '표준화 전략', description: '표준 특허 포트폴리오 구축' },
          { title: 'FRAND 라이센싱', description: '공정하고 합리적인 라이센싱' },
        ],
        services: [
          '표준 필수 특허(SEP) 분석',
          '표준화 기구 대응 전략',
          'FRAND 선언 및 관리',
          '표준 특허 풀 참여 지원',
          '표준 특허 가치 평가',
          '표준 특허 분쟁 대응',
        ],
      },
      3: {
        title: '상표',
        description: '브랜드 가치를 보호하고 시장에서의 경쟁력을 강화할 수 있도록 상표 출원부터 권리 보호까지 종합적인 서비스를 제공합니다.',
        highlights: [
          { title: '브랜드 보호', description: '상표권 확보 및 관리' },
          { title: '국제 상표', description: '마드리드 의정서 활용' },
        ],
        services: [
          '상표 출원 및 등록',
          '상표 검색 및 등록가능성 조사',
          '서비스표 출원 및 등록',
          '상표 갱신 및 관리',
          '상표 이의신청 및 취소심판',
          '상표권 침해 대응 및 소송',
        ],
      },
      4: {
        title: 'IP 컨설팅',
        description: '기업의 지식재산권 전략 수립부터 포트폴리오 관리까지 체계적이고 전문적인 컨설팅 서비스를 제공합니다.',
        highlights: [
          { title: '전략 수립', description: 'IP 포트폴리오 기획' },
          { title: '기술 분석', description: '특허맵 및 FTO 분석' },
        ],
        services: [
          'IP 포트폴리오 전략 수립',
          '특허맵 작성 및 기술동향 분석',
          '자유실시 분석(FTO Analysis)',
          'IP 실사(Due Diligence)',
          '기술이전 및 라이센싱 전략',
          'IP 교육 및 임직원 연수',
        ],
      },
      5: {
        title: '디자인',
        description: '제품의 독창적인 외관 디자인을 보호하여 시장에서의 차별화와 경쟁 우위를 확보할 수 있도록 지원합니다.',
        highlights: [
          { title: '의장 등록', description: '제품 외관 디자인 보호' },
          { title: '해외 디자인', description: '국제 디자인 보호 전략' },
        ],
        services: [
          '디자인 출원 및 등록',
          '디자인 검색 및 등록가능성 조사',
          '복수디자인 출원 전략 수립',
          '디자인권 침해 분석 및 대응',
          '무효심판 및 권리범위확인심판',
          '헤이그 협정을 통한 해외 출원',
        ],
      },
      6: {
        title: '소송 및 분쟁',
        description: '지식재산권 침해 및 분쟁 상황에서 효과적인 법적 대응을 통해 고객의 권익을 보호하고 최적의 해결 방안을 제시합니다.',
        highlights: [
          { title: '침해 대응', description: '신속한 권리 구제' },
          { title: '분쟁 해결', description: '전략적 소송 수행' },
        ],
        services: [
          '특허 침해 소송 및 방어',
          '상표권 분쟁 해결',
          '무효심판 및 취소심판',
          '권리범위확인심판',
          '손해배상 청구 소송',
          '대안적 분쟁 해결(ADR)',
        ],
      },
    },
  },

  members: {
    intro: {
      eyebrow: 'Members',
      title: ['구성원'],
      description: 'COSS KNP GROUP의 전문가들을 소개합니다',
    },
    detailLabels: {
      back: '구성원 목록으로',
      bio: '소개',
      education: '학력',
      experience: '경력',
      expertise: '전문 분야',
    },
    items: {
      1: {
        name: '김성호',
        position: 'Kim, Sung ho. Patent Attorney.',
        department: '대표 변리사',
        bio: 'KAIST 전기전자공학 전공 출신으로 국내외 특허 실무 경험이 풍부한 변리사입니다. 한국어, 영어, 일본어 3개 국어를 활용하여 국제 특허 업무를 수행하고 있습니다.',
        education: ['KAIST 전기전자공학 학사', 'KAIST 전기전자공학 석사'],
        experience: ['제33회 변리사 시험 합격', '김&장 법률사무소', '일본 Shinjyu Global IP', '벤처법률지원센터', 'Anderson Mori & Tomotsune'],
        expertise: ['대기업·중견기업 특허출원·심판·소송', '특허컨설팅', '일본기업 특허컨설팅', '국내외 특허출원', '3개 국어 활용 업무'],
      },
      2: {
        name: '손재용',
        position: 'Son, Jae Yong. Patent Attorney.',
        department: '대표 변리사',
        bio: 'KAIST 기계공학 전공 출신으로 표준특허 발굴 및 대학연구소 특허 업무에 전문성을 갖춘 변리사입니다. 한국어, 영어, 일본어 3개 국어를 활용하여 국제 특허 업무를 수행하고 있습니다.',
        education: ['KAIST 기계공학 학사', 'KAIST 자동화 및 설계공학 석사'],
        experience: ['제40회 변리사 시험 합격', '대우중공업 철도차량연구소', '프랑스 ALSTOM사 기술연수', '前) 일본 Shinjyu Global IP'],
        expertise: ['표준특허 발굴·등록', '대학연구소 특허출원·심판·소송', '특허컨설팅', '일본기업 특허컨설팅', '국내외 특허출원', '3개 국어 활용 업무'],
      },
      3: {
        name: '박양호',
        position: 'Park, Yang ho. Patent Attorney.',
        department: '파트너 변리사',
        bio: '광운대 전기공학, 고려대 전자컴퓨터공학 전공 출신으로 스타트업 및 중소/중견기업의 특허 업무에 전문성을 갖춘 변리사입니다. 상표 및 디자인 컨설팅 분야에서도 풍부한 경험을 보유하고 있습니다.',
        education: ['광운대 전기공학 학사', '고려대 전자컴퓨터공학 석사'],
        experience: ['대한전선㈜ 전력기기기술개발팀', '제39회 변리사 시험 합격', '로얄특허법인', '위드특허법률사무소 대표', '경기지역 창업보육센타 특허컨설팅 자문역'],
        expertise: ['스타트업·중소/중견기업 특허컨설팅', '특허심판·특허소송', '상표/디자인 컨설팅'],
      },
      4: {
        name: '오용택',
        position: 'Oh, Yong Taek. Senior Expert.',
        department: '수석',
        bio: '서울과학기술대학교 전자정보공학 전공 출신으로 전기, 전자, 통신, 반도체 분야의 표준특허 발굴 및 등록에 전문성을 갖춘 수석입니다.',
        education: ['서울과학기술대학교 전자정보공학 학사'],
        experience: ['COSS-KNP'],
        expertise: ['표준특허 발굴·등록', '전기·전자·통신·반도체', '디스플레이·LED 패키지·조명', '터치센서·압력센서·머신러닝', '기계·기구 특허 컨설팅', '특허 출원', '국제특허 출원'],
      },
      5: {
        name: '문현돈',
        position: 'Moon, Hyun Don. Patent Attorney.',
        department: '변리사',
        bio: '고려대학교 화공생명공학 전공 출신으로 바이오테크 및 인공지능 기술 분야의 특허 업무에 전문성을 갖춘 변리사입니다. 기술가치 평가 업무도 수행하고 있습니다.',
        education: ['고려대학교 화공생명공학과 학사'],
        experience: ['COSS-KNP 특허 변리사'],
        expertise: ['표준특허 발굴·등록', '응용생화학·고분자화학·나노화학공학', '반도체공학·생물공정공학·석유공업화학', '바이오테크 및 머신러닝/딥러닝모델', '인공지능 기술', '특허 컨설팅·특허 출원·기술가치 평가', '국제특허 출원'],
      },
      6: {
        name: '성진솔',
        position: 'Sung, Jin Sol. Patent Attorney.',
        department: '변리사',
        bio: '중앙대학교 화학신소재공학부 전공 출신으로 전자재료, 유기재료, 고분자재료 분야의 특허 업무에 전문성을 갖춘 변리사입니다. 상표 및 디자인 분야도 다루고 있습니다.',
        education: ['중앙대학교 화학신소재공학부 학사'],
        experience: ['COSS-KNP 특허 변리사'],
        expertise: ['표준특허 발굴·등록', '전자재료·유기재료·고분자재료·에너지소재', 'Chemical reaction engineering', '생체재료·공정시스템·나노재료', '특허컨설팅·특허 출원·특허 심판', '상표·디자인'],
      },
      7: {
        name: '길진성',
        position: 'Gil, Jin Sung. Patent Attorney.',
        department: '변리사',
        bio: '서울대학교 화학부 전공 출신으로 생체공학, 의료장비 분야 및 인공지능 기술 분야의 특허 업무에 전문성을 갖춘 변리사입니다. 기술가치 평가 업무도 수행하고 있습니다.',
        education: ['서울대학교 화학부 학사'],
        experience: ['COSS-KNP 특허 변리사'],
        expertise: ['표준특허 발굴·등록', '생체공학·의료장비·광공학', '인공지능·머신러닝·딥러닝', '유/무기화학·분자생화학·고분자화학·나노소재화학', '특허 컨설팅·특허 출원·기술가치 평가', '국제특허 출원'],
      },
      8: {
        name: '최충헌',
        position: 'Choi, Chung Hon. Patent Attorney.',
        department: '변리사',
        bio: '숭실대학교 의생명시스템학부 및 정보통계보험수리학 학사 출신으로, 생명공학, 생명정보학, 머신러닝/딥러닝 기술 분야의 특허 업무에 전문성을 갖춘 변리사입니다. 특허 컨설팅 및 국내외 특허 출원은 물론, 기술가치 평가 업무도 수행하고 있습니다.',
        education: ['숭실대 의생명시스템학부 학사', '숭실대 정보통계보험수리학과 학사'],
        experience: ['COSS-KNP 특허 변리사'],
        expertise: ['생명공학(BT)', '생명정보학(BI)', '머신러닝/딥러닝', '특허 컨설팅', '특허 출원', '기술가치 평가', '국제특허 출원'],
      },
      9: {
        name: '무라카미 코이치',
        position: 'Murakami, Koichi. KNP Advisor.',
        department: '차장',
        bio: '주로 일본에서의 한국 업무 관리, 클라이언트와의 연락, 특허 명세서 번역을 담당하고 있습니다.',
        experience: ['대일국제특허법률사무소(2002~2003)', '최김특허사무소(2003~2012)', '현) COSS-KNP특허법률사무소(2012~현재)'],
      },
    },
  },

  news: {
    intro: {
      eyebrow: 'News',
      title: ['뉴스 / 소식'],
      description: 'COSS KNP GROUP의 최신 소식과 지식재산권 업계 동향을 확인하세요',
    },
    linkLabel: '자세히 보기',
    items: {
      1: {
        title: '\'밀어서 잠금해제\' 특허소송, 애플 승소 확정',
        date: '2025년 9월 5일',
        description: '미국 연방대법원이 애플의 \'밀어서 잠금해제(slide to unlock)\' 특허 관련 소송에서 최종 승소 판결을 내렸습니다. 이는 스마트폰 UI 특허의 중요성을 재확인하는 판례로 평가되고 있습니다.',
        source: '더구루',
      },
      2: {
        title: '특허청, \'지식재산처\'로 격상 추진 본격화',
        date: '2025년 8월 19일',
        description: '정부가 특허청을 \'지식재산처\'로 격상시키는 방안을 본격 추진한다고 발표했습니다. 지식재산권의 중요성이 커지면서 정부 차원의 정책 추진력을 강화하고, 국가 지식재산 전략의 컨트롤타워 역할을 확대할 예정입니다.',
        source: '한국일보',
      },
    },
  },

  reports: {
    listIntro: { title: '월간 지식재산 뉴스', description: '한국의 지식재산 관련 주요 기사를 매달 정리해 소개합니다' },
    newsListIntro: { title: '소식' },
    eyebrow: 'Monthly IP News',
    sections: {
      litigation: '분쟁',
      administration: '정책·행정',
      other: '기술·산업',
      features: '주요 기사',
    },
    articleCount: '기사 {count}건',
    sectionCount: '{count}건',
    open: '리포트 보기',
    back: '뉴스 목록으로',
    sectionIndex: '리포트 분류 바로가기',
    newer: '다음 달',
    older: '이전 달',
    link: { original: '원문 기사', related: '관련 기사' },
    sourceLanguageNote: '',
  },

  location: {
    intro: {
      eyebrow: 'Location',
      title: ['오시는길'],
    },
    contactLabels: {
      address: '주소',
      phone: '전화번호',
      email: '이메일',
      postalCode: '우편번호',
    },
    address: {
      street: '서울특별시 강남구 도곡로 111',
      building: '미진빌딩 5층',
    },
    phoneDisplay: '02-552-8381',
    businessHours: {
      weekday: '평일 09:00 - 18:00',
      lunch: '점심시간 12:00 - 13:00',
    },
    emailInfo: {
      availability: '24시간 접수 가능',
      responseTime: '영업일 기준 24시간 이내 답변',
    },
    map: {
      iframeTitle: 'COSS KNP GROUP 위치',
      loading: '지도를 불러오는 중...',
      missingKeyTitle: '지도 로딩 실패',
      missingKeyMessage: 'Google Maps API 키가 설정되지 않았습니다.',
      errorTitle: '지도 로딩 중 오류',
      errorMessage: 'Google Maps를 표시할 수 없습니다. 인터넷 연결이나 API 키 설정을 확인해주세요.',
      retry: '다시 시도',
      openInMaps: '구글맵에서 보기',
      openLarge: '구글맵에서 크게 보기',
    },
  },

  footer: {
    addressTitle: 'ADDRESS',
    contactTitle: 'CONTACT',
  },
};
