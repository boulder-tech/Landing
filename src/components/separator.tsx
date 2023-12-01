import clsx from "clsx";

type separatorProps = {
    orientation: "horizontal" | "vertical";
};

const Separator:React.FC<separatorProps> = ({orientation}) => {
    
    return <div className={clsx(orientation === "horizontal" ? "w-full h-px" : "w-px h-full", "bg-gradient-to-r from-transparent via-gray-300 to-transparent")}></div>
}
export default Separator;