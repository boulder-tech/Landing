import Image from "next/image";
import MountainVector from "../../../public/assets/mountain-vector.svg";
import Waitlist from "../buttons/waitlist-input";

const FinalCtaSection = () => {
  return (
    <section className="flex bg-[url(/assets/mountain-vector.png)] bg-cover bg-center bg-no-repeat flex-col items-center justify-center relative px-8 sm:pt-56 pt-28 pb-44 w-full gap-10">
      <h1 className="z-10 font-atyp-display sm:text-6xl text-[35px] font-medium max-w-3xl text-center">
        Look into the future with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#245BFF] whitespace-nowrap">
          Boulder Tech
        </span>
      </h1>
      <Waitlist />
    </section>
  );
};
export default FinalCtaSection;
