interface Props {
    number: string,
    title: string,
    description:string,
}

const StepCard = ({number, title, description}:Props) => {

    return(
        <div className="flex flex-col items-start w-full h-64 bg-[#FFFFFF] border-[#FAFBFF] border-2 rounded-xl p-4 gap-4 hover:shadow-xl duration-300 ease-in-out">
            <h1 className="md:text-2xl font-medium text-3xl 2xl:text-3xl">{number}</h1>
            <p className="md:text-2xl font-medium text-lg">{title}</p>
            <p>{description}</p>
        </div>
    )

};
export default StepCard;