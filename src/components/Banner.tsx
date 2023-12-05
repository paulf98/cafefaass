import Image from 'next/image';
import { type BannerStoryblok } from '../types/component-types-sb';

/**
 * A full width banner image.
 */
export default function Banner({ blok }: BannerStoryblok) {
  return (
    <Image
      src={blok.image.filename}
      alt={blok.image.alt || blok.image.filename}
      loading="eager"
      priority={true}
      width={480}
      height={270}
      style={{
        objectFit: 'contain',
      }}
      className="mx-auto mb-12 h-auto w-full max-w-prose"
    />
  );
}
