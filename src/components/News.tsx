import { useEffect } from 'react';
import ArticleTeaser from './ArticleTeaser';
import { storyblokEditable } from '@storyblok/react';
import { Kalam } from 'next/font/google';
import { annotate } from 'rough-notation';

const headlineFont = Kalam({ subsets: ['latin'], weight: '700' });

const News = ({ blok }: any) => {

  useEffect(() => {
    const e = document.getElementById(blok._uid);
    const annotation = annotate(e as HTMLElement, { type: 'underline', color: '#1EAE9B' });
    annotation.show();
  }, []);

  return (
    <div className='py-8 mb-4 max-w-screen-xl mx-auto'>
      <h2 id={blok._uid}
        className={[
          'text-5xl mb-8 font-bold w-fit mx-auto text-primary',
          headlineFont.className,
        ].join(' ')}>{blok.title}</h2>
      <div
        className="w-full flex gap-6 mx-auto px-4 md:px-8 flex-wrap justify-around"
        {...storyblokEditable(blok)}
      >
        {blok.articles.map((article: any) => {
          article.content.slug = article.slug;
          return <ArticleTeaser article={article.content} key={article.uuid} />;
        })}
      </div>
    </div>
  );
};
export default News;
