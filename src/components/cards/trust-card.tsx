import React from 'react';
import Image, { StaticImageData } from 'next/image'

interface Props {
    cardClass?: string;
    imageurl: string;
    title: string;
    subtitle: string;
    cta: string;
}

const TrustCard = ({imageurl, title, subtitle, cta, cardClass} : Props) => {
    return (
        <div className={`${cardClass} w-96`}>
            <Image src={imageurl} alt='hola' width={100} height={100} sizes="(max-width: 768px) 100vw"></Image>
            <div>
                <h3 className='font-atyp-display font-semibold text-2xl'>{title}</h3>
                <p className='text-[#9399A6]'>{subtitle}</p>
                <p>{cta}</p>
            </div>
        </div>  
    );
};

export default TrustCard;