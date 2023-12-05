import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';
import { type ArticleStoryblok } from '../types/component-types-sb';

const ArticleTeaser = ({ article }: { article: ArticleStoryblok }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl" {...storyblokEditable(article)}>
      {article.image && (
        <figure>
          <Image
            className="mb-4 w-full rounded-t-xl object-cover object-center md:h-36 lg:h-48"
            src={article.image.filename}
            alt={article.image.alt || article.image.filename}
            width={200}
            height={90}
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <p>{article.teaser}</p>
        <div className="card-actions justify-end">
          <Link href={`/blog/${article.slug}`} className="btn-primary btn">
            Mehr lesen »
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ArticleTeaser;
