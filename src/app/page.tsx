"use client";

import AboutUsSection from "@/views/AboutUsSection";
import EnergySection from "@/views/EnergySection";
import HeroSection from "@/views/HeroSection";
import HomeSection from "@/views/HomeSection";
import OurServicesSection from "@/views/OurServicesSection";
import WhyUsSection from "@/views/WhyUsSection";

export default function Home() {
  return (
    <div className="flex-col justify-center items-center w-full h-full">
      <div id="home">
        <HeroSection />
      </div>
      <div id="">
        <HomeSection />
      </div>
      <div id="aboutus">
        <AboutUsSection />
        <EnergySection />
      </div>
      <div id="ourservices">
        <OurServicesSection />
      </div>
      <div id="whyus">
        <WhyUsSection />
      </div>
    </div>
  );
}
