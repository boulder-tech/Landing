import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'

interface Props {
    cardClass?: string;
    imageurl: string;
    title: string;
    subtitle: string;
    cta: string;
    url: string;
}

const TrustCard = ({imageurl, title, subtitle, cta, cardClass, url} : Props) => {
    return (
        <div className={`${cardClass} w-96 flex flex-col items-center`}>
            <Image src={imageurl} alt='image' width={160} height={160} sizes="(max-width: 768px) 100vw"></Image>
            <div className='flex flex-col items-center gap-y-4 mt-8 w-[400px]'>
                <h3 className='font-atyp-display font-semibold text-2xl'>{title}</h3>
                <p className='text-[#9399A6] text-center'>{subtitle}</p>
                {/* <Link href={url} className= "text-blue-500 underline">{cta} ↗</Link> */}

            </div>
        </div>  
    );
};

export default TrustCard;