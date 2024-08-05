import React from 'react'
import TokenCard from '../cards/token-card';
import cspxIcon from "../../../public/assets/tokens/cspx.png";
import cspxEffect from "../../../public/assets/tokens/effects/cspxEffect.png";
import ib01Icon from "../../../public/assets/tokens/ib01.png";
import ib01Effect from "../../../public/assets/tokens/effects/ib01Effect.png";
import qqqIcon from "../../../public/assets/tokens/qqq.png";
import qqqEffect from "../../../public/assets/tokens/effects/qqqEffect.png";

const StocksSection = () => {
  return (
    <section className='w-full flex xl:flex-row flex-col items-start justify-center lg:mt-40 mt-20 mb-20 relative sm:px-16 px-4 xl:gap-0 gap-8'>
        <div className='flex flex-col xl:gap-6 gap-4 xl:items-start xl:justify-start justify-center items-center xl:max-w-[40rem] w-full xl:text-left text-center'>
            <h1 className='font-atyp-display text-3xl 2xl:text-5xl font-normal leading-tight'>Stocks & Bonds <span className='whitespace-nowrap'>On-Chain</span></h1>
            <p className='md:hidden flex text-foreground-leading leading-normal text-base 2xl:text-lg xl:max-w-none sm:max-w-[38rem]'>{"Each token is backed by financial assets, providing a secure and compliant way to access to TradFi via crypto."}</p>
            <p className='md:flex hidden text-foreground-leading leading-normal text-base 2xl:text-lg xl:max-w-none sm:max-w-[38rem]'>{"Each token is backed by actual financial assets, offering a secure and compliant way to diversify your portfolio. This backing ensures real-world value and stability, making your investment both reliable and robust."}</p>
        </div>
        <div className='relative flex flex-col xl:items-end items-center xl:justify-end justify-center xl:gap-0 gap-4 w-full'>
            <TokenCard className='z-20' name='S&P 500 UCITS ETF' ticker='CSPX' icon={cspxIcon} bgEffect={cspxEffect}></TokenCard>
            <TokenCard className='z-30 xl:mr-32 xl:flex absolute top-auto xl:-top-6' name='Invesco QQQ Trust Series 1' ticker='QQQ' icon={qqqIcon} bgEffect={qqqEffect}></TokenCard>
            <TokenCard className='z-40 xl:mr-64 xl:flex absolute top-auto xl:-top-12' name='Treasury Bond 0-1yr UCITS' ticker='IB01' icon={ib01Icon} bgEffect={ib01Effect}></TokenCard>
        </div>
        <span
            className="absolute pointer-events-none z-10 top-[15%] left-[10%] w-[50rem] h-[6rem] blur-[200px] rounded-full bg-accent"
            aria-hidden="true"
        />
    </section>
  )
}

export default StocksSection;