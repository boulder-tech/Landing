import React from 'react'
import Heading from './Components/Heading'
import AllPosts from './Components/AllPosts'

const All = () => {
  return (
    <div className='pt-64 pb-64'>
        <Heading title='Browse all' subtitle='Pioneering the Path for the financial revolution'></Heading>
        <AllPosts></AllPosts>
    </div>
  )
}

export default All