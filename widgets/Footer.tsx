import Link from "next/link";
import Button from "../shared/Button";
import Container from "../shared/Container";
import { spaceMomoSans } from "@/app/fonts";
import Logo from "@/shared/Logo";
import Socials from "@/shared/Socials";

const Footer = () => {
    return (
        <footer className="py-10 bg-bg-secondary border-t border-bg">
            <Container>
                <div className="grid grid-cols-1 gap-7.5 lg:gap-0 lg:grid-cols-[4fr_3fr_5fr] justify-center w-full lg:p-7.5 mb-7.5 lg:mb-0">
                    <div>
                        <div className="mb-7.5">
                            <Logo />
                        </div>
                        <p className="text-custom-gray text-[16px] leading-[140%] mb-5">
                            <span className="block">NFT marketplace UI created</span> with Anima for Figma.</p>
                        <div>
                            <p className="text-custom-gray text-[16px] leading-[140%] mb-3.75">Join our community</p>
                            <Socials />
                        </div>
                    </div>
                    <div>
                        <div className={`mb-6.25 text-white text-[22px] leading-[160%] font-bold ${spaceMomoSans.className}`}>
                            Explore
                        </div>
                        <ul className="flex flex-col gap-4">
                            <li className="text-custom-gray text-[16px] leading-[140%]">
                                <Link href=''>
                                    Marketplace
                                </Link>
                            </li>
                            <li className="text-custom-gray text-[16px] leading-[140%]">
                                <Link href=''>
                                    Rankings
                                </Link>
                            </li>
                            <li className="text-custom-gray text-[16px] leading-[140%]">
                                <Link href=''>
                                    Connect a wallet
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className={`${spaceMomoSans.className} text-white text-[22px] font-bold leading-[160%] mb-6.25`}>Join our weekly digest</h3>
                        <p className="text-custom-gray text-[16px] leading-[140%] mb-5"><span className="block">Get exclusive promotions & updates</span> straight to your inbox.</p>
                        <form className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center relative">
                            <input type="text" placeholder="Enter your email here" className=" px-5 py-3.25 text-[16px] w-full lg:w-full border border-white bg-white rounded-[20px] md:rounded-l-[20px] lg:absolute left-0 top-0" />
                            <Button classname="w-full lg:w-auto lg:absolute right-0 top-0" size="input" >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-bg-secondary pt-5">
                    <p className="text-custom-gray text-[12px] leading-[110%]">Ⓒ NFT Market. Use this template freely.</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;