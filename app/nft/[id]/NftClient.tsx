'use client'
import Container from "@/shared/Container";
import SectionContainer from "@/shared/SectionContainer";
import MoreNFTSection from "@/widgets/home-sections/MoreNFTSection";
import NFTInfo from "@/widgets/nft/NFTInfo";
import { data } from '../../../entities/nft'
import { artist } from "@/entities/artist";
import { useParams, useRouter } from "next/navigation";

const NftClient = () => {
    const router = useRouter()
    const params = useParams();

    const id = params.id;

    if (Number.isNaN(id)) {
        return <div>Invalid artist id</div>;
    }

    const nftData = data?.find(item => item?.id === id)
    if (!nftData) return <div>NFT not found</div>
    const artistId = artist.find(artist => artist.name === nftData.author);
    const artistNfts = data.filter(nft => nft.author === nftData.author)

    return (
        <div className="pt-13.5 lg:pt-[108.09px] relative">
            <NFTInfo {...nftData} />
            <div className="bg-bg-secondary">
                <Container>
                    <SectionContainer>
                        <MoreNFTSection title="More from this artist" btnText="Go To Artist Page" bg='profile' nft={artistNfts} countCard="profile" btnImgPath="/icons/arrow-right-purple.png"
                        onChange={()=>router.push(`/artist/${artistId?.id}`)}
                        />
                    </SectionContainer>
                </Container>
            </div>
        </div>
    );
}

export default NftClient;