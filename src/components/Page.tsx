import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Page = ({ blok }: any) => {
  if (!blok || !blok.body) {
    return <div>Loading...</div>;
  }
  return (
    <main className="relative lg:ml-80 py-10 px-4 mt-16 min-h-screen" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
};
 
export default Page;