import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

export default function TorteTeaser({ torte }: any) {
  if (!torte) return null;

  return (
    <div className="card w-96 bg-base-100 shadow-xl" {...storyblokEditable(torte)}>
      {torte.teaser_img.filename && (
        <figure>
          <Image
            className="mb-4 w-full rounded-t-xl object-cover object-center md:h-36 lg:h-48"
            src={torte.teaser_img.filename}
            alt={torte.teaser_img.alt}
            width={200}
            height={90}
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{torte.title}</h2>
        <p>{torte.teaser}</p>
        <div className="card-actions justify-end">
          <Link href={`/konditorei/torten/${torte.slug}`} className="btn-primary btn">
            Mehr lesen »
          </Link>
        </div>
      </div>
    </div>
  );
}
