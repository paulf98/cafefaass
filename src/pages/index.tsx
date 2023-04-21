import Head from "next/head"
 
import { ISbStoryParams, StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react"
import Layout from "../components/Layout";
 
export default function Home({story}: any) {

  story = useStoryblokState(story, {
      resolveRelations: ['news.articles'],
  });

  return (
    <div>
      <Head>
        <title>Café Faass - Lemberg</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  )
}
 
export async function getServerSideProps(context: any) {
  // get the query object
  const insideStoryblok = context.query._storyblok;
 
  let slug = "home";
 
  let sbParams: ISbStoryParams = {
    version: "published", // or 'draft'
    resolve_relations: ['news.articles'],
  };
 
  if (insideStoryblok) {
    sbParams.version = "draft";
  }
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
}