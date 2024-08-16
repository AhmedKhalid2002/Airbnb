import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import Navbar from './Navbar'

const Header = ({placeholder}:{placeholder?:string}) => {
  return (
    <header className='sticky top-0 z-50 shadow-md py-5 bg-white '>
      <div className='container grid grid-cols-3  relative'>
          <Link href="/" className='relative flex items-center h-10  my-auto' >
            <Image 
            fill 
            className='object-contain object-left '  
            src="/airbnb-ar21.svg" 
            alt="logo"/>
          </Link>
          <SearchBar placeholder={placeholder}/>
          <Navbar/>
      </div>
    </header>
  )
}

export default Header