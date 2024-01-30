import { getSortedPostsData } from "../../../../../lib/posts"

const LatestPosts = () => {
    const posts = getSortedPostsData();
    return (
        <div>LatestPosts</div>
    )
}

export default LatestPosts