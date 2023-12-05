import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';
import { type TorteStoryblok } from '../types/component-types-sb';

export default function TorteTeaser({ blok }: TorteStoryblok) {
  if (!blok) return null;

  return (
    <div className="card w-96 bg-base-100 shadow-xl" {...storyblokEditable(blok)}>
      {blok && blok.teaser_img && blok.teaser_img.filename && (
        <div className="relative mb-4 h-64">
          <figure>
            <Image
              className="rounded-t-xl object-cover"
              src={blok.teaser_img.filename}
              alt={blok.teaser_img.alt || blok.teaser_img.filename}
              layout="fill"
            />
          </figure>
        </div>
      )}
      <div className="card-body">
        <h2 className="card-title">{blok.title}</h2>
        <p>{blok.teaser}</p>
        <div className="card-actions justify-end">
          <Link href={`/konditorei/torten/${blok.slug}`} className="btn-primary btn">
            Mehr lesen »
          </Link>
        </div>
      </div>
    </div>
  );
}
