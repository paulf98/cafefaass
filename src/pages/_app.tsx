import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Teaser from '../components/Teaser';
import Page from '../components/Page';
import Text from '../components/Text';
import Carousel from '../components/Carousel';
import Article from '../components/Article';
import ArticleTeaser from '../components/ArticleTeaser';
import News from '../components/News';
import Config from '../components/Config';
import MenuLink from '../components/MenuLink';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Img from '../components/Image';
import Video from '../components/Video';
import MenuLinkWithSubmenu from '../components/MenuLinkWithSubmenu';
import SubmenuItem from '../components/SubmenuItem';

const components = {
  article: Article,
  articleTeaser: ArticleTeaser,
  config: Config,
  feature: Feature,
  grid: Grid,
  news: News,
  navigation: Navigation,
  teaser: Teaser,
  page: Page,
  text: Text,
  carousel: Carousel,
  img: Img,
  video: Video,
  menu_link: MenuLink,
  menu_link_with_submenu: MenuLinkWithSubmenu,
  submenu_item: SubmenuItem,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout story={pageProps.config}>
      <Component {...pageProps} />
    </Layout>
  );
}
