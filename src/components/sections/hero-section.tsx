import Image from "next/image";
import EarthModel from "../earth";
import HeroImage from "../../../public/icons/heroImage.png";
import { BrandLink } from "../buttons/brand-button";
import Hero from "./blog/Hero";
import dots from '../../../public/assets/landing-dots.png'
import circle from '../../../public/assets/landing-circle.png'


const HeroSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center relative main-padding">
      <div>
        <Image src={HeroImage} alt="Hero Background" fill className="object-cover pointer-events-none"/>
      </div>
      <div className="max-w-[52rem] flex flex-col items-center gap-10 text-center relative">
        <h1 className="text-foreground-heading 2xl:text-[60px] sm:text-[24px] text-[24px] px-16 font-atyp-display text-[#101218] font-medium leading-[120%]">
          Invest in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#245BFF] whitespace-nowrap">
            unique deals{" "}
          </span>
          from Latam private markets
        </h1>
        <h3 className="text-[#46505D] text-md font-light px-16 sm:px-0 sm:text-xl sm:font-medium z-10 w-[440px]">Unlocking Latam top investor networks - Preferential access to private companies and tokenized funds</h3>
        <BrandLink href="https://app.bouldertech.fi/">
          Explore active deals →
        </BrandLink>
      </div>
      <Image src={dots} alt="decoration" className='absolute bottom-[-60px] right-0'></Image>
      <Image src={dots} alt="decoration" className='absolute bottom-[-300px] left-0 scale-x-[-1] invisible sm:visible'></Image>
      <Image src={circle} alt="decoration" className='absolute top-[-250px] left-28 rotate-45'></Image>
    </section>
  );
};
export default HeroSection;
