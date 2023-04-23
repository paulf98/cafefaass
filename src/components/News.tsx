import ArticleTeaser from './ArticleTeaser';
import { storyblokEditable } from '@storyblok/react';

const News = ({ blok }: any) => {
  return (
    <div className='py-8 mb-4'>
      <h1 className='text-center text-4xl font-bold mb-8'>{blok.title}</h1>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto px-4 lg:grid-cols-3 lg:px-24 md:px-16"
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
