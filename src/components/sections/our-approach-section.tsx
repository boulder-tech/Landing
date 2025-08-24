import React from "react";
import Image from "next/image";
import ApproachCard from "../cards/approach-card";
import Rocket from "../cards/rocket";
import LaserFocus from "../../../public/assets/laser-focus.png"
import LaserRed from "../../../public/assets/laser-focus-red.png"

const ourApproach = () => {
  return (
    <div className=" flex flex-col items-center justify-between mx-60 gap-16">
      <h1 className="font-atyp-display text-3xl 2xl:text-5xl font-light leading-tight text-black w-[800px]">Our Approach</h1>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col gap-4 relative">
          <ApproachCard title="Top-tier investor network" description="Unmatched access to investors, angels, and leading operators across the region"/>
          <ApproachCard title="Frictionless" description="Flexible tickets and minimal bureaucracy"/>
          <ApproachCard title="Fully transparent" description="Built on legal certainty, blockchain-based transparency, and ongoing investor updates"/>
          <ApproachCard title="Laser-Focused" description="From day one, 100% focused on the tokenization of financial assets"/>
          <Image src={LaserRed} alt="Icon" width={120} height={120} className="absolute top-[400px] opacity-0 hover:opacity-100 duration-150"/>
        </div>
        <Rocket/>
      </div>
    </div>
  );
};

export default ourApproach;
