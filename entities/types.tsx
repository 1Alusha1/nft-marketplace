import { ReactNode } from "react"
import { NFT } from "../nft/types"

export interface artist {
    id: number,
    name: number,
    stats: {
        totalSale: string;
        auctionsCount: string;
        artistsCounst: string;
    },
    totalSales: string;
    nft: NFT[];
    createde: NFT[];
    collections: {
        imgsPath: string[],
        name: string,
        author: string,
        authorImgPath: string
    }[],
    bio: string,
    imgAuthorPath: string
}