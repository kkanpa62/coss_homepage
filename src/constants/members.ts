/**
 * @file members.ts
 * @description COSS KNP GROUP의 구성원 데이터를 정의합니다.
 *              홈페이지, 구성원 목록 페이지, 구성원 상세 페이지 등에서 사용됩니다.
 * @exports members - Member 타입의 배열로 구성된 전체 구성원 데이터
 */

import { Member } from '../types';

/**
 * @constant members
 * @type {Member[]}
 * @description 모든 구성원의 상세 정보를 담고 있는 배열입니다.
 *              데이터를 한 곳에서 관리하여 유지보수성을 높입니다.
 *              이미지 경로는 public 디렉토리를 기준으로 합니다.
 */
export const members: Member[] = [
  {
    id: 1,
    name: '김성호',
    position: 'Kim, Sung ho. Patent Attorney.',
    department: '대표 변리사',
    images: {
      preview: '/images/members/kimsungho_box-768x768.jpg',
      list: '/images/members/kimsungho_box-300x300.jpg',
      detail: '/images/members/kimsungho.jpg',
    },
    bio: 'KAIST 전기전자공학 전공 출신으로 국내외 특허 실무 경험이 풍부한 변리사입니다. 한국어, 영어, 일본어 3개 국어를 활용하여 국제 특허 업무를 수행하고 있습니다.',
    education: ['KAIST 전기전자공학 학사', 'KAIST 전기전자공학 석사'],
    experience: ['제33회 변리사 시험 합격', '김&장 법률사무소', '일본 Shinjyu Global IP', '벤처법률지원센터', 'Anderson Mori & Tomotsune'],
    expertise: ['대기업·중견기업 특허출원·심판·소송', '특허컨설팅', '일본기업 특허컨설팅', '국내외 특허출원', '3개 국어 활용 업무'],
  },
  {
    id: 2,
    name: '손재용',
    position: 'Son, Jae Yong. Patent Attorney.',
    department: '대표 변리사',
    images: {
      preview: '/images/members/sonjaeyong_box-768x768.jpg',
      list: '/images/members/sonjaeyong_box-300x300.jpg',
      detail: '/images/members/sonjaeyong.jpg',
    },
    bio: 'KAIST 기계공학 전공 출신으로 표준특허 발굴 및 대학연구소 특허 업무에 전문성을 갖춘 변리사입니다. 한국어, 영어, 일본어 3개 국어를 활용하여 국제 특허 업무를 수행하고 있습니다.',
    education: ['KAIST 기계공학 학사', 'KAIST 자동화 및 설계공학 석사'],
    experience: ['제40회 변리사 시험 합격', '대우중공업 철도차량연구소', '프랑스 ALSTOM사 기술연수', '前) 일본 Shinjyu Global IP'],
    expertise: ['표준특허 발굴·등록', '대학연구소 특허출원·심판·소송', '특허컨설팅', '일본기업 특허컨설팅', '국내외 특허출원', '3개 국어 활용 업무'],
  },
  {
    id: 3,
    name: '박양호',
    position: 'Park, Yang ho. Patent Attorney.',
    department: '파트너 변리사',
    images: {
      preview: '/images/members/parkyangho_box-768x768.jpg',
      list: '/images/members/parkyangho_box-300x300.jpg',
      detail: '/images/members/parkyangho.jpg',
    },
    bio: '광운대 전기공학, 고려대 전자컴퓨터공학 전공 출신으로 스타트업 및 중소/중견기업의 특허 업무에 전문성을 갖춘 변리사입니다. 상표 및 디자인 컨설팅 분야에서도 풍부한 경험을 보유하고 있습니다.',
    education: ['광운대 전기공학 학사', '고려대 전자컴퓨터공학 석사'],
    experience: ['대한전선㈜ 전력기기기술개발팀', '제39회 변리사 시험 합격', '로얄특허법인', '위드특허법률사무소 대표', '경기지역 창업보육센타 특허컨설팅 자문역'],
    expertise: ['스타트업·중소/중견기업 특허컨설팅', '특허심판·특허소송', '상표/디자인 컨설팅'],
  },
  {
    id: 4,
    name: '오용택',
    position: 'Oh, Yong Taek. Senior Expert.',
    department: '수석',
    images: {
      preview: '/images/members/ohyongtaek_box-768x768.jpg',
      list: '/images/members/ohyongtaek_box-300x300.jpg',
      detail: '/images/members/ohyongtaek.jpg',
    },
    bio: '서울과학기술대학교 전자정보공학 전공 출신으로 전기, 전자, 통신, 반도체 분야의 표준특허 발굴 및 등록에 전문성을 갖춘 수석입니다.',
    education: ['서울과학기술대학교 전자정보공학 학사'],
    experience: ['COSS-KNP'],
    expertise: ['표준특허 발굴·등록', '전기·전자·통신·반도체', '디스플레이·LED 패키지·조명', '터치센서·압력센서·머신러닝', '기계·기구 특허 컨설팅', '특허 출원', '국제특허 출원'],
  },
  {
    id: 5,
    name: '문현돈',
    position: 'Moon, Hyun Don. Patent Attorney.',
    department: '변리사',
    images: {
      preview: '/images/members/moonhyundon_box-768x768.jpg',
      list: '/images/members/moonhyundon_box-300x300.jpg',
      detail: '/images/members/moonhyundon.jpg',
    },
    bio: '고려대학교 화공생명공학 전공 출신으로 바이오테크 및 인공지능 기술 분야의 특허 업무에 전문성을 갖춘 변리사입니다. 기술가치 평가 업무도 수행하고 있습니다.',
    education: ['고려대학교 화공생명공학과 학사'],
    experience: ['COSS-KNP 특허 변리사'],
    expertise: ['표준특허 발굴·등록', '응용생화학·고분자화학·나노화학공학', '반도체공학·생물공정공학·석유공업화학', '바이오테크 및 머신러닝/딥러닝모델', '인공지능 기술', '특허 컨설팅·특허 출원·기술가치 평가', '국제특허 출원'],
  },
  {
    id: 6,
    name: '성진솔',
    position: 'Sung, Jin Sol. Patent Attorney.',
    department: '변리사',
    images: {
      preview: '/images/members/sungjinsol_box-768x768.jpg',
      list: '/images/members/sungjinsol_box-300x300.jpg',
      detail: '/images/members/sungjinsol.jpg',
    },
    bio: '중앙대학교 화학신소재공학부 전공 출신으로 전자재료, 유기재료, 고분자재료 분야의 특허 업무에 전문성을 갖춘 변리사입니다. 상표 및 디자인 분야도 다루고 있습니다.',
    education: ['중앙대학교 화학신소재공학부 학사'],
    experience: ['COSS-KNP 특허 변리사'],
    expertise: ['표준특허 발굴·등록', '전자재료·유기재료·고분자재료·에너지소재', 'Chemical reaction engineering', '생체재료·공정시스템·나노재료', '특허컨설팅·특허 출원·특허 심판', '상표·디자인'],
  },
  {
    id: 7,
    name: '길진성',
    position: 'Gil, Jin Sung. Patent Attorney.',
    department: '변리사',
    images: {
      preview: '/images/members/giljinsung_box-768x768.jpg',
      list: '/images/members/giljinsung_box-300x300.jpg',
      detail: '/images/members/giljinsung.jpg',
    },
    bio: '서울대학교 화학부 전공 출신으로 생체공학, 의료장비 분야 및 인공지능 기술 분야의 특허 업무에 전문성을 갖춘 변리사입니다. 기술가치 평가 업무도 수행하고 있습니다.',
    education: ['서울대학교 화학부 학사'],
    experience: ['COSS-KNP 특허 변리사'],
    expertise: ['표준특허 발굴·등록', '생체공학·의료장비·광공학', '인공지능·머신러닝·딥러닝', '유/무기화학·분자생화학·고분자화학·나노소재화학', '특허 컨설팅·특허 출원·기술가치 평가', '국제특허 출원'],
  },
  {
    id: 8,
    name: '최충헌',
    position: 'Choi, Chung Hon. Patent Attorney.',
    department: '변리사',
    images: {
      preview: '/images/members/choi.png',
      list: '/images/members/choi.png',
      detail: '/images/members/choi.png',
    },
    bio: '숭실대학교 의생명시스템학부 및 정보통계보험수리학 학사 출신으로, 생명공학, 생명정보학, 머신러닝/딥러닝 기술 분야의 특허 업무에 전문성을 갖춘 변리사입니다. 특허 컨설팅 및 국내외 특허 출원은 물론, 기술가치 평가 업무도 수행하고 있습니다.',
    education: ['숭실대 의생명시스템학부 학사', '숭실대 정보통계보험수리학과 학사'],
    experience: ['COSS-KNP 특허 변리사'],
    expertise: ['생명공학(BT)', '생명정보학(BI)', '머신러닝/딥러닝', '특허 컨설팅', '특허 출원', '기술가치 평가', '국제특허 출원'],
  },
  {
    id: 9,
    name: '무라카미 코이치',
    position: 'Murakami, Koichi. KNP Advisor.',
    department: '차장',
    images: {
      preview: '/images/members/murakami.png',
      list: '/images/members/murakami.png',
      detail: '/images/members/murakami.png',
    },
    bio: '주로 일본에서의 한국 업무 관리, 클라이언트와의 연락, 특허 명세서 번역을 담당하고 있습니다.',
    experience: ['대일국제특허법률사무소(2002~2003)', '최김특허사무소(2003~2012)', '현) COSS-KNP특허법률사무소(2012~현재)'],
  },
];
