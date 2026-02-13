'use client'
import Container from "@/shared/Container";
import CategoriesSection from "@/widgets/home-sections/CategoriesSection";
import ContactSections from "@/widgets/home-sections/ContactSection";
import CTASections from "@/widgets/home-sections/CTASections";
import HeroSection from "@/widgets/home-sections/HeroSection";
import HowItWorksSection from "@/widgets/home-sections/HowItWorksSection";
import MoreNFTSection from "@/widgets/home-sections/MoreNFTSection";
import TopCreatorsSection from "@/widgets/home-sections/TopCreatorsSection";
import TrandSection from "@/widgets/home-sections/TrandSection";
import { data } from '../entities/nft'
import { useRouter } from "next/navigation";
const HomeClient = () => {
        const router = useRouter();

    return (<main>
        <Container>
            <HeroSection />
            <TrandSection />
            <TopCreatorsSection />
            <CategoriesSection />
            <MoreNFTSection title="Discover More NFTs" subtitle="Explore New Trending NFTs" nft={data} btnText="See All" btnImgPath="/icons/eye.png" onChange={()=>router.push('/marketplace')} />
        </Container>
        <CTASections />
        <Container>
            <HowItWorksSection />
            <ContactSections />
        </Container>
    </main>);
}

export default HomeClient;