// 📦 src/pages/Resources.jsx
import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-40 px-6 md:px-12 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFB347] mb-4">
            📚 Insurance Resource Library
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Trusted articles, tools, guides, and checklists — all in one place
            to help you become an insurance pro.
          </p>
        </div>

        {/* 📘 Resource Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {resources.map(({ title, desc, link, tag, color }) => (
            <div
              key={title}
              className={`bg-white/10 border-l-4 ${color} backdrop-blur-xl rounded-2xl p-6 shadow-md hover:scale-[1.01] transition-all`}
            >
              <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
              <p className="text-white/80 text-sm mb-4">{desc}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFB347] font-medium text-sm hover:underline"
              >
                {tag} →
              </a>
            </div>
          ))}
        </div>

        {/* 📞 CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-3 text-[#FAF3F0]">
            Not sure where to start?
          </h3>
          <Link
            to="/contact/agents"
            className="inline-block mt-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFB347] text-white font-semibold px-8 py-3 rounded-full hover:scale-105 shadow-md transition"
          >
            Talk to a licensed agent →
          </Link>
        </div>
      </div>
    </section>
  );
};

const resources = [
  {
    title: "Florida Auto Insurance Guide",
    desc: "Understand Florida's minimum coverage requirements, PIP, liability, and what optional coverages matter most.",
    link: "https://www.flhsmv.gov/insurance/",
    tag: "State DMV Insurance Info",
    color: "border-[#FF6B6B]",
  },
  {
    title: "NAIC Consumer Insurance Resources",
    desc: "The National Association of Insurance Commissioners’ hub of consumer education material, tools & alerts.",
    link: "https://content.naic.org/consumer.htm",
    tag: "National Resource",
    color: "border-[#FFB347]",
  },
  {
    title: "What Is Comprehensive vs. Collision?",
    desc: "A breakdown of the difference between common coverages, and when each makes sense.",
    link: "https://www.geico.com/living/driving/auto/car-insurance/comprehensive-vs-collision/",
    tag: "Coverage Comparison",
    color: "border-[#6dd5ed]",
  },
  {
    title: "Florida Office of Insurance Regulation",
    desc: "Rate filings, consumer protection tips, and guidance from the state’s insurance regulation office.",
    link: "https://www.floir.com/",
    tag: "Florida Gov Resource",
    color: "border-[#00c9a7]",
  },
  {
    title: "Flood Insurance: Do You Need It?",
    desc: "Understand FEMA zones, NFIP programs, and whether your area is high-risk.",
    link: "https://www.floodsmart.gov/",
    tag: "FloodSmart.gov",
    color: "border-[#2af598]",
  },
  {
    title: "How to Read Your Declaration Page",
    desc: "Step-by-step breakdown of your policy declaration page, so you always know what you’re covered for.",
    link: "https://www.policygenius.com/insurance/declaration-page/",
    tag: "Policy Literacy",
    color: "border-[#FF6B6B]",
  },
  {
    title: "Checklist: Filing a Claim",
    desc: "Avoid headaches. Here’s a printable checklist of what to do after an accident or loss.",
    link: "https://www.nerdwallet.com/article/insurance/how-to-file-an-insurance-claim",
    tag: "Claims Guide",
    color: "border-[#FFB347]",
  },
  {
    title: "Best Questions to Ask Your Agent",
    desc: "Don’t walk into your quote blind. These are 12 smart questions to get the most personalized coverage.",
    link: "https://www.moneygeek.com/insurance/resources/questions-to-ask-your-insurance-agent/",
    tag: "Consumer Tip",
    color: "border-[#c3ec52]",
  },
  {
    title: "Commercial Auto vs. Personal Auto",
    desc: "Do you need commercial coverage? This guide helps you determine the difference and avoid denial.",
    link: "https://www.progressivecommercial.com/commercial-auto-insurance/personal-vs-commercial/",
    tag: "Business Coverage",
    color: "border-[#6e1e1e]",
  },
];

export default Resources;
