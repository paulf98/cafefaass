import Image from 'next/image';
import { Kalam } from 'next/font/google';

const headlineFont = Kalam({ subsets: ['latin'], weight: '700' });

export default function Brot({ blok }: any) {
  return (
    <li className="mx-auto mt-8 flex max-w-prose flex-col gap-4 rounded-md border shadow-sm sm:flex-row even:sm:flex-row-reverse">
      <Image
        src={blok.image.filename}
        alt={blok.image.alt}
        width={200}
        height={200}
        className="w-full rounded-md"
      />
      <div className="flex flex-col justify-around gap-4 p-4">
        <h1
          className={[headlineFont.className, 'text-3xl text-primary font-bold'].join(
            ' ',
          )}
        >
          {blok.name}
        </h1>
        <p className="text-lg">{blok.description}</p>
        <p className="text-sm italic text-gray-400">Allergene: {blok.allergene}</p>
      </div>
    </li>
  );
}
