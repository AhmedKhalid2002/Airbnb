import React from 'react'

const Heading = ({title}:{title:string}) => {
  return (
    <>
        <h2 className='text-4xl font-semibold pb-5'>{title}</h2>
    </>
  )
}

export default Heading