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
        <section className={`mt-16 relative flex items-end justify-center ${(postsToShow < posts.length && postsToShow > 3) ? 'flex-col items-center justify-center gap-8' : 'flex-row'}`}>
            <div className='w-full grid justify-center sm:gap-6 gap-3 xl:grid-cols-3 md:grid-cols-2'>
                {posts.slice(0, postsToShow).map((post) => (
                    <MidPost key={post.id} post={post} />
                ))}
            </div>
            { postsToShow <= 3 && (
                <>
                    <span className='absolute w-full xl:h-full md:h-[50%] h-[33%] z-20  bg-gradient-to-b from-[#F7F8FA]/20 to-[#F7F8FA]/80'></span>
                    <button onClick={addPosts} className="mb-16 absolute z-30 transition-all duration-500 whitespace-nowrap bg-accent hover:shadow-lg hover:shadow-blue-500/20 rounded-full px-6 text-sm h-[3.1rem] font-medium text-white flex items-center justify-center">
                        Load more ↓
                    </button>
                </>
                )
            }
            {(postsToShow < posts.length && postsToShow > 3) && (
                <button onClick={addPosts} className="mb-16 transition-all duration-500 whitespace-nowrap bg-accent hover:shadow-lg hover:shadow-blue-500/20 rounded-full px-6 text-sm h-[3.1rem] font-medium text-foreground-heading flex items-center justify-center">
                    Load more ↓
                </button>
            )}
        </section>
    )
}

export default AllPosts