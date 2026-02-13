'use client'
import Input from "@/shared/Input";
import SectionSubTitle from "@/shared/SectionSubTitle";
import Title from "@/shared/Title";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const MarketplaceHeader = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        text ? params.set('s', text) : params.delete('s')
        router.push(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="py-20">
            <Title classname="mb-2.5">
                Browse Marketplace
            </Title>
            <SectionSubTitle text="Browse through more than 50k NFTs on the NFT Marketplace." classname="mb-7.5" />

            <div className="relative">
                <input type="text" placeholder="Search your favourite NFTs" className="w-full border border-bg-secondary outline-0 p-5 rounded-[20px] text-[16px] leading-[140%] text-lable-text"
                    onChange={search}
                />
                <Image src={'/icons/search.png'} width={24} height={24} alt="search icon" className="absolute right-4 top-4.5" />
            </div>

        </div>
    );
}

export default MarketplaceHeader;