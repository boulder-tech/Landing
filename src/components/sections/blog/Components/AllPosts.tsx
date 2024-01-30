import { getSortedPostsData } from '../../../../../lib/posts'
import MidPost from './postCards/MidPost';

const AllPosts = () => {
    const posts = getSortedPostsData();
    return (
        <section>
            <h2>All posts</h2>
            <ul className='w-full'>
                {posts.map((post) => (
                    <MidPost key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}

export default AllPosts