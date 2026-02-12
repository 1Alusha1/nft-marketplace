'use client'
import ArtistHeader from "@/widgets/artist/ArtistHeader";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { artist } from "@/entities/artist";
import { data } from "@/entities/nft";
import NFTGrid from "@/shared/NFTGrid";
import TrandCollection from "@/shared/TrandCollection";
import { useMemo } from "react";
import Tabs from "@/shared/Tabs";

const ArtistClient = () => {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();

    const artistId = Number(params.id);

    if (Number.isNaN(artistId)) {
        return <div>Invalid artist id</div>;
    }

    const artistData = artist.find(artist => artist.id === artistId)

    if (!artistData) return <div>Artist not found</div>;

    const artistNfts = data.filter(nft => nft.author === artistData.name)
    const { name, bio, imgAuthorPath, stats, collections } = artistData;

    const activeTab = searchParams.get('tab') ?? 'created'

    const changeTab = (tab: string) => {
        router.push(`?tab=${tab}`, { scroll: false });
    }

    const tabs = [
        {
            id: "created",
            label: "Created",
            count: artistNfts?.length,
            content: artistNfts ? <NFTGrid nft={artistNfts} bg='profile' countCard="profile" /> : "NFT not found"

        },
        {
            id: "owned",
            label: "Owned",
            count: artistNfts?.length,
            content: artistNfts ? <NFTGrid nft={artistNfts} bg='profile' countCard="profile" /> : "NFT not found"
        },
        {
            id: "collection",
            label: "Collection",
            count: collections?.length,
            content: collections ? <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 `}>
                {collections.map((card, idx) => (
                    <TrandCollection key={idx} {...card} />
                ))}
            </div> : "Collections not found"
        }
    ]


    return (<>
        <ArtistHeader
            name={name}
            bio={bio}
            artistImage={imgAuthorPath}
            stats={stats}
        />
        <Tabs tabs={tabs}
            activeTab={activeTab}
            onChange={changeTab}
        />
    </>);
}

export default ArtistClient;