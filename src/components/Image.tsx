import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'

export default function Img({blok}: any) {
  return (
    <div className='w-4/6 mx-auto' {...storyblokEditable(blok)}>
      <Image src={blok.image.filename} alt={blok.image.alt} width={320} height={180} 
        className='rounded-md mx-auto object-contain'
      />
    </div>
  )
}
