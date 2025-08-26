"use client";
import Image from 'next/image';
import React from 'react'
import RocketImg from "../../../public/assets/rocket.png";
import { useScroll, animated, useSpring } from '@react-spring/web';

const Rocket = () => {
    const { scrollYProgress } = useScroll();
    const { transform } = useSpring({
        transform: scrollYProgress.to(y => `translate(${y * 600 - 400}px, ${y * -1400 + 850}px)`),
    });
    
    return (
        <animated.span className="absolute md:z-30 z-10 3xl:right-72 2xl:right-24 xl:right-16 right-0 sm:top-auto top-14 xl:w-[38rem] sm:w-[28rem] w-[30rem] sm:z-0" style={{ transform }}>
            <Image src={RocketImg} alt="Rocket"></Image>    
        </animated.span>
    );
}

export default Rocket;