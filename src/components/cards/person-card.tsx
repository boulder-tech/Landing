import Image from "next/image";
import Fact from "../fact";
import { GlowPaths } from "../glow-paths";

interface Props {
    name: string;
    role?: string;
    imageRoute: string;
    fact1?: string,
    fact1col?: string,
    fact2?: string,
    fact2col?: string,
    fact3?: string,
    fact3col?: string,
}

const PersonCard = ({name, role, imageRoute, fact1, fact2, fact3, fact1col, fact2col, fact3col}: Props) => {   
    return (
        <div className="relative">
            <div className="absolute left-[-8px]">
                <GlowPaths />
            </div>
            <div className="p-4 rounded-xl w-[18.75rem] h-fit bg-gradient-to-br from-[#0D0E1B] to-[#0d0e1b00] grid gap-8 font-atyp-text font-normal group relative">
                <div className="rounded-[0.625rem] overflow-hidden relative w-[17rem] h-[21rem]">
                    <div className="absolute opacity-0 z-20 group-hover:opacity-100 p-4 flex flex-col gap-4 duration-200 cursor-default">
                        <Fact fact={fact1} factcol={fact1col}/>
                        <Fact fact={fact2} factcol={fact2col}/>
                        <Fact fact={fact3} factcol={fact3col}/>
                    </div>
                    <div className="w-full h-full">
                        <Image src={imageRoute} alt={`Image of ` + name} width={1000} height={1000} className="group-hover:opacity-10 duration-200 z-10"></Image>
                    </div>
                </div>
                <div className="grid gap-2">
                    <h3 className="text-xl text-foreground-heading">{name}</h3>
                    { role &&
                        <h3 className="text-[1.15rem] text-[#B3B9CB]">{role}</h3>
                    }
                </div>
            </div>
        </div>
    );
}

export default PersonCard;