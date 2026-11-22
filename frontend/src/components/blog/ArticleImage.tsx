import React from 'react';
import Image from 'next/image';

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | 'auto';
  priority?: boolean;
  className?: string;
}

export default function ArticleImage({
  src,
  alt,
  caption,
  aspectRatio = '16/9',
  priority = false,
  className = '',
}: ArticleImageProps) {
  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : aspectRatio === '3/4'
      ? 'aspect-[3/4]'
      : 'min-h-[280px] sm:min-h-[380px]';

  return (
    <figure className={`my-8 group ${className}`}>
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/90 shadow-sm transition-shadow group-hover:shadow-md`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 760px, 800px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
          loading={priority ? undefined : 'lazy'}
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-slate-500 italic px-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
