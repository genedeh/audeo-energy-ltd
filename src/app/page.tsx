"use client";

import AboutUsSection from "@/views/AboutUsSection";
import ContactUsSection from "@/views/ContactUsSection";
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
      <div id="mission" className="mt-40">
        {/* <HomeSection /> */}
        <EnergySection />
      </div>
      <div id="aboutus" className="mt-20">
        <AboutUsSection />
      </div>
      <div id="ourservices" className="mt-30">
        <OurServicesSection />
      </div>
      <div id="whyus" className="mt-30">
        <WhyUsSection />
      </div>
      <div id="contactus">
        <ContactUsSection />
      </div>
    </div>
  );
}
