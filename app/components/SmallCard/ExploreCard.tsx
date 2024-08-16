import { ExploreItem } from '@/app/types/app'
import Image from 'next/image';
import React from 'react'

type ExploreCardProps=ExploreItem;
const ExploreCard=async({img,distance,location}:ExploreCardProps)=> {
   
  return (
    <div className='flex items-center space-x-4 mt-5 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
        <div className='relative w-16 h-16 rounded-md overflow-hidden'>
          <Image src={img} alt="ExploreCard" fill />
        </div>
        <div>
          <h2>{location}</h2>
          <h3 className='text-gray-500'>{distance}</h3>
        </div>
    </div>
  )
}

export default ExploreCard