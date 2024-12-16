import React from 'react'
import TokenCard from '../cards/token-card';
import cspxIcon from "../../../public/assets/tokens/cspx.svg";
import ib01Icon from "../../../public/assets/tokens/ib01.svg";
import cndxIcon from "../../../public/assets/tokens/cndx.svg";
import irsIcon from "../../../public/assets/tokens/irs.svg";
import gd30dIcon from "../../../public/assets/tokens/gd30d.svg";
import gridEffect from "../../../public/assets/gridEffect.png";
import Image from 'next/image';

const StocksSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center sm:px-16 px-4 gap-14 pb-32 pt-32 relative">
        <div className='flex flex-col xl:gap-6 gap-4 justify-center items-center w-full text-center z-10'>
            <h1 className='font-atyp-display text-3xl 2xl:text-5xl font-light leading-tight'>Stocks & Bonds <span className='whitespace-nowrap'>On-Chain</span></h1>
            <p className='md:hidden flex text-foreground-leading leading-normal text-base 2xl:text-lg sm:max-w-[39rem]'>{"Each token is backed by financial assets, providing a secure and compliant way to access to TradFi via crypto."}</p>
            <p className='md:flex hidden text-foreground-leading leading-normal text-base 2xl:text-lg sm:max-w-[39rem]'>{"Each token is backed by actual financial assets, offering a secure and compliant way to diversify your portfolio. This backing ensures real-world value and stability, making your investment both reliable and robust."}</p>
        </div>
        <div className='flex flex-wrap gap-5 items-center justify-center z-10'>
            <TokenCard ticker='CSPX' icon={cspxIcon} url='./' bgColor='bg-[#C42933]'></TokenCard>
            <TokenCard ticker='CNDX' icon={cndxIcon} url='./' bgColor='bg-[#193A8A]'></TokenCard>
            <TokenCard ticker='IB01' icon={ib01Icon} url='./' bgColor='bg-[#FFFFFF]' isLight></TokenCard>
            <TokenCard ticker='IRSA' icon={irsIcon} url='./' bgColor='bg-[#407D70]'></TokenCard>
            <TokenCard ticker='GD30D' icon={gd30dIcon} url='./' bgColor='bg-[#5298E0]'></TokenCard>
        </div>
        <div className="absolute w-full bottom-0 z-0">
          <Image src={gridEffect} alt='' aria-hidden className="object-cover pointer-events-none"></Image>
        </div>
    </section>
  )
}

export default StocksSection;