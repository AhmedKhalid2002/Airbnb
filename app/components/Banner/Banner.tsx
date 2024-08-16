import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[300px] w-full sm:h-[400px] lg:w-[500px] xl:w-full'>
        <Image  
        src="/cable-car.jpg" 
        alt='cable-banner'
        className='object-cover object-left'
        fill
        />
        <div className='absolute top-1/2 w-full text-center space-y-4'>
            <p className='text-sm sm:text-lg text-white'>Not sure where to go? Prefect.</p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold'>
                I am flexible
            </button>
        </div>
    </div>
  )
}

export default Banner