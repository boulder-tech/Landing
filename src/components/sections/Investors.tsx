import InvestorCard from "../cards/Investor-card";
import INDIVIDUAL from "../../../public/assets/investors/Individual investors.png"
import IRSA from "../../../public/assets/investors/logo-IRSA.png"
import BIND from "../../../public/assets/investors/logo-bind.png"
import RIPIO from "../../../public/assets/investors/logo-ripio.png"

const InvesorsSection = () => {
    return(
        <section className="flex flex-wrap justify-center w-29 sm:px-16 px-4 gap-14 pb-20 xl:pb-28 2xl:pb-32 pt-32 relative">

            <span className="bg-[#245BFF]/50 w-[500px] h-96 absolute top-0 right-[-300px] blur-[240px] z-10 pointer-events-none"></span>
            <span className="bg-[#245BFF]/50 w-[500px] h-96 absolute top-80 right-[1200px] blur-[240px] z-10 pointer-events-none"></span>
            
            <div className="flex flex-col xl:justify-left justify-center gap-12">

                <div className="flex flex-col gap-4 md:justify-center text-center relative z-20">

                    <p className="font-atyp-display text-3xl 2xl:text-5xl font-light leading-tight">Key investors</p>
                    <p className="text-foreground-leading leading-normal text-base 2xl:text-lg w-full text-center">Backed by top-tier firms and seasoned investors shaping the next wave of finance and blockchain infrastructure</p>

                    </div>

                    <div className="flex flex-wrap justify-center gap-6 ">

                    <InvestorCard
                        logo={IRSA}
                        name="IRSA Sheefa Ventures"
                        color="hover:bg-[#407D70]"
                        url="https://www.shefaventures.com.ar/"
                    />
                    <InvestorCard
                        logo={BIND}
                        name="Bind Inversiones"
                        color="hover:bg-[#D82E53]"
                        url="https://www.natan.vc/"
                    />
                    <InvestorCard
                        logo={RIPIO}
                        name="Ripio Ventures"
                        color="hover:bg-[#6F17F5]"
                        url="https://www.ripioventures.com/"
                    />
                    <InvestorCard
                        logo={INDIVIDUAL}
                        name="Individual investors"
                        color="hover:bg-[#245BFF]"
                    />

                </div>

            </div>
            
            
        </section>
    )
};
export default InvesorsSection;