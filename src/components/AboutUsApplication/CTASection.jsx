// 📦 src/components/AboutUs/CTASection.jsx
import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFB347]">
        🌟 Real People. Real Coverage. Real Support.
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-8">
        Whether you're looking for peace of mind for your home, business, or
        family, we’re here with expert guidance and real support.
      </p>
      <a
        href="/contact/ContactUs"
        className="inline-block bg-[#FFB347] hover:bg-[#ff9f1c] text-black font-bold py-3 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
      >
        Get a Free Quote →
      </a>
    </motion.div>
  );
};

export default CTASection;
