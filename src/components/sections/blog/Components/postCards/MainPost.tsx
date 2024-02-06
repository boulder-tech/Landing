import React from 'react'
import getFormattedDate from '../../../../../../lib/getFormattedDate';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    post: BlogPost,
}

const MainPost = async ({post}: Props) => {
    const {id, title, date, readTime, image, preview} = post;

    const formattedDate = getFormattedDate(date);
    return (
        <Link href={`/blog/${id}`} className='bg-gray-100 p-4 flex flex-col justify-between sm:w-[30rem] w-[21rem] h-[34rem] rounded-xl group'>
            <div className='flex flex-col gap-4'>
                <div className='overflow-hidden rounded-md w-full h-64 relative'>
                    <Image src={'/blogImages/' + image} alt="" fill className='object-cover'></Image>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-foreground-leading text-base'>{readTime + ' min read · ' + formattedDate}</p>
                        <h2 className='line-clamp-2 text-foreground-heading min-h-12 sm:text-[1.75rem] text-[1.5rem] font-atyp-display font-medium leading-[120%] group-hover:underline'>{title}</h2>
                    </div>
                    <p className='line-clamp-4 text-foreground-leading text-base'>{preview}</p>
                </div>
            </div>
            <p className='text-base text-accent'>Read the article <span className='pl-0 group-hover:pl-1 transition-all'>→</span></p>
        </Link>
    )
}

export default MainPost