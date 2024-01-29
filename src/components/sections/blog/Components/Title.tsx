import React from 'react'

const Title = () => {
  return (
    <div className="max-w-[52rem] flex flex-col items-center gap-10 text-center relative pt-16">
        <h1 className="text-foreground-heading sm:text-[60px] text-[34px] font-atyp-display font-medium leading-[120%] z-10">
            Learn about the future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#245BFF] whitespace-nowrap">
                financial assets
            </span>
        </h1>
        <h3 className="text-foreground-leading text-xl font-medium z-10">
            Explore the Frontier of Real World Asset Tokenization
        </h3>
    </div>
  )
}

export default Title;