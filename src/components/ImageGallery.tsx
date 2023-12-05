import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Gallery from 'react-image-gallery';
import { type ImageGalleryStoryblok } from '../types/component-types-sb';

export default function ImageGallery({ blok }: ImageGalleryStoryblok) {
  const images =
    (blok.images &&
      blok.images.map((image: any) => ({
        original: image.filename,
        thumbnail: image.filename,
        originalAlt: image.alt,
      }))) ||
    [];

  if (images.length === 0) return null;
  return (
    <div
      className="mx-auto my-16 max-h-[400px] max-w-prose rounded-md border shadow"
      {...storyblokEditable(blok)}
    >
      <Gallery
        items={images}
        renderItem={(item: any) => (
          <div className="h-[200px]">
            <Image
              src={item.original}
              alt={item.originalAlt}
              className="h-full w-full object-contain"
              layout="fill"
            />
          </div>
        )}
      />
    </div>
  );
}
