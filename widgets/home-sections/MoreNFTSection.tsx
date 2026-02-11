import Button from "@/shared/Button";
import SectionContainer from "@/shared/SectionContainer";
import SectionSubTitle from "@/shared/SectionSubTitle";
import SectionTitle from "@/shared/SectionTitle";
import Image from "next/image";
import { data } from '../../entities/nft'
import NFTCard from "@/shared/NFTCard";
const MoreNFTSection = () => {
    return (
        <SectionContainer>
            <div className="flex items-center-center justify-between">
                <div>
                    <SectionTitle text="Discover More NFTs" classname="mb-2.5" />
                    <SectionSubTitle text="Explore New Trending NFTs" classname="mb-15" />
                </div>
                <div className="hidden md:block">
                    <Button type="transparent">
                        <Image src={'/icons/eye.png'} width={20} height={20} alt="purple rocket icon" />
                        See All
                    </Button>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden items-center gap-7.5 [&>*:nth-child(n+3)]:md:hidden
                [&>*:nth-child(n+3)]:lg:block">
                {data.map(({ nftImagePath, author, authorImgPath, name, price, highestBid }, idx) => <NFTCard key={idx} nftImagePath={nftImagePath} author={author} authorImgPath={authorImgPath}
                    name={name}
                    price={price}
                    highestBid={highestBid}
                />)}
            </div>
            <div className="md:hidden block mt-10">
                <Button type="transparent">
                    <Image src={'/icons/eye.png'} width={20} height={20} alt="purple rocket icon" />
                    See All
                </Button>
            </div>
        </SectionContainer>
    );
}

export default MoreNFTSection;