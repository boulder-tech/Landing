import { getSortedPostsData } from "../../../../../lib/posts"
import MainPost from "./postCards/MainPost";
import SmallPost from "./postCards/SmallPost";

const LatestPosts = () => {
    const posts = getSortedPostsData();

    return (
        <div className="w-full flex flex-wrap gap-[20px] mt-16 justify-center">
            <MainPost post={posts[0]}></MainPost>
            <div className="flex flex-col gap-[20px]">
                <SmallPost post={posts[1]}></SmallPost>
                <SmallPost post={posts[2]}></SmallPost>
            </div>
        </div>
    )
}

export default LatestPosts