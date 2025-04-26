// 📦 src/components/AboutUs/FunFactsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const facts = [
  {
    icon: "🎯",
    text: "90% of our clients come through word of mouth. That says a lot about trust.",
  },
  {
    icon: "🌍",
    text: "We speak English, Ukrainian, and Russian — so we can connect, not just translate.",
  },
  {
    icon: "💬",
    text: "Fast replies, always. Our average response time to claims support requests? Under 2 hours.",
  },
  {
    icon: "🚪",
    text: "Many of our first clients still insure with us — and now bring their kids, friends, and even their own businesses.",
  },
  {
    icon: "🚗",
    text: "We love helping first-time buyers! Whether it’s your first car or your first home, we’re here to guide you like a friend would.",
  },
  {
    icon: "🍰",
    text: "We once insured a wedding cake — yes, really! Because if it matters to you, it matters to us.",
  },
];

const FunFactsSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#FFB347] mb-8">
        🤔 Did You Know?
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white/10 border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition shadow-lg flex flex-col items-start"
          >
            <div className="text-4xl mb-2">{fact.icon}</div>
            <p className="text-left text-white/80 text-sm leading-relaxed">
              {fact.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FunFactsSection;
