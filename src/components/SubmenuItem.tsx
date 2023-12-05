import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { type SubmenuItemStoryblok } from '../types/component-types-sb';

export default function SubmenuItem({ blok }: { blok: SubmenuItemStoryblok }) {
  const router = useRouter();

  const isActive = router.asPath === '/' + blok.link?.cached_url;

  return (
    <li>
      <Link
        href={blok.link?.cached_url || '/'}
        {...storyblokEditable(blok)}
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
}
