'use client';
import { StoryblokComponent } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/Logo.svg';
import { useEffect } from 'react';

const Config = ({ blok, children }: any) => {
  // remove the open attribute from all details elements if one is clicked
  useEffect(() => {
    const details = document.querySelectorAll('details');

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener('click', () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute('open');
          }
        });
      });
    });
  }, []);

  return (
    <div className="drawer">
      <input className="drawer-toggle" id="mobile-menu-drawer" type="checkbox" />
      <div className="drawer-content flex flex-col overflow-x-hidden">
        <nav className="navbar fixed z-50 w-full border-b bg-base-100">
          <div className="flex-none lg:hidden">
            <label htmlFor="mobile-menu-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link href={'/'} className="btn btn-ghost text-xl normal-case">
            <Image src={Logo} alt="Cafe Faass" width={40} />
            <span className="ml-4">Startseite</span>
          </Link>
          {/* The Top Navbar */}
          <ul className="menu hidden flex-1 items-center justify-center lg:menu-horizontal md:w-0 lg:flex lg:gap-4">
            {blok.navigation.map((nestedBlok: any) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}>
                {children}
              </StoryblokComponent>
            ))}
          </ul>
          <Link
            className="btn-primary btn ml-auto hidden sm:inline-flex"
            href={'/kontakt'}
          >
            Kontakt
          </Link>
        </nav>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="mobile-menu-drawer" className="drawer-overlay"></label>
        {/* The Mobile SideNavbar */}
        <ul className="menu h-full w-80 flex-nowrap overflow-y-auto bg-base-100 p-4 pt-16">
          {blok.navigation.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}>
              {children}
            </StoryblokComponent>
          ))}
          <li className="mt-auto sm:hidden">
            <Link className=" btn-primary btn content-center" href={'/kontakt'}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Config;
