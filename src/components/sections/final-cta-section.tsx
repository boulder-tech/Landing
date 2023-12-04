import BrandButton from "../buttons/brand-button";
import Image from "next/image";
import MountainVector from "../../../public/assets/mountain-vector.svg";

const FinalCtaSection = () => {
  return (
    <section className="flex flex-col items-center justify-center relative px-8 sm:mt-56 mt-28 mb-44 w-full gap-10">
      <Image
        src={MountainVector}
        alt="Background asset"
        className="pointer-events-none absolute -bottom-48"
        width={1920}
        height={1080}
      />
      <h1 className="z-10 font-atyp-display sm:text-6xl text-[35px] font-medium max-w-3xl text-center">
        Look into the future with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#245BFF] whitespace-nowrap">
          Boulder Tech
        </span>
      </h1>
      <div className="p-1 pl-4 bg-gray-100 border border-gray-100 max-w-sm w-full rounded-full flex gap-1 z-10 backdrop-blur-sm">
        <input
          type="text"
          className="px-2 w-full font-medium outline-none border-none bg-transparent text-foreground-heading text-sm placeholder:text-foreground-dark"
          placeholder="Email address..."
        />
        <BrandButton>Join waitlist →</BrandButton>
      </div>
    </section>
  );
};
export default FinalCtaSection;
