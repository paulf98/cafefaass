import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Teaser from '../components/Teaser';
import Page from '../components/Page';
import Text from '../components/Text';
import Carousel from '../components/Carousel';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  text: Text,
  carousel: Carousel,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
