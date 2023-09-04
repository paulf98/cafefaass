import { storyblokEditable } from '@storyblok/react';

export default function Video({ blok }: any) {
  return (
    <div className="mx-auto w-full max-w-prose py-4" {...storyblokEditable(blok)}>
      <iframe
        src={blok.link.url}
        className="h-80 w-full rounded-md shadow-md hover:shadow-xl"
      ></iframe>
    </div>
  );
}
