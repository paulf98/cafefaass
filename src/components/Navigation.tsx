import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

const Navigation = ({ blok }: any) => (
  <div {...storyblokEditable({ blok })}>
    {blok.links.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);
export default Navigation;
