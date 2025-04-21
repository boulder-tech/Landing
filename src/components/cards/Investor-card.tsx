import Image, { StaticImageData } from "next/image";


interface Props {
    logo: StaticImageData;
    name: string;
    individuals?:string;
  }

const InvestorCard = ({logo, name, individuals}:Props) => {
    return(

        <div className="flex flex-wrap justify-center items-center w-64 h-64 bg-[#0D0E1B] border-[#FAFBFF]/12 border-2 rounded-xl">
            
            <Image src={logo} alt={name}/>

        </div>
    )
};
export default InvestorCard;