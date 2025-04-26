// 📦 src/components/AboutUs/CEOSection.jsx
import React from "react";
import { motion } from "framer-motion";
import SEO_Avatar from "../../assets/images/SEO/SEO_Avatar.webp";

const CEOSection = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFB347]">
          🌎 Welcome to Insurance Planet
        </h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          Where Protection Meets People
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="flex justify-center">
          <img
            src={SEO_Avatar}
            alt="CEO Insurance Planet"
            className="rounded-xl shadow-lg object-cover w-full max-w-sm h-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            👤 Meet Our CEO
          </h2>
          <p className="text-white/80 mb-4 leading-relaxed">
            At the helm of Insurance Planet is Vladimir Tesler, a leader who
            believes that the best way to build a successful company is to care
            — deeply and consistently.
          </p>
          <p className="text-white/80 mb-4 leading-relaxed">
            With years of experience in the insurance industry and a genuine
            connection to the Jacksonville community, Vladimir Tesler brings a
            unique blend of expertise and empathy to every decision. Known for a
            hands-on leadership style, he is often found meeting with clients
            directly, mentoring new team members, or brainstorming new ways to
            make insurance more transparent and approachable.
          </p>
          <blockquote className="italic border-l-4 border-[#FFB347] pl-4 text-white/90">
            “My goal is to make insurance understandable, accessible, and
            empowering for every client we serve.”
          </blockquote>
          <p className="text-white/80 mt-4 leading-relaxed">
            Under his leadership, Insurance Planet has grown not just in size,
            but in heart. The focus remains the same as it was on day one: do
            right by people, always.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CEOSection;
