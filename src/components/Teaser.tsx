import { storyblokEditable } from "@storyblok/react";
 
const Teaser = ({ blok }: any) => {
  return <h2 className="text-5xl mb-6 text-center font-bold" {...storyblokEditable(blok)}>{blok.headline}</h2>;
};
 
export default Teaser;