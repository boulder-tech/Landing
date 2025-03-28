import Image from 'next/image';
import ImagetypeClaim from '../../../public/assets/imagotype-claim.svg';
import Link from 'next/link';
import X from '../../../public/icons/x-social-media-round-icon.svg';
import Medium from '../../../public/icons/medium-round-icon.svg';
import Linkedin from '../../../public/icons/linkedin-round-icon.svg';
import Telegram from '../../../public/icons/telegram-icon.svg';

import './styles/footer.css';

const Footer = () => {
    return (
        <footer className="w-full flex flex-col border-t border-gray-200 bg-background 2xl:px-[300px] lg:px-[150px] md:px-[75px] px-[20px] py-16 pb-0 items-center justify-center">
            <div className="w-full">
                <div className="flex flex-col gap-6">
                    <Image
                        src={ImagetypeClaim}
                        alt="Boulder Tech, the gateway token"
                        width={312}
                        height={312}
                        className='sm:w-80 w-64'
                    />
                    <p className="text-foreground-dark font-medium">
                        Join the conversation
                    </p>
                    <nav className="pages__StyledSocialRow-sc-1hmqm-8 kTUbOm">
                        <a
                            href="https://twitter.com/BoulderTechFi"
                            rel="noreferrer noopenner"
                            target="_blank"
                            className="pages__OutboundLink-sc-1hmqm-24 irHuFq"
                        >
                            <Image
                                src={X}
                                width={30}
                                height={30}
                                className="Icons__TwitterIcon-sc-dy67gv-2 ipWMgx"
                                alt="icon"
                            />
                        </a>
                        <a
                            href="https://medium.com/@BoulderTech"
                            rel="noreferrer noopenner"
                            target="_blank"
                            className="pages__OutboundLink-sc-1hmqm-24 irHuFq"
                        >
                            <Image
                                src={Medium}
                                width={30}
                                height={30}
                                className="Icons__TwitterIcon-sc-dy67gv-2 ipWMgx"
                                alt="icon"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/bouldertechtoken "
                            rel="noreferrer noopenner"
                            target="_blank"
                            className="pages__OutboundLink-sc-1hmqm-24 irHuFq"
                        >
                            <Image
                                src={Linkedin}
                                width={30}
                                height={30}
                                className="Icons__TwitterIcon-sc-dy67gv-2 ipWMgx"
                                alt="icon"
                            />
                        </a>
                        <a
                            href="https://t.me/+I05vwrkKMe1jNzMx"
                            rel="noreferrer noopenner"
                            target="_blank"
                            className="pages__OutboundLink-sc-1hmqm-24 irHuFq"
                        >
                            <Image
                                src={Telegram}
                                width={30}
                                height={30}
                                className="Icons__TwitterIcon-sc-dy67gv-2 ipWMgx"
                                alt="icon"
                            />
                        </a>
                    </nav>
                </div>
                <nav></nav>
            </div>
            <div className="w-full border-t flex items-center justify-center p-4 mt-16 font-medium gap-8 border-gray-200">
                <Link
                    href="https://docs.bouldertech.fi/boulder-tech-docs/terms-and-conditions"
                    target='_blank'
                    className="text-foreground-dark hover:text-foreground-leading transition-all duration-200"
                >
                    Terms & Conditions
                </Link>
            </div>
        </footer>
    );
};
export default Footer;
