import { LiveItem } from '@/app/types/app'
import Image from 'next/image'
import React from 'react'
type LiveCardProps=LiveItem
const LiveCard = ({title,img}:LiveCardProps) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-200 ease-out'>
        <div className='relative h-80 w-80 rounded-md overflow-hidden'>
            <Image src={img} fill alt='card live' />
        </div>
        <h3 className='text-2xl my-4'>{title}</h3>
    </div>
  )
}

export default LiveCard