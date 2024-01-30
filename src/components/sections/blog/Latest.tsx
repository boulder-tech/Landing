import React from 'react'
import Heading from './Components/Heading'
import AllPosts from './Components/AllPosts'

const Latest = () => {
  return (
    <div className='pt-64 pb-64'>
        <Heading title='Our latest news' subtitle='Your gateway to the latest news on RWA tokenization'></Heading>
        <AllPosts></AllPosts>
    </div>
  )
}

export default Latest