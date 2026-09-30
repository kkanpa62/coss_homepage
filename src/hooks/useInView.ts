/**
 * @file useInView.ts
 * @description 요소가 화면에 처음 들어왔는지 알려 주는 훅입니다(한 번 보이면 계속 true).
 */

import { RefObject, useEffect, useRef, useState } from 'react';

export function useInView<T extends Element>(rootMargin = '0px 0px -10% 0px'): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return [ref, inView];
}
