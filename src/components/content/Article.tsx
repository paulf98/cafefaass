import { renderRichText } from '@storyblok/react';
import Image from 'next/image';

const Article = ({ blok }: any) => {
  return (
    <section className="mt-16 min-h-screen lg:ml-[320px]">
      <header className="relative mb-12 flex h-72 items-center justify-center">
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          width={800}
          height={400}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
        <div className="absolute inset-x-auto rounded-xl bg-white/70 p-5 text-2xl text-white">
          <h1 className="text-3xl font-medium text-gray-700 sm:text-4xl">{blok.title}</h1>
        </div>
      </header>
      <div className="prose mx-auto px-4 text-center">
        <div className="w-full text-center">
          {blok.subtitle && (
            <h2 className="mb-4 text-2xl font-medium text-gray-600 sm:text-3xl">
              {blok.subtitle}
            </h2>
          )}
          <div
            className="my-4 text-justify"
            dangerouslySetInnerHTML={{ __html: renderRichText(blok.text) }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default Article;
