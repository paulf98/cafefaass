import Image from 'next/image';
import Link from 'next/link';
import { RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="footer footer-center z-40 flex flex-col bg-primary p-4 py-8 text-base-100 sm:p-10">
      <div className="flex w-full max-w-prose flex-col flex-wrap justify-around gap-4 text-lg md:flex-row">
        <Image
          src="/Logo.png"
          width={128}
          height={128}
          alt="Logo"
          className="rounded-xl"
        />
        <div className="flex flex-col items-start gap-1">
          <h4 className="mb-2 text-lg font-bold">Weitere Links</h4>
          <Link className="link-hover link" href={'/geschichte'}>
            Unsere Geschichte
          </Link>
          <Link className="link-hover link" href={'/stellenangebote'}>
            Stellenangebote
          </Link>
          <Link className="link-hover link" href={'/ernaehrung-und-gesundheit'}>
            Ernährung & Gesundheit
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start">
          <Link className="link-hover link" href={'/impressum'}>
            Impressum
          </Link>
          <Link className="link-hover link" href={'/datenschutz'}>
            Datenschutz
          </Link>
          <div className="mt-4 flex justify-center gap-4">
            <Link href={'https://www.facebook.com/cafefaass'}>
              <RiFacebookBoxFill size={48} />
            </Link>
            <Link href={'https://www.instagram.com/cafefaass/'}>
              <RiInstagramFill size={48} />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="italic">
          Copyright © {new Date().getFullYear()} - Café Faass -{' '}
          <a
            href="https://paulf.dev"
            className="link-hover link text-sm italic text-base-100"
            target={'_blank'}
            rel="noreferrer"
          >
            Technische Umsetzung &amp; Design: Paul Faass
          </a>
        </p>
      </div>
    </footer>
  );
}
