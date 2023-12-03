import Image from "next/image"
import Shefa from "../../../public/icons/shefa-logo.svg";
import Irsa from "../../../public/icons/irsa-logo.svg";

const PoweredBy = () => {
    return (
        <div className="p-0 w-full flex sm:flex-row flex-col justify-center items-center mt-4 py-8 gap-8 border border-gray-100 bg-gradient-to-r from-transparent via-gray-100 to-transparent">
            <h3 className="text-[#485069] text-base font-medium font-atyp-text">
            Powered by
            </h3>
            <span className="w-px h-8 bg-gray-100 hidden sm:block" />
            <Image src={Shefa} alt="Shefa logo" />
            <Image src={Irsa} alt="Irsa logo" />
        </div>
    )
}

export default PoweredBy;