"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { MouseEvent, ReactNode } from "react";

type benefitCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function BenefitCard({ icon, title, description }: benefitCardProps) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative h-[175px] rounded-xl border border-gray-100 bg-gray-100 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              128px circle at ${mouseX}px ${mouseY}px,
              rgba(250, 251, 255, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      <div className="w-[21.5rem] h-full p-8 rounded-[inherit] flex flex-col gap-2 font-atypText font-normal text-left cursor-default relative z-20 overflow-hidden">
        <div className="flex gap-2">
          <Image src={icon} alt="Icon" width={16} height={16} className="w-auto"/>
          <h3 className="text-foreground-heading text-base">{title}</h3>
        </div>
        <h4 className="text-sm text-foreground-dark line-clamp-4">{description}</h4>
      </div>
    </div>
  );
}
