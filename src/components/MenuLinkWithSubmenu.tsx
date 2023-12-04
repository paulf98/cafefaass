import { StoryblokComponent } from '@storyblok/react';
import { useRouter } from 'next/router';
import { type MenuLinkWithSubmenuStoryblok } from '../../component-types-sb';

const MenuLinkWithSubmenu = (blok: MenuLinkWithSubmenuStoryblok) => {
  const router = useRouter();

  const isActive =
    blok.items &&
    (router.asPath + '/').startsWith('/' + blok.items[0].link?.cached_url || '/');

  return (
    <li>
      <details
        onBlur={(e) => {
          const target = e.target as HTMLDetailsElement;
          target.removeAttribute('open');
        }}
      >
        <summary className={[isActive && 'bg-gray-200'].join(' ')}>{blok.name}</summary>
        <ul>
          {blok.items &&
            blok.items.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </ul>
      </details>
    </li>
  );
};
export default MenuLinkWithSubmenu;
