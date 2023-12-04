import PartnerCard from "../partner-card";
import Separator from "../separator";
import BlackRock from "../../../public/icons/black-rock.svg";
import Pimco from "../../../public/icons/pimco.svg";
import MercadoLibre from "../../../public/icons/mercado-libre.svg";
import CreditAgricole from "../../../public/icons/credit-agricole.svg";
import BBVA from "../../../public/icons/bbva.svg";
import StoneX from "../../../public/icons/stone-x.svg";
import ClearStreet from "../../../public/icons/clear-street.svg";
import Ankura from "../../../public/icons/ankura.svg";

const PartnersSection = () => {
  return (
    <section className="w-full flex items-center justify-center relative py-16 text-center px-5 flex-col gap-16">
      <div className="px-8 flex flex-col gap-4 items-center justify-center">
        <h2 className="font-atyp-display text-[32px] -tracking-[0.72px] text-transparent bg-clip-text bg-gradient-to-t from-[#FAFBFF] to-[#B3B9CB]">
          Elevate your Investments with Custodial Brilliance
        </h2>
        <p className="text-foreground-leading text-base w-full max-w-3xl">
          Explore unparalleled asset security with our commitment to thorough
          segregation, overseen by regulated and insured qualified custodians
          dedicated to safeguarding your investments.
        </p>
      </div>
      <Separator orientation="horizontal" />
      <div className="max-w-3xl flex flex-col md:flex-row items-center justify-between gap-16 w-full mx-8">
        <section className="flex flex-col gap-4 sm:text-left text-center">
          <h3 className="font-atyp-display text-[24px] -tracking-[0.72px] text-transparent bg-clip-text bg-gradient-to-t from-[#FAFBFF] to-[#B3B9CB]">
            Top-Tier Resources and Managers{" "}
          </h3>
          <p className="text-foreground-leading text-base w-full max-w-3xl">
            Our investments are focused solely on multi-billion dollar,
            extremely liquid exchange-traded funds, overseen by the leading bond
            managers globally.
          </p>
        </section>
        <section className="flex sm:flex-row flex-col gap-4 w-full items-center relative">
          <span className="absolute opacity-25 blur-[100px] z-10 pointer-events-none bg-gradient-to-b rounded-full h-full w-full sm:rotate-45 from-emerald-400 to-accent" aria-hidden="true"/>
          <PartnerCard icon={BlackRock} />
          <PartnerCard icon={Pimco} />
        </section>
      </div>
      <Separator orientation="horizontal" />
      <div className="max-w-3xl relative flex items-center justify-between gap-16 w-full flex-col mx-8">
        <section className="flex flex-col gap-4 text-center">
          <h3 className="font-atyp-display text-[24px] -tracking-[0.72px] text-transparent bg-clip-text bg-gradient-to-t from-[#FAFBFF] to-[#B3B9CB]">
            Established Leadership
          </h3>
          <p className="text-foreground-leading text-base w-full max-w-3xl">
            Our leadership team boasts a variety of expertise gained from
            prominent organizations.
          </p>
        </section>
        <section className="flex sm:flex-row flex-col items-center gap-4 w-full relative">
          <span className="absolute opacity-25 blur-[100px] z-10 pointer-events-none bg-gradient-to-b rounded-full h-full w-full sm:rotate-12 from-accent to-fuchsia-500" aria-hidden="true"/>
          <PartnerCard icon={MercadoLibre} />
          <PartnerCard icon={CreditAgricole} />
          <PartnerCard icon={BBVA} />
        </section>
      </div>
      <Separator orientation="horizontal" />
      <div className="max-w-3xl relative flex items-center justify-between gap-16 w-full flex-col">
        {" "}
        <section className="flex flex-col gap-4 text-center">
          <h3 className="font-atyp-display text-[24px] -tracking-[0.72px] text-transparent bg-clip-text bg-gradient-to-t from-[#FAFBFF] to-[#B3B9CB]">
            Regulated Providers{" "}
          </h3>
          <p className="text-foreground-leading text-base w-full max-w-3xl">
            Our funds entrust all assets to third-party accredited custodians and will undergo annual audits.
          </p>
        </section>
        <section className="flex gap-4 w-full sm:flex-row flex-col items-center relative">
          <span className="absolute opacity-20 blur-[100px] z-10 pointer-events-none bg-gradient-to-b rounded-full h-full w-full sm:-rotate-12 from-fuchsia-500 to-rose-500" aria-hidden="true"/>

          <PartnerCard icon={ClearStreet} />
          <PartnerCard icon={Ankura} />
          <PartnerCard icon={StoneX} />
        </section>
      </div>
      <Separator orientation="horizontal" />
    </section>
  );
};
export default PartnersSection;
