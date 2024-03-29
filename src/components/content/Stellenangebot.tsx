'use client';
import { type StellenangebotStoryblok } from '../../types/component-types-sb';
import Headline from '../Headline';
import { StoryblokComponent } from '@storyblok/react';

export default function Stellenangebot({ blok }: { blok: StellenangebotStoryblok }) {
  return (
    <main className="relative mt-16 min-h-screen px-4 py-10 lg:ml-80">
      {blok.name && blok.name.length > 0 && <Headline blok={blok.name[0]} />}
      {blok.content &&
        blok.content.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </main>
  );
}
