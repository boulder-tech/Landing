import React from "react";
import PorHero from "../../components/por-hero";
import PorTokenList from "../../components/por-tokens-list";

export default function Por() {
  return <main>
    <div className="md:mt-[15vh] mt-[25vh]">
        <PorHero />
        <PorTokenList/>
    </div>
  </main>;
}
