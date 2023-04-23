import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Page = ({ blok }: any) => {
  if (!blok || !blok.body) {
    return <div>Loading...</div>;
  }
  return (
    <main className="py-8 ml-[320px] mt-20" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
};
 
export default Page;