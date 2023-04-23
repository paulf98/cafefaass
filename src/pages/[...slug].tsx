import Head from "next/head";
import Layout from "../components/Layout";
 
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStoryParams,
} from "@storyblok/react";
 
export default function Page({ story }: any) {
  story = useStoryblokState(story);
 
  return (
    <div >
      <Head>
        <title>Café Faass - {story ? story.name : ""}</title>
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}
 
export async function getStaticProps({ params }: any) {
  let slug = params.slug ? params.slug.join("/") : "home";
 
  let sbParams: ISbStoryParams = {
    version: "draft", // or 'published'
    resolve_links: 'url',
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get('cdn/stories/config'); 
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}
 
export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/" ,{
    version: 'draft'
  });
 
  let paths: any[] = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }
 
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
 
    paths.push({ params: { slug: splittedSlug } });
  });
 
  return {
    paths: paths,
    fallback: false,
  };
}