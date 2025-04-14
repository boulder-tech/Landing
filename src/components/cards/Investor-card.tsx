import Image, { StaticImageData } from "next/image";


interface Props {
    logo: StaticImageData;
    name: string;
    individuals?:string;
  }

const InvestorCard = ({logo, name, individuals}:Props) => {
    return(

        <div className="flex flex-wrap justify-center items-center w-64 h-64 bg-[#0D0E1B]">
            <Image src={logo} alt={name} />
            <p>{individuals}</p>

        </div>
    )
};
export default InvestorCard;