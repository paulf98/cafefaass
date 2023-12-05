import { renderRichText } from '@storyblok/react';
import Heading from '../atoms/Heading';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { type TorteStoryblok } from '../../types/component-types-sb';

export default function Torte({ blok }: { blok: TorteStoryblok }) {
  return (
    <section className="relative mt-36 min-h-screen lg:ml-[320px]">
      <Link
        href="/konditorei/torten"
        className="fixed top-[65px] z-10 flex flex-row items-center justify-center border-b bg-white py-2 text-center lg:top-[69px]"
        style={{
          width: '-webkit-fill-available',
        }}
      >
        <FaArrowLeft className="mr-4" />
        Zurück zur Übersicht
      </Link>
      <Heading id={blok._uid} text={blok.title || ''} />
      {blok.images && blok.images.length > 0 && (
        <div className="mx-auto my-16 max-h-[400px] max-w-prose rounded-md border shadow">
          <ImageGallery
            items={blok.images.map((image) => ({
              original: image.filename,
              thumbnail: image.filename,
              originalAlt: image.alt,
            }))}
            renderItem={(item) => (
              <div className="h-[200px]">
                <Image
                  src={item.original}
                  alt={item.originalAlt || item.original}
                  className="h-full w-full object-contain"
                  layout="fill"
                />
              </div>
            )}
          />
        </div>
      )}
      <article
        className={['prose mx-auto px-4 mb-8', blok.text_justify].join(' ')}
        dangerouslySetInnerHTML={{ __html: renderRichText(blok.text) }}
      ></article>
    </section>
  );
}
