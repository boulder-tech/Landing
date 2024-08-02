"use client";
import Image from 'next/image';
import React from 'react'
import RocketImg from "../../../public/assets/rocket.png";
import { useScroll, animated, useSpring } from '@react-spring/web';

const Rocket = () => {
    const { scrollYProgress } = useScroll();
    const { transform } = useSpring({
        transform: scrollYProgress.to(y => `translate(${y * 600 - 400}px, ${y * -1200 + 850}px)`),
    });
    
    return (
        <animated.span className="absolute z-30 3xl:right-72 right-24 xl:w-[38rem] w-[28rem]" style={{ transform }}>
            <Image src={RocketImg} alt="Rocket"></Image>    
        </animated.span>
    );
}

export default Rocket;