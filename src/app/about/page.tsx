import PoweredBy from "@/components/cards/poweredby-card";
import Advisors from "@/components/sections/advisors";
import MeetTheTeam from "@/components/sections/meetTheTeam-section";

export default function About() {
  return (
    <>
      <div className="mt-[22vh] mb-16">
        <MeetTheTeam />
      </div>
      <PoweredBy />
      <Advisors />
    </>
  )

}
