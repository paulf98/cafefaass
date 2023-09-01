"use client";
import { StoryblokComponent } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/Logo.svg';
import { useEffect } from 'react';

const Config = ({ blok, children }: any) => {
  // remove the open attribute from all details elements if one is clicked
  useEffect(() => {
    const details = document.querySelectorAll("details");

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }, [])

  return (
    <div className='drawer'>
      <input
        className='drawer-toggle'
        id='mobile-menu-drawer'
        type='checkbox'
      />
      <div className='drawer-content flex flex- flex-col overflow-x-hidden'>
        <nav className='w-full navbar border-b bg-base-100 fixed z-50'>
          <div className='flex-none lg:hidden'>
            <label
              htmlFor='mobile-menu-drawer'
              className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </label>
          </div>
          <Link href={'/'} className='btn btn-ghost normal-case text-xl'>
            <Image src={Logo} alt='Cafe Faass' width={40} />
            <span className='ml-4'>Startseite</span>
          </Link>

          {/* The Top Navbar */}
          <ul className='menu lg:menu-horizontal hidden lg:flex flex-1 items-center justify-center md:w-0 lg:gap-4'>
            {blok.navigation.map((nestedBlok: any) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}>
                {children}
              </StoryblokComponent>
            ))}
          </ul>

          <Link
            className='btn btn-primary ml-auto hidden sm:inline-flex'
            href={'/kontakt'}>
						Kontakt
          </Link>
        </nav>
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='mobile-menu-drawer' className='drawer-overlay'></label>

        {/* The Mobile SideNavbar */}
        <ul className='menu p-4 w-80 h-full overflow-y-auto flex-nowrap bg-base-100 pt-16'>
          {blok.navigation.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}>
              {children}
            </StoryblokComponent>
          ))}
          <li className='sm:hidden mt-auto'>
            <Link className=' btn btn-primary' href={'/kontakt'}>
							Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Config;
