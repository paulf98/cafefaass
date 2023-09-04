import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

const Carousel = ({ blok }: any) => {
  return (
    <div
      className="prose rounded-box mx-auto my-8 flex w-full flex-wrap justify-center gap-8 sm:flex-nowrap "
      {...storyblokEditable(blok)}
    >
      {blok.images.map((image: any, index: number) => {
        return (
          <Image
            key={index}
            src={image.filename}
            alt={image.alt}
            className="m-0 rounded object-fill"
            loading="lazy"
            width={225}
            height={160}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
