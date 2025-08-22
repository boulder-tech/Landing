import React from 'react';
import Link from 'next/link';
import StepCard from '../cards/stepper-card';

const StepperSection = () => {
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center sm:px-16 px-4 gap-14 pb-20 xl:pb-28 2xl:pb-32 pt-32">
                <div className="flex flex-col xl:gap-6 gap-4 justify-center items-center w-full text-center z-10">
                    <h1 className='font-atyp-display text-3xl 2xl:text-5xl font-light leading-tight text-black w-[800px]'>Cut the paperwork and admin hassle — just invest.</h1>
                    <h3 className="text-[#46505D] text-xl font-medium z-10 w-[440px]">It's really that simple</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                        <StepCard number="1" title="Onboard" description="Verify your identity. Yes, our compliance team asked us to do that so…" />
                        <StepCard number="2" title="Join a Group" description="Apply to our investment clubs, curated by seasoned investors." />
                        <StepCard number="3" title="Select a Deal" description="Discover the vision, the business case, and meet the team behind it." />
                        <StepCard number="4" title="Invest" description="Back the deal and join the journey." />
                    </div>
                    <p> Are you a founder or VC fund looking to raise capital?{" "} <Link href="/contact" className="underline"> Talk to the team ↗</Link></p>
                </div>
            </div>
            <div>
                
            </div>
        </>
            
    )
}

export default StepperSection;