/**
 * @file browser.ts
 * @description 브라우저 동작 도우미 — 한가할 때 실행, 요소가 나타나길 기다리기, 사용자 의도(가리키기·초점·손가락) 감지, 한 번만 새로고침.
 */

/** 브라우저가 한가할 때 실행합니다. 돌려준 함수로 취소합니다. */
export function whenIdle(callback: () => void, timeout = 2000): () => void {
  if (typeof window.requestIdleCallback === 'function') {
    const handle = window.requestIdleCallback(callback, { timeout });
    return () => window.cancelIdleCallback(handle);
  }
  const timer = window.setTimeout(callback, 200);
  return () => window.clearTimeout(timer);
}

/**
 * id가 같은 요소가 문서에 나타나면 실행합니다(나중에 받아 그리는 내용 대비). timeout 안에 나타나지 않으면 포기합니다.
 * 돌려준 함수로 취소합니다.
 */
export function whenElement(id: string, callback: (element: HTMLElement) => void, timeout = 3000): () => void {
  const found = document.getElementById(id);
  if (found) {
    callback(found);
    return () => undefined;
  }

  const stop = () => {
    observer.disconnect();
    window.clearTimeout(timer);
  };
  const observer = new MutationObserver(() => {
    const element = document.getElementById(id);
    if (!element) return;
    stop();
    callback(element);
  });
  const timer = window.setTimeout(stop, timeout);
  observer.observe(document.body, { childList: true, subtree: true });
  return stop;
}

/** 링크를 누르기 직전의 신호(마우스 올림·키보드 초점·손가락 닿음)에 반응하는 이벤트 묶음 */
export const intentHandlers = (onIntent?: () => void) =>
  onIntent ? { onMouseEnter: onIntent, onFocus: onIntent, onTouchStart: onIntent } : {};

/**
 * 같은 key로는 한 번만 페이지를 새로고침합니다(새로고침하면 true). 배포 직후 열려 있던 예전 페이지가
 * 이미 지워진 파일 이름을 요청해 받기에 실패할 때, 새 버전을 받게 하려는 용도입니다. 성공하면 forgetReload로 기록을 지웁니다.
 */
export function reloadOnce(key: string): boolean {
  const flag = `reload-once:${key}`;
  try {
    if (sessionStorage.getItem(flag)) return false;
    sessionStorage.setItem(flag, '1');
  } catch {
    return false;
  }
  window.location.reload();
  return true;
}

export function forgetReload(key: string) {
  try {
    sessionStorage.removeItem(`reload-once:${key}`);
  } catch {
    // 저장소를 쓸 수 없으면 기록도 없음
  }
}
