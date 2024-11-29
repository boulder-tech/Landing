import Image from "next/image";
import coinAsset from "../../../public/assets/arbiCoin.png";
import textTitleAsset from "../../../public/assets/arbiTitle.png";
import textSubtitleAsset from "../../../public/assets/arbiFoundation.png";
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
      <div className="px-8 sm:gap-8 gap-4 w-fit flex sm:flex-row flex-col items-center justify-center z-20">
        <div className="w-fit h-fit animate-hover sm:mt-16 mt-2">
          <Image quality={100} src={coinAsset} alt="Arbitrum 3D Coin" width={207} height={207} className="sm:w-fit w-36 select-none"></Image>
        </div>
        <div className="flex flex-col sm:items-start items-center gap-1 select-none">
          <Image src={textTitleAsset} alt="Arbitrum Text Title" width={392.5} height={38.34} className="sm:w-auto w-48"></Image>
          <Image src={textSubtitleAsset} alt="Arbitrum Text SubTitle" width={283.97} height={23.13} className="sm:w-fit w-36"></Image>
        </div>
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
