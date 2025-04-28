"use client";
import React from 'react';
import Image from 'next/image';
import SafeBox from "../../public/assets/PoF.png";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@radix-ui/react-select";

const PofHero = () => {
    return (
        <section className='flex flex-col gap-y-24'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <div className=" text-center">
                    <h1 className='text-foreground-heading 2xl:text-[60px] sm:text-[50px] text-[34px] font-atyp-display font-medium leading-[120%] z-10'>Proof of Reserves</h1>
                    <h3 className='text-foreground-leading text-xl font-medium z-10'>All listed tokens are backed with at least 100% of the supply</h3>
                </div>
                <div>
                    <Image src={SafeBox} alt="SafeBox" width={200} height={200} quality={100}></Image>
                </div>
            </div>
            <div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <p>Audit time</p>
                    <div className=''>
                        <Select>
                            <SelectTrigger className="w-[220px] cursor-pointer border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                            <SelectContent className="w-[220px] bg-background border rounded-md shadow-md">
                                <SelectGroup>
                                    <SelectItem 
                                    value="2025-03-27T04:00:00Z"
                                    className="cursor-pointer hover:bg-accent hover:text-accent-foreground px-3 py-2 text-sm rounded-md"
                                    >2025-03-27 04:00 UTC
                                    </SelectItem>
                                    <SelectItem 
                                    value="2025-03-28T04:00:00Z"
                                    className="cursor-pointer hover:bg-accent hover:text-accent-foreground px-3 py-2 text-sm rounded-md"
                                    >2025-03-28 05:00 UTC
                                    </SelectItem>
                                    <SelectItem 
                                    value="2025-03-29T04:00:00Z"
                                    className="cursor-pointer hover:bg-accent hover:text-accent-foreground px-3 py-2 text-sm rounded-md"
                                    >2025-03-29 06:00 UTC
                                    </SelectItem>
                                </SelectGroup>    
                            </SelectContent>
                        </Select>
                    </div>                      
                </div>
            </div>
        </section>
    );
};

export default PofHero;