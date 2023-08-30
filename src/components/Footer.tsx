import Image from 'next/image';
import Link from 'next/link';
import { RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className='footer footer-center flex flex-col p-4 py-8 sm:p-10 text-base-100 z-40 bg-gradient-to-tr from-pink-900 via-primary to-pink-500'>
      <div className='flex flex-col md:flex-row flex-wrap max-w-prose justify-around gap-4 text-lg w-full'>
        <div className='flex flex-col justify-start items-start'>
          <Link className='link link-hover' href={'/impressum'}>
					Impressum
          </Link>
          <Link className='link link-hover' href={'/datenschutz'}>
					Datenschutz
          </Link>
        </div>
        <div className='flex justify-center gap-4'>
          <Link
            href={'https://www.facebook.com/cafefaass'}
          >
            <RiFacebookBoxFill size={48} />
          </Link>
          <Link href={'https://www.instagram.com/cafefaass/'}>
            <RiInstagramFill size={48} />
          </Link>
        </div>
        <Image src='/Logo.png' width={128} height={128} alt='Logo' className='rounded-xl'/>
      </div>
      <div>
        <p className='italic'>
					Copyright © {new Date().getFullYear()} - Café Faass -{' '}
          <a
            href='https://paulf.dev'
            className='link link-hover
					italic
					text-base-100
					text-sm
					'
            target={'_blank'} rel="noreferrer"
          >
						Technische Umsetzung &amp; Design: Paul Faass
          </a>
        </p>
      </div>
    </footer>
  );
}
