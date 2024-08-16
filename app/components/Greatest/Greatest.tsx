import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type GreatestProps={
    title:string,
    LinkText:string,
    description:string,
    img:string
}
const Greatest = ({title,img,LinkText,description}:GreatestProps) => {
  return (
    <div className='container pt-6'>
        <div className='relative h-96 min-w-[300px]'>
            <Image className='rounded-2xl -z-10 object-cover' src={img} fill alt="greates"/>
            <div className='absolute top-32 left-12 text-white  p-4'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p className='mb-3'>{description}</p>
                <Link href="/" className='text-sm  px-10 py-2 rounded-lg    bg-gray-900'>{LinkText}</Link>
            </div>
        </div>
    </div>
  )
}

export default Greatest