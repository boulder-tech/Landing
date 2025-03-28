import Link from "next/link";
import Rocket from "../cards/rocket";

const RocketSection = () => {
    return (
        <>
            <section className="w-full flex items-center justify-center sm:mt-20 mt-10 mb-20 overflow-hidden px-8">
                <div className="md:bg-card-dark bg-card-dark/80 md:backdrop-blur-none backdrop-blur-xl flex items-center justify-start rounded-xl z-20 border border-[#fafbff12] 3xl:py-20 sm:py-16 3xl:px-32 lg:px-20 sm:px-8 p-10 3xl:w-[65%] lg:w-[70%] w-full">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4 max-w-4">
                            <h1 className="font-atyp-display 2xl:text-5xl text-3xl leading-[1.1]">{"Meet our"}<br />{"Leadership team"}</h1>
                            <p className="text-foreground-leading 2xl:text-base text-sm 2xl:max-w-[32rem] max-w-[30rem]">Our team brings together together decades of experience in blockchain and traditional finance (TradFi). We are building a cutting-edge web3 protocol for the tokenization of Real World Assets (RWAs), shaping the future of a hyper-tokenized economy.</p>
                        </div>
                        <Link href={"/about"} className="h-fit w-fit flex items-center justify-center px-[0.84rem] py-[0.7rem] rounded-lg font-medium text-sm hover:bg-[#171717] duration-200">Learn more about us ↗</Link>
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