import { StoryblokComponent } from '@storyblok/react';
import { useRouter } from 'next/router';

const MenuLinkWithSubmenu = ({ blok }: any) => {
  const router = useRouter();

  const isActive = router.asPath.startsWith(
    '/' + blok.items[0].link.cached_url
  );
  console.log(isActive)

  return (
    <li>
      <details
        onBlur={(e) => {
          const target = e.target as HTMLDetailsElement;
          target.removeAttribute('open');
        }}
      >
        <summary>{blok.name}</summary>
        <ul>
          {blok.items.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}  />
          ))}
        </ul>
      </details>
    </li>
  );
};
export default MenuLinkWithSubmenu;

