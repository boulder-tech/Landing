import Image from "next/image";

interface Props {
    token: string;
    ratio: string;
    imageRoute: string;
}

const PofCard = ({token, ratio, imageRoute}: Props) => {   
    return (
        <div>
            <h1>{token}</h1>
            <p>{ratio}</p>
            <Image src={imageRoute} alt="Token image" width={20} height={20}></Image>
        </div>
    );
}

export default PofCard;