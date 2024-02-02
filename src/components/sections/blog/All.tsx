import React from 'react'
import Heading from './Components/Heading'
import AllPosts from './Components/AllPosts'
import { getSortedPostsData } from '../../../../lib/posts';

const All = () => {
  const posts = getSortedPostsData();
  return (
    <div className='pb-32 z-10'>
        <Heading title='Browse all' subtitle='Pioneering the Path for the financial revolution'></Heading>
        {/* When another post is added, change slice value to 3 */}
        <AllPosts posts={posts.slice(0)}></AllPosts>
    </div>
  )
}

export default All