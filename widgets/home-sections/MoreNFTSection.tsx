import Button from "@/shared/Button";
import SectionContainer from "@/shared/SectionContainer";
import SectionSubTitle from "@/shared/SectionSubTitle";
import SectionTitle from "@/shared/SectionTitle";
import Image from "next/image";
import NFTGrid from "@/shared/NFTGrid";

interface Props {
    title: string;
    subtitle?: string;
    btnText: string;
    btnImgPath: string;
    nft: any[];
    bg?: 'default' | 'profile';
    countCard?: 'default' | 'profile';
    onChange?:() => void;
}

const MoreNFTSection = ({ title, subtitle, btnText, nft, bg = 'default', countCard = 'default', btnImgPath,onChange }: Props) => {
    return (
        <SectionContainer>
            <div className={`flex items-center justify-between ${!subtitle && 'mb-15'}`}>
                <div>
                    <SectionTitle text={title} classname="mb-2.5" />
                    {subtitle && <SectionSubTitle text={subtitle} classname="mb-15" />}
                </div>
                <div className="hidden md:block">
                    <Button type="transparent" click={onChange? onChange : undefined}>
                        <Image src={btnImgPath} width={20} height={20} alt="purple rocket icon" />
                        {btnText}
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden items-center gap-7.5 ">
            </div>

            <NFTGrid nft={countCard === 'default' ? nft.slice(0, 3) : nft} bg={bg} countCard={countCard} />

            <div className="md:hidden block mt-10">
                <Button type="transparent" click={onChange? onChange : undefined}>
                    <Image src={'/icons/eye.png'} width={20} height={20} alt="purple rocket icon" />
                    {btnText}
                </Button>
            </div>
        </SectionContainer>
    );
}

export default MoreNFTSection;