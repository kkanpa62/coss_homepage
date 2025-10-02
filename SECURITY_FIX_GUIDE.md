# 🔒 API 키 노출 보안 문제 해결 가이드

## 문제 상황

GitHub 레포지토리가 public으로 전환되면서 `src/constants/location.ts` 파일에 하드코딩된 Google Maps API 키가 공개되었습니다.

**노출된 API 키:** `AIzaSyCqPIOLnMxToQm-T8Fl4avdHpej4xQHq_o`

## 즉시 취해야 할 조치

### 1. ⚠️ 노출된 API 키 무효화 (최우선)

**매우 중요:** 공개된 API 키는 즉시 무효화해야 합니다!

1. [Google Cloud Console](https://console.cloud.google.com/apis/credentials)에 접속
2. 해당 API 키를 찾아서 **삭제** 또는 **재생성**
3. 새로운 API 키를 생성하여 안전하게 보관

### 2. 🔑 새 API 키 설정

프로젝트 루트에 `.env` 파일 생성:

```bash
# .env 파일
VITE_GOOGLE_MAPS_API_KEY=새로_생성한_API_키
```

### 3. 🧹 Git 히스토리에서 민감 정보 제거

노출된 API 키가 Git 히스토리에 남아있으므로 완전히 제거해야 합니다.

#### 옵션 A: BFG Repo-Cleaner 사용 (권장)

```bash
# BFG 다운로드
# https://rtyley.github.io/bfg-repo-cleaner/

# API 키가 포함된 파일 제거
java -jar bfg.jar --replace-text passwords.txt

# passwords.txt 파일 내용:
# AIzaSyCqPIOLnMxToQm-T8Fl4avdHpej4xQHq_o

# Git 정리
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

#### 옵션 B: git filter-repo 사용

```bash
# git filter-repo 설치
pip install git-filter-repo

# API 키 제거
git filter-repo --replace-text <(echo 'AIzaSyCqPIOLnMxToQm-T8Fl4avdHpej4xQHq_o==>REMOVED_API_KEY')
```

#### 옵션 C: 간단한 방법 - 새 레포지토리로 시작

가장 안전하고 간단한 방법:

```bash
# 1. 현재 변경사항 커밋
git add .
git commit -m "security: Remove hardcoded API key and use environment variables"

# 2. 기존 원격 저장소와의 연결 제거
git remote remove origin

# 3. GitHub에서 기존 레포지토리 삭제

# 4. GitHub에서 새 레포지토리 생성

# 5. 새 원격 저장소 연결
git remote add origin https://github.com/your-username/new-repo.git

# 6. 현재 커밋만 푸시 (이전 히스토리 없이)
git push -u origin main --force
```

### 4. 📤 강제 푸시 (히스토리 정리 후)

```bash
# 주의: 협업 중이라면 팀원들에게 알린 후 실행
git push origin --force --all
git push origin --force --tags
```

## 완료된 보안 개선 사항

✅ `.env.example` 파일 생성 - 환경 변수 템플릿 제공  
✅ `.gitignore` 업데이트 - `.env` 파일 git 추적 제외  
✅ `src/constants/location.ts` 수정 - 환경 변수 사용  
✅ `src/vite-env.d.ts` 생성 - TypeScript 타입 정의  
✅ `README.md` 업데이트 - 설정 가이드 추가

## 향후 예방 조치

### 1. Pre-commit Hook 설정

API 키가 실수로 커밋되는 것을 방지:

```bash
# .git/hooks/pre-commit 파일 생성
#!/bin/bash

# API 키 패턴 검사
if git diff --cached | grep -E "AIza[0-9A-Za-z\-_]{35}"; then
    echo "❌ Error: API key detected in commit!"
    echo "Please remove the API key and use environment variables."
    exit 1
fi
```

```bash
chmod +x .git/hooks/pre-commit
```

### 2. GitHub Secret Scanning 활성화

GitHub Settings → Security → Code security and analysis에서:
- Secret scanning 활성화
- Push protection 활성화

### 3. 정기적인 보안 검사

```bash
# git-secrets 설치 및 사용
git secrets --install
git secrets --register-aws
git secrets --scan
```

## 체크리스트

- [ ] 노출된 API 키를 Google Cloud Console에서 삭제/재생성
- [ ] 새 API 키를 `.env` 파일에 안전하게 저장
- [ ] `.env` 파일이 `.gitignore`에 포함되어 있는지 확인
- [ ] Git 히스토리에서 민감 정보 제거
- [ ] 변경사항을 새 레포지토리 또는 정리된 히스토리로 푸시
- [ ] Pre-commit hook 설정
- [ ] GitHub Secret Scanning 활성화
- [ ] 팀원들에게 보안 가이드라인 공유

## 추가 리소스

- [GitHub - Removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)
- [git-filter-repo](https://github.com/newren/git-filter-repo)
- [Google Cloud - API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)

## 문의사항

보안 관련 문의는 즉시 팀 리더에게 보고해주세요.
