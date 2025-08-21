import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    name: string,
    description?: string,
    icon: StaticImageData,
    url: string,
    isComingSoon?: boolean
}

const TokenCard = ({name, description, icon, url, isComingSoon}: Props) => {
    return (
        <Link href={url} target='_blank' className={`flex items-top pt-12 justify-center md:h-60 md:w-60 sm:h-40 sm:w-40 rounded-lg group overflow-visible relative cursor-pointer bg-[#FFFF] shadow-2xl shadow-[#0C32CC]/50`}>
            <div className={`flex flex-col items-center ${!isComingSoon ? 'group-hover:opacity-0 duration-100' : 'visible'}`}>
                <div className='flex flex-col gap-2 items-center justify-center text-black'>
                    <Image src={icon} width={40} height={40} alt={name + " icon"} className='md:w-8 w-8'></Image>
                    <p className='md:text-2xl font-medium text-lg text-center'>{name}</p>
                    <p className='text-center w-52'>{description}</p>
                </div>  
            </div>

            <div className={`absolute -bottom-5 sm:group-hover:bottom-[6rem] group-hover:bottom-7 transition-all duration-300 ease-in-out ${!isComingSoon ? 'visible' : 'invisible'}`}>
                <p className='font-medium text-black'>Explore deal ↗</p>
            </div>
            <div className={`absolute top-[-16px] left-40 bg-[#E8EEFF] border-2 border-[#B3C4FF] whitespace-nowrap rotate-12 rounded-full p-1 ${!isComingSoon ? 'invisible' : 'visible'}`}>
                <p className='text-sm text-[#0C32CC]'>Coming soon</p>
            </div>
        </Link>
    )
}

export default TokenCard