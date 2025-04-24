import Image from 'next/image';
import TrustCard from '../cards/trust-card';

const TrustSection = () => {
    return (
        <section className='flex flex-col items-center p-16 gap-y-32 pt-32 relative'>
            <span className="bg-[#245BFF]/50 w-[500px] h-96 absolute top-96 right-[-200px] blur-[240px] z-10 pointer-events-none"></span>
            <div className='flex flex-col items-center gap-y-4'>
                <h2 className='font-atyp-display sm:text-6xl text-[35px] font-light text-center'>
                    Built for Trust and Transparency
                </h2>
                <p className='text-center max-w-2xl'>
                    Every token is backed 1:1 by real-world assets (RWA), with institutional-grade processes and full on-chain verification — ensuring security, compliance, and long-term stability.
                </p>
            </div>
            <div className='flex flex-wrap justify-center gap-32' >
                <TrustCard
                    imageurl="/../assets/POF.png"
                    title='Institutional-Grade Security'
                    subtitle='Our platform is built on the most secure blockchain technology, ensuring your assets are safe and sound.'
                    cta='Verify 1:1 backing'   
                    url='' 
                />
                <TrustCard
                    imageurl="/../assets/EY.png"
                    title='Transparent Processes'
                    subtitle='We provide full transparency into our processes, you can trust your assets are being managed responsibly.'
                    cta='Check docs'
                    cardClass='gap-y-[16px]'
                    url=''
                />
            </div>
        </section>
    );
};

export default TrustSection;