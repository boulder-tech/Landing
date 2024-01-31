import { getSortedPostsData } from "../../../../../lib/posts"
import MainPost from "./postCards/MainPost";
import SmallPost from "./postCards/SmallPost";

const LatestPosts = () => {
    const posts = getSortedPostsData();

    return (
        <div className="w-full flex gap-[30px] mt-16">
            <MainPost post={posts[0]}></MainPost>
            <div className="flex flex-col gap-[20px]">
                <SmallPost post={posts[1]}></SmallPost>
                <SmallPost post={posts[2]}></SmallPost>
            </div>
        </div>
    )
}

export default LatestPosts