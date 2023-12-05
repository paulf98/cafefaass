import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type MenuLinkStoryblok } from '../types/component-types-sb';

const MenuLink = ({ blok }: { blok: MenuLinkStoryblok }) => {
  const router = useRouter();

  // need to prepend a slash to the cached_url, otherwise the comparison will fail
  const isActive = router.asPath === '/' + blok.link?.cached_url;
  return (
    <li>
      <Link
        {...storyblokEditable(blok)}
        href={blok.link?.cached_url || '/'}
        onClick={() => {
          // close the drawer by clicking the checkbox element with ID: mobile-menu-drawer
          const checkbox = document.getElementById(
            'mobile-menu-drawer',
          ) as HTMLInputElement;
          checkbox.checked = false;

          const details = document.querySelectorAll('details');

          // Add the onclick listeners.
          details.forEach((targetDetail) => {
            // Close all the details that are not targetDetail.
            details.forEach((detail) => {
              if (detail !== targetDetail) {
                detail.removeAttribute('open');
              }
            });
          });
        }}
        className={[isActive && 'bg-gray-200'].join(' ')}
      >
        {blok.name}
      </Link>
    </li>
  );
};
export default MenuLink;
