// 📦 src/components/AboutUs/MissionSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaGlobeAmericas,
  FaUserShield,
  FaHeart,
} from "react-icons/fa";

const values = [
  { icon: <FaUserShield />, label: "Independent & Client-First" },
  { icon: <FaHandsHelping />, label: "Claims Advocacy from start to finish" },
  { icon: <FaGlobeAmericas />, label: "Multilingual Team: EN, RU, UA" },
  { icon: <FaHeart />, label: "Policies made personal" },
];

const MissionSection = () => {
  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFB347] mb-4">
          🧭 Our Mission
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
          To help you navigate life’s uncertainties with confidence, clarity,
          and compassion.
        </p>
        <p className="text-white/80 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          We believe insurance should never feel cold or corporate. It should
          feel like someone’s truly got your back. That’s why we blend the power
          of choice — working with multiple carriers to get you the best fit —
          with real human connection.
        </p>
        <p className="text-white/80 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          When you call us, you won’t get a robot or be tossed into a queue.
          You’ll get a person who listens, asks the right questions, and helps
          you make sense of your options without jargon or pressure. Whether
          you're insuring your first apartment or managing a fleet of commercial
          vehicles, we’re here to make sure you understand your coverage — and
          feel good about it.
        </p>
        <p className="text-white/80 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          Our mission isn't just about policies. It’s about people. It's about
          being there when life happens — the good, the bad, and the
          unpredictable — and making sure you're covered through it all.
        </p>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
      >
        {values.map(({ icon, label }, i) => (
          <li
            key={i}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition"
          >
            <div className="text-[#FFB347] text-xl mt-1">{icon}</div>
            <div className="text-white/90 text-base font-medium leading-snug">
              {label}
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default MissionSection;
