import Image from 'next/image';

const TrustSection = () => {
    return (
        <section>
            <div className='flex flex-col items-center py-16 bg-gray-300 gap-y-4'>
                <h2 className='font-atyp-display sm:text-6xl text-[35px] font-light text-center'>
                    Built for Trust and Transparency
                </h2>
                <p className='text-center max-w-2xl'>
                    Every token is backed 1:1 by real-world assets (RWA), with institutional-grade processes and full on-chain verification — ensuring security, compliance, and long-term stability.
                </p>
            </div>
            <div>
                {/* componentes cards */}
            </div>
        </section>
    );
};

export default TrustSection;