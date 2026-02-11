import Button from "@/shared/Button";
import Creator from "@/shared/Creator";
import SectionSubTitle from "@/shared/SectionSubTitle";
import SectionTitle from "@/shared/SectionTitle";
import Image from "next/image";

import { data } from '../../entities/creator'
import SectionContainer from "@/shared/SectionContainer";

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
                {data.map(({ imgAuthorPath, totalSales, author }, idx) => <Creator key={idx} imgAuthorPath={imgAuthorPath} totalSales={totalSales} author={author} count={idx + 1} />)}
            </div>
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