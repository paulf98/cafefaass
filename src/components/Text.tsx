import { storyblokEditable, renderRichText } from '@storyblok/react';
import { type TextStoryblok } from '../types/component-types-sb';

const Text = ({ blok }: TextStoryblok) => {
  return (
    <div
      className={['my-8 prose mx-auto md:text-xl', blok.alignment].join(' ')}
      {...storyblokEditable(blok)}
      dangerouslySetInnerHTML={{ __html: renderRichText(blok.text) }}
    ></div>
  );
};

export default Text;
