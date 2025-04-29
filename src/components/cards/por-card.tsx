import Image from "next/image";
import Chevron from "../../../public/assets//icons/chevron.svg";
import { BrandLink } from "../buttons/brand-button";

interface Props {
    token: string;
    ratio: string;
    imageRoute: string;
}

const PorCard = ({token, imageRoute}: Props) => {   
    return (
        <div>
            <div className="flex flex-col gap-9 border rounded-md shadow-md px-10 py-6 bg-background">
                <div className="flex flex-col justify-between gap-y-3">
                    <div className="flex flex-row items-center justify-between gap-x-6">
                        <div>
                            <h1 className="text-foreground-heading 2xl:text-[36px] sm:text-[50px] text-[34px] font-atyp-display font-medium leading-[120%]">{token}</h1>
                            <h3 className="text-foreground-leading text-xl font-medium">Reserve ratio</h3>
                        </div>
                        <Image src={imageRoute} alt="Token image" width={80} height={80}></Image>
                    </div>
                    <h1 className="text-foreground-heading 2xl:text-[32px] sm:text-[50px] text-[34px] font-atyp-display font-medium leading-[120%]">100%</h1>
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between gap-x-6">
                        <p>Collateral in custody</p>
                        <p className="text-xl font-medium">618.563,895</p>
                    </div>

                    <div className="flex flex-row items-center justify-between gap-x-6">
                        <div className="flex flex-row items-center justify-start gap-x-1">
                            <Image src={Chevron} width={12} height={12} alt="chevron down icon"></Image>
                            <p>Circulating Tokens</p>
                        </div>
                        <p className="text-xl font-medium">618.563,895</p>
                    </div>

                    <div className="gap-y-1 flex flex-col">    
                        <div className="flex flex-row items-center justify-between gap-x-6 ms-4">
                            <p className="underline text-[#245BFF]">Etherum</p>
                            <p>154640,973</p>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-x-6 ms-4">
                            <p className="underline text-[#245BFF]">Base</p>
                            <p>154640,973</p>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-x-6 ms-4">
                            <p className="underline text-[#245BFF]">Optimism</p>
                            <p>154640,973</p>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-x-6 ms-4">
                            <p className="underline text-[#245BFF]">Arbitrum One</p>
                            <p>154640,973</p>
                        </div>
                    </div>
                </div>
                <BrandLink
                href="https://app.bouldertech.fi/"
                >View in CoinGecko</BrandLink>
            </div>
            
        </div>
    );
}

export default PorCard;