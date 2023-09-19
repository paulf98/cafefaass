import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from '@storyblok/react';
// Content blocks
import Article from '../components/content/Article';
import Config from '../components/content/Config';
import Page from '../components/content/Page';
import Torte from '../components/content/Torte';
// Components
import Grid from '../components/Grid';
import Headline from '../components/Headline';
import Text from '../components/Text';
import Carousel from '../components/Carousel';
import ArticleTeaser from '../components/ArticleTeaser';
import News from '../components/News';
import MenuLink from '../components/MenuLink';
import Layout from '../components/Layout';
import Img from '../components/Image';
import Video from '../components/Video';
import MenuLinkWithSubmenu from '../components/MenuLinkWithSubmenu';
import SubmenuItem from '../components/SubmenuItem';
import Banner from '../components/Banner';
import Brot from '../components/Brot';
import Tortenliste from '../components/Tortenliste';
import ImageGallery from '../components/ImageGallery';
import Brotkalender from '../components/Brotkalender';
import BrotkalenderItem from '../components/BrotkalenderItem';
import Stellenangebote from '../components/Stellenangebote';
import StellenangebotTeaser from '../components/StellenangebotTeaser';
import Stellenangebot from '../components/content/Stellenangebot';

const contentBlocks = {
  article: Article,
  config: Config,
  page: Page,
  torte: Torte,
};

const components = {
  articleTeaser: ArticleTeaser,
  banner: Banner,
  brot: Brot,
  brotkalender: Brotkalender,
  brotkalender_item: BrotkalenderItem,
  grid: Grid,
  news: News,
  headline: Headline,
  text: Text,
  carousel: Carousel,
  img: Img,
  image_gallery: ImageGallery,
  menu_link: MenuLink,
  menu_link_with_submenu: MenuLinkWithSubmenu,
  stellenangebote: Stellenangebote,
  stellenangebot: Stellenangebot,
  stellenangebote_teaser: StellenangebotTeaser,
  submenu_item: SubmenuItem,
  tortenliste: Tortenliste,
  video: Video,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: { ...contentBlocks, ...components },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout story={pageProps.config}>
      <Component {...pageProps} />
    </Layout>
  );
}
