"use client";
import Link from "next/link";
import Imagotype from "./imagotype";
import GhostButton from "./buttons/ghost-button";
import Image from "next/image";
import clsx from "clsx";
import Hamburger from "../../public/icons/hamburger.svg";

const Header = () => {
  return (
    <>
      <header className="w-full fixed h-[65px] top-0 z-50 py-3 bg-[rgba(1, 3, 18, 0.01)] border-b border-grey-200 backdrop-blur-lg">
        <div className="flex items-center justify-between 2xl:px-[300px] lg:px-[150px] md:px-[75px] px-[20px]">
          <div className="flex gap-4 items-center justify-center divide-border-grey-200 divide-x-[1px]">
            <Link href={"/"}>
              <Imagotype />
            </Link>
            <div className="pl-4 text-boulder-text sm:flex hidden text-sm gap-4 font-normal -tracking-[0.28px]">
              <Link
                className="cursor-pointer font-medium hover:opacity-50 transition-all duration-200"
                href={"/about"}
              >
                About us
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
                target="_blank"
              >
                Documentation ↗
              </Link>
            </div>
          </div>
          <GhostButton iconBtn onClick={()=>console.log("ja")} classes="sm:hidden"><Image src={Hamburger} alt="Hamburger menu" width={14} height={14} className="w-4 h-4 absolute"/></GhostButton>
          <Link href={"/#waitlist"} className="hidden sm:block">
            <GhostButton>Join waitlist →</GhostButton>
          </Link>
        </div>
      </header>
      <div className="fixed top-[65px] w-full h-[calc(100vh-65px)] bg-[rgba(1, 3, 18, 0.01)] backdrop-blur-lg z-50 flex items-center justify-center"></div>
    </>
  );
};
export default Header;
