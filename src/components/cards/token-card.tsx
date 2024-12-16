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
        <div className={`flex items-center justify-center h-36 w-40 rounded-lg ${bgColor} ${!isLight ? 'text-text-white' : 'text-text-black'}`}>
            <div className='flex gap-2 items-center justify-center'>
                <Image src={icon} width={25} height={25} alt={ticker + " icon"} className='md:w-fit w-8'></Image>
                <p className='md:text-2xl font-medium text-lg'>{ticker}</p>
            </div>
        </div>
    )
}

export default TokenCard