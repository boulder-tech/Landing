import Link from "next/link"
import getFormattedDate from "../../../../../../lib/getFormattedDate";
import Image from "next/image";
import { getPostData, htmlToString } from "../../../../../../lib/posts";

type Props = {
    post: BlogPost,
}

const MidPost = ({post}: Props) => {
    const {id, title, date, readTime, image, preview} = post;

    //Format html for card preview
    // const {contentHtml} = await getPostData(id);
    // const postIntro = htmlToString(contentHtml);

    const formattedDate = getFormattedDate(date);
    return (
        <Link href={`/blog/posts/${id}`} className="bg-gray-100 p-5 w-[20.25rem] h-[26rem] flex flex-col gap-4 rounded-md group">
            <div className='overflow-hidden rounded-md w-full h-[10.9rem] relative'>
                <Image src={'/blogImages/' + image} alt="" fill className='object-cover'></Image>
            </div>
            <div className="flex flex-col justify-between w-full text-foreground-leading">
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className=''>{readTime + ' min read · ' + formattedDate}</p>
                        <h2 className='line-clamp-2 text-foreground-heading h-[3rem] text-[1.25rem] font-atyp-display font-medium leading-[120%] text-ellipsis group-hover:underline'>{title}</h2>
                    </div>
                    <p className='line-clamp-3'>{preview}</p>
                </div>
            </div>
            <p className='text-accent'>Read the article <span className='pl-0 group-hover:pl-1 transition-all'>→</span></p>
        </Link>
    )
}

export default MidPost