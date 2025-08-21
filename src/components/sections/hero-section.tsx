import Image from "next/image";
import EarthModel from "../earth";
import HeroImage from "../../../public/icons/heroImage.png";
import { BrandLink } from "../buttons/brand-button";
import Hero from "./blog/Hero";

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center relative px-8">
      <div>
        <Image
          src={HeroImage}
          alt="Hero Background"
          fill
          className="object-cover pointer-events-none"
        />
      </div>
      <div className="max-w-[52rem] flex flex-col items-center gap-10 text-center relative pt-16">
        <h1 className="text-foreground-heading 2xl:text-[60px] sm:text-[50px] text-[34px] font-atyp-display text-[#101218] font-medium leading-[120%] z-10">
          Invest in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#245BFF] whitespace-nowrap">
            unique deals{" "}
          </span>
          from Latam private markets
        </h1>
        <h3 className="text-[#46505D] text-xl font-medium z-10 w-[440px]">
          Unlocking Latam top investor networks - Preferential access to private companies and tokenized funds
        </h3>
        <BrandLink href="https://app.bouldertech.fi/">
          Explore active deals →
        </BrandLink>
      </div>
    </section>
  );
};
export default HeroSection;
