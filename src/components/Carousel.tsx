import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const Carousel = ({ blok }: any) => {
  return (
    <div className="flex justify-center gap-8 flex-wrap sm:flex-nowrap w-full rounded-box mx-auto prose my-8 " {...storyblokEditable(blok)}>
      {blok.images.map((image: any, index: number) => {
        return <Image 
          key={index}
          src={image.filename} 
          alt={image.alt}
          className="m-0 rounded object-fit"
          loading="lazy" 
          width={225}
          height={160}
        />
      })
      }
    </div>
  );
};
 
export default Carousel;