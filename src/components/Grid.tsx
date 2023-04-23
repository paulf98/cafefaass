import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Grid = ({ blok }: any) => {
  return (
    <div className="grid grid-cols-3 " {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok: any) => (
        <div key={nestedBlok._uid} className="flex justify-center">
          <StoryblokComponent blok={nestedBlok} />
        </div>
      ))}
    </div>
  );
};
 
export default Grid;