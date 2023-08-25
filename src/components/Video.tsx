import { storyblokEditable } from '@storyblok/react'

export default function Video({blok}: any) {
  return (
    <div className='w-full max-w-prose mx-auto py-4' {...storyblokEditable(blok)}>
      <iframe src={blok.link.url} className='w-full h-80 rounded-md shadow-md hover:shadow-xl'>
      </iframe>
    </div>
  )
}
