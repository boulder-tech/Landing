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
    <Link target='__blank' href={`https://app.bouldertech.fi/${ticker.toLowerCase()}`} className={`flex flex-col justify-between items-start w-[27rem] h-[12rem] p-6 rounded-xl border border-[#fafbff12] bg-card-dark relative overflow-hidden group ${className}`}>
        <div className='flex flex-col gap-3 z-10'>
            <h3 className='font-atyp-display text-2xl'>{name}</h3>
            <div className='flex gap-2 items-center'>
                <Image src={icon} width={40} height={40} alt={ticker + " icon"}></Image>
                <p className='text-foreground-leading text-xl'>{ticker}</p>
            </div>
        </div>
        <div className='w-full h-fit flex justify-end items-center z-10'>
            <p className='px-4 text-accent font-medium'>Invest →</p>
        </div>
        <div className='absolute -right-16 -top-20'>
            <Image quality={80} src={bgEffect} aria-hidden alt='' unselectable='on' className='pointer-events-none select-none sele'></Image>
        </div>
    </Link>
  )
}

export default TokenCard