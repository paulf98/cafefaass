import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import { type GridStoryblok } from '../types/component-types-sb';

const Grid = ({ blok }: GridStoryblok) => {
  return (
    <div className="grid grid-cols-3 " {...storyblokEditable(blok)}>
      {blok.columns &&
        blok.columns.map((nestedBlok: any) => (
          <div key={nestedBlok._uid} className="flex justify-center">
            <StoryblokComponent blok={nestedBlok} />
          </div>
        ))}
    </div>
  );
};

export default Grid;
