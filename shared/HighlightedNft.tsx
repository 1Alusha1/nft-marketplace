import AuthorAvatar from "./AuthorAvatar";

interface Props {
    name: string;
    author: string;
    authorImgPath: string;
    nftImagePath: string
}

const HighlightedNft = ({ name, author, authorImgPath, nftImagePath }: Props) => {
    return (
        <div className="rounded-[20px] overflow-hidden  w-full h-full ">
            <img src={nftImagePath} alt="" className=" w-full md:w-82.5 md:h-55.25 lg:w-127.5 lg:h-100.25" />
            <div className="bg-bg-secondary p-5 rounded-b-[20px]">
                <p className="mb-2.5 text-[22px] font-semibold leading-[140%]">{name}</p>
                <AuthorAvatar authorImgPath={authorImgPath} author={author} />
            </div>
        </div>
    );
}

export default HighlightedNft;