import { storyblokEditable } from '@storyblok/react';
import TorteTeaser from './TorteTeaser';
import Heading from './atoms/Heading';
import { type TortenlisteStoryblok } from '../types/component-types-sb';

export default function Tortenliste({ blok }: { blok: TortenlisteStoryblok }) {
  if (!blok.torten) return null;
  return (
    <div className="mx-auto mb-4 max-w-screen-xl py-8" {...storyblokEditable(blok)}>
      <Heading id={blok._uid} text={'Torten'} />
      <div className="mx-auto my-16 flex w-full flex-wrap justify-around gap-6 px-4 md:px-8">
        {blok.torten.map((torte) => {
          if (typeof torte === 'string') return null;
          torte.content.slug = torte.slug;
          return <TorteTeaser blok={torte.content} key={torte.uuid} />;
        })}
      </div>
    </div>
  );
}
