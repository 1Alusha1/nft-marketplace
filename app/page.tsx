import Container from "@/shared/Container";
import HeroSection from "../widgets/home-sections/HeroSection";
import TrandSection from "../widgets/home-sections/TrandSection";
import TopCreatorsSection from "../widgets/home-sections/TopCreatorsSection";
import CategoriesSection from "@/widgets/home-sections/CategoriesSection";
import MoreNFTSection from "@/widgets/home-sections/MoreNFTSection";
import CTASections from "@/widgets/home-sections/CTASections";
import HowItWorksSection from "@/widgets/home-sections/HowItWorksSection";
import ContactSections from "@/widgets/home-sections/ContactSection";
import { data } from '../entities/nft'

export default function Home() {
  return (
    <main>
      <Container>
        <HeroSection />
        <TrandSection />
        <TopCreatorsSection />
        <CategoriesSection />
        <MoreNFTSection title="Discover More NFTs" subtitle="Explore New Trending NFTs" nft={data} btnText="See All" btnImgPath="/icons/eye.png" />
      </Container>
      <CTASections />
      <Container>
        <HowItWorksSection />
        <ContactSections />
      </Container>
    </main>
  );
}
