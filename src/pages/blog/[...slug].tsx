import Head from "next/head";
import Layout from "../../components/Layout";
 
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStoriesParams,
} from "@storyblok/react";
 
export default function Page({ story }: any) {
  story = useStoryblokState(story);
  console.log(story);
  return (
    <div >
      <Head>
        <title>Café Faass - {story ? story.name : ""}</title>
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}
 
export async function getStaticProps({ params }: any) {
  let slug = params.slug ? params.slug.join("/") : "home";
 
  let sbParams: ISbStoriesParams = {
    version: "published", // or 'published',
    starts_with: 'blog/',
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
 
export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/" ,{
    version: 'published',
    starts_with: 'blog/',
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