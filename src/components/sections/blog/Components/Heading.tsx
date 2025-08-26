import React from 'react'

interface Props {
    title: string,
    subtitle?: string,
}

const Heading = ({title, subtitle}: Props) => {
  return (
    <div className="px-8 grid gap-4 items-center justify-center text-center">
        <h2 className="font-atyp-display text-[32px] -tracking-[0.72px] text-bl">
            {title}
        </h2>
        {subtitle &&
            <p className="text-foreground-leading text-base">
                {subtitle}
            </p>
        }
    </div>
  )
}

export default Heading