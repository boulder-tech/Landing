import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    className?: string,
    ticker: string,
    icon: StaticImageData,
    url: string,
    bgColor: `bg-[#${string}]`
    isLight?: boolean
}

const TokenCard = ({className, ticker, icon, url, bgColor, isLight}: Props) => {
    return (
        <Link href={url} target='_blank' className={`flex items-center justify-center h-20 sm:h-36 w-full sm:w-40 rounded-lg group overflow-hidden relative cursor-pointer ${bgColor} ${!isLight ? 'text-text-white' : 'text-text-black'} ${className}`}>
            <div className='flex gap-2 items-center justify-center group-hover:opacity-0 duration-100'>
                <Image src={icon} width={25} height={25} alt={ticker + " icon"} className='md:w-fit w-8'></Image>
                <p className='md:text-2xl font-medium text-lg'>{ticker}</p>
            </div>
            <div className='absolute -bottom-5 sm:group-hover:bottom-[3.75rem] group-hover:bottom-7 transition-all duration-300 ease-in-out'>
                <p className='font-medium'>More Info ↗</p>
            </div>
        </Link>
    )
}

export default TokenCard