import { StoryblokComponent } from '@storyblok/react'

export default function SecondaryMenu({blok}: any) {
  if (!blok || !blok.items) return null
  return (
    <div className='w-full flex justify-center mb-4'>
      <ul className="menu menu-vertical menu-compact sm:menu-horizontal bg-gray-100 p-2 rounded-box">
        {blok.items.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </ul>
    </div>
  )
}
