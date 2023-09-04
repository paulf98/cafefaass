import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Grid from '../components/Grid';
import Headline from '../components/Headline';
import Page from '../components/content/Page';
import Text from '../components/Text';
import Carousel from '../components/Carousel';
import Article from '../components/content/Article';
import ArticleTeaser from '../components/ArticleTeaser';
import News from '../components/News';
import Config from '../components/content/Config';
import MenuLink from '../components/MenuLink';
import Layout from '../components/Layout';
import Img from '../components/Image';
import Video from '../components/Video';
import MenuLinkWithSubmenu from '../components/MenuLinkWithSubmenu';
import SubmenuItem from '../components/SubmenuItem';
import Banner from '../components/Banner';
import Brot from '../components/Brot';

const components = {
  article: Article,
  articleTeaser: ArticleTeaser,
  banner: Banner,
  brot: Brot,
  config: Config,
  grid: Grid,
  news: News,
  headline: Headline,
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
