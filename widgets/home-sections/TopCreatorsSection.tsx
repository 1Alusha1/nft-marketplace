import Button from "@/shared/Button";
import Creator from "@/shared/Creator";
import SectionSubTitle from "@/shared/SectionSubTitle";
import SectionTitle from "@/shared/SectionTitle";
import Image from "next/image";

import { artist } from '../../entities/artist'
import SectionContainer from "@/shared/SectionContainer";
import Link from "next/link";

const TopCreatorsSection = () => {
    return (
        <SectionContainer>
            <div className="flex items-center-center justify-between">
                <div>
                    <SectionTitle text="Top creators" classname="mb-2.5" />
                    <SectionSubTitle text="Checkout Top Rated Creators on the NFT Marketplace" classname="mb-15" />
                </div>
                <div className="hidden md:block">
                    <Button type="transparent">
                        <Image src={'/icons/purple-rocket.png'} width={20} height={20} alt="purple rocket icon" />
                        View Rankings
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5 h-136.5 overflow-auto  md:h-auto">
                {artist.map(({ imgAuthorPath, name, totalSales, id }) =>
                    <Link key={id}
                        href={`/artist/${id}`}>
                        <Creator totalSales={totalSales} name={name} imgAuthorPath={imgAuthorPath} count={id} />
                    </Link>)}</div>
            <div className="block md:hidden mt-10">
                <Button type="transparent">
                    <Image src={'/icons/purple-rocket.png'} width={20} height={20} alt="purple rocket icon" />
                    View Rankings
                </Button>
            </div>
        </SectionContainer>
    );
}

export default TopCreatorsSection;