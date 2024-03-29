import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import { type CarouselStoryblok } from '../types/component-types-sb';

const Carousel = ({ blok }: { blok: CarouselStoryblok }) => {
  return (
    <div
      className="prose mx-auto my-8 flex w-full flex-nowrap justify-center rounded-box md:gap-4 lg:gap-8"
      {...storyblokEditable(blok)}
    >
      {blok.images &&
        blok.images.map((image: any, index: number) => {
          return (
            <Image
              key={index}
              src={image.filename}
              alt={image.alt}
              className="m-0 object-fill md:rounded"
              loading="lazy"
              width={225}
              height={160}
              sizes="(min-width: 768px) 225px, 33vw"
            />
          );
        })}
    </div>
  );
};

export default Carousel;
