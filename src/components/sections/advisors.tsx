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
                <PersonCard name="Ariel Schapira" imageRoute="/assets/team/ariel.png" fact1="Industrial Engineer & businessman with a" fact1col="long professional career" fact2="Key Executive leading" fact2col="Telecommunications, Energy & Insurance companies"/>
                <PersonCard
                    name="Gabriel Cohen"
                    imageRoute="/assets/team/gabi.png"
                    fact1="Chief Financial Officer and Director at"
                    fact1col="Pampa Energía"
                    fact2="Financial Control Manager"
                    fact2col={`Treasury and Corporate & Investment Banker at CitiBank`}
                />
                 <PersonCard
                    name="Evan Van Ness"
                    imageRoute="/assets/team/evan.jpg"
                    fact1="Former Chief Decentralization Officer"
                    fact1col="@Ethereum Foundation"
                    fact2="Venture investor"
                    fact2col="@TxPoolCapital"
                />
            </div>
        </div>
    );
}

export default Advisors;