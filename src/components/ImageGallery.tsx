import { storyblokEditable } from '@storyblok/react';
import Gallery from 'react-image-gallery';

export default function ImageGallery({ blok }: any) {
  const images =
    blok?.images.map((image: any) => ({
      original: image.filename,
      thumbnail: image.filename,
      originalAlt: image.alt,
    })) || [];

  if (images.length === 0) return null;
  return (
    <div
      className="mx-auto my-16 max-w-prose rounded-md border shadow"
      {...storyblokEditable(blok)}
    >
      <Gallery items={images} />
    </div>
  );
}
