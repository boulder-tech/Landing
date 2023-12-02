import benefitData from "@/utils/benefit-data";
import BenefitCard from "../benefit-card";
import Separator from "../separator";
import Image from "next/image";
import Shefa from "../../../public/icons/shefa-logo.svg";
import Irsa from "../../../public/icons/irsa-logo.svg";

const BenefitsSection = () => {
  return (
    <section className="w-full flex items-center justify-center relative px-8 py-16 text-center flex-col gap-16">
      <span
        className="absolute z-10 top-1/4 w-full h-full blur-[120px] bg-gradient-to-b from-[#a5f5ff14] to-[#245bff14]"
        aria-hidden="true"
      />
      <div className="grid gap-4">
        <h2 className="font-atyp-display text-[32px] -tracking-[0.72px] text-transparent bg-clip-text bg-gradient-to-t from-[#FAFBFF] to-[#B3B9CB]">
          Boulder Tokens
        </h2>
        <p className="text-foreground-leading text-base">
          Fully tokenized securities mirroring the value of RWA’s. The next
          generation of financial assets.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-fit items-center place-items-center justify-center justify-items-center">
        {benefitData.map((object, index) => (
          <BenefitCard
            key={index}
            title={object.title}
            description={object.description}
            icon={object.icon}
          />
        ))}
      </div>
      <div className="p-0 w-full flex sm:flex-row flex-col justify-center items-center mt-4 py-8 gap-8 border border-gray-100 bg-gradient-to-r from-transparent via-gray-100 to-transparent">
        <h3 className="text-[#485069] text-base font-medium font-atyp-text">
          Powered by
        </h3>
        <Separator orientation="vertical" />
        <Image src={Shefa} alt="Shefa logo" />
        <Image src={Irsa} alt="Irsa logo" />
      </div>
    </section>
  );
};
export default BenefitsSection;
