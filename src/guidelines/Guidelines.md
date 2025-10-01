# COSS KNP GROUP 웹사이트 가이드라인

## 프로젝트 개요

COSS KNP GROUP의 공식 홈페이지로, 지식재산권 전문 서비스를 제공하는 회사의 정보를 소개합니다.

**최종 업데이트**: 2025년 10월 1일  
**버전**: 1.0

---

## 페이지 구성

### 1. 홈 (home)
- Hero 섹션: 메인 비주얼 및 회사 소개
- 구성원 섹션: 주요 구성원 5명 가로 스크롤 (김성호, 성진솔, 길진성, 손재용, 문현돈)
- 업무분야 섹션: 주요 업무분야 4개 미리보기 (카드 클릭 시 업무분야 페이지로 이동)
- 차별화된 강점 섹션: 혁신적 기술 전문성, 전문 변리사팀, 글로벌 네트워크

### 2. 회사소개 (about)
- COSS KNP 비전 및 미션
- COSS 약자 의미 설명
- K, N, P 각각의 의미와 전문성 강조

### 3. 업무분야 (services)
- 제공하는 서비스 상세 설명

### 4. 구성원 (members)
- 전체 구성원 8명을 4열 그리드로 표시
- 클릭 시 구성원 상세 페이지로 이동

### 5. 뉴스/소식 (news)
- 회사 관련 뉴스 및 공지사항

### 6. 오시는길 (location)
- 회사 위치 지도 및 주소 안내

---

## 디자인 시스템

### 색상 팔레트
- **Primary**: 주황색 계열 그라데이션 유지
- **Chart Colors**: 다양한 섹션에 다른 색감의 그라데이션 적용
  - chart-1: 주황색 (oklch(0.646 0.222 41.116))
  - chart-2: 청록색 (oklch(0.6 0.118 184.704))
  - chart-3: 파란색 (oklch(0.398 0.07 227.392))
  - chart-4: 노란색 (oklch(0.828 0.189 84.429))
  - chart-5: 주황색 (oklch(0.769 0.188 70.08))

### 타이포그래피
- **기본 폰트 크기**: 16px
- **글꼴 굵기**: 
  - 일반 텍스트: 400 (font-weight-normal)
  - 제목 및 강조: 500 (font-weight-medium)
- **중요**: Tailwind 폰트 크기 클래스(text-2xl, text-lg 등)는 사용자가 명시적으로 요청하지 않는 한 사용하지 않음

### 그라데이션 사용
- 각 섹션마다 다른 그라데이션 적용으로 시각적 다양성 확보
- `bg-gradient-to-br`, `bg-gradient-to-r` 등 활용
- 투명도 조절로 부드러운 효과 구현

### 간격 및 레이아웃
- **섹션 간격**: py-20 (기본)
- **컨테이너**: max-w-4xl ~ max-w-7xl (섹션 특성에 따라)
- **카드 간격**: gap-6 ~ gap-8

---

## 컴포넌트 구조

### 재사용 가능한 공통 컴포넌트
- **SectionHeader**: 섹션 제목 및 설명을 표시하는 재사용 컴포넌트
- **PageLayout**: 페이지 래퍼, 일관된 여백 및 스타일 제공
- **ImageWithFallback**: 이미지 로딩 실패 시 폴백 처리

### 데이터 관리
- **/constants/members.ts**: 구성원 정보 중앙 관리
- **/constants/navigation.ts**: 네비게이션 메뉴 항목
- **/types/index.ts**: TypeScript 타입 정의

---

## 개발 가이드라인

### 코드 작성 원칙
1. **모듈화**: 각 페이지와 기능을 독립적인 컴포넌트로 분리
2. **재사용성**: 공통 컴포넌트(SectionHeader, PageLayout 등)를 적극 활용하여 코드 중복 제거
3. **타입 안정성**: TypeScript로 모든 데이터 구조 정의
4. **주석 작성**: 모든 컴포넌트와 함수에 JSDoc 스타일의 한글 주석 추가
5. **데이터 중앙화**: constants 폴더에서 모든 데이터 관리
6. **일관성 유지**: 동일한 패턴과 스타일 가이드 준수

### 애니메이션
- Motion (Framer Motion)을 사용하여 부드러운 페이지 전환 및 요소 애니메이션 구현
- `initial`, `animate`, `whileInView` 속성 활용
- `viewport={{ once: true }}`로 한 번만 애니메이션 실행
- 순차적 애니메이션은 `delay` 속성 활용

### 반응형 디자인
- 모바일 우선 설계
- Tailwind 반응형 클래스 활용 (sm:, md:, lg:)
- 그리드 레이아웃: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## 이미지 관리

### 구성원 사진
- 실제 프로필 사진 URL로 교체 예정
- 현재는 Unsplash 임시 이미지 사용
- ImageWithFallback 컴포넌트로 오류 처리

### 최적화
- aspect-ratio 클래스로 비율 유지
- object-cover / object-contain으로 적절한 크기 조정
- 호버 시 scale 효과로 인터랙티브 요소 추가

---

## 향후 개선 사항

### 기능 추가 가능성
1. Contact 섹션을 Location 페이지에 통합
2. TechStack 섹션을 Services 또는 About 페이지에 추가
3. Footer 컴포넌트 전역 적용
4. 다크 모드 토글 기능
5. 다국어 지원 (한/영)

### 배포 준비
1. Next.js 또는 Vite로 마이그레이션
2. React Router 기반 URL 라우팅 구현
3. 실제 이미지 호스팅
4. SEO 최적화 (메타 태그, sitemap)
5. 성능 최적화 (코드 스플리팅, lazy loading)

---

## 코드 품질 및 최적화

### 리팩토링 완료 사항
- ✅ 모든 컴포넌트에 한글 주석 추가 완료
- ✅ Projects 컴포넌트를 SectionHeader 사용하도록 리팩토링
- ✅ 데이터 구조 최적화 및 중복 제거
- ✅ 일관된 애니메이션 패턴 적용
- ✅ 타입 안정성 강화

### 성능 최적화
- Motion 애니메이션에 `viewport={{ once: true }}` 사용으로 재렌더링 최소화
- 이미지 로딩 실패 대비 ImageWithFallback 컴포넌트 활용
- 구성원 데이터를 filter로 필터링하여 불필요한 렌더링 방지

## 주의사항

### 금지 사항
- globals.css의 CSS 변수를 임의로 수정하지 말 것
- ShadCN UI 컴포넌트를 직접 수정하지 말 것 (wrapper 생성하여 사용)
- ImageWithFallback.tsx는 시스템 보호 파일로 수정 불가
- Tailwind 폰트 크기/굵기 클래스 사용 금지 (globals.css 기본값 사용)

### 권장 사항
- 새로운 기능 추가 시 기존 컴포넌트 재사용 가능 여부를 먼저 확인
- 공통 로직은 컴포넌트 또는 유틸리티 함수로 분리
- 데이터가 변경될 가능성이 있으면 constants 폴더에서 관리
- 복잡한 타입은 types/index.ts에 정의하여 재사용
- 모든 배열 렌더링 시 고유한 key 속성 사용

---

## 참고 링크

- **Tailwind CSS**: https://tailwindcss.com/
- **ShadCN UI**: https://ui.shadcn.com/
- **Motion (Framer Motion)**: https://motion.dev/
- **Lucide Icons**: https://lucide.dev/
