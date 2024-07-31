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
    <section className='w-full flex items-start justify-center mt-40 mb-20 relative'>
        <div className='flex flex-col gap-6 items-start justify-start max-w-[40rem]'>
            <h1 className='font-atyp-display text-5xl font-normal leading-tight'>Stocks & Bonds On-Chain</h1>
            <p className='text-foreground-leading leading-normal text-lg'>{"Each token is backed by actual financial assets, offering a secure and compliant way to diversify your portfolio. This backing ensures real-world value and stability, making your investment both reliable and robust."}</p>
        </div>
        <div className='relative flex flex-col items-end'>
            <TokenCard className='z-20' name='S&P 500 UCITS ETF' ticker='CSPX' icon={cspxIcon} bgEffect={cspxEffect}></TokenCard>
            <TokenCard className='z-30 mr-32 absolute -top-6' name='Invesco QQQ Trust Series 1' ticker='QQQ' icon={qqqIcon} bgEffect={qqqEffect}></TokenCard>
            <TokenCard className='z-40 mr-64 absolute -top-12' name='Treasury Bond 0-1yr UCITS ETF' ticker='IB01' icon={ib01Icon} bgEffect={ib01Effect}></TokenCard>
        </div>
        <span
            className="absolute pointer-events-none z-10 top-[15%] left-[10%] w-[50rem] h-[6rem] blur-[200px] rounded-full bg-accent"
            aria-hidden="true"
        />
    </section>
  )
}

export default StocksSection;