import { getSortedPostsData } from "../../../../../lib/posts"
import MainPost from "./postCards/MainPost";

const LatestPosts = () => {
    const posts = getSortedPostsData();

    return (
        <div className="w-full flex gap-[30px] mt-16">
            <MainPost post={posts[0]}></MainPost>
        </div>
    )
}

export default LatestPosts