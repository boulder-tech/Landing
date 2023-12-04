import Image from "next/image";
import EarthModel from "../earth";
import BrandButton from "../buttons/brand-button";
import Waitlist from "../buttons/waitlist-input";

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center relative px-8">
      <Image
        src="/assets/background-lights.png"
        width={1920}
        height={1080}
        alt="Background asset"
        className="pointer-events-none absolute top-0 blur-md z-20"
      />
      <span className="bg-gradient-to-b from-blue-600/20 to-transparent w-full h-full absolute top-0 z-20 pointer-events-none"></span>
      <span
        className="h-[50vh] top-[10vh] absolute w-full z-10 bg-gradient-to-b from-transparent to-80% to-[#010312] pointer-events-none"
        aria-hidden="true"
      />
      <div className="h-[50vh] top-[10vh] absolute w-full z-0 pointer-events-none">
        <EarthModel />
      </div>
      <div className="max-w-[52rem] flex flex-col items-center gap-10 text-center relative pt-16">
        <h1 className="text-foreground-heading sm:text-[60px] text-[34px] font-atyp-display font-medium leading-[120%] z-10">
          Tokenize, manage and invest in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#245BFF] whitespace-nowrap">
            real-world
          </span>{" "}
          assets
        </h1>
        <h3 className="text-foreground-leading text-xl font-medium z-10">
          Mint and redeem tokens on-chain, instantly
        </h3>
        <Waitlist />
      </div>
    </section>
  );
};
export default HeroSection;
