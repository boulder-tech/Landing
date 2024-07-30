import Image from "next/image";
import Rocket from "../../../public/assets/rocket.png";

const RocketSection = () => {
    return (
        <section className="w-full flex items-center justify-center my-20">
            <div className="bg-[#0D0E1B] flex items-center justify-start rounded-xl z-20 border border-[#fafbff12] py-20 px-32 w-[65%]">
                <div className="flex flex-col gap-4">
                    <h1 className="font-atyp-display text-5xl leading-[1.1]">{"Meet our"}<br />{"Established Leadership"}</h1>
                    <p className="text-foreground-leading text-base max-w-[38rem]">Our team brings together extensive experience and expertise in both blockchain and traditional finance (TradFi). We are dedicated to developing a cutting-edge web3 protocol for the tokenization of Real World Assets (RWAs), shaping the future of a hyper-tokenized economy.</p>
                </div>
            </div>
            <span className="absolute z-30 right-72">
                <Image src={Rocket} alt="Rocket"></Image>    
            </span>
        </section>
    )
}

export default RocketSection;