import Hero from "@/components/sections/blog/Hero";
import Latest from "@/components/sections/blog/Latest";

const blog = () => {
    return (
        <div className="w-screen flex flex-col items-center justify-center px-8">
            <Hero></Hero>
            <Latest></Latest>
        </div>
    );
};

export default blog;