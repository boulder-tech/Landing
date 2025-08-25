import React from 'react';
import Link from 'next/link';
import StepCard from '../cards/stepper-card';
import Image from 'next/image';
import circle2 from '../../../public/assets/landing-circle-2.png';
import dots from '../../../public/assets/landing-dots.png';

const StepperSection = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center relative main-padding py-24">
            <div className="w-full flex flex-col items-center justify-center px-4 gap-16">
                <div className="flex flex-col xl:gap-6 gap-4 justify-center items-center w-full text-center z-10">
                    <h1 className='font-atyp-display text-3xl 2xl:text-5xl font-light leading-tight text-black md:w-[800px]'>Cut the paperwork and admin hassle — just invest.</h1>
                    <h3 className="text-[#46505D] text-xl font-medium z-10 w-[440px]">It's really that simple</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-8 relative'>
                    <div className="flex flex-wrap gap-6 items-center justify-center sm:columns-2">
                        <StepCard number="1" title="Onboard" description="Verify your identity. Yes, our compliance team asked us to do that so…" />
                        <StepCard number="2" title="Join a Group" description="Apply to our investment clubs, curated by seasoned investors." />
                        <StepCard number="3" title="Select a Deal" description="Discover the vision, the business case, and meet the team behind it." />
                        <StepCard number="4" title="Invest" description="Back the deal and join the journey." />
                    </div>
                    <p className='text-center'> Are you a founder or VC fund looking to raise capital?{" "} <Link href="/contact" className="underline"> Talk to the team ↗</Link></p>
                </div>
            </div>
            <Image src={dots} alt="decoration" className='absolute bottom-[-60px] right-0'></Image>
            <Image src={dots} alt="decoration" className='absolute bottom-[-300px] left-0 scale-x-[-1]'></Image>
        </section>
            
    )
}

export default StepperSection;