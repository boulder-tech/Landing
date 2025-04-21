import InvestorCard from "../cards/Investor-card";
import INDIVIDUAL from "../../../public/assets/investors/Individual investors.png"
import IRSA from "../../../public/assets/investors/logo-IRSA.png"
import BIND from "../../../public/assets/investors/logo-bind.png"
import RIPIO from "../../../public/assets/investors/logo-ripio.png"

const InvesorsSection = () => {
    return(
        <section className="flex flex-wrap justify-center gap-14 bg-slate-900 w-29">

            <div className="flex flex-col gap-4 left-0 bg-black">

                <p className="font-atyp-display text-3xl 2xl:text-5xl font-light leading-tight">Key investors</p>
                <p className="md:flex hidden text-foreground-leading leading-normal text-base 2xl:text-lg w-1/2">Backed by top-tier firms and seasoned investors shaping the next wave of finance and blockchain infrastructure</p>
           
            </div>

            <div className="flex gap-6">

                <InvestorCard
                    logo={IRSA}
                    name="IRSA Sheefa Ventures"
                />
                <InvestorCard
                    logo={BIND}
                    name="Bind Inversiones"
                />
                <InvestorCard
                    logo={RIPIO}
                    name="Ripio Ventures"
                />
                <InvestorCard
                    logo={INDIVIDUAL}
                    name="Individual investors"
                />
                
            </div>
            
        </section>
    )
};
export default InvesorsSection;