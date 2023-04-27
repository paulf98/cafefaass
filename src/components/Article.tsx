import { renderRichText } from "@storyblok/react";
import Image from "next/image";
 
const Article = ({ blok }: any) => {
  return (
    <section className="lg:ml-[320px] mt-16 min-h-screen">
      <header
        className="flex items-center justify-center h-72 mb-12 relative"
      >
        <Image 
          src={blok.image.filename}
          alt={blok.image.alt}
          width={800}
          height={400}
          style={
            { objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }

          }
        />
        <div className="p-5 text-2xl text-white bg-white bg-opacity-70 rounded-xl absolute right-auto left-auto">
          <h1 className="sm:text-4xl text-3xl font-medium text-gray-700">
            {blok.title}
          </h1>
        </div>
      </header>
      <div className="px-4 prose mx-auto text-center">
        <div className="text-center w-full">
         
          {blok.subtitle && 
            <h2 className="sm:text-3xl text-2xl mb-4 font-medium text-gray-600">
              {blok.subtitle}
            </h2>
          }
          <div className="my-4 text-justify" dangerouslySetInnerHTML={
            { __html: renderRichText(blok.text) }
          }>
          </div>        
        </div>
      </div>
    </section>
  );
};
export default Article;