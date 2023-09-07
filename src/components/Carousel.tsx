import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

const Carousel = ({ blok }: any) => {
  return (
    <div
      className="prose rounded-box mx-auto my-8 flex w-full flex-nowrap justify-center md:gap-4 lg:gap-8"
      {...storyblokEditable(blok)}
    >
      {blok.images.map((image: any, index: number) => {
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
