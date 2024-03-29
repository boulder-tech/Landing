import React from 'react'
import Title from './Components/Title'

const Hero = () => {
  return (
    <div className='relative w-full flex items-center justify-center pt-44'>
        <span aria-hidden="true" className='absolute top-[-1300px] xl:right-[0px] right-[-500px] w-[120rem] h-[120rem] rounded-[2000px] blur-[200px] bg-gradient-to-b from-[#245BFF] to-transparent'></span>
        <Title></Title>
    </div>
  )
}

export default Hero