// 📦 src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import highwayImage from "../assets/images/Backgrounds/sectionOne.png";
import HeroQuoteBox from "../components/HomePageApplication/HeroQuoteBox";
import WhyChooseUs from "../components/HomePageApplication/WhyChooseUs";
import InsuranceTypeSlider from "../components//HomePageApplication/InsuranceTypeSlider";

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden flex items-center pt-20 md:pt-10">
        <div
          className="absolute inset-0 bg-relative bg-cover bg-center"
          style={{ backgroundImage: `url(${highwayImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#6e1e1e]/10 to-[#6e1e1e]/10 " />

        <div className="relative z-10 max-w-5x1 mx-auto px-6 text-center text-[#FFFDD0]">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
            We’ve Got Florida Covered.
            <br />
            Drive. Live. Thrive.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#FFE9D6] font-medium">
            Affordable. Local. Reliable. Trusted by 1,200+ Florida families.
          </p>
          <div id="quote-form">
            <HeroQuoteBox />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-sm text-[#FFEEDD] font-medium">
            <div className="flex items-center gap-2">
              ⭐ 4.9 Stars — 1,200+ Verified Reviews
            </div>
            <div className="flex items-center gap-1">
              🌴 Based in Jacksonville, Serving All of Florida
            </div>
            <div className="flex items-center gap-1">
              🛡️ Auto, Home, Commercial & More
            </div>
          </div>

          <div className="mt-6 text-sm text-[#fefefe]/80">
            Prefer to talk? Call us at{" "}
            <a
              href="tel:+19049907797"
              className="font-bold text-[#FFB347] hover:underline"
            >
              (904) 990-7797
            </a>{" "}
            or{" "}
            <a
              href="tel:+19044505055"
              className="font-bold text-[#FFB347] hover:underline"
            >
              (904) 450-5055
            </a>
          </div>
        </div>
      </section>
      <InsuranceTypeSlider />
      <WhyChooseUs />
    </>
  );
};

export default Home;
