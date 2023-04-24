import { storyblokEditable } from '@storyblok/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SecondaryMenuItem({blok}: any) {
  const router = useRouter()
  if (!blok || !blok.link) return null
  // need to prepend a slash to the cached_url, otherwise the comparison will fail
  const isActive = router.asPath === '/' + blok.link.cached_url
  return (
    <li>
      <Link href={blok.link.cached_url} {...storyblokEditable(blok)} className={['rounded-sm!', isActive && 'bg-white'].join(' ')}>
        {blok.name}
      </Link>
    </li>
  )
}
