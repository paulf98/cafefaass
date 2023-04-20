import Head from "next/head"
 
import { ISbStoryParams, StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react"
 
export default function Home({story}: any) {

  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header>
 
      <StoryblokComponent blok={story.content} />

    </div>
  )
}
 
export async function getServerSideProps(context: any) {
  // get the query object
  const insideStoryblok = context.query._storyblok;
 
  let slug = "home";
 
  let sbParams: ISbStoryParams = {
    version: "published", // or 'draft'
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