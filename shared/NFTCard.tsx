import { spaceMomoSans } from "@/app/fonts";
import AuthorAvatar from "./AuthorAvatar";

interface Props {
    nftImagePath: string;
    name: string;
    author: string;
    authorImgPath: string;
    price: number;
    highestBid: number;
    bg?: 'default' | 'profile';
}


const NFTCard = ({ nftImagePath, authorImgPath, author, name, price, highestBid, bg = 'default' }: Props) => {
    return (
        <div className="rounded-[20px] overflow-hidden  w-full h-full ">
            <img src={nftImagePath} alt="" className="w-full " />
            <div className={`${bg === 'default' ? 'bg-bg-secondary' : 'bg-bg'} p-5 rounded-b-[20px]`}>
                <p className="mb-2.5 text-[22px] font-semibold leading-[140%] text-white">{name}</p>
                <AuthorAvatar authorImgPath={authorImgPath} author={author} />
                <div className="mb-6.25"></div>
                <div className="flex justify-between items-center">
                    <div className={`text-white ${spaceMomoSans.className}`}>
                        <span className={`block text-[12px] text-lable-text leading-[110%] mb-2`}>
                            Price
                        </span>
                        {price} ETH
                    </div>
                    <div className={`text-white text-right ${spaceMomoSans.className}`}>
                        <span className={`block text-[12px] text-lable-text leading-[110%] m-2`}>
                            Highest Bid
                        </span>
                        {highestBid} ETH
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NFTCard;

