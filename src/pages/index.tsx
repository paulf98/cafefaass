import Head from 'next/head';
import {
	ISbStoryParams,
	StoryblokComponent,
	getStoryblokApi,
	useStoryblokState,
} from '@storyblok/react';

export default function Home({ story }: any) {
	story = useStoryblokState(story, {
		resolveRelations: ['news.articles'],
	});

	return (
		<>
			<Head>
				<title>Café Faass - Lemberg</title>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</Head>
			<div>
				<StoryblokComponent blok={story.content} />
				<iframe
					src='https://www.google.com/maps/embed?pb=!4v1682258884249!6m8!1m7!1sCAoSLEFGMVFpcE41ZXJQX3U1am5zbWtSWDV4SjRpWFhhOTFDWEtOTDhMYTJZU1Z1!2m2!1d49.171149135264!2d7.6537392569871!3f358.91136826072454!4f1.1010259471528343!5f0.5970117501821992'
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className='w-full h-96 lg:ml-[320px]'></iframe>
			</div>
		</>
	);
}

export async function getServerSideProps(context: any) {
	// get the query object
	const insideStoryblok = context.query._storyblok;

	const slug = 'home';

	const sbParams: ISbStoryParams = {
		version:
			(process.env.STORYBLOK_STORY_VERSION as 'draft' | 'published') ||
			'published',
		resolve_relations: ['news.articles'],
		resolve_links: 'url',
	};

	if (insideStoryblok) {
		sbParams.version = 'draft';
	}

	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
	const { data: config } = await storyblokApi.get('cdn/stories/config');

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
			config: config ? config.story : false,
		},
	};
}
