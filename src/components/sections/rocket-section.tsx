import Link from "next/link";
import Rocket from "../cards/rocket";

const RocketSection = () => {
    return (
        <>
            <section className="w-full flex items-center justify-center my-40 mb-60 overflow-hidden">
                <div className="bg-card-dark flex items-center justify-start rounded-xl z-20 border border-[#fafbff12] py-20 px-32 w-[65%]">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h1 className="font-atyp-display text-5xl leading-[1.1]">{"Meet our"}<br />{"Established Leadership"}</h1>
                            <p className="text-foreground-leading text-base max-w-[38rem]">Our team brings together extensive experience and expertise in both blockchain and traditional finance (TradFi). We are dedicated to developing a cutting-edge web3 protocol for the tokenization of Real World Assets (RWAs), shaping the future of a hyper-tokenized economy.</p>
                        </div>
                        <Link href={"/about"} className="h-fit w-fit flex items-center justify-center px-[0.84rem] py-[0.7rem] rounded-lg bg-[#D1DDFF] font-medium text-accent text-sm">View more about us ↗</Link>
                    </div>
                </div>
                <Rocket></Rocket>
            </section>
            <span
                className="absolute pointer-events-none z-10 bottom-[25%] left-[32%] w-[50rem] h-[6rem] blur-[200px] rounded-full bg-accent"
                aria-hidden="true"
            />
        </>
    )
}

export default RocketSection;