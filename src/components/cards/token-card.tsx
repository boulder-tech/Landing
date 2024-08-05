import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    className?: string,
    name: string,
    ticker: string,
    icon: StaticImageData,
    bgEffect: StaticImageData
}

const TokenCard = ({className, name, ticker, icon, bgEffect}: Props) => {
  return (
    <Link target='__blank' href={`https://app.bouldertech.fi/${ticker.toLowerCase()}`} className={`flex flex-col justify-between items-start  md:w-[27rem] md:h-[12rem] w-[20rem] h-[10rem] p-6 rounded-xl border border-[#fafbff12] bg-card-dark relative overflow-hidden group ${className}`}>
        <div className='flex flex-col gap-3 z-10'>
            <h3 className='font-atyp-display md:text-2xl text-xl'>{name}</h3>
            <div className='flex gap-2 items-center'>
                <Image src={icon} width={40} height={40} alt={ticker + " icon"} className='md:w-fit w-8'></Image>
                <p className='text-foreground-leading md:text-xl text-lg'>{ticker}</p>
            </div>
        </div>
        <div className='w-full h-fit flex justify-end items-center z-10'>
            <p className='px-4 text-accent font-medium'>Invest →</p>
        </div>
        <div className='absolute -right-16 -top-20'>
            <div className='w-96 h-56'>
                <Image quality={80} src={bgEffect} aria-hidden alt='' unselectable='on' width={0} height={0} className='w-full h-auto pointer-events-none select-none'></Image>
            </div>
        </div>
    </Link>
  )
}

export default TokenCard