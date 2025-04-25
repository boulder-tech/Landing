import React from 'react';
import Image from 'next/image';
import SafeBox from "../../public/assets/PoF.png";

const PofHero = () => {
    return (
        <section className='flex flex-col items-center justify-center'>
            <div className="container">
                <h1>Proof of Reserves</h1>
                <h3>All listed tokens are backed with at least 100% of the supply</h3>
            </div>
            <div>
                <Image src={SafeBox} alt="SafeBox" width={120} height={120}></Image>
            </div>
        </section>
    );
};

export default PofHero;