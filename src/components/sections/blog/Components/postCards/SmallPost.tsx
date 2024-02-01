import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import getFormattedDate from '../../../../../../lib/getFormattedDate';

type Props = {
    post: BlogPost,
}

const SmallPost = async ({post}: Props) => {
    const {id, title, date, readTime, image, preview} = post;

    const formattedDate = getFormattedDate(date);
    return (
        <Link href={`/blog/posts/${id}`} className='bg-gray-100 p-[0.9rem] flex gap-4 w-[30rem] h-[16.375rem] rounded-xl text-foreground-leading text-base group'>
            <div className='overflow-hidden rounded-md w-[16rem] h-full relative'>
                <Image src={'/blogImages/' + image} alt="" fill className='object-cover'></Image>
            </div>
            <div className='flex flex-col justify-between w-full'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-0'>
                        <p className=''>{readTime + ' min read · ' + formattedDate}</p>
                        <h2 className='line-clamp-3 text-foreground-heading min-h-[5rem] text-[1.625rem] font-atyp-display font-medium leading-[120%] group-hover:underline'>{title}</h2>
                    </div>
                    <p className='line-clamp-3'>{preview}</p>
                </div>
                <p className='text-accent'>Read the article <span className='pl-0 group-hover:pl-1 transition-all'>→</span></p>
            </div>
        </Link>
    )
}

export default SmallPost