/**
 * @file staticPages.ts
 * @description 빌드가 끝나면 주소마다 HTML을 만들어, 하위 페이지도 정상 응답(200)과 자기 제목·설명·미리보기 정보를 갖게 합니다.
 *              - 페이지: build/about.html, build/ja/news/reports/2026-05.html … (내용은 기본 index.html + 그 페이지의 메타 태그)
 *              - 대표 그림: build/og/… (ogImage.ts), 사이트맵: build/sitemap.xml, build/robots.txt
 *              주소 목록과 제목·설명 규칙은 화면과 같은 seo/pageMeta.ts를 쓰므로, 리포트·구성원이 늘면 자동으로 따라갑니다.
 *              GitHub Pages는 /about 요청에 about.html을 돌려줍니다. 하위 주소가 있는 주소(/ja, /members, /news)는
 *              폴더가 생기므로 같은 내용을 폴더/index.html에도 둡니다.
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { Plugin, ResolvedConfig } from 'vite';
import { memberProfiles } from '../src/constants/members';
import { FEATURED_SERVICE_COUNT, serviceDefs } from '../src/constants/services';
import { ja } from '../src/content/ja';
import { ko } from '../src/content/ko';
import type { SiteContent } from '../src/content/types';
import { LOCALES, localizePath, SITE_URL, type Locale } from '../src/i18n/locales';
import { alternateLinks, ogImagePath, pageMeta, sitePaths, type PageMeta, type ReportMetaSource } from '../src/seo/pageMeta';
import { formatMonth } from '../src/utils/format';
import { createOgRenderer, OG_SIZE } from './ogImage';
import { readAllReports } from './reportData';

const CONTENT: Record<Locale, SiteContent> = { ko, ja };
const OG_LOCALE: Record<Locale, string> = { ko: 'ko_KR', ja: 'ja_JP' };

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** 기본 index.html에 그 페이지의 lang·제목·설명·대표 주소·대체 주소·미리보기 태그를 넣습니다. */
function pageHtml(template: string, locale: Locale, path_: string, meta: PageMeta, withImage: boolean): string {
  const url = `${SITE_URL}${localizePath(path_, locale)}`;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const tags = [
    `<link rel="canonical" href="${url}" />`,
    // data-hreflang: 화면에서 페이지를 옮기면 DocumentMeta가 같은 표시로 찾아 바꿉니다.
    ...alternateLinks(path_).map(([hreflang, href]) => `<link rel="alternate" hreflang="${hreflang}" href="${href}" data-hreflang />`),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="COSS KNP GROUP" />`,
    `<meta property="og:locale" content="${OG_LOCALE[locale]}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    ...(withImage ? [
      `<meta property="og:image" content="${SITE_URL}${meta.image}" />`,
      `<meta property="og:image:width" content="${OG_SIZE.width}" />`,
      `<meta property="og:image:height" content="${OG_SIZE.height}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
    ] : [`<meta name="twitter:card" content="summary" />`]),
  ];
  const html = template
    .replace(/<html lang="[^"]*"/, `<html lang="${locale}"`)
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${description}"`)
    .replace('</head>', `    ${tags.join('\n    ')}\n  </head>`);
  if (!html.includes(`<title>${title}</title>`) || !html.includes('og:title')) {
    throw new Error(`[pages] ${localizePath(path_, locale)}: index.html에서 title·description·</head>를 찾지 못했습니다`);
  }
  return html;
}

/** 언어별 주소 → 저장할 파일들("/" → index.html, "/about" → about.html, 하위 주소가 있으면 폴더/index.html도) */
function outputFiles(url: string, allUrls: readonly string[]): string[] {
  if (url === '/') return ['index.html'];
  const name = url.slice(1);
  const hasChildren = allUrls.some((other) => other.startsWith(`${url}/`));
  return hasChildren ? [`${name}.html`, `${name}/index.html`] : [`${name}.html`];
}

function writeFile(outDir: string, file: string, data: string | Buffer) {
  const target = path.join(outDir, file);
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, data);
}

function sitemapXml(paths: readonly string[]): string {
  const entries = LOCALES.flatMap((locale) => paths.map((p) => {
    const alternates = alternateLinks(p).map(([hreflang, href]) =>
      `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`).join('\n');
    return `  <url>\n    <loc>${SITE_URL}${localizePath(p, locale)}</loc>\n${alternates}\n  </url>`;
  }));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
}

/** 대표 그림 — 공통(언어별) + 리포트(달마다 언어별). 글꼴이 없으면 false를 돌려줍니다. */
async function writeOgImages(outDir: string, reports: readonly ReportMetaSource[]): Promise<boolean> {
  const renderer = await createOgRenderer();
  if (!renderer) return false;
  for (const locale of LOCALES) {
    const content = CONTENT[locale];
    const featured = serviceDefs.slice(0, FEATURED_SERVICE_COUNT).map((s) => content.services.items[s.id].title);
    writeFile(outDir, ogImagePath.common(locale).slice(1),
      await renderer.common({ lines: content.home.hero.title, foot: featured.join(' · ') }));
    for (const report of reports) {
      writeFile(outDir, ogImagePath.report(report.month, locale).slice(1), await renderer.report({
        month: formatMonth(report.month, locale),
        title: content.reports.listIntro.title,
        lead: report.text[locale].lead,
      }));
    }
  }
  return true;
}

export function staticPages(): Plugin {
  let config: ResolvedConfig;
  return {
    name: 'coss:static-pages',
    apply: 'build',
    configResolved(resolved) {
      config = resolved;
    },
    async closeBundle() {
      const outDir = path.resolve(config.root, config.build.outDir);
      const template = readFileSync(path.join(outDir, 'index.html'), 'utf8');
      const reports: ReportMetaSource[] = readAllReports().map(({ month, text }) => ({ month, text }));
      const paths = sitePaths(memberProfiles.map((m) => m.id), reports.map((r) => r.month));

      const withImage = await writeOgImages(outDir, reports);
      const urls = LOCALES.flatMap((locale) => paths.map((p) => localizePath(p, locale)));
      let count = 0;
      for (const locale of LOCALES) {
        for (const p of paths) {
          const html = pageHtml(template, locale, p, pageMeta(p, locale, CONTENT[locale], reports), withImage);
          for (const file of outputFiles(localizePath(p, locale), urls)) writeFile(outDir, file, html);
          count += 1;
        }
      }
      writeFile(outDir, 'sitemap.xml', sitemapXml(paths));
      writeFile(outDir, 'robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
      config.logger.info(`[pages] 페이지 ${count}개, 대표 그림 ${withImage ? '포함' : '없음(글꼴 없음)'}, sitemap.xml·robots.txt 생성`);
    },
  };
}
