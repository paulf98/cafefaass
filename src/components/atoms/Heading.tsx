'use client';
import { Kalam } from 'next/font/google';
import { useEffect } from 'react';
import { annotate } from 'rough-notation';

const headlineFont = Kalam({ subsets: ['latin'], weight: '700' });

export default function Heading({ id, text }: { id: string; text: string }) {
  useEffect(() => {
    const e = document.getElementById(id);
    if (!e) return;
    const annotation = annotate(e as HTMLElement, {
      type: 'underline',
      color: '#1EAE9B',
    });
    annotation.show();
  }, []);

  return (
    <h2
      id={id}
      className={[
        'text-5xl my-6 font-bold w-fit mx-auto text-primary',
        headlineFont.className,
      ].join(' ')}
    >
      {text}
    </h2>
  );
}
