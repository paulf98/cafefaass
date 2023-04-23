import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/Logo.svg';
import Sidebar from "./Sidebar";

const Config = ({blok, children}: any) => {
  return (
    // <div className="w-full fixed navbar bg-white border-b-2 z-50" {...storyblokEditable(blok)}>
    //     <div className="flex justify-around items-center py-6 md:justify-start md:space-x-10">
    //         <Link href={'/'} className='btn btn-ghost normal-case text-xl'>
    //             <Image src={Logo} alt='Cafe Faass' width={40} height={40} />
    //             <span className='ml-4'>Startseite</span>
    //         </Link>
            
    //         <div className="flex flex-1 justify-center gap-8">

    //       {blok.navigation.map((nestedBlok: any) => (
    //           <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}>
    //             {children}
    //             </StoryblokComponent>
    //       ))}
    //       </div>
    //       <Link
    //         className='btn btn-primary ml-auto hidden lg:inline-flex'
    //         href={'/kontakt'}
    //         >
    //         Kontakt
    //     </Link>
    //         </div>
    //   </div>
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
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='inline-block w-6 h-6 stroke-current'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16M4 18h16'
                        ></path>
                    </svg>
                </label>
            </div>
            <Link href={'/'} className='btn btn-ghost normal-case text-xl'>
                <Image src={Logo} alt='Cafe Faass' width={40} height={40} />{' '}
                <span className='ml-4'>Startseite</span>
            </Link>
            {/* DESKTOP NAVIGATION */}
            <div className='flex-none hidden lg:block ml-auto w-100'>
                <ul className='menu menu-horizontal bg-base-100 rounded-box p-2 z-50'>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10" {...storyblokEditable({blok})}>
                          {blok.navigation.map((nestedBlok: any) => (
               <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}>
    
                 {children}
                 </StoryblokComponent>
           ))}
                    </div>
                </ul>
                
            </div>
            <Link
                className='btn btn-primary ml-auto hidden lg:inline-flex'
                href={'/kontakt'}
            >
                Kontakt
            </Link>
        </div>
        <div className='mt-20 lg:flex'>
            <Sidebar />
            {children}
        </div>
    </div>
    <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        {/* MOBILE NAVIGATION */}
    </div>
</div>
  );
};
export default Config;