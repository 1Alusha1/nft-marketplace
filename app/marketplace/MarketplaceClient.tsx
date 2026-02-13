'use client'
import Tabs from "@/shared/Tabs";
import MarketplaceHeader from "@/widgets/marketplace/MarketplaceHeader";
import { useSearchParams, useRouter } from "next/navigation";
import { data } from '../../entities/nft'
import { data as collections } from '../../entities/trandCollectoin';

import NFTGrid from "@/shared/NFTGrid";
import TrandCollection from "@/shared/TrandCollection";
import Container from "@/shared/Container";


const MarketplaceClient = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const activeTab = searchParams.get('tab') ?? 'nfts'
    const search = searchParams.get('s')?.toLowerCase() ?? '';

    const filteredNFTs =
        activeTab === 'nfts' && search
            ? data.filter(nft =>
                nft.name.toLowerCase().includes(search)
            )
            : data;

    const filteredCollection =
        activeTab === 'collection' && search
            ? collections.filter(item =>
                item.name.toLowerCase().includes(search)
            )
            : collections;


    const changeTab = (tab: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('tab', tab);
        router.push(`?${params.toString()}`, { scroll: false });
    }


    const tabs = [
        {
            id: "nfts",
            label: "NFTs",
            count: filteredNFTs?.length,
            content: filteredNFTs.length
                ? <NFTGrid nft={filteredNFTs} bg='profile' countCard="profile" />
                : "NFT not found"
        },
        {
            id: "collection",
            label: "Collection",
            count: filteredCollection?.length,
            content: filteredCollection.length ? <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 `}>
                {filteredCollection.map((card, idx) => (
                    <TrandCollection key={idx} {...card} />
                ))}
            </div> : "Collections not found"
        }
    ]

    return (
        <div className="pt-13.5 lg:pt-[108.09px]">
            <Container>
                <MarketplaceHeader />
            </Container>
            <Tabs tabs={tabs} activeTab={activeTab} onChange={changeTab} />
        </div>
    );
}

export default MarketplaceClient;