import React from 'react'
import Heading from './Components/Heading'
import LatestPosts from './Components/LatestPosts'

const Latest = () => {
  return (
    <div className='relative pt-64 pb-64 w-full flex items-center justify-center'>
        <span className='w-full h-full bg-gradient-to-b from-[#245BFF] to-transparent opacity-30 blur-[400px] absolute left-0 top-96' aria-hidden={true}></span>
        <div className='z-10'>
          <Heading title='Our latest news' subtitle='Your gateway to the latest news on RWA tokenization'></Heading>
          <LatestPosts></LatestPosts>
        </div>
    </div>
  )
}

export default Latest