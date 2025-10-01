# COSS KNP GROUP 웹사이트

## 프로젝트 소개

COSS KNP GROUP의 공식 홈페이지입니다. React, TypeScript, Tailwind CSS를 기반으로 구축된 현대적인 웹 애플리케이션으로, 지식재산권 전문 서비스를 제공하는 회사의 정보를 소개합니다.

## 주요 기능

### 📄 페이지 구성
- **홈**: 메인 비주얼, 구성원 미리보기 (5명), 업무분야 (4개), 차별화된 강점 (3개)
- **회사소개**: COSS KNP의 비전과 K·N·P의 의미
- **업무분야**: 특허, 표준특허, 상표, IP 컨설팅, 디자인, 소송 및 분쟁 (6개 영역)
- **구성원**: 9명의 전문가 소개 (4열 그리드) + 상세 페이지
- **뉴스/소식**: 최신 업계 동향
- **오시는길**: 위치 정보, 연락처, Google Maps

### ✨ 주요 특징
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **부드러운 애니메이션**: Motion (Framer Motion) 활용
- **타입 안정성**: TypeScript로 전체 코드 작성
- **디자인 시스템**: 일관된 색상 팔레트 및 컴포넌트 재사용
- **페이지 라우팅**: 클라이언트 사이드 라우팅으로 빠른 페이지 전환

## 기술 스택

- **Frontend Framework**: React
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4.0
- **애니메이션**: Motion (Framer Motion)
- **UI 컴포넌트**: ShadCN UI
- **아이콘**: Lucide React

## 프로젝트 구조

```
├── App.tsx                    # 메인 애플리케이션 (라우팅)
├── src/
│   └── main.tsx              # React 진입점
├── components/
│   ├── pages/                # 페이지 컴포넌트 (6개)
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── MembersPage.tsx
│   │   ├── MemberDetailPage.tsx
│   │   ├── NewsPage.tsx
│   │   └── LocationPage.tsx
│   ├── sections/             # 홈 페이지 섹션 컴포넌트 (4개)
│   │   ├── HeroSection.tsx
│   │   ├── MembersPreviewSection.tsx
│   │   ├── ExpertiseSection.tsx
│   │   └── ProjectsSection.tsx
│   ├── common/               # 공통 컴포넌트
│   │   └── SectionHeader.tsx
│   ├── layout/               # 레이아웃 컴포넌트
│   │   └── PageLayout.tsx
│   ├── figma/                # 이미지 처리
│   │   └── ImageWithFallback.tsx
│   ├── ui/                   # ShadCN UI 컴포넌트 (41개)
│   └── Navigation.tsx        # 네비게이션 바
├── constants/                # 데이터 상수 (5개)
│   ├── location.ts
│   ├── members.ts            ⚠️ 배포 전 이미지 경로 수정 필요
│   ├── navigation.ts
│   ├── news.ts
│   └── services.ts
├── types/                    # TypeScript 타입 정의
│   └── index.ts
├── styles/                   # 스타일시트
│   └── globals.css           # 글로벌 스타일 (Tailwind v4)
└── Guidelines.md             # 프로젝트 가이드라인
```

## 디자인 시스템

### 색상 팔레트
- **Primary**: 주황색 계열
- **Chart-1**: 주황색 (oklch(0.646 0.222 41.116))
- **Chart-2**: 청록색 (oklch(0.6 0.118 184.704))
- **Chart-3**: 파란색 (oklch(0.398 0.07 227.392))
- **Chart-4**: 노란색 (oklch(0.828 0.189 84.429))
- **Chart-5**: 주황색 (oklch(0.769 0.188 70.08))

### 타이포그래피
- 기본 폰트 크기: 16px
- 글꼴 굵기: 400 (일반), 500 (강조)
- **중요**: Tailwind 폰트 클래스 사용 금지 (globals.css 기본값 사용)

## 개발 가이드

### 컴포넌트 작성 규칙
1. **모든 컴포넌트에 JSDoc 주석 추가**
2. **공통 컴포넌트 재사용** (SectionHeader, PageLayout 등)
3. **데이터는 constants 폴더에서 관리**
4. **타입 정의는 types/index.ts에 추가**
5. **애니메이션은 Motion 라이브러리 사용**

### 주의사항
- globals.css의 CSS 변수 수정 금지
- ShadCN UI 컴포넌트 직접 수정 금지
- ImageWithFallback.tsx 보호 파일 (수정 불가)
- Tailwind 폰트 크기/굵기 클래스 사용 금지

### 코드 품질
- ✅ 전체 컴포넌트 주석 작성 완료
- ✅ TypeScript 타입 안정성 확보
- ✅ 공통 패턴 및 재사용성 최적화
- ✅ 성능 최적화 (애니메이션, 이미지 로딩)
- ✅ 파일 구조 정리 완료 (pages/sections 분리)
- ✅ 중복 코드 제거 완료

## 배포

### ⚠️ 배포 전 필수 작업
1. **이미지 경로 수정**: `constants/members.ts`의 `figma:asset` import를 실제 이미지 경로로 변경
2. **환경 변수 설정**: `.env` 파일에 Google Maps API 키 추가

### 빠른 시작
```bash
# 1. 의존성 설치
npm install

# 2. 환경 변수 설정
cp .env.example .env
# .env 파일을 열어 Google Maps API 키 입력

# 3. 개발 서버 실행
npm run dev

# 4. 빌드 테스트
npm run build

# 5. GitHub에 코드 업로드
git init
git add .
git commit -m "Initial commit: COSS KNP GROUP website"
git remote add origin https://github.com/your-username/coss-knp-group.git
git push -u origin main

# 6. Vercel에서 Import
# https://vercel.com 에서 GitHub 레포지토리 선택
# 환경 변수 VITE_GOOGLE_MAPS_API_KEY 설정
# Deploy 클릭
```

**상세 배포 가이드**: [DEPLOYMENT.md](./DEPLOYMENT.md) 참조

### 필수 환경 변수
- `VITE_GOOGLE_MAPS_API_KEY`: Google Maps JavaScript API 키

### 배포 플랫폼
- ✅ **Vercel** (권장)
- ✅ Netlify
- ✅ GitHub Pages

## 향후 개선 사항

- [ ] 모바일 햄버거 메뉴 구현
- [ ] 다크 모드 지원
- [ ] 다국어 지원 (한/영)
- [ ] React Router 기반 URL 라우팅
- [ ] SEO 최적화
- [ ] 코드 스플리팅 및 Lazy Loading
- [ ] 이미지 최적화 및 CDN 적용

## 라이선스

© 2025 COSS KNP GROUP. All rights reserved.
