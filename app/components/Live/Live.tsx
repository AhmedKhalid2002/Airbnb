import { LiveData } from '@/app/types/app';
import { getLive } from '@/app/utils/api'
import React from 'react'
import LiveCard from '../LiveCard/LiveCard';

const Live =async () => {
    const liveData:LiveData=await getLive()
    console.log(liveData);
    
  return (
    <section className='pt-10'>
        <div className='container'>

            <div className='flex space-x-3 overflow-scroll no-scrollbar'>
                {liveData.map((item)=>(
                    <LiveCard key={item.img} title={item.title} img={item.img} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Live