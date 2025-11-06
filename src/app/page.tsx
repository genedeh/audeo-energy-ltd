import AboutUsSection from "@/views/AboutUsSection";
import HeroSection from "@/views/HeroSection";
import HomeSection from "@/views/HomeSection";

export default function Home() {
  return (
    <div className="flex-col justify-center items-center w-full h-full">
      <div id="home">
        <HeroSection />
        <HomeSection />
      </div>
      <div id="aboutus">
        <AboutUsSection />
      </div>
    </div>
  );
}
