"use client";
import Link from "next/link";
import Imagotype from "../../public/assets/imagotype.svg";
import GhostButton from "./buttons/ghost-button";
import Image from "next/image";
import clsx from "clsx";
import Hamburger from "../../public/icons/hamburger.svg";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="w-full fixed h-[65px] top-0 z-50 py-3 bg-[rgba(1, 3, 18, 0.01)] border-b border-grey-200 backdrop-blur-lg">
        <div className="flex items-center justify-between 2xl:px-[300px] lg:px-[150px] md:px-[75px] px-[20px]">
          <div className="flex gap-4 items-center justify-center divide-border-grey-200 divide-x-[1px]">
            <Link href={"/"}>
              <Image src={Imagotype} alt="Logo BoulderTech" width={120}></Image>
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
                href={"/blog"}
              >
                Blog
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
          <GhostButton iconBtn onClick={toggleMenu} classes="sm:hidden">
            <Image
              src={Hamburger}
              alt="Hamburger menu"
              width={14}
              height={14}
              className="w-4 h-4 absolute"
            />
          </GhostButton>
          <Link href={"https://app.bouldertech.fi/"} className="hidden sm:block">
            <GhostButton>Launch App</GhostButton>
          </Link>
        </div>
      </header>
      <div
        className={clsx(
          "transition-all px-5 flex-col gap-10 duration-500 fixed top-[65px] w-full h-[calc(100vh-65px)] bg-[rgba(1, 3, 18, 0.5)] backdrop-blur-xl z-50 flex items-center justify-center",
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <Link
          className="cursor-pointer text-3xl font-medium hover:opacity-50 transition-all duration-200"
          href={"/about"}
          onClick={toggleMenu}
        >
          About us
        </Link>
        <Link
          className="cursor-pointer text-3xl font-medium hover:opacity-50 transition-all duration-200"
          href={"/blog"}
          onClick={toggleMenu}
        >
          Blog
        </Link>
        <Link
          className="cursor-pointer text-3xl font-medium hover:opacity-50 transition-all duration-200"
          href={"/contact"}
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <Link
          className="cursor-pointer text-3xl font-medium hover:opacity-50 transition-all duration-200"
          href={"https://docs.bouldertech.fi"}
          target="_blank"
          onClick={toggleMenu}
        >
          Documentation ↗
        </Link>
        <Link
          className="cursor-pointer text-3xl font-medium hover:opacity-50 transition-all duration-200"
          href={"https://app.bouldertech.fi/"}
          onClick={toggleMenu}
        >
          Launch App
        </Link>
      </div>
    </>
  );
};
export default Header;
