import { useEffect } from 'react';
import ArticleTeaser from './ArticleTeaser';
import { storyblokEditable } from '@storyblok/react';
import { Kalam } from 'next/font/google';
import { annotate } from 'rough-notation';
import { type NewsStoryblok } from '../types/component-types-sb';

const headlineFont = Kalam({ subsets: ['latin'], weight: '700' });

const News = ({ blok }: NewsStoryblok) => {
  useEffect(() => {
    const e = document.getElementById(blok._uid);
    const annotation = annotate(e as HTMLElement, {
      type: 'underline',
      color: '#1EAE9B',
    });
    annotation.show();
  }, []);

  return (
    <div className="mx-auto mb-4 max-w-screen-xl py-8">
      <h2
        id={blok._uid}
        className={[
          'text-5xl mb-8 font-bold w-fit mx-auto text-primary',
          headlineFont.className,
        ].join(' ')}
      >
        {blok.title}
      </h2>
      <div
        className="mx-auto flex w-full flex-wrap justify-around gap-6 px-4 md:px-8"
        {...storyblokEditable(blok)}
      >
        {blok.articles &&
          blok.articles.map((article) => {
            if (typeof article === 'string') return null;
            article.content.slug = article.slug;
            return (
              <ArticleTeaser
                article={article.content}
                key={article.uuid}
                _uid={article.uuid}
                component={'article'}
              />
            );
          })}
      </div>
    </div>
  );
};
export default News;
