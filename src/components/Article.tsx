import { renderRichText } from "@storyblok/react";
 
const Article = ({ blok }: any) => {
  return (
    <section className="text-gray-600 body-font">
        <header
  className="flex items-center justify-center h-64 mb-12 bg-fixed bg-top bg-no-repeat bg-contain custom-img"
    style={{
        backgroundImage: `url(${blok.image.filename})`,
    }}
>
  <div className="p-5 text-2xl text-white bg-white bg-opacity-70 rounded-xl">
    <h1 className="sm:text-4xl text-3xl font-medium text-gray-700">
        {blok.title}
    </h1>
  </div>
</header>
      <div className="prose mx-auto text-center">
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