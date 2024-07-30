import benefitData from "@/utils/benefit-data";
import BenefitCard from "../cards/benefit-card";
import PoweredBy from "../cards/poweredby-card";

const BenefitsSection = () => {
  return (
    <section className="w-full flex items-center justify-center relative py-16 text-center flex-col gap-16">
      <span
        className="absolute pointer-events-none z-10 top-1/4 w-full h-full blur-[120px] bg-gradient-to-b from-[#a5f5ff14] to-[#245bff14]"
        aria-hidden="true"
      />
      <div className="px-8 grid gap-4">
        <h2 className="font-atyp-display text-[32px] -tracking-[0.72px] text-transparent bg-clip-text bg-gradient-to-t from-[#FAFBFF] to-[#B3B9CB]">
          Why choose Boulder Tech?
        </h2>
        <p className="text-foreground-leading text-base">
          Unlock the future of secure, compliant, and on-chain investments.
        </p>
      </div>
      <div className="px-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-fit items-center place-items-center justify-center justify-items-center">
        {benefitData.map((object, index) => (
          <BenefitCard
            key={index}
            title={object.title}
            description={object.description}
            icon={object.icon}
          />
        ))}
      </div>
      <PoweredBy />
    </section>
  );
};
export default BenefitsSection;
