import HeroSection from "@/components/sections/hero-section";
import BenefitsSection from "@/components/sections/benefits-section";
import FinalCtaSection from "@/components/sections/final-cta-section";
import RocketSection from "@/components/sections/rocket-section";
import StocksSection from "@/components/sections/stocks-section";
import InvesorsSection from "@/components/sections/Investors";
import Separator from "@/components/separator";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import StepperSection from "@/components/sections/stepper-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator orientation="horizontal"/>
      <StocksSection />
      <StepperSection/>
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
