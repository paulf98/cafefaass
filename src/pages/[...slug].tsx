import Head from "next/head";
 
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStoryParams,
} from "@storyblok/react";
 
export default function Page({ story }: any) {
  story = useStoryblokState(story, {
    resolveRelations: ['news.articles'],
  });
 
  return (
    <>
      <Head>
        <title>Café Faass - {story ? story.name : ""}</title>
      </Head>
      <div>
        <StoryblokComponent blok={story.content} />
      </div>
    </>
  );
}
 
export async function getStaticProps({ params }: any) {
  const slug = params.slug ? params.slug.join("/") : "home";
 
  const sbParams: ISbStoryParams = {
    version: process.env.STORYBLOK_STORY_VERSION as ('draft' | 'published') || 'published', 
    resolve_relations: ['news.articles'],
    resolve_links: 'url',
  };
 
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  const { data: config } = await storyblokApi.get('cdn/stories/config'); 
 
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
  const { data } = await storyblokApi.get("cdn/links/" ,{
    version: 'draft'
  });
 
  const paths: any[] = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }
 
    const slug = data.links[linkKey].slug;
    const splittedSlug = slug.split("/");
 
    paths.push({ params: { slug: splittedSlug } });
  });
 
  return {
    paths: paths,
    fallback: false,
  };
}