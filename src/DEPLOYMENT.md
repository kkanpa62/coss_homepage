# COSS KNP GROUP 배포 가이드

## 📋 배포 전 체크리스트

### 1. 환경 변수 설정
`.env` 파일을 생성하고 다음 내용을 추가하세요:

```bash
VITE_GOOGLE_MAPS_API_KEY=실제_API_키를_여기에_입력
```

**Google Maps API 키 발급 방법:**
1. https://console.cloud.google.com/google/maps-apis 접속
2. 프로젝트 생성 또는 선택
3. "Maps JavaScript API" 활성화
4. "사용자 인증 정보" 메뉴에서 API 키 생성
5. API 키 제한 설정 (HTTP 리퍼러 제한 권장)

---

## 🚀 GitHub에 코드 업로드

### 1. Git 초기화
```bash
git init
git add .
git commit -m "Initial commit: COSS KNP GROUP website"
```

### 2. GitHub 레포지토리 생성
1. https://github.com 에서 새 레포지토리 생성
2. **중요**: `.env` 파일이 포함되지 않도록 확인 (`.gitignore`에 이미 포함됨)

### 3. 원격 저장소 연결 및 푸시
```bash
git remote add origin https://github.com/your-username/coss-knp-group.git
git branch -M main
git push -u origin main
```

---

## 🌐 Vercel 배포

### 1. Vercel 계정 생성
- https://vercel.com 에서 GitHub 계정으로 로그인

### 2. 프로젝트 Import
1. Vercel 대시보드에서 "New Project" 클릭
2. GitHub 레포지토리 선택
3. Framework Preset: **Vite** 자동 감지됨
4. 설정 확인:
   - Build Command: `npm run build` (자동 설정됨)
   - Output Directory: `dist` (자동 설정됨)
   - Install Command: `npm install` (자동 설정됨)

### 3. 환경 변수 설정
**중요**: Vercel 프로젝트 설정에서 환경 변수를 추가해야 합니다.

1. Vercel 프로젝트 페이지에서 "Settings" 클릭
2. "Environment Variables" 메뉴 선택
3. 다음 변수 추가:
   ```
   Name: VITE_GOOGLE_MAPS_API_KEY
   Value: 실제_Google_Maps_API_키
   Environment: Production, Preview, Development 모두 체크
   ```

### 4. 배포 실행
- "Deploy" 버튼 클릭
- 첫 배포는 2-3분 소요
- 배포 완료 후 `https://your-project.vercel.app` URL 제공

### 5. 커스텀 도메인 연결 (선택사항)
1. Vercel 프로젝트 설정에서 "Domains" 메뉴 선택
2. 도메인 입력 (예: coss-knp.com)
3. DNS 설정 안내에 따라 도메인 제공자에서 설정
4. SSL 인증서 자동 발급 (무료)

---

## 🔄 자동 배포 설정

GitHub에 코드를 push하면 자동으로 Vercel에 배포됩니다:

```bash
# 코드 수정 후
git add .
git commit -m "Update: 변경 내용"
git push origin main
```

- **main 브랜치**: Production 배포
- **다른 브랜치**: Preview 배포 (테스트용 임시 URL 제공)

---

## ⚠️ 주의사항

### API 키 보안
1. **절대로** `.env` 파일을 GitHub에 올리지 마세요
2. API 키는 반드시 Vercel 환경 변수에만 설정
3. Google Maps API 키에 HTTP 리퍼러 제한 설정:
   - `your-domain.vercel.app/*`
   - `coss-knp.com/*` (커스텀 도메인 사용 시)

### 구성원 이미지
현재 코드에서 사용 중인 `figma:asset/` 경로의 이미지들은 Figma Make 환경에서만 작동합니다.
배포 후에는 다음 중 하나를 선택하세요:

1. **이미지 호스팅 서비스 사용** (권장)
   - Cloudinary, imgix, 또는 Vercel Blob Storage
   
2. **프로젝트 내 이미지 포함**
   - `/public/images/members/` 폴더에 이미지 저장
   - `constants/members.ts`에서 이미지 경로 수정

3. **실제 프로필 사진으로 교체**
   - 구성원들의 실제 사진을 업로드하고 경로 업데이트

---

## 📊 배포 확인

배포 후 다음을 확인하세요:

- [ ] 모든 페이지가 정상적으로 로드되는지
- [ ] 네비게이션이 정상 작동하는지
- [ ] 구성원 이미지가 표시되는지
- [ ] Google Maps가 정상 표시되는지
- [ ] 모바일 반응형이 정상 작동하는지
- [ ] 브라우저 콘솔에 오류가 없는지

---

## 🐛 문제 해결

### Google Maps가 표시되지 않을 때
1. Vercel 환경 변수가 올바르게 설정되었는지 확인
2. API 키가 유효한지 확인
3. Maps JavaScript API가 활성화되었는지 확인
4. API 키 제한 설정 확인

### 이미지가 표시되지 않을 때
1. 이미지 경로가 올바른지 확인
2. 이미지 파일이 실제로 존재하는지 확인
3. 네트워크 탭에서 404 오류 확인

### 빌드 오류 발생 시
1. 로컬에서 `npm run build` 실행하여 테스트
2. Vercel 빌드 로그 확인
3. 의존성 패키지 버전 확인

---

## 📞 지원

배포 관련 추가 지원이 필요하면:
- Vercel 문서: https://vercel.com/docs
- GitHub 문서: https://docs.github.com

---

**마지막 업데이트**: 2025년 10월 1일