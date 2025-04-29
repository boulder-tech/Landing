"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Chevron from "../../../public/assets//icons/chevron.svg";
import CoinGecko from "../../../public/assets/CoinGecko.svg";


interface Props {
    token: string;
    ratio: string;
    imageRoute: string;
}

const networks = [
    { name: "Ethereum", qMinted: "154640,973" },
    { name: "Base", qMinted: "154640,973" },
    { name: "Optimism", qMinted: "154640,973" },
    { name: "Arbitrum One", qMinted: "154640,973" }
];

const PorCard = ({token, imageRoute}: Props) => {   

    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <div>
            <div className="flex flex-col gap-9 border rounded-md shadow-md px-10 py-6 bg-background">
                <div className="flex flex-col justify-between gap-y-3">
                    <div className="flex flex-row items-center justify-between gap-x-6">
                        <div>
                            <h1 className="text-foreground-heading 2xl:text-[44px] sm:text-[34px] text-[40px] font-atyp-display font-medium leading-[120%]">{token}</h1>
                            <h3 className="text-foreground-leading text-md font-medium">Reserve ratio</h3>
                        </div>
                        <Image src={imageRoute} alt="Token image" width={80} height={80}></Image>
                    </div>
                    <h1 className="text-foreground-heading 2xl:text-[32px] sm:text-[50px] text-[34px] font-atyp-display font-medium leading-[120%]">100%</h1>
                </div>
                <div>
                    <div className="flex flex-col gap-y-3">
                        <div className="flex flex-row items-center justify-between gap-x-6">
                            <p>Collateral in custody</p>
                            <p className="text-xl font-medium">618.563,895</p>
                        </div>

                        <div className="flex flex-row items-center justify-between gap-x-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <div className="flex flex-row items-center justify-start gap-x-1">
                                <Image 
                                    src={Chevron}
                                    width={12}
                                    height={12}
                                    alt="chevron down icon"
                                    className={`${isOpen ? "rotate-180" : ""} transition-transform`}
                                >
                                </Image>
                                <p>Circulating Tokens</p>
                            </div>
                            <p className="text-xl font-medium">618.563,895</p>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="flex flex-col gap-y-1 mt-2 duration-300 ease-in-out">
                            {networks.map((network, index) => (
                                <div key={index} className="flex flex-row items-center justify-between gap-x-6 ms-4">
                                    <p className="underline text-[#245BFF]">{network.name}</p>
                                    <p>{network.qMinted}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>                
                <Link
                    href="https://www.coingecko.com/" 
                    target='_blank'
                    className="h-fit w-full flex items-center justify-center gap-x-3 px-[0.84rem] py-[0.7rem] rounded-lg font-medium text-sm hover:bg-[#245BFF] duration-200"
                >View in CoinGecko <Image src={CoinGecko} alt="CoinGecko" width={24} height={24}></Image>
                </Link>
            </div>
        </div>
    );
}

export default PorCard;