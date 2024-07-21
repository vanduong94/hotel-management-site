import HeroSection from "@/components/hero-section";
import PageSearch from "@/components/page-search";
import Gallery from "@/components/gallery";
import NewsLetter from "@/components/news-letter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      {/* Feature room */}
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default Home;
