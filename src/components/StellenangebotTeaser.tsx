import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

export default function StellenangebotTeaser({ stellenangebot }: any) {
  console.log(stellenangebot);
  return (
    <div
      className="card w-80 bg-base-100 shadow-xl"
      {...storyblokEditable(stellenangebot)}
    >
      {stellenangebot && stellenangebot.bild && stellenangebot.bild.filename && (
        <figure>
          <Image
            className="mb-4 w-full rounded-t-xl object-cover object-center md:h-36 lg:h-48"
            src={stellenangebot.bild.filename}
            alt={stellenangebot.bild.alt}
            width={200}
            height={90}
          />
        </figure>
      )}
      <div className="card-body">
        {stellenangebot.name && stellenangebot.name[0] && (
          <h2 className="card-title mb-4">{stellenangebot.name[0].headline}</h2>
        )}
        <Link
          href={`/stellenangebote/${stellenangebot.slug}`}
          className="btn-primary btn"
        >
          Mehr lesen »
        </Link>
      </div>
    </div>
  );
}
