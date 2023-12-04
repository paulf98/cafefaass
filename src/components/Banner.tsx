import Image from 'next/image';

/**
 * A full width banner image.
 */
export default function Banner({ blok }: any) {
  return (
    <Image
      src={blok.image.filename}
      alt={blok.image.alt}
      loading="eager"
      priority={true}
      width={480}
      height={270}
      style={{
        objectFit: 'contain',
      }}
      className="mx-auto mb-12 h-auto w-full max-w-prose"
    />
  );
}
