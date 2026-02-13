'use client'
import Input from "@/shared/Input";
import SectionSubTitle from "@/shared/SectionSubTitle";
import Title from "@/shared/Title";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const RankingsHeader = () => {
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
                Top Creators
            </Title>
            <SectionSubTitle text="Check out top ranking NFT artists on the NFT Marketplace." classname="mb-7.5" />
        </div>
    );
}

export default RankingsHeader;