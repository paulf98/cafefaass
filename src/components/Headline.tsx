import { storyblokEditable } from '@storyblok/react';
import { Kalam } from 'next/font/google';
import { useEffect } from 'react';
import { annotate } from 'rough-notation';

const headlineFont = Kalam({ subsets: ['latin'], weight: '700' });

export default function Headline({ blok }: any) {
  
  useEffect(() => {
    const e = document.getElementById(blok._uid);
    const annotation = annotate(e as HTMLElement, { type: 'underline', color: '#1EAE9B' });
    annotation.show();
  }, []);

  return (
    <h2
      id={blok._uid}
      className={[
        'text-5xl my-6 font-bold w-fit mx-auto text-primary',
        headlineFont.className,
      ].join(' ')}
      {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
}
