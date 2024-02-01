import React from 'react'
import Heading from './Components/Heading'
import AllPosts from './Components/AllPosts'
import { getSortedPostsData } from '../../../../lib/posts';

const All = () => {
  const posts = getSortedPostsData();
  return (
    <div className='pb-32 z-10'>
        <Heading title='Browse all' subtitle='Pioneering the Path for the financial revolution'></Heading>
        <AllPosts posts={posts.slice(3)}></AllPosts>
    </div>
  )
}

export default All