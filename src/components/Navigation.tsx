import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Navigation = ({blok}: any) => (
  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10" {...storyblokEditable({blok})}>
    {blok.links.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
)
export default Navigation