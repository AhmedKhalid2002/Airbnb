"use client"
import React, { useState } from 'react'
import {SearchIcon, UserIcon} from '@heroicons/react/solid'
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Link from 'next/link';
function SearchBar({placeholder}:{placeholder?:string}) {
  const [input,setInput]=useState("")
  const [startDate,setStartDate]=useState(new Date())
  const [endDate,setEndDate]=useState(new Date())
  const [numberOfGuest,setNumberOfGuest]=useState(1)

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  } 
  const handleSelect=(ranges:RangeKeyDict)=>{
    setStartDate(ranges.selection.startDate as Date)
    setStartDate(ranges.selection.endDate as Date)
  }
  return (
    <>
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input 
            type="text" 
            placeholder={placeholder||'Start your search'}
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none'
            />
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        </div>
        {input&&<div className='w-[500px] h-[300px] bg-white absolute top-1/2 flex flex-col col-span-3  left-1/2 -translate-x-1/2 mt-16  '>
            <DateRangePicker rangeColors={["#FD5B61"]} minDate={new Date()} ranges={[selectionRange]} onChange={handleSelect}/>
            <div className='flex items-center border-b  bg-white'>
              <h2 className='text-sm p-5 flex-grow font-semibold'>Number Of Guests</h2>
              <UserIcon className='h-5'/>
              <input type="number"
                className='w-12 pl-2 text-lg outline-none text-red-400'
                value={numberOfGuest}
                min={1}
                onChange={(e)=>setNumberOfGuest(Number(e.target.value))}
              />
            </div>  
            <div className='flex items-center bg-white'>
              <button type='button' className='flex-grow text-gray-500' onClick={()=>setInput("")} > cancle</button>
              <Link href={{pathname:'/search',search:`?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numberOfGuest}`}} 
              onClick={()=>setInput("")} 
              className='flex-grow text-red-400'  > Search</Link>
            </div>
          </div>}
    </>
  )
}

export default SearchBar