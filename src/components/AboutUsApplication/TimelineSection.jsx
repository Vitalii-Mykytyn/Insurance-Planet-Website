// 🗒️ src/components/AboutUs/TimelineSection.jsx
import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2016",
    icon: "👷",
    title: "The Vision is Born",
    desc: "Founded with a mission to make insurance more human — one client at a time. A humble office, a bold idea.",
  },
  {
    year: "2018",
    icon: "🌐",
    title: "Going Digital",
    desc: "Launched our first online platform, bringing quotes and consultation tools to the web for better access.",
  },
  {
    year: "2020",
    icon: "🧩",
    title: "Multilingual Team Assembled",
    desc: "We expanded with native Russian and Ukrainian speakers to support our growing international community.",
  },
  {
    year: "2022",
    icon: "🏢",
    title: "New Office, Same Planet",
    desc: "Relocated to Philips Hwy HQ — more room, more staff, and an even better experience for our clients.",
  },
  {
    year: "2024",
    icon: "💡",
    title: "Innovations & Insights",
    desc: "Expanded into commercial consulting, helping businesses tailor protection strategies with expert guidance.",
  },
  {
    year: "Today",
    icon: "🚀",
    title: "Growing Together",
    desc: "Thousands of happy clients later, we’re still listening, improving, and growing — with you.",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-16"
      >
        📈 Our Journey
      </motion.h2>

      {/* Desktop View - Horizontal Timeline */}
      <div className="hidden md:flex md:flex-col items-center relative">
        <div className="flex justify-center flex-wrap gap-8 xl:gap-16 max-w-[95rem] mx-auto relative">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 p-6 rounded-3xl text-center w-72 xl:w-80 shadow-lg relative hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-[#FFB347] font-semibold text-sm uppercase tracking-wide">
                {item.year}
              </div>
              <h3 className="font-bold text-white text-lg mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-[#FFB347] to-transparent z-[-1]" />
        </div>
      </div>

      {/* Mobile View - Vertical Timeline */}
      <div className="md:hidden relative border-l-4 border-[#FFB347] pl-6 space-y-10">
        {milestones.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-6 top-2 bg-[#FFB347] w-3 h-3 rounded-full" />
            <div className="mb-2 text-white text-sm">
              {item.icon}{" "}
              <span className="text-[#FFB347] font-semibold">{item.year}</span>
            </div>
            <h4 className="text-md font-bold text-white mt-1">{item.title}</h4>
            <p className="text-sm text-white/70 mt-1 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
