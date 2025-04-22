import HeroSection from "@/components/sections/hero-section";
import BenefitsSection from "@/components/sections/benefits-section";
import FinalCtaSection from "@/components/sections/final-cta-section";
import GrantSection from "@/components/sections/grant-support-section";
import RocketSection from "@/components/sections/rocket-section";
import StocksSection from "@/components/sections/stocks-section";
import InvesorsSection from "@/components/sections/Investors";
import Separator from "@/components/separator";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator orientation="horizontal"/>
      <StocksSection />
      <BenefitsSection/>
      <InvesorsSection/>
      {/* <GrantSection /> */}
      {/* <PartnersSection/> */}
      <div className="relative">
        <RocketSection />
      </div>
      <FinalCtaSection/>
      <ToastContainer 
        position="bottom-right" 
        toastStyle={{ backgroundColor: "#010312", color: 'white' }}
      />
    </>
  );
}
