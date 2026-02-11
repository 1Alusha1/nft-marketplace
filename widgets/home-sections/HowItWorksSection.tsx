import InfoCard from "@/shared/InfoCard";
import SectionContainer from "@/shared/SectionContainer";
import SectionSubTitle from "@/shared/SectionSubTitle";
import SectionTitle from "@/shared/SectionTitle";

const HowItWorksSection = () => {
    return (
        <SectionContainer>
            <SectionTitle text="How it works" classname="mb-2.5" />
            <SectionSubTitle text="Find out how to get started" classname="mb-15" />
            <div className="flex flex-col md:flex-row gap-7.5">
                <InfoCard text="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner." title="Setup Your wallet" imgPath="/home/hiw1.png"/>
                <InfoCard text="Upload your work and setup your collection. Add a description, social links and floor price." title="Create Collection" imgPath="/home/hiw2.png"/>
                <InfoCard text="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others." title="Start Earning" imgPath="/home/hiw3.png"/>
            </div>
        </SectionContainer>
    );
}

export default HowItWorksSection;