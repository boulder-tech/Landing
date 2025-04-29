import React from 'react';
import Image from 'next/image';
import SafeBox from "../../public/assets/PoF.png";
import AuditTimeSelect from './buttons/audit-time-select';
const PofHero = () => {
    return (
        <section className='flex flex-col gap-y-24'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <div className="text-center">
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
                        <AuditTimeSelect
                            
                        />
                    </div>                      
                </div>
            </div>
        </section>
    );
};

export default PofHero;