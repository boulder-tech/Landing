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
        <Link href={url} target='_blank' className={`flex items-top pt-12 h-56 p-4 justify-start sm:h-60 sm:w-60 md:h-60 md:w-full rounded-lg group w-full ${!isComingSoon ? 'overflow-hidden' : 'overflow-vissible'} relative cursor-pointer bg-[#FFFF] hover:shadow-2xl hover:shadow-[#0C32CC]/20 duration-300 ease-in-out justify-center`}>
            <div className={`flex flex-col items-center ${!isComingSoon ? 'group-hover:opacity-0 duration-100' : 'visible'}`}>
                <div className='flex flex-col gap-2 items-center justify-center text-black'>
                    <Image src={icon} width={40} height={40} alt={name + " icon"} className='w-8'></Image>
                    <p className='md:text-2xl font-medium text-lg text-center w-48 md:w-full'>{name}</p>
                    <p className='text-center w-52 md:w-full'>{description}</p>
                </div>  
            </div>

            <div className={`absolute -bottom-1/2 -translate-x-1/2 group-hover:bottom-1/2 justify-center group-hover:left-1/2 transition-all duration-300 ease-in-out ${!isComingSoon ? 'visible' : 'invisible'}`}>
                <p className='font-medium text-black'>Explore deal ↗</p>
            </div>
            <div className={`absolute top-[-16px] -right-4 bg-[#E8EEFF] border-2 border-[#B3C4FF] whitespace-nowrap rotate-12 rounded-full p-1 ${!isComingSoon ? 'invisible' : 'visible'}`}>
                <p className='text-sm text-[#0C32CC]'>Coming soon</p>
            </div>
        </Link>
    )
}

export default TokenCard