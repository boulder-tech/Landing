interface Props {
    title:string,
    description:string
  }

const ApproachCard = ({title,description}: Props) => {   
    return (
        <div className="flex flex-col items-start bg-[#FFFFFF] border-[#FAFBFF] border-2 rounded-xl p-4 gap-4 hover:shadow-xl duration-300 ease-in-out">
            <h1 className="md:text-2xl font-medium text-3xl 2xl:text-3xl">{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default ApproachCard;