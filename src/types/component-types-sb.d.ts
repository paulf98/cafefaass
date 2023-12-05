import { StoryblokStory } from 'storyblok-generate-ts';

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface ArticleStoryblok {
  title?: string;
  subtitle?: string;
  image?: AssetStoryblok;
  text?: RichtextStoryblok;
  teaser?: string;
  _uid: string;
  component: 'article';
  [k: string]: any;
}

export interface BannerStoryblok {
  image: AssetStoryblok;
  _uid: string;
  component: 'banner';
  [k: string]: any;
}

export interface BrotStoryblok {
  name?: string;
  description?: string;
  allergene?: string;
  image?: AssetStoryblok;
  show?: boolean;
  _uid: string;
  component: 'brot';
  [k: string]: any;
}

export interface BrotkalenderStoryblok {
  items?: BrotkalenderItemStoryblok[];
  _uid: string;
  component: 'brotkalender';
  [k: string]: any;
}

export interface BrotkalenderItemStoryblok {
  name?: string;
  wochentage?: ('' | 'mo' | 'di' | 'mi' | 'do' | 'fr' | 'sa' | 'so')[];
  vorbestellung?: boolean;
  _uid: string;
  component: 'brotkalender_item';
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface CarouselStoryblok {
  images?: MultiassetStoryblok;
  _uid: string;
  component: 'carousel';
  [k: string]: any;
}

export interface ConfigStoryblok {
  navigation?: (MenuLinkStoryblok | MenuLinkWithSubmenuStoryblok)[];
  _uid: string;
  component: 'config';
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (
    | ArticleStoryblok
    | BannerStoryblok
    | BrotStoryblok
    | BrotkalenderStoryblok
    | BrotkalenderItemStoryblok
    | CarouselStoryblok
    | ConfigStoryblok
    | GridStoryblok
    | HeadlineStoryblok
    | ImageGalleryStoryblok
    | ImgStoryblok
    | MenuLinkStoryblok
    | MenuLinkWithSubmenuStoryblok
    | NewsStoryblok
    | PageStoryblok
    | StellenangebotStoryblok
    | StellenangeboteStoryblok
    | SubmenuItemStoryblok
    | TextStoryblok
    | TorteStoryblok
    | TortenlisteStoryblok
    | VideoStoryblok
  )[];
  _uid: string;
  component: 'grid';
  [k: string]: any;
}

export interface HeadlineStoryblok {
  headline?: string;
  _uid: string;
  component: 'headline';
  [k: string]: any;
}

export interface ImageGalleryStoryblok {
  images?: MultiassetStoryblok;
  _uid: string;
  component: 'image_gallery';
  [k: string]: any;
}

export interface ImgStoryblok {
  image?: AssetStoryblok;
  _uid: string;
  component: 'img';
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'story';
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'asset' | 'url';
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: 'email';
      [k: string]: any;
    };

export interface MenuLinkStoryblok {
  name?: string;
  link?: Exclude<MultilinkStoryblok, { linktype?: 'email' } | { linktype?: 'asset' }>;
  _uid: string;
  component: 'menu_link';
  [k: string]: any;
}

export interface MenuLinkWithSubmenuStoryblok {
  name?: string;
  items: SubmenuItemStoryblok[];
  _uid: string;
  component: 'menu_link_with_submenu';
  [k: string]: any;
}

export interface NewsStoryblok {
  title?: string;
  articles?: (StoryblokStory<ArticleStoryblok> | string)[];
  _uid: string;
  component: 'news';
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | ArticleStoryblok
    | BannerStoryblok
    | BrotStoryblok
    | BrotkalenderStoryblok
    | BrotkalenderItemStoryblok
    | CarouselStoryblok
    | ConfigStoryblok
    | GridStoryblok
    | HeadlineStoryblok
    | ImageGalleryStoryblok
    | ImgStoryblok
    | MenuLinkStoryblok
    | MenuLinkWithSubmenuStoryblok
    | NewsStoryblok
    | PageStoryblok
    | StellenangebotStoryblok
    | StellenangeboteStoryblok
    | SubmenuItemStoryblok
    | TextStoryblok
    | TorteStoryblok
    | TortenlisteStoryblok
    | VideoStoryblok
  )[];
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: any;
}

export interface StellenangebotStoryblok {
  name?: HeadlineStoryblok[];
  content?: (
    | ArticleStoryblok
    | BannerStoryblok
    | BrotStoryblok
    | BrotkalenderStoryblok
    | BrotkalenderItemStoryblok
    | CarouselStoryblok
    | ConfigStoryblok
    | GridStoryblok
    | HeadlineStoryblok
    | ImageGalleryStoryblok
    | ImgStoryblok
    | MenuLinkStoryblok
    | MenuLinkWithSubmenuStoryblok
    | NewsStoryblok
    | PageStoryblok
    | StellenangebotStoryblok
    | StellenangeboteStoryblok
    | SubmenuItemStoryblok
    | TextStoryblok
    | TorteStoryblok
    | TortenlisteStoryblok
    | VideoStoryblok
  )[];
  bild?: AssetStoryblok;
  aktiv?: boolean;
  _uid: string;
  component: 'stellenangebot';
  [k: string]: any;
}

export interface StellenangeboteStoryblok {
  stellenangebote?: (StoryblokStory<StellenangebotStoryblok> | string)[];
  _uid: string;
  component: 'stellenangebote';
  [k: string]: any;
}

export interface SubmenuItemStoryblok {
  name?: string;
  link?: Exclude<MultilinkStoryblok, { linktype?: 'email' } | { linktype?: 'asset' }>;
  _uid: string;
  component: 'submenu_item';
  [k: string]: any;
}

export interface TextStoryblok {
  text?: RichtextStoryblok;
  alignment?: '' | 'text-center' | 'text-left' | 'text-justify';
  _uid: string;
  component: 'text';
  [k: string]: any;
}

export interface TorteStoryblok {
  title?: string;
  images?: MultiassetStoryblok;
  text?: RichtextStoryblok;
  teaser_img?: AssetStoryblok;
  teaser?: string;
  text_justify?: '' | 'text-left' | 'text-center' | 'text-justify';
  _uid: string;
  component: 'torte';
  [k: string]: any;
}

export interface TortenlisteStoryblok {
  torten?: (StoryblokStory<TorteStoryblok> | string)[];
  _uid: string;
  component: 'tortenliste';
  [k: string]: any;
}

export interface VideoStoryblok {
  link?: Exclude<MultilinkStoryblok, { linktype?: 'email' } | { linktype?: 'asset' }>;
  _uid: string;
  component: 'video';
  [k: string]: any;
}
