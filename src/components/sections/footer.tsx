import React from 'react';
import logonegro from '@/../public/assets/logonegro.png';
import x_logo from '@/../public/icons/x-social-media-round-icon.svg';
import medium_logo from '@/../public/icons/medium-round-icon.svg';
import linked_logo from '@/../public/icons/linkedin-round-icon.svg';
import telegram_logo from '@/../public/icons/telegram-icon.svg';
import Image from 'next/image';
import Link from 'next/link';

const SocialBtn = ({href, src}: {href: string, src: string}) => {
    return (
        <Link target='_blank' href={href}>
            <Image width={25} src={src} alt='Social Media Button'></Image>
        </Link>
    )
}

const Label = ({children}: {children: React.ReactNode}) => {
    return (
        <h3 className='font-atyp-text text-base font-semibold text-boulder-text-muted'>{children}</h3>
    )
}

const Footer = () => {
    return (
        <div className='w-full main-padding'>
            <footer className='flex flex-col gap-2 bottom-0 z-10 bg-background-secondary border border-[#E5E7EB] w-full h-fit p-6 text-foreground-tertiary font-atyp-text divide-y-2 divide-[#E5E7EB] overflow-clip mb-8 mt-8 rounded-3xl'>
                <div className='flex justify-between items-center gap-6 sm:gap-0'>
                    <Link target='_blank' href={'https://bouldertech.fi'} className='invert dark:invert-0 select-none flex items-center justify-center'>
                        <Image width={180} src={logonegro} alt='BoulderTech logo'></Image>
                    </Link>
                </div>
                <div className='flex sm:flex-row flex-col-reverse justify-between items-start gap-8 sm:gap-20 pt-6 relative'>
                    <div className='flex flex-col justify-between gap-3 w-full sm:w-[55%]'>
                        <Label>Disclaimer</Label>
                        <div className='text-sm text-boulder-text-muted grid gap-1'>
                            <p>
                                Investments in private companies, early-stage ventures, investment vehicles such as private funds, and tokenized offerings (ITOs) carry inherent risks and are typically illiquid. These investment opportunities are suitable only for qualified and sophisticated investors who understand and are able to bear the risk of potentially losing the entire value of their invested capital. Access to BoulderTech’s Services is limited to such qualified investors.
                            </p>
                            <p>
                                The information contained in this communication has not been approved by an authorized person within the meaning of the Financial Services and Markets Act 2000. Relying on this communication to engage in any investment activity may expose an individual to significant risk of loss.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-x-20'>
                        <div className='flex flex-col items-start justify-start gap-3 h-full w-full sm:w-fit'>
                            <Label>External links</Label>
                            <div className='flex flex-col justify-between text-boulder-text-muted text-sm gap-2'>
                                <Link className='no-underline underline-offset-2 hover:underline' target='_blank' href={'https://bouldertech.fi/about'}>About us</Link>
                                <Link className='no-underline underline-offset-2 hover:underline' target='_blank' href={'https://bouldertech.fi/blog'}>Blog</Link>
                                <Link className='no-underline underline-offset-2 hover:underline' target='_blank' href={'https://docs.bouldertech.fi/boulder-tech-docs'}>Documentation</Link>
                                <Link className='no-underline underline-offset-2 hover:underline' target='_blank' href={'https://docs.bouldertech.fi/boulder-tech-docs/legal/terms-and-conditions'}>Terms of service</Link>
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-start gap-3 h-full w-full sm:w-fit'>
                            <Label>Social Networks</Label>
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-4 justify-start items-center'>
                                    <SocialBtn href='https://twitter.com/BoulderTechFi' src={x_logo}></SocialBtn>
                                    <SocialBtn href='https://medium.com/@BoulderTech' src={medium_logo}></SocialBtn>
                                    <SocialBtn href='https://www.linkedin.com/company/bouldertechtoken' src={linked_logo}></SocialBtn>
                                    <SocialBtn href='https://t.me/+I05vwrkKMe1jNzMx' src={telegram_logo}></SocialBtn>
                                </div>
                                <p className='text-boulder-text-muted text-sm'>Support: <span>hello@bouldertech.fi</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
  }

export default Footer