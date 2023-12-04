import { storyblokEditable } from '@storyblok/react';
import Heading from './atoms/Heading';

export default function Headline({ blok }: any) {
  return <Heading id={blok._uid} text={blok.headline} {...storyblokEditable(blok)} />;
}
