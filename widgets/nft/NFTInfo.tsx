import { spaceMomoSans } from "@/app/fonts";
import AuthorAvatar from "@/shared/AuthorAvatar";
import Button from "@/shared/Button";
import Container from "@/shared/Container";
import Tag from "@/shared/Tag";
import Timer from "@/shared/Timer";
import Title from "@/shared/Title";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface NFTInfoProps {
    id: string;
    nftImagePath: string;
    name: string;
    author: string;
    authorImgPath: string;
    price: number;
    highestBid: number;
    description: ReactNode;
    tags: string[];
    nftHeaderImg: string;
}
const NFTInfo = (props: NFTInfoProps) => {
    return (
        <>
            <div className="relative w-full h-80 md:h-105 lg:h-126.5"
                style={{
                    background: props.nftImagePath ? `url(${props.nftHeaderImg})` : `url('/nft/nft-detail/nd1.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            ></div>
            <Container>
                <div className="flex justify-between items-start py-10 gap-0 lg:gap-37.5">
                    <div>
                        <div>
                            <Title classname="mb-2.5">
                                {props.name}
                            </Title>
                            <p className="text-[22px] text-lable-text leading-[160%] mb-7.5">Minted on Sep 30, 2022</p>
                            <div className="block mb-7.5 md:hidden">
                                <Timer startTimer={60}>
                                    <div className="mt-7.5">
                                        <Button>
                                            Place Bid
                                        </Button>
                                    </div>
                                </Timer>
                            </div>
                        </div>
                        <div className="mb-7.5">
                            <p className={`text-[22px] font-bold ${spaceMomoSans.className} text-lable-text mb-2.5`}>Created By</p>
                            <AuthorAvatar authorImgPath={props.authorImgPath} author={props.author} />
                        </div>
                        <div className="mb-7.5">
                            <p className={`text-[22px] font-bold ${spaceMomoSans.className} text-lable-text mb-2.5`}>Description</p>
                            <div className="text-white text-[22px] leading-[160%]">
                                {props.description}
                            </div>
                        </div>
                        <div className="mb-7.5">
                            <p className={`text-[22px] font-bold ${spaceMomoSans.className} text-lable-text mb-2.5`}>Details</p>
                            <ul>
                                <li className="flex items-center gap-2.5 text-[22px] text-white leading-[160%]">
                                    <Image src={'/icons/globe-gray.png'} width={20} height={20} alt="globe icon" />
                                    <Link href="/">View on Etherscan</Link>
                                </li>
                                <li className="flex items-center gap-2.5 text-[22px] text-white leading-[160%]">
                                    <Image src={'/icons/globe-gray.png'} width={20} height={20} alt="globe icon" />
                                    <Link href="/">View Original</Link>
                                </li>
                            </ul>
                        </div>
                        <div >
                            <p className={`text-[22px] font-bold ${spaceMomoSans.className} text-lable-text mb-2.5`}>Tags</p>
                            <div className="flex  gap-5">
                                {props.tags.length ?
                                    props.tags.map((tag, idx) => <Tag key={idx} text={tag} />)
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Timer startTimer={60}>
                            <div className="mt-7.5">
                                <Button>
                                    Place Bid
                                </Button>
                            </div>
                        </Timer>
                    </div>
                </div>
            </Container>
        </>

    );
}

export default NFTInfo;