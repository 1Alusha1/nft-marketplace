import { spaceMomoSans } from "@/app/fonts";
import Button from "@/shared/Button";
import Container from "@/shared/Container";
import Socials from "@/shared/Socials";
import Stats from "@/shared/Stats";
import Image from "next/image";

const ArtistHeader = () => {
    return (
        <div className="pt-13.5 lg:pt-[108.09px] relative">
            <div className="artist-header bg-[url('/artist/ah1.png')] bg-center bg-cover bg-no-repeat"></div>
            <Container>
                <div className="absolute top-78.5 lg:top-92 z-1002">
                    <Image src={'/authors/a3.png'} width={120} height={120} alt="author image" className="rounded-[20px] overflow-hidden border border-bg" />
                </div>
                <div className="pb-10 pt-22.5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        <h1 className="text-[51px] font-semibold leading-[110%] mb-7.5 mв:mb-0 text-white">Animakid</h1>
                        <div className="flex flex-col md:flex-row gap-5 w-full md:w-[50%]  justify-between items-center">
                            <Button>
                                <Image src={'/icons/copy.png'} width={20} height={20} alt="copy icon" />
                                0xc0E3...B79C
                            </Button>
                            <Button type="transparent">
                                <Image src={'/icons/plus-purple.png'} width={20} height={20} alt="copy icon" />
                                Follow
                            </Button>
                        </div>
                        <div className="mb-7.5">
                            <Stats artistsCounst={79} auctionsCount={45} totalSale={240} mobilePostion="start" />
                        </div>
                    </div>
                    <div className="mb-7.5">
                        <span className={`${spaceMomoSans.className} block text-lable-text mb-2.5`}>Bio</span>
                        <p className="text-white text-[22px] leading-[160%]">The internet's friendliest designer kid.</p>
                    </div>
                    <span className={`${spaceMomoSans.className} block text-lable-text mb-2.5`}>Links</span>
                    <Socials />
                </div>
            </Container>
        </div>
    );
}

export default ArtistHeader;    