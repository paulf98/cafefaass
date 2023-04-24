import ArticleTeaser from './ArticleTeaser';
import { storyblokEditable } from '@storyblok/react';

const News = ({ blok }: any) => {
  return (
    <div className='py-8 mb-4'>
      <h1 className='text-center text-4xl font-bold mb-8'>{blok.title}</h1>
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
