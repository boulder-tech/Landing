'use client';
import { useState } from 'react';
import MidPost from './postCards/MidPost';

const AllPosts = ({posts}: {posts: BlogPost[]}) => {
    const [postsToShow, setPostsToShow] = useState(3);

    //Handle more posts
    const addPosts = () => {
        setPostsToShow(postsToShow + 3);
    }

    return (
        <section className='mt-16 relative flex items-end justify-center'>
            <div className='w-full grid grid-cols-3 justify-center gap-6'>
                {posts.slice(0, postsToShow).map((post) => (
                    <MidPost key={post.id} post={post} />
                ))}
            </div>
            { postsToShow <= 3 && (
                <>
                    <span className='absolute w-full h-full z-20 top-0 bg-gradient-to-b from-[#01031200] to-[#020517] to-80%'></span>
                    <button onClick={addPosts} className="mb-16 absolute z-30 transition-all duration-500 whitespace-nowrap bg-accent hover:shadow-lg hover:shadow-blue-500/20 rounded-full px-6 text-sm h-[3.1rem] font-medium text-foreground-heading flex items-center justify-center">
                        Load more ↓
                    </button>
                </>
                )
            }
        </section>
    )
}

export default AllPosts