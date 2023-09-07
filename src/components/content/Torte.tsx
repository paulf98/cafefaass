import { renderRichText } from '@storyblok/react';
import Heading from '../atoms/Heading';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function Torte({ blok }: any) {
  const images = blok.images.map((image: any) => ({
    original: image.filename,
    thumbnail: image.filename,
    originalAlt: image.alt,
  }));

  return (
    <section className="relative mt-36 min-h-screen lg:ml-[320px]">
      <Link
        href="/konditorei/torten"
        className="fixed top-[69px] z-10 flex flex-row items-center justify-center border-b bg-white py-2 text-center"
        style={{
          width: '-webkit-fill-available',
        }}
      >
        <FaArrowLeft className="mr-4" />
        Zurück zur Übersicht
      </Link>
      <Heading id={blok._uid} text={blok.title} />
      <div className="mx-auto my-16 max-w-prose rounded-md border shadow">
        <ImageGallery items={images} />
      </div>
      <article
        className={['prose mx-auto px-4 mb-8', blok.text_justify].join(' ')}
        dangerouslySetInnerHTML={{ __html: renderRichText(blok.text) }}
      ></article>
    </section>
  );
}