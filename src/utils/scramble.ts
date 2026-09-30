/**
 * @file scramble.ts
 * @description 스크램블(글리치) 효과에서 한 글자를 비슷한 모양의 글자나 노이즈로 바꾸는 규칙입니다.
 *              라틴 글자는 닮은 기호로, 한글은 같은 초성·중성의 다른 음절이나 초성 자모로 흔듭니다.
 */

/** 라틴 대문자별로 닮은 글자 */
const LATIN_LOOKALIKES: Record<string, string> = {
  O: '0Ø', E: '3€', A: '4#', S: '5$', T: '7+', I: '1!', L: '|£', D: 'Ð)', R: 'Я®', U: 'µÜ', C: '©(',
  K: 'Ҝ<', N: 'И/', P: 'Þ?', G: '6&', B: '8ß', Y: '¥', Z: '2', M: 'Ш', H: '#', F: 'ƒ', W: 'Ш', V: '√',
};

/** 폭이 좁은 노이즈 */
const NARROW_NOISE = '#%&*+=<>/\\';

/** 폭이 넓은(한글 칸) 노이즈 */
const WIDE_NOISE = '░▒▓■□◇◆';

/** 한글 초성 자모(호환 자모) */
const CHOSEONG = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';

const HANGUL_START = 0xac00;
const HANGUL_END = 0xd7a3;
const JONGSEONG_COUNT = 28;
const SYLLABLES_PER_CHOSEONG = 21 * JONGSEONG_COUNT;

const pickFrom = (pool: string) => {
  const chars = [...pool];
  return chars[Math.floor(Math.random() * chars.length)];
};

const isHangulSyllable = (char: string) => {
  const code = char.charCodeAt(0);
  return code >= HANGUL_START && code <= HANGUL_END;
};

/**
 * 고정폭 글꼴에서 두 칸을 차지하는 글자(한글·한자·전각 기호)인지 판단합니다.
 */
export function isWideChar(char: string): boolean {
  return /[ᄀ-ᅟ⺀-꓏가-힣豈-﫿︰-﹏＀-｠￠-￦]/.test(char);
}

/**
 * 한글 음절을 비슷한 모양으로 흔듭니다. 받침만 바꾼 음절, 초성 자모, 가끔 노이즈 중 하나를 고릅니다.
 */
function hangulLookalike(char: string): string {
  const offset = char.charCodeAt(0) - HANGUL_START;
  const choseong = Math.floor(offset / SYLLABLES_PER_CHOSEONG);
  const base = offset - (offset % JONGSEONG_COUNT);
  const roll = Math.random();
  if (roll < 0.5) {
    return String.fromCharCode(HANGUL_START + base + Math.floor(Math.random() * JONGSEONG_COUNT));
  }
  if (roll < 0.8) {
    return CHOSEONG[choseong];
  }
  return pickFrom(WIDE_NOISE);
}

/**
 * 원래 글자 하나에 대해 이번 프레임에 보여 줄 대체 글자를 돌려줍니다.
 */
export function scrambleGlyph(char: string): string {
  if (isHangulSyllable(char)) {
    return hangulLookalike(char);
  }
  if (isWideChar(char)) {
    return pickFrom(WIDE_NOISE);
  }
  const lookalike = LATIN_LOOKALIKES[char.toUpperCase()];
  // 대부분은 닮은 글자, 가끔은 순수 노이즈
  return pickFrom(lookalike && Math.random() < 0.75 ? lookalike : NARROW_NOISE);
}
