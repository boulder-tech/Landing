import Link from "next/link";
import Imagotype from "./imagotype";
import GhostButton from "./buttons/ghost-button";

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 py-3 bg-[rgba(1, 3, 18, 0.01)] border-b border-grey-200 backdrop-blur-lg">
      <div className="flex items-center justify-between 2xl:px-[300px] lg:px-[150px] md:px-[75px] px-[20px]">
        <div className="flex gap-4 items-center justify-center divide-border-grey-200 divide-x-[1px]">
          <Link href={'/'}>
            <Imagotype />
          </Link>
          <div className="pl-4 text-boulder-text sm:flex hidden text-sm gap-4 font-normal -tracking-[0.28px]">
            <Link
              className="cursor-pointer font-medium hover:opacity-50 transition-all duration-200"
              href={"/about"}
            >
              About
            </Link>
            <Link
              className="cursor-pointer font-medium hover:opacity-50 transition-all duration-200"
              href={"/contact"}
            >
              Contact
            </Link>
            <Link
              className="cursor-pointer font-medium hover:opacity-50 transition-all duration-200"
              href={"https://docs.bouldertech.fi"}
            >
              Documentation ↗
            </Link>
          </div>
        </div>
        <Link href={"#waitlist"}>
          <GhostButton>Join waitlist →</GhostButton>
        </Link>
      </div>
    </header>
  );
};
export default Header;
