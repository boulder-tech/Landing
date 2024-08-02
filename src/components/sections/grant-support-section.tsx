import Image from "next/image";
import coinAsset from "../../../public/assets/arbiCoin.png";
import textAsset from "../../../public/assets/arbiText.png";
import PoweredBy from "../cards/poweredby-card";

const GrantSection = () => {
  return (
    <section className="w-full flex items-center justify-center relative py-16 text-center flex-col gap-16">
      <div className="px-8 grid gap-4 z-20">
        <h2 className="font-atyp-display text-[32px] -tracking-[0.72px] text-transparent bg-clip-text bg-gradient-to-t from-[#FAFBFF] to-[#B3B9CB]">
          Grant support
        </h2>
        <p className="text-foreground-leading text-base">
          We are proud recipients of the Arbitrum Foundation&#39;s Grants program.
        </p>
      </div>
      <div className="px-8 sm:gap-8 gap-4 w-fit flex items-center justify-center z-20">
        <div className="w-fit h-fit animate-hover sm:mt-16 mt-8">
          <Image quality={100} src={coinAsset} alt="Arbitrum 3D Coin" width={207} height={207} className="sm:w-auto w-24 select-none"></Image>
        </div>
        <Image src={textAsset} alt="Arbitrum Text" width={392.5} height={68} className="sm:w-auto w-48"></Image>
      </div>
      <span
        className="absolute pointer-events-none z-0 top-[37%] left-[25%] w-[33rem] h-[23rem] blur-[275px] rounded-full bg-accent"
        aria-hidden="true"
      />
      <PoweredBy />
    </section>
  );
};
export default GrantSection;
