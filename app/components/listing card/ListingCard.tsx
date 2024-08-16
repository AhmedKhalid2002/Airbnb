import { SearchItem } from '@/app/types/app'
import { HeartIcon, StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
type LisCardProps=Omit<SearchItem,'long'|'lat'>
const ListingCard = ({img,location,title,description,star,price,total}:LisCardProps) => {
  return (
    <div className='flex py-2 px-2 border-b cursor-pointer pr-4 hover:bg-gray-50 hover:scale-105 duration-200 transition ease-out '>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image fill src={img} alt="Listing" className='rounded-2xl object-cover'/>
        </div>
        <div className='flex flex-col flex-grow pl-5 mt-5'>
            <div className='flex justify-between'>
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer'/>
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='  pt-2 flex '>
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
                <div className='flex justify-between items-end pt-5 '>
                    <p className='flex items-center'>
                        <StarIcon className='text-red-400 h-5'/>
                        {star}
                    </p>
                </div>
                <div >
                    <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListingCard