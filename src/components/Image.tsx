import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import { type ImgStoryblok } from '../../component-types-sb';

export default function Img(blok: ImgStoryblok) {
  return (
    <div className="mx-auto w-4/6 max-w-prose" {...storyblokEditable(blok)}>
      {blok.image && (
        <Image
          src={blok.image.filename}
          alt={blok.image.alt || blok.image.filename}
          width={480}
          height={180}
          className="mx-auto h-auto max-h-80 w-auto rounded-md object-contain"
        />
      )}
    </div>
  );
}
