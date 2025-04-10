import InvesorCard from "../cards/Investor-card";

type InvestorCardProps = {
    name:string;
    logo:string; //URL de la imagen

};

const InvesorsSection = (name, logo):InvestorCardProps => {
    return(
        <section>
            <InvesorCard
                
            />
        </section>
    )
};
export default InvesorsSection;