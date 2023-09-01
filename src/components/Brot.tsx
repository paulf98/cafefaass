import Image from 'next/image'
import React from 'react'

export default function Brot({ blok }: any) {
  console.log(blok)
  return (
    <li className='border rounded-md flex flex-col sm:flex-row even:sm:flex-row-reverse gap-4 max-w-prose mx-auto mt-8 shadow-sm'>
      <Image src={blok.image.filename} alt={blok.image.alt} width={200} height={200} className='rounded-md w-full' />
      <div className='flex flex-col justify-around gap-4 p-4'>
        <h1 className='text-2xl font-bold'>{blok.name}</h1>
        <p className='text-lg'>{blok.description}</p>
        <p className='text-sm italic text-gray-400'>Allergene: {blok.allergene}</p> 
      </div>
    </li>
  )
}
