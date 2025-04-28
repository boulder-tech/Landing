import React from "react";
import PorHero from "../../components/por-hero";
import PorTokenList from "../../components/por-tokens-list";

export default function Por() {
  return <main>
    <div className="md:mt-[15vh] mt-[25vh] flex flex-col items-center justify-center gap-y-24">
        <PorHero />
        <PorTokenList/>
    </div>
  </main>;
}
