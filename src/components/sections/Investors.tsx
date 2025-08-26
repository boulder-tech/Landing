import InvestorCard from "../cards/Investor-card";
import INDIVIDUAL from "../../../public/assets/investors/Individual investors.png"
import IRSA from "../../../public/assets/investors/logo-IRSA.png"
import BIND from "../../../public/assets/investors/logo-bind.png"
import RIPIO from "../../../public/assets/investors/logo-ripio.png"

import IRSAblack from "../../../public/assets/investors/logo-IRSAblack.png"
import BINDblack from "../../../public/assets/investors/logo-bindblack.png"
import RIPIOblack from "../../../public/assets/investors/logo-ripioblack.png"

const InvesorsSection = () => {
    return(
        <section className="flex flex-col justify-center w-29 sm:px-16 px-4 gap-14 pb-20 xl:pb-28 2xl:pb-32 pt-32 relative">
            <div className="flex flex-col xl:justify-left justify-center gap-12">
                <div className="flex flex-col gap-4 md:justify-center text-center items-center relative z-20">
                    <h2 className="font-atyp-display text-3xl sm:text-5xl font-black leading-tight italic">On The Shoulders Of Giants</h2>
                    <p className="text-[#46505D] text-lg sm:text-xl font-medium sm:w-[440px] items-center justify-center">Backed by top-tier firms and seasoned investors shaping the future of crypto and finance</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                    <InvestorCard
                        //ver como hacer que cambie onhover la foto. de negro a blanco.
                        logo={IRSAblack}
                        name="IRSA Sheefa Ventures"
                        color="hover:bg-[#407D70]"
                        url="https://www.shefaventures.com.ar/"
                    />
                    <InvestorCard
                        logo={BINDblack}
                        name="Bind Inversiones"
                        color="hover:bg-[#D82E53]"
                        url="https://www.natan.vc/"
                    />
                    <InvestorCard
                        logo={RIPIOblack}
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