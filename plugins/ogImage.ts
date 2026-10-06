/**
 * @file ogImage.ts
 * @description 링크 미리보기용 대표 그림(1200×630 PNG)을 빌드할 때 그립니다(plugins/staticPages.ts가 호출).
 *              - 공통: 로고 + 홈 첫 문구 + 업무분야 (언어별 1장)
 *              - 리포트: MONTHLY IP NEWS + 월 + 제목 + 머리말 (달마다 언어별 1장)
 *              색은 사이트 디자인 토큰(tokens.css)에서 읽습니다. 글꼴(Pretendard JP — 한글·일본어 포함, JetBrains Mono — 공개 라이선스)은 처음 한 번 받아 캐시에 둡니다.
 *              받지 못하면 null을 돌려주고, 부르는 쪽은 그림 없이 진행합니다.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { readLightTokens } from './designTokens';

export const OG_SIZE = { width: 1200, height: 630 };


const FONT_CACHE = path.resolve('node_modules/.cache/coss-og-fonts');
const FONTS = [
  { name: 'Pretendard', weight: 400, file: 'PretendardJP-Regular.otf',
    url: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard-jp/dist/public/static/PretendardJP-Regular.otf' },
  { name: 'Pretendard', weight: 500, file: 'PretendardJP-Medium.otf',
    url: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard-jp/dist/public/static/PretendardJP-Medium.otf' },
  { name: 'Mono', weight: 400, file: 'jetbrains-mono-latin-400-normal.woff',
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/files/jetbrains-mono-latin-400-normal.woff' },
] as const;

type FontData = { name: string; weight: 400 | 500; data: Buffer; style: 'normal' };

async function loadFonts(): Promise<FontData[] | null> {
  try {
    mkdirSync(FONT_CACHE, { recursive: true });
    return await Promise.all(FONTS.map(async (font) => {
      const file = path.join(FONT_CACHE, font.file);
      if (!existsSync(file)) {
        const res = await fetch(font.url);
        if (!res.ok) throw new Error(`${font.url} → ${res.status}`);
        writeFileSync(file, Buffer.from(await res.arrayBuffer()));
      }
      return { name: font.name, weight: font.weight, data: readFileSync(file), style: 'normal' as const };
    }));
  } catch (error) {
    console.warn(`[og] 글꼴을 받지 못해 대표 그림 없이 진행합니다: ${(error as Error).message}`);
    return null;
  }
}

/* ---------- 그림 구성(satori가 읽는 요소 트리) ---------- */

type Node = { type: string; props: Record<string, unknown> };
const el = (style: Record<string, unknown>, children?: unknown): Node => ({ type: 'div', props: { style: { display: 'flex', ...style }, children } });
const MONO = 'Mono, Pretendard';
type Colors = Record<'bg' | 'fg' | 'muted' | 'accent', string>;

/** 모든 그림의 틀 — 위 로고, 가운데 내용, 아래 문구·주소, 맨 아래 강조색 띠 */
const frame = (c: Colors, body: Node, footLeft: string): Node =>
  el({ width: '100%', height: '100%', flexDirection: 'column', background: c.bg, color: c.fg,
       fontFamily: 'Pretendard', padding: '64px 80px', position: 'relative' }, [
    el({ alignItems: 'center', fontFamily: MONO, fontSize: 30, letterSpacing: '0.06em' }, [
      el({ width: 30, height: 30, background: c.accent, marginRight: 18 }),
      'COSS KNP GROUP',
    ]),
    body,
    el({ position: 'absolute', left: 80, right: 80, bottom: 54, justifyContent: 'space-between',
         fontFamily: MONO, fontSize: 24, color: c.muted }, [el({ fontFamily: 'Pretendard' }, footLeft), el({}, 'coss-knp.com')]),
    el({ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 10, background: c.accent }),
  ]);

export interface CommonImageText { lines: string[]; foot: string }
export interface ReportImageText { month: string; title: string; lead: string }

const commonTree = (c: Colors, t: CommonImageText) =>
  frame(c, el({ flexDirection: 'column', marginTop: 96, fontSize: 76, lineHeight: 1.3, letterSpacing: '0.08em' },
    t.lines.map((line) => el({}, line))), t.foot);

/** 머리말은 두 줄 안쪽으로 자릅니다(satori는 줄 수 제한이 없어 글자 수로 자름). */
const clip = (text: string, max: number) => (text.length > max ? `${text.slice(0, max - 1)}…` : text);

const reportTree = (c: Colors, t: ReportImageText) =>
  frame(c, el({ flexDirection: 'column' }, [
    el({ marginTop: 70, fontFamily: MONO, fontSize: 24, letterSpacing: '0.14em', color: c.muted }, 'MONTHLY IP NEWS'),
    el({ marginTop: 14, fontFamily: MONO, fontSize: 72, color: c.accent }, t.month),
    el({ marginTop: 18, fontSize: 50, fontWeight: 500 }, t.title),
    el({ marginTop: 20, fontSize: 26, lineHeight: 1.55, color: c.muted, maxWidth: 1000 }, clip(t.lead, 76)),
  ]), '');

/* ---------- 그리기 ---------- */

export interface OgRenderer {
  common: (text: CommonImageText) => Promise<Buffer>;
  report: (text: ReportImageText) => Promise<Buffer>;
}

/** 글꼴을 준비하고 그리기 함수를 돌려줍니다. 글꼴이 없으면 null. */
export async function createOgRenderer(): Promise<OgRenderer | null> {
  const fonts = await loadFonts();
  if (!fonts) return null;
  const { default: satori } = await import('satori');
  const { Resvg } = await import('@resvg/resvg-js');
  const colors = readLightTokens(['bg', 'fg', 'muted', 'accent'] as const);

  const render = async (tree: Node) => {
    const svg = await satori(tree as never, { ...OG_SIZE, fonts });
    return Buffer.from(new Resvg(svg, { fitTo: { mode: 'width', value: OG_SIZE.width } }).render().asPng());
  };
  return { common: (t) => render(commonTree(colors, t)), report: (t) => render(reportTree(colors, t)) };
}
