import Button from "@/shared/Button";
import HighlightedNft from "@/shared/HighlightedNft";
import Timer from "@/shared/Timer";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="flex flex-col gap-10 md:flex-row md:justify-between text-white pb-10 pt-15 lg:pt-53.5">
            <div>
                <h1 className="text-[27px] lg:text-[67px] font-semibold leading-[110%] mb-5" >
                    <span className="md:block">Discover </span>
                    <span className="md:block">Digital Art & </span>
                    <span className="inline-block">Collect NFTs</span></h1>
                <p className="text-[13px] leading-[140%] xl:text-[22px] xl:leading-[160%]  mb-7.5">
                    <span className="block">NFT marketplace UI created with Anima for</span>
                    <span className="block">Figma. Collect, buy and sell art from more</span>
                    <span className="block">than 20k NFT artists.</span></p>

                <div className=" block md:hidden mb-7.5">
                    <HighlightedNft name="Space Walking" nftImagePath="/home/hero.png" author="Animakid" authorImgPath="/authors/a1.png" />
                </div>

                <Button size="default" >
                    <Image src={'/icons/rocket.png'} width={20} height={20} alt="rocket" />
                    Get Started</Button>

                <ul className="flex justify-center md:justify-start  gap-7.5 mt-7.5 display-none">
                    <li className="flex flex-col">
                        <span className="font-bold text-[22px] leading-[140%] lg:text-[28px] lg:leading-[140%]">240k+</span>
                        Total Sale
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold text-[22px] leading-[140%] lg:text-[28px] lg:leading-[140%]">100k+</span>
                        Auctions
                    </li>
                    <li className="flex flex-col">
                        <span className="font-bold text-[22px] leading-[140%] lg:text-[28px] lg:leading-[140%]">240k+</span>
                        Artists
                    </li>
                </ul>
            </div>
            <div className="hidden md:block">
                <HighlightedNft name="Space Walking" nftImagePath="/home/hero.png" author="Animakid" authorImgPath="/authors/a1.png" />
            </div>
        </div>
    );
}

export default HeroSection;