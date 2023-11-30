import clsx from "clsx";

type separatorProps = {
    orientation: "horizontal" | "vertical";
};

const Separator:React.FC<separatorProps> = ({orientation}) => {
    
    return <div className={clsx(orientation === "horizontal" ? "w-full h-px" : "w-px h-full", "borde")}></div>
}
export default Separator;