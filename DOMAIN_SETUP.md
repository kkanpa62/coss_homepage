# coss-knp.com 도메인 연결 가이드

## 📋 개요
이 문서는 MyDirect에서 구입한 `coss-knp.com` 도메인을 GitHub Pages에 연결하는 방법을 설명합니다.

## ✅ 완료된 작업
- [x] CNAME 파일 생성 (coss-knp.com)
- [x] GitHub Actions 자동 배포 워크플로우 설정
- [x] Vite 빌드 설정 구성

## 🔧 MyDirect DNS 설정 방법

### 1. MyDirect 관리 페이지 접속
1. MyDirect 웹사이트 로그인
2. 도메인 관리 페이지로 이동
3. `coss-knp.com` 도메인 선택

### 2. DNS 레코드 설정

다음 레코드들을 추가하세요:

#### A 레코드 (4개 필요)
GitHub Pages의 IP 주소로 설정:

| 타입 | 이름/호스트 | 값/데이터 | TTL |
|------|------------|----------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

#### CNAME 레코드 (www 서브도메인용)
| 타입 | 이름/호스트 | 값/데이터 | TTL |
|------|------------|----------|-----|
| CNAME | www | kkanpa62.github.io | 3600 |

### 3. DNS 설정 예시

```
호스트명: @
타입: A
값: 185.199.108.153
TTL: 3600

호스트명: @
타입: A
값: 185.199.109.153
TTL: 3600

호스트명: @
타입: A
값: 185.199.110.153
TTL: 3600

호스트명: @
타입: A
값: 185.199.111.153
TTL: 3600

호스트명: www
타입: CNAME
값: kkanpa62.github.io
TTL: 3600
```

## 🚀 GitHub Pages 설정

### 1. GitHub Repository 설정
1. GitHub 저장소 페이지 접속: `https://github.com/kkanpa62/coss_homepage`
2. Settings → Pages 메뉴로 이동
3. Source: **GitHub Actions** 선택
4. Custom domain 섹션에 `coss-knp.com` 입력
5. **Enforce HTTPS** 체크 (DNS 전파 후 가능)

### 2. 자동 배포 확인
- `main` 브랜치에 푸시하면 자동으로 배포됩니다
- Actions 탭에서 배포 진행 상황을 확인할 수 있습니다

## ⏱️ DNS 전파 시간
- DNS 변경사항이 전파되는 데 **최대 24-48시간** 소요될 수 있습니다
- 보통 몇 시간 내에 적용됩니다

## 🔍 DNS 설정 확인 방법

### 터미널에서 확인
```bash
# A 레코드 확인
dig coss-knp.com +short

# CNAME 레코드 확인
dig www.coss-knp.com +short

# NS 레코드 확인 (네임서버)
dig coss-knp.com NS +short
```

### 온라인 도구로 확인
- https://mxtoolbox.com/DNSLookup.aspx
- https://www.whatsmydns.net/

## 📱 접속 테스트

DNS 전파 후 다음 URL로 접속이 가능해야 합니다:
- `https://coss-knp.com`
- `https://www.coss-knp.com`

## 🐛 문제 해결

### 1. 도메인 접속이 안 될 때
- DNS 설정이 올바른지 확인
- DNS 전파 시간을 기다림 (최대 48시간)
- 브라우저 캐시 삭제 후 재시도

### 2. HTTPS 오류가 날 때
- GitHub Pages에서 "Enforce HTTPS" 체크박스 확인
- DNS가 완전히 전파된 후에 HTTPS 활성화

### 3. GitHub Actions 배포 실패 시
- Repository Settings → Actions → General
- Workflow permissions: "Read and write permissions" 선택

## 📞 지원

문제가 계속되면:
1. GitHub Actions 로그 확인
2. MyDirect 고객 지원 문의
3. GitHub Pages 문서 참조: https://docs.github.com/pages

---

**마지막 업데이트**: 2025-10-02
