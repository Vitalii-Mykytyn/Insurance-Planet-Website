// 📦 src/pages/Agents.jsx
import React from "react";
import { GROUPED_DATA } from "../../components/ContactApplication/agents-and-departments-data";

const Agents = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#141E30] to-[#243B55] pt-28 pb-20 px-4 sm:px-6 md:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFB347] mb-4">
            Meet Our Insurance Experts
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Browse through our expert teams. You’ll find all agents organized by
            department, ready to assist with your insurance needs.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {GROUPED_DATA.map(({ group, agents }, index) => (
            <div
              key={`${group}-${index}`}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg ${
                group === "Distant Department" ? "xl:col-span-3" : ""
              }`}
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#F09819] mb-4 text-center">
                {group}
              </h2>
              <div
                className={`grid gap-4 ${
                  group === "Distant Department"
                    ? "sm:grid-cols-2 md:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {agents.map(({ name, phone, email, roles }, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/20 transition"
                  >
                    <h3 className="font-semibold text-white text-sm sm:text-base mb-1">
                      {name}
                    </h3>
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="text-[#FFB347] text-sm hover:underline"
                    >
                      {phone}
                    </a>
                    <a
                      href={`mailto:${email}`}
                      className="text-white/70 text-sm hover:underline block"
                    >
                      {email}
                    </a>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {roles?.map((role, rIdx) => (
                        <span
                          key={rIdx}
                          className="inline-block bg-white/10 border border-white/20 text-xs px-3 py-1 rounded-full capitalize"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
