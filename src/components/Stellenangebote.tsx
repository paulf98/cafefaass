'use client';
import { storyblokEditable } from '@storyblok/react';
import StellenangebotTeaser from './StellenangebotTeaser';
import { type StellenangebotStoryblok } from '../../component-types-sb';

export default function Stellenangebote(blok: StellenangebotStoryblok) {
  console.log(blok);
  return (
    <div className="mx-auto mb-4 max-w-screen-xl py-8">
      <div
        className="mx-auto flex w-full flex-wrap justify-around gap-6 px-4 md:px-8"
        {...storyblokEditable(blok)}
      >
        {blok.stellenangebote.length > 0 &&
          blok.stellenangebote.map((stellenangebot: any) => {
            console.log(stellenangebot);
            stellenangebot.content.slug = stellenangebot.slug;
            if (stellenangebot.content.aktiv === false) return null;
            return (
              <StellenangebotTeaser
                stellenangebot={stellenangebot.content}
                key={stellenangebot.uuid}
                _uid={stellenangebot.uuid}
                component={'stellenangebote'}
              />
            );
          })}
      </div>
    </div>
  );
}
