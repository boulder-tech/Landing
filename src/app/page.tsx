import HeroSection from "@/components/sections/hero-section";
import OurApproachSection from "@/components/sections/our-approach-section";
import StocksSection from "@/components/sections/stocks-section";
import InvesorsSection from "@/components/sections/Investors";
import FaqSection from "@/components/sections/faq-section";
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
      <OurApproachSection/> 
      <InvesorsSection/>
      <ToastContainer 
        position="bottom-right" 
        toastStyle={{ backgroundColor: "#010312", color: 'white' }}
      />
      <FaqSection/>
    </>
  );
}
