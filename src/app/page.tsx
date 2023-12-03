import Image from "next/image";
import HeroSection from "@/components/sections/hero-section";
import BenefitsSection from "@/components/sections/benefits-section";
import FinalCtaSection from "@/components/sections/final-cta-section";
import PartnersSection from "@/components/sections/partners-section";
import Separator from "@/components/separator";
import "./globals.css";
import { GlowPaths } from "@/components/glow-paths";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator orientation="horizontal"/>
      <BenefitsSection/>
      <PartnersSection/>
      <FinalCtaSection/>
    </>
  );
}
