import React from 'react';
import Image from 'next/image';

export interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: '2/3' | '16/9' | '4/3' | '1/1' | '3/4' | 'auto';
  priority?: boolean;
  className?: string;
}

export default function ArticleImage({
  src,
  alt,
  caption,
  aspectRatio = 'auto',
  priority = false,
  className = '',
}: ArticleImageProps) {
  const isPortrait23 =
    aspectRatio === '2/3' ||
    src.includes('gta-6') ||
    src.includes('christmas') ||
    src.includes('portrait');

  return (
    <figure className={`my-8 ${isPortrait23 ? 'max-w-xl mx-auto' : 'w-full'} ${className}`}>
      <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/90 shadow-sm transition-shadow hover:shadow-md">
        <Image
          src={src}
          alt={alt}
          width={isPortrait23 ? 682 : 1200}
          height={isPortrait23 ? 1024 : 675}
          sizes={isPortrait23 ? '(max-width: 768px) 100vw, 576px' : '(max-width: 1200px) 100vw, 800px'}
          className="w-full h-auto object-contain object-center block rounded-2xl"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs sm:text-sm text-slate-500 italic px-4 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
