import Link from "next/link";
import getFormattedDate from "../../../../../lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "../../../../../lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";

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

    const { title, date, readTime, image, contentHtml } = await getPostData(postId);

    const pubDate = getFormattedDate(date);

    return (
        <div className="w-screen flex items-center justify-center relative">
            <span className='w-full h-full bg-gradient-to-b from-[#245BFF] to-transparent opacity-20 blur-[400px] absolute left-0 top-0' aria-hidden={true}></span>
            <div className="w-full md:px-0 px-6 prose prose-invert mt-40 z-10">
                <h1 className="text-4xl mb-2">{title}</h1>
                <p className="mt-0 mb-0">
                    {readTime + ' min read · ' + pubDate}
                </p>
                <div className='overflow-hidden rounded-md w-full h-80 mb-4 relative'>
                    <Image src={'/blogImages/' + image} alt="" layout='fill' objectFit='cover'></Image>
                </div>
                <article className="mt-8">
                    <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    <p className="mt-8 mb-28">
                        <Link className="hover:underline no-underline" href="/blog">← Back to home</Link>
                    </p>
                </article>
            </div>
        </div>
    )
}

export default Post;