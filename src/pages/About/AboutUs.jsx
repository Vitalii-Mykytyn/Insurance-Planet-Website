// 📦 src/pages/AboutUs.jsx
import React from "react";
import HeroSection from "../../components/AboutUsApplication/HeroSection";
import MissionSection from "../../components/AboutUsApplication/MissionSection";
import CEOSection from "../../components/AboutUsApplication/CEOSection";
import TimelineSection from "../../components/AboutUsApplication/TimelineSection";
import FunFactsSection from "../../components/AboutUsApplication/FunFactsSection";
import CTASection from "../../components/AboutUsApplication/CTASection";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-32 px-4">
      <div className="max-w-6xl mx-auto space-y-24">
        <CEOSection />

        <HeroSection />
        <MissionSection />
        <TimelineSection />
        <FunFactsSection />
        <CTASection />
      </div>
    </section>
  );
};

export default AboutUs;
