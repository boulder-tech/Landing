import PersonCard from "../cards/person-card";

const Advisors = () => {
    return (
        <div className="mt-32 mb-48 h-full flex flex-col items-center justify-center gap-10 relative 2xl:px-[200px] lg:px-[150px] md:px-[75px] px-[20px]">
            <div className="max-w-[52rem] flex flex-col items-center gap-8 text-center relative">
                <h1 className="text-foreground-heading sm:text-[60px] text-[34px] font-atyp-display font-medium leading-[120%] z-10">
                    Our Advisors
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                <PersonCard name="Sebastián López Sansón" imageRoute="/assets/team/sebastian.png" fact1="Co-founder" fact1col="@SyLS" fact2="Leading tech business" fact2col="lawyer & advisor"/>
                <PersonCard name="Ariel Schapira" imageRoute="/assets/team/ariel.png" fact1="Industrial Engineer & businessman with a" fact1col="long professional career" fact2="Key Executive leading" fact2col="Telecommunications, Energy & Insurance companies"/>
                <PersonCard name="Pedro Cavanna" imageRoute="/assets/team/pedro.png" fact1="Investor/Developer in" fact1col="Real Estate, Finance & Software Companies" fact2="Key Executive" fact2col="Pharmaceutical Industry"/>
            </div>
        </div>
    );
}

export default Advisors;