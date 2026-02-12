import NFTCard from "./NFTCard";

interface Props {
    nft: {
        nftImagePath: string;
        name: string;
        author: string;
        authorImgPath: string;
        price: number;
        highestBid: number;
        bg?: 'default' | 'profile';
    }[],
    bg?: 'default' | 'profile';
    countCard?: 'default' | 'profile';
}

const NFTGrid = ({ nft, bg = 'default', countCard = 'default' }: Props) => (

    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5  ${countCard === 'profile' ? '' : `[&>*:nth-child(n+3)]:md:hidden
                [&>*:nth-child(n+3)]:lg:block overflow-hidden`}`}>
        {nft.map((card, idx) => (
            <NFTCard key={idx} {...card} bg={bg} />
        ))}
    </div>
);

export default NFTGrid