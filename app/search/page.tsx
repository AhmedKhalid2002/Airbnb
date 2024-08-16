import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import { format } from 'date-fns';
import { getSearch } from '../utils/api';
import { searchData } from '../types/app';
import ListingCard from '../components/listing card/ListingCard';
type searchParamsProps={
    startDate:string,
    endDate:string,
    numOfGuests:number,
    location:string
}
const SearchResult = async({searchParams:{location,startDate,endDate,numOfGuests}}:{searchParams:searchParamsProps}) => {
    let formatStartDate;
    let formatEndDate;
    if(startDate && endDate){
        formatStartDate=format(new Date(startDate),"dd MMMM yy")
        formatEndDate=format(new Date(endDate),"dd MMMM yy")

    }
    const range=`${formatStartDate} - ${formatEndDate}`
    const searchRes:searchData=await getSearch();
    console.log(searchRes);
    
  return (
    <>
        <Header placeholder={`${location} | ${range} | guests ${numOfGuests} `} />
        <main>
            <section className='mt-14'>
                    <div className="container">
                        <p className='text-xs'>
                            300+ Stays - {range} - for {numOfGuests} guest
                        </p>
                        <h1 className='text-2xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                        <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 '>
                            <button className='border p-2 rounded-md bg-red-300 border-red-400 text-white'>Cancellation Flexibillity</button>
                            <button className='border p-2 rounded-md bg-red-300  border-red-400 text-white'>Type Of Place</button>
                            <button className='border p-2 rounded-md bg-red-300  border-red-400 text-white'>Price</button>
                            <button className='border p-2 rounded-md bg-red-300  border-red-400 text-white'>Rooms and Beds </button>
                            <button className='border p-2 rounded-md bg-red-300  border-red-400 text-white'>More Filter</button>
                        </div>
                        {searchRes.map(item=>(
                            <ListingCard key={item.title} img={item.img} location={item.location} total={item.total}   star={item.star} price={item.price} title={item.title} description={item.description} />
                        ))}
                    </div>
            </section>
        </main>
    </>
  )
}

export default SearchResult