import Image, { StaticImageData } from "next/image";
import Link from 'next/link'


interface Props {
    logo: StaticImageData;
    name: string;
    color: string;
    url?: string;
}

const individualinvestors = [
    "Ariel Barmat",
    "Christian Vilate",
    "David García",
    "Esteban Ordano",
    "Facundo Ameal",
    "Lyuben Belov",
    "Mike Santos",
    "Matías Woloski",   
    "Martín Tellechea",
    "Wenceslao Casares"
];

const cardClass = "flex flex-wrap justify-center items-center w-full h-64 bg-[#FFFFFF] border-[#FAFBFF]/12 border-2 rounded-xl duration-150"

const InvestorCard = ({logo, name, color, url}:Props) => {
    
    if (url){
        return(

            <Link href={url} target='_blank'className={`${color} ${cardClass}`}>
                
                <Image src={logo} alt={name} width={150}/>
    
            </Link>
        )
    }

    return(

        <div className={`${color} ${cardClass} p-2 group relative overflow-hidden`}>
            
            <h3 className="text-center font-atyp-display text-3xl font-light leading-tight absolute top-[5.5rem] group-hover:top-[-80px] transition-all duration-300 ease-in-out">Individual<br />Investors</h3>

            <div className="grid grid-cols-2 gap-y-2 left-4 absolute bottom-[-180px] group-hover:bottom-[40px] transition-all duration-300 ease-in-out">

                {individualinvestors.map((investor, i)=>(
                    <p key={i} className="text-white">{investor}</p>
                ))}

            </div>

        </div>
    )

};
export default InvestorCard;