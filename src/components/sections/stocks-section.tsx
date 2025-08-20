import React from 'react'
import TokenCard from '../cards/token-card';
import gridEffect from "../../../public/assets/gridEffect.png";
import BCKCapital from "../../../public/icons/BCKcapital-logo.png";
import Trophy from "../../../public/icons/trophy-01.png";
import Clapperboard from "../../../public/icons/clapperboard.png";
import CoinsHand from "../../../public/icons/coins-hand.png";
import Home03 from "../../../public/icons/home-03.png";
import Chart from "../../../public/icons/chart-breakout-circle.png";
import Image from 'next/image';

const StocksSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center sm:px-16 px-4 gap-14 pb-20 xl:pb-28 2xl:pb-32 pt-32 relative">
        <div className='flex flex-col xl:gap-6 gap-4 justify-center items-center w-full text-center z-10'>
            <h1 className='font-atyp-display text-3xl 2xl:text-5xl font-light leading-tight'>Bringing Wall Street <span className='whitespace-nowrap'>On-Chain</span></h1>
            <p className='md:flex hidden text-foreground-leading leading-normal text-base 2xl:text-lg sm:max-w-[45rem]'>{"From stocks, to bonds, to beyond - we tokenize assets from global financial markets, offering a seamless and flexible way to diversify your portfolio. All tokens are backed 1:1 by their underlying assets, ensuring security, transparency, and compliance"}</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center z-10'>
            <TokenCard name='Top corporate VC' icon={Trophy} url='https://app.bouldertech.fi/sp500'></TokenCard>
            <TokenCard name='Fast Growth Consumer Brand' icon={Chart} url='https://app.bouldertech.fi/nsdq'></TokenCard>
            <TokenCard name='BCK Capital' icon={BCKCapital} url='https://app.bouldertech.fi/gd30d'></TokenCard>
            <TokenCard name='Enterteinment Holding' description='Back the growth of media and entertainment ventures' icon={Clapperboard} url='https://app.bouldertech.fi/irsa' isComingSoon></TokenCard>
            <TokenCard name='Fintech Services' description='Invest in innovative financial technology companies' icon={CoinsHand} url='https://app.bouldertech.fi/gd30d' isComingSoon></TokenCard>
            <TokenCard name='Real Estate Developer' description='Tokenized real estate projects offering stable, long-term returns' icon={Home03} url='https://app.bouldertech.fi/ib01' isComingSoon></TokenCard>
        </div>
        <div className="hidden md:flex absolute w-full bottom-0 z-0">
          <Image src={gridEffect} alt='' aria-hidden className="object-cover pointer-events-none"></Image>
        </div>
        <div className='absolute w-full bottom-0 z-0 overflow-hidden h-full'>
          <span
              className="absolute pointer-events-none z-0 bottom-0 left-[25%] w-[50rem] h-[7.5rem] blur-[275px] rounded-full bg-accent"
              aria-hidden="true"
            />
        </div>
    </section>
  )
}

export default StocksSection;