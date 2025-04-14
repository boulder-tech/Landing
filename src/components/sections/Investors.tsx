import InvestorCard from "../cards/Investor-card";
import IRSA from "../../../public/assets/investors/logo-IRSA.png"
import BIND from "../../../public/assets/investors/logo-bind.png"
import RIPIO from "../../../public/assets/investors/logo-ripio.png"

const InvesorsSection = () => {
    return(
        <section className="flex w-full">
            <div className="flex w-full justify-center gap-6">
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
                    
                    name="Ripio Ventures"
                    individuals="
                        Ariel Barmat
                        Christian Vilate
                        David Garcia
                        Esteban Ordano
                        Facundo Jorge 
                        Ameal Castroagudin
                    "
                />
                
            </div>
            
        </section>
    )
};
export default InvesorsSection;