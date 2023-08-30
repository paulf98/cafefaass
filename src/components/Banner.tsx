import Image from "next/image";

/**
 * A full width banner image.
 */
export default function Banner ({ blok }: any)  {
  return (
    <Image 
      src={blok.image.filename} 
      alt={blok.image.alt}
      loading="eager"
      width={480}
      height={270}
      style={{
        objectFit: 'contain',
      }}
      className="w-full max-w-prose mx-auto h-auto mb-12"
    />
      
  );
}
 
