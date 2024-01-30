import Link from "next/link";
import getFormattedDate from "../../../../../lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "../../../../../lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    const posts = getSortedPostsData();
    
    return posts.map((post) => ({
        postId: post.id
    }));
}

export const generateMetadata = ({ params }: { params: { postId: string } }) => {
    const posts = getSortedPostsData();
    const { postId } = params;

    const post = posts.find(post => post.id === postId);

    if(!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.title,
    }
}

const Post = async ({ params }: { params: { postId: string } }) => {
    const posts = getSortedPostsData();
    const { postId } = params;

    if(!posts.find(post => post.id === postId)){
        return notFound();
    }

    const { title, date, readTime, contentHtml } = await getPostData(postId);

    const pubDate = getFormattedDate(date);

    return (
        <div className="w-screen flex items-center justify-center">
            <div className="w-full md:px-0 px-6 prose prose-invert mt-40">
                <h1 className="text-4xl mb-2">{title}</h1>
                <p className="mt-0">
                    {readTime + ' min read · ' + pubDate}
                </p>
                <article className="mt-8">
                    <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    <p className="mt-8 mb-28">
                        <Link href="/blog">← Back to home</Link>
                    </p>
                </article>
            </div>
        </div>
    )
}

export default Post;