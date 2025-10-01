# 🚀 배포 전 최종 체크리스트

## ✅ 완료 항목

### 1. 필수 파일 생성
- [x] `.gitignore` - Git 추적 제외 설정
- [x] `.env.example` - 환경 변수 샘플
- [x] `package.json` - 프로젝트 의존성
- [x] `tsconfig.json` - TypeScript 설정
- [x] `vite.config.ts` - Vite 빌드 설정
- [x] `index.html` - HTML 진입점
- [x] `README.md` - 프로젝트 문서

### 2. 코드 정리
- [x] 중복 파일 제거 완료
- [x] 파일 구조 재구성 (`/components/pages`, `/components/sections`)
- [x] 모든 import 경로 정상
- [x] TypeScript 타입 안정성 확보
- [x] 한글 주석 완료

### 3. 성능 최적화
- [x] Motion 애니메이션 최적화 (`viewport={{ once: true }}`)
- [x] 이미지 폴백 처리 (`ImageWithFallback`)
- [x] 공통 컴포넌트 재사용 (`SectionHeader`, `PageLayout`)

---

## ⚠️ 배포 전 필수 작업

### 1. 이미지 경로 수정 (매우 중요!)

**현재 문제**: `constants/members.ts` 파일에서 `figma:asset/...` 경로를 사용 중입니다.
이는 Figma Make 환경에서만 작동하므로 **배포 시 이미지가 표시되지 않습니다**.

**해결 방법**:

#### 옵션 A: public 폴더 사용 (권장)

1. **폴더 생성**
   ```bash
   mkdir -p public/images/members
   ```

2. **이미지 파일 저장**
   - 9명의 구성원 사진을 `public/images/members/` 폴더에 저장
   - 파일명 예시: `kim.png`, `son.png`, `park.png` 등

3. **constants/members.ts 수정**
   
   **변경 전**:
   ```typescript
   import kimImage from 'figma:asset/f82279d5d16e7af89d027a0276e5845b2b7abb84.png';
   import sonImage from 'figma:asset/addc2e93ef03c67b3eec1a25374d58fb8234efed.png';
   // ... (나머지 7개)
   ```
   
   **변경 후**:
   ```typescript
   const kimImage = '/images/members/kim.png';
   const sonImage = '/images/members/son.png';
   const parkImage = '/images/members/park.png';
   const ohImage = '/images/members/oh.png';
   const moonImage = '/images/members/moon.png';
   const sungImage = '/images/members/sung.png';
   const gilImage = '/images/members/gil.png';
   const choiImage = '/images/members/choi.png';
   const murakamiImage = '/images/members/murakami.png';
   ```

#### 옵션 B: 이미지 호스팅 서비스 사용

Cloudinary, imgix 등에 이미지를 업로드하고 URL을 사용:
```typescript
const kimImage = 'https://res.cloudinary.com/your-account/image/upload/v1234567890/kim.png';
```

---

### 2. 환경 변수 설정

**로컬 개발용** (`.env` 파일 생성):
```bash
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

**Vercel 배포용**:
1. Vercel 프로젝트 Settings → Environment Variables
2. 다음 변수 추가:
   - Name: `VITE_GOOGLE_MAPS_API_KEY`
   - Value: 실제 Google Maps API 키
   - Environment: Production, Preview, Development 모두 체크

---

## 📋 배포 단계

### 1단계: 로컬 테스트

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 모든 페이지 동작 확인
# - 네비게이션 이동
# - 구성원 카드 클릭
# - Google Maps 표시
# - 이미지 로딩

# 빌드 테스트
npm run build

# 빌드 결과 미리보기
npm run preview
```

### 2단계: GitHub 업로드

```bash
# Git 초기화 (처음 한 번만)
git init

# 모든 파일 스테이징 (.gitignore가 자동으로 제외 처리)
git add .

# 첫 커밋
git commit -m "Initial commit: COSS KNP GROUP website"

# GitHub 저장소 연결 (your-username을 실제 계정명으로 변경)
git remote add origin https://github.com/your-username/coss-knp-group.git

# 메인 브랜치로 변경
git branch -M main

# GitHub에 푸시
git push -u origin main
```

### 3단계: Vercel 배포

1. https://vercel.com 로그인 (GitHub 계정 연동)
2. **"New Project"** 클릭
3. GitHub 저장소 선택 (`coss-knp-group`)
4. **Framework Preset**: Vite (자동 감지됨)
5. **Environment Variables** 추가:
   - `VITE_GOOGLE_MAPS_API_KEY=실제_API_키`
6. **"Deploy"** 클릭
7. 배포 완료 후 URL 확인 (예: `https://coss-knp-group.vercel.app`)

---

## 🔍 배포 후 확인 사항

### 필수 체크
- [ ] 모든 페이지가 정상적으로 로드됨
- [ ] 네비게이션이 정상 작동함
- [ ] **구성원 이미지가 모두 표시됨** ⚠️ 중요!
- [ ] Google Maps가 정상 표시됨
- [ ] 모바일 반응형 정상 작동
- [ ] 브라우저 콘솔에 오류 없음

### 성능 체크
- [ ] 페이지 로딩 속도 (3초 이내)
- [ ] 이미지 로딩 (지연 로딩 정상)
- [ ] 애니메이션 부드러움
- [ ] 스크롤 성능

---

## 🚫 GitHub에 업로드하면 안 되는 파일

다음 파일들은 `.gitignore`에 의해 자동으로 제외됩니다:

```
❌ .env                 # 실제 API 키 포함 (보안 위험!)
❌ node_modules/        # 의존성 패키지 (너무 큼)
❌ dist/                # 빌드 결과물 (Vercel이 자동 생성)
❌ .DS_Store            # macOS 시스템 파일
❌ *.log                # 로그 파일
```

✅ `.env.example`은 업로드 가능 (실제 키가 없는 샘플)

---

## 🐛 문제 해결

### Q: 구성원 이미지가 표시되지 않아요
**A**: `constants/members.ts`의 `figma:asset` import를 실제 이미지 경로로 변경했는지 확인하세요.

### Q: Google Maps가 표시되지 않아요
**A**: 
1. Vercel 환경 변수에 `VITE_GOOGLE_MAPS_API_KEY`가 설정되었는지 확인
2. Google Cloud Console에서 Maps JavaScript API가 활성화되었는지 확인
3. API 키 제한 설정 확인 (HTTP 리퍼러)

### Q: Vercel 빌드가 실패해요
**A**:
1. 로컬에서 `npm run build` 실행하여 오류 확인
2. 모든 import 경로가 올바른지 확인
3. TypeScript 오류가 없는지 확인
4. Vercel 빌드 로그 확인

### Q: 특정 페이지에서 404 오류가 발생해요
**A**: Vite는 SPA이므로 Vercel의 `vercel.json` 설정이 필요할 수 있습니다:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 📊 현재 파일 통계

| 카테고리 | 파일 수 |
|---------|--------|
| 설정 파일 | 6개 |
| 문서 파일 | 3개 |
| 페이지 컴포넌트 | 6개 |
| 섹션 컴포넌트 | 4개 |
| 공통/레이아웃 | 4개 |
| UI 컴포넌트 (ShadCN) | 41개 |
| 상수/타입 | 6개 |
| **총계** | **70개** |

---

## 📞 추가 지원

- **배포 가이드**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **프로젝트 문서**: [README.md](./README.md)
- **Vite 문서**: https://vitejs.dev/
- **Vercel 문서**: https://vercel.com/docs

---

**최종 업데이트**: 2025년 10월 1일  
**버전**: 1.0  
**상태**: ✅ 배포 준비 완료 (이미지 경로 수정만 필요)
