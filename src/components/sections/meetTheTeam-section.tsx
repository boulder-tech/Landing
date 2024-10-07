import PersonCard from '../cards/person-card';

const MeetTheTeam = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-10 relative 2xl:px-[200px] lg:px-[150px] md:px-[75px] px-[20px]">
      <div className="max-w-[52rem] flex flex-col items-center gap-8 text-center relative">
        <h1 className="text-foreground-heading sm:text-[60px] text-[34px] font-atyp-display font-medium leading-[120%] z-10">
          Meet the team
        </h1>
        <h3 className="text-foreground-leading text-xl font-medium z-10">
          Expert technical background both in broader crypto and finance
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <PersonCard
          name="Rodrigo Benzaquen"
          role="CEO"
          imageRoute="/assets/team/rodri.png"
          fact1="Co-founder & CTO"
          fact1col="@SenseiNode"
          fact2="Co-founder & CEO"
          fact2col="@Nubeliu"
          fact3="Early tech employee"
          fact3col="@MercadoLibre"
        />
        <PersonCard
          name="Pablo Hegoburu"
          role="CTO"
          imageRoute="/assets/team/pablo_1.jpg"
          fact1="MSc in"
          fact1col="Nuclear Engineering"
          fact2="R&D"
          fact2col={`Smart Contracts, Blockchain, Automated Crypto Trading`}
        />
        <PersonCard
          name="Pedro Cavanna"
          role="CSO"
          imageRoute="/assets/team/pedro.png"
          fact1="Investor/Developer in"
          fact1col="Real Estate, Finance & Software Companies"
          fact2="Key Executive"
          fact2col="Pharmaceutical Industry"
        />
        <PersonCard
          name="Albana Rodriguez Capurro"
          role="COO"
          imageRoute="/assets/team/albana.jpg"
          fact1="Financial Advisor"
          fact1col="Merryll Lynch"
          fact2="Head of Trading Desk"
          fact2col="Quest Capital"
          fact3="Community Builder"
          fact3col="Ethereum Uruguay"
        />
      </div>
    </div>
  );
};

export default MeetTheTeam;
