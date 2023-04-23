import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/Logo.svg';
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Config = ({blok, children}: any) => {
  return (
    <div className='drawer'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
        aria-label='Toggle button'
      />
      <div className='drawer-content'>
        <div className='w-full fixed navbar bg-white border-b-2 z-50'>
          <div className='flex-none lg:hidden'>
            <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
              <AiOutlineMenu />
            </label>
          </div>
          <Link href={'/'} className='btn btn-ghost normal-case text-xl'>
            <Image src={Logo} alt='Cafe Faass' width={40} height={40} />{' '}
            <span className='ml-4'>Startseite</span>
          </Link>
          {/* DESKTOP NAVIGATION */}
          <div className='flex-none hidden lg:block ml-auto w-100'>
            <ul className='menu menu-horizontal bg-base-100 rounded-box p-2 z-50'>
              {blok.navigation.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}>
                  {children}
                </StoryblokComponent>
              ))}
            </ul>
                
          </div>
          <Link
            className='btn btn-primary ml-auto hidden lg:inline-flex'
            href={'/kontakt'}
          >
                Kontakt
          </Link>
        </div>
        <div className="relative">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
};
export default Config;