import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/Logo.svg';

const Config = ({blok, children}: any) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex- flex-col overflow-x-hidden">
        <nav className="w-full navbar border-b bg-base-100 fixed z-50">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <Link href={'/'} className='btn btn-ghost normal-case text-xl'>
            <Image src={Logo} alt='Cafe Faass' width={40} height={40} />{' '}
            <span className='ml-4'>Startseite</span>
          </Link>
          <div className="hidden lg:flex justify-center flex-1">
            {blok.navigation.map((nestedBlok: any) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}>
                {children}
              </StoryblokComponent>
            ))}
          </div>
          <Link
            className='btn btn-primary ml-auto hidden sm:inline-flex'
            href={'/kontakt'}>
               Kontakt
          </Link>
        </nav>
        {children}
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay bg-primary!"></label> 
        <ul className="menu p-4 w-80 bg-base-100">
          {blok.navigation.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}>
              {children}
            </StoryblokComponent>
          ))}
          <li className='mt-auto'>
            <Link className='sm:hidden btn btn-primary ' href={'/kontakt'}>
							Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Config;