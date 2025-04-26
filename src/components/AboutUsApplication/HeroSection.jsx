// 📦 src/components/AboutUs/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-10"
    >
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm">
          <h3 className="text-xl font-semibold text-[#FFB347] mb-2">
            👋 We’re Your Neighbors
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            We’re part of your community. We’re the ones who wave at you in the
            grocery line, remember your kid’s name, and actually care what
            happens when you file a claim.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm">
          <h3 className="text-xl font-semibold text-[#FFB347] mb-2">
            💪 Changing the Game
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Insurance isn’t exciting — but it should feel empowering. We turn a
            frustrating necessity into a reliable support system with your needs
            front and center.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm">
          <h3 className="text-xl font-semibold text-[#FFB347] mb-2">
            🏢 Locally Born, Widely Trusted
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Started in Jacksonville, grown into one of North Florida’s most
            trusted agencies — serving thousands across families, individuals,
            and businesses.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
