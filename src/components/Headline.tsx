import { storyblokEditable } from '@storyblok/react';
import Heading from './atoms/Heading';
import { type HeadlineStoryblok } from '../types/component-types-sb';

export default function Headline({ blok }: HeadlineStoryblok) {
  return <Heading id={blok._uid} text={blok.headline} {...storyblokEditable(blok)} />;
}
