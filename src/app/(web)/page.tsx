import HeroSection from "@/components/hero-section";
import PageSearch from "@/components/page-search";
import Gallery from "@/components/gallery";
import NewsLetter from "@/components/news-letter";
import FeatureRoom from "@/components/feature-room";
import { getFeaturedRoom } from "@/libs/apis";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeatureRoom featuredRoom={featuredRoom} />
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default Home;
