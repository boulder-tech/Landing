"use client";
import Image from 'next/image';
import React from 'react'
import RocketImg from "../../../public/assets/rocket.png";
import { useScroll, animated, useSpring } from '@react-spring/web';

const Rocket = () => {
    const { scrollYProgress } = useScroll();
    const { transform } = useSpring({
        transform: scrollYProgress.to(y => `translate(${y * 600 - 400}px, ${y * -1200 + 850}px)`),
        config: { tension: 170, friction: 26 }
    });
    
    return (
        <animated.span className="absolute z-30 right-72" style={{ transform }}>
            <Image src={RocketImg} alt="Rocket"></Image>    
        </animated.span>
    );
}

export default Rocket;