import { ReactNode } from "react"
export interface artist {
    id: number,
    name: number,
    stats: {
        totalSale: string;
        auctionsCount: string;
        artistsCounst: string;
    },
    totalSales: string;
    collections: {
        imgsPath: string[],
        name: string,
        author: string,
        authorImgPath: string
    }[],
    bio: string,
    imgAuthorPath: string
}
