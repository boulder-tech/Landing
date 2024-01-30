import Hero from "@/components/sections/blog/Hero";
import Latest from "@/components/sections/blog/Latest";
import All from "@/components/sections/blog/All";

const blog = () => {
    return (
        <div className="w-screen flex flex-col items-center justify-center px-8">
            <Hero></Hero>
            <Latest></Latest>
            <All></All>
        </div>
    );
};

export default blog;