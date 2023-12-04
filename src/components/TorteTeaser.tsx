import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

export default function TorteTeaser({ torte }: any) {
  if (!torte) return null;

  return (
    <div className="card w-96 bg-base-100 shadow-xl" {...storyblokEditable(torte)}>
      {torte && torte.teaser_img && torte.teaser_img.filename && (
        <div className="relative mb-4 h-64">
          <figure>
            <Image
              className="rounded-t-xl object-cover"
              src={torte.teaser_img.filename}
              alt={torte.teaser_img.alt}
              layout="fill"
            />
          </figure>
        </div>
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
