import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';
import { type StellenangeboteStoryblok } from '../../component-types-sb';

export default function StellenangebotTeaser(blok: StellenangeboteStoryblok) {
  console.log(blok);
  return (
    <div className="card w-80 bg-base-100 shadow-xl" {...storyblokEditable(blok)}>
      {blok && blok.bild && blok.bild.filename && (
        <figure>
          <Image
            className="mb-4 w-full rounded-t-xl object-cover object-center md:h-36 lg:h-48"
            src={blok.bild.filename}
            alt={blok.bild.alt}
            width={200}
            height={90}
          />
        </figure>
      )}
      <div className="card-body">
        {blok.name && blok.name[0] && (
          <h2 className="card-title mb-4">{blok.name[0].headline}</h2>
        )}
        <Link href={`/stellenangebote/${blok.slug}`} className="btn-primary btn">
          Mehr lesen »
        </Link>
      </div>
    </div>
  );
}
