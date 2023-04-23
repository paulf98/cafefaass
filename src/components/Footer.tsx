import Link from 'next/link';
import { RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className='footer footer-center p-4 py-8 sm:p-10 bg-primary text-base-100 z-50'>
      <div className='flex flex-wrap justify-center gap-4 text-lg'>
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
