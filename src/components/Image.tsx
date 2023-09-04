import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

export default function Img({ blok }: any) {
  return (
    <div className="mx-auto w-4/6 max-w-prose" {...storyblokEditable(blok)}>
      <Image
        src={blok.image.filename}
        alt={blok.image.alt}
        width={480}
        height={180}
        className="mx-auto h-auto max-h-80 w-auto rounded-md object-contain"
      />
    </div>
  );
}
