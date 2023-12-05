'use client';
import { storyblokEditable } from '@storyblok/react';
import StellenangebotTeaser from './StellenangebotTeaser';
import { type StellenangeboteStoryblok } from '../types/component-types-sb';

export default function Stellenangebote({ blok }: { blok: StellenangeboteStoryblok }) {
  return (
    <div className="mx-auto mb-4 max-w-screen-xl py-8">
      <div
        className="mx-auto flex w-full flex-wrap justify-around gap-6 px-4 md:px-8"
        {...storyblokEditable(blok)}
      >
        {blok.stellenangebote &&
          blok.stellenangebote.length > 0 &&
          blok.stellenangebote.map((stellenangebot) => {
            if (typeof stellenangebot === 'string') return null;
            stellenangebot.content.slug = stellenangebot.slug;
            if (stellenangebot.content.aktiv === false) return null;
            return (
              <StellenangebotTeaser
                blok={stellenangebot.content}
                key={stellenangebot.uuid}
              />
            );
          })}
      </div>
    </div>
  );
}
