// 📦 src/pages/Owerview.jsx
import React from "react";
import { Link } from "react-router-dom";

const Owerview = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-40 px-6 md:px-12 min-h-screen">
      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* 🔰 Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFB347] mb-4">
            📘 Insurance Education Hub
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Empowering Florida families with knowledge. Learn, compare, and
            choose insurance confidently.
          </p>
        </div>

        {/* 🔹 Core Blocks */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Types */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10 transition-all hover:scale-[1.01]">
            <h3 className="text-xl font-bold text-[#FF6B6B] mb-3">
              🚗 Types of Insurance
            </h3>
            <ul className="list-disc list-inside text-white/90 space-y-2 text-sm leading-relaxed">
              <li>Auto — Required, collision, comprehensive</li>
              <li>Homeowners — Structure, property, liability</li>
              <li>Commercial Auto — Fleet & business protection</li>
              <li>Specialty — Renters, flood, motorcycle & more</li>
            </ul>
          </div>

          {/* Basics */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10 transition-all hover:scale-[1.01]">
            <h3 className="text-xl font-bold text-[#FFB347] mb-3">
              🧠 Insurance Basics
            </h3>
            <ul className="list-disc list-inside text-white/90 space-y-2 text-sm leading-relaxed">
              <li>Premiums vs Deductibles</li>
              <li>Common exclusions & endorsements</li>
              <li>How claims really work</li>
              <li>No-jargon explanations</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10 transition-all hover:scale-[1.01]">
            <h3 className="text-xl font-bold text-[#FAF3F0] mb-3">
              🛡️ Coverage Planning Tools
            </h3>
            <ul className="list-disc list-inside text-white/90 space-y-2 text-sm leading-relaxed">
              <li>Estimate your coverage needs</li>
              <li>Understand pricing factors</li>
              <li>Save smart, protect better</li>
            </ul>
          </div>
        </div>

        {/* 📌 Featured & Resources */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {/* Featured Topics */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border-l-4 border-[#FFB347]">
            <h4 className="text-lg font-semibold mb-3 text-[#FFB347]">
              🌟 Featured Topics
            </h4>
            <ul className="text-white/90 text-sm space-y-2 leading-relaxed">
              <li>✅ New to Insurance? Start Here</li>
              <li>🔍 Compare Insurance Quotes Like a Pro</li>
              <li>🧾 How Claims Really Work</li>
              <li>💡 5 Mistakes to Avoid</li>
              <li>🔐 Underinsurance: The Hidden Risk</li>
            </ul>
          </div>

          {/* Resource Library CTA */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border-l-4 border-[#FF6B6B]">
            <h4 className="text-lg font-semibold mb-3 text-[#FF6B6B]">
              📚 Keep Learning
            </h4>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Our resource library includes downloadable guides, video
              explainers, and actionable checklists.
            </p>
            <Link
              to="/education/resources"
              className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#FFB347] text-white font-medium px-6 py-2 rounded-full shadow hover:scale-105 transition-all"
            >
              Visit Resource Library →
            </Link>
          </div>
        </div>

        {/* 📬 CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-3 text-[#FAF3F0]">
            Still Have Questions?
          </h3>
          <Link
            to="/contact/agents"
            className="inline-block mt-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFB347] text-white font-semibold px-8 py-3 rounded-full hover:scale-105 shadow-md transition"
          >
            Contact Our Agents →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Owerview;
