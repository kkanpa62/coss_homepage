/**
 * @file ImageWithFallback.tsx
 * @description 이미지를 불러오지 못하면 대체 아이콘을 보여 주는 img입니다.
 */

import { ImgHTMLAttributes, useState } from 'react';
import clsx from 'clsx';

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback({ src, alt, className, style, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);

  if (didError) {
    return (
      <div className={clsx('img-fallback', className)} style={style} role="img" aria-label={alt}>
        <img src={ERROR_IMG_SRC} alt="" data-original-url={src} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      {...rest}
      onError={() => setDidError(true)}
    />
  );
}
