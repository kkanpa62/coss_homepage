# COSS KNP GROUP 홈페이지

회사소개 사이트 [coss-knp.com](https://coss-knp.com)의 소스입니다. 한국어(`/`)와 일본어(`/ja`) 페이지가 있습니다.
React 18 + React Router + Vite이며, 스타일은 일반 CSS(`src/styles/`)로 작성했습니다.

## 실행
요구 사항: Node 20

```bash
npm ci
cp .env.example .env    # VITE_GOOGLE_MAPS_API_KEY 입력(오시는길 지도)
npm run dev             # http://localhost:3000
npm run build           # 타입 검사 후 build/에 결과물
```

## 배포
- `main`에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해 GitHub Pages로 배포합니다.
- 지도 키는 저장소 Secret `VITE_GOOGLE_MAPS_API_KEY`에 넣습니다. 키는 페이지 주소에 드러나므로,
  Google Cloud에서 **Maps Embed API**만 허용하고 HTTP 리퍼러를 `coss-knp.com`으로 제한합니다.

## 폴더
| 위치 | 내용 |
|---|---|
| `src/content/{ko,ja}.ts` | 화면 문구(두 언어가 같은 타입을 따름) |
| `src/constants/` | 언어 공통 데이터(ID·사진 경로·매체 목록 등) |
| `src/content/reports/YYYY-MM.json` | 월간 지식재산 뉴스 리포트. 파일을 추가하면 자동 등록 |
| `src/components/`, `src/styles/` | 화면 부품과 스타일 |
| `src/public/` | 이미지·파비콘·`404.html`(SPA 주소 복원) |
| `plugins/` | 빌드 플러그인 — 리포트 요약, 주소별 페이지 HTML·링크 미리보기 그림·sitemap.xml·robots.txt 생성 |
| `src/seo/pageMeta.ts` | 페이지별 제목·설명·대표 그림 규칙(빌드와 화면이 같이 씀) |

작업 지침, 리포트 도구, 원문은 이 저장소에 두지 않습니다.
