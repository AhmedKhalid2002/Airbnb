import React from 'react'
import ExploreCard from '../SmallCard/ExploreCard'
import { getExplore } from '@/app/utils/api';
import { ExploreData } from '@/app/types/app';
import Heading from '../Heading/Heading';

async function Explore() {
  const exploreData: ExploreData =await getExplore();
  
  return (
    <section className='pt-6'>
      <div className="container">
        <Heading title='Explore Nearby'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {exploreData.map((item) => (
            <ExploreCard key={item.location} img={item.img} location={item.location} distance={item.distance}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Explore