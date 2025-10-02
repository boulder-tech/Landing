import React from 'react';
import Image from 'next/image';
import circle from '../../../public/assets/landing-circle.png';
import dots from '../../../public/assets/landing-dots.png';
import TokenCard from '../cards/token-card';
import BCKCapital from "../../../public/icons/BCKcapital-logo.png";
import Trophy from "../../../public/icons/trophy-01.png";
import Clapperboard from "../../../public/icons/clapperboard.png";
import CoinsHand from "../../../public/icons/coins-hand.png";
import Home03 from "../../../public/icons/home-03.png";
import Chart from "../../../public/icons/chart-breakout-circle.png";

const StocksSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center main-padding gap-14 pb-20 xl:pb-28 2xl:pb-32 pt-32 relative">
        <div className='flex flex-col xl:gap-6 gap-4 justify-center items-center w-full text-center z-10'>
            <h1 className='font-atyp-display text-3xl 2xl:text-5xl font-light leading-tight text-black'>Curated access to <span className='whitespace-nowrap bg-gradient-to-r from-[#00B2FF] to-[#245BFF] bg-clip-text text-transparent'>pre-IPO</span> opportunities</h1>
            <p className='md:flex hidden text-foreground-leading leading-normal text-base 2xl:text-lg sm:max-w-[45rem]'>{"Tokenization sets the foundation for a new era of private investing:"}</p>
            <div className='flex flex-row gap-x-9 items-center'>
              <p className='md:flex hidden text-foreground-leading leading-normal text-base 2xl:text-lg sm:max-w-[45rem]'>{"Frictionless"}</p>
              <p className='md:flex hidden text-foreground-leading leading-normal text-base 2xl:text-lg sm:max-w-[45rem]'>{"Off-market opportunities"}</p>
              <p className='md:flex hidden text-foreground-leading leading-normal text-base 2xl:text-lg sm:max-w-[45rem]'>{"Fully compliant"}</p>
        </div>
        </div>
        <div className='flex flex-col sm:grid sm:grid-cols-2 gap-4 items-center place-items-center justify-center z-10 md:flex-col md:grid-cols-3 w-full'>
            <TokenCard name='Top corporate VC' icon={Trophy} url=''></TokenCard>
            <TokenCard name='Fast Growth Consumer Brand' icon={Chart} url=''></TokenCard>
            <TokenCard name='BCK Capital' icon={BCKCapital} url=''></TokenCard>
            <TokenCard name='Entertainment Holding' description='Back the growth of media and entertainment ventures' icon={Clapperboard} url='' isComingSoon></TokenCard>
            <TokenCard name='Fintech Services' description='Invest in innovative financial technology companies' icon={CoinsHand} url='' isComingSoon></TokenCard>
            <TokenCard name='Real Estate Developer' description='Tokenized real estate projects offering stable, long-term returns' icon={Home03} url='' isComingSoon></TokenCard>
        </div>
        <div className='absolute w-full bottom-0 z-0 overflow-hidden h-full'>
          <span
              className="absolute pointer-events-none z-0 bottom-0 left-[25%] w-[50rem] h-[7.5rem] blur-[275px] rounded-full bg-accent"
              aria-hidden="true"
            />
        </div>
        <Image src={circle} alt="decoration" className='absolute top-0 left-0'></Image>
        <Image src={dots} alt="decoration" className='absolute bottom-[-60px] right-0'></Image>
        <Image src={dots} alt="decoration" className='absolute bottom-[-300px] left-0 scale-x-[-1] invisible md:visible'></Image>
    </section>
  )
}

export default StocksSection;