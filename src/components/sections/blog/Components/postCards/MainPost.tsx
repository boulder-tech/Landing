import React from 'react'
import getFormattedDate from '../../../../../../lib/getFormattedDate';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    post: BlogPost,
}

const MainPost = ({post}: Props) => {
    const {id, title, date, readTime, image} = post;
    const formattedDate = getFormattedDate(date);
    return (
        <Link href={`/blog/posts/${id}`} className='bg-gray-100 p-4 flex flex-col gap-4 w-[30rem] h-fit rounded-xl group'>
            <div className='overflow-hidden rounded-md w-full h-64'>
                <Image src={'/blogImages/' + image} alt="" width={460} height={260}></Image>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <p className='text-foreground-leading text-base'>{readTime + ' min read · ' + formattedDate}</p>
                    <h2 className='text-foreground-heading text-[1.75rem] font-atyp-display font-medium leading-[120%] group-hover:underline'>{title}</h2>
                </div>
                <p className='text-foreground-leading text-base'>In the ever-evolving domain of digital finance, 2024 marks a pivotal year with BoulderTech at the forefront, pioneering an innovative niche — the tokenization of Rea...</p>
            </div>
            <p className='text-base text-accent'>Read the article <span className='pl-0 group-hover:pl-1 transition-all'>→</span></p>
        </Link>
    )
}

export default MainPost