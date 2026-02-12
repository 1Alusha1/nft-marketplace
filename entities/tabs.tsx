import NFTGrid from "@/shared/NFTGrid";
import { data as nft_cards } from "./nft";
import {data as collections} from './trandCollectoin'
import TrandCollection from "@/shared/TrandCollection";
export const profile_tabs = [
    {
        id: 1,
        label: "Created",
        count: 302,
        content: <NFTGrid nft={nft_cards} bg='profile' countCard="profile" />
    },
    {
        id: 2,
        label: "Owned",
        count: 66,
        content: <NFTGrid nft={nft_cards} bg='profile' countCard="profile" />
    },
    {
        id: 3,
        label: "Collection",
        count: 4,
        content: <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 `}>
            {collections.map((card, idx) => (
                <TrandCollection key={idx} {...card} />
            ))}
        </div>
    }
]