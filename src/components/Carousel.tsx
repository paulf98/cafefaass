import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const Carousel = ({ blok }: any) => {
  return (
    <div className="carousel rounded-box mx-auto prose my-4 carousel-center p-4 space-x-4 bg-pink-100" {...storyblokEditable(blok)}>
      {blok.images.map((image: any, index: number) => {
        return <div className="carousel-item relative w-52 h-40" key={index}>
          <Image src={image.filename} alt={image.alt}
            fill={true}
            className="m-0 rounded-box object-fill"
            loading="lazy" 
          />
        </div>
      })
      }
    </div>
  );
};
 
export default Carousel;