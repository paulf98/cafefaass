import { storyblokEditable, renderRichText } from '@storyblok/react';

const Text = ({ blok }: any) => {
  return (
    <div
      className={['my-8 prose mx-auto md:text-xl', blok.alignment].join(' ')}
      {...storyblokEditable(blok)}
      dangerouslySetInnerHTML={{ __html: renderRichText(blok.text) }}
    ></div>
  );
};

export default Text;
