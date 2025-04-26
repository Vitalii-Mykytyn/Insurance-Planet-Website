import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] bg-center text-white">
      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-10 items-stretch">
        {/* LEFT */}
        <div className="lg:w-[48%] bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#FAF3F0] mb-6">
              🌎 Why Choose Insurance Planet?
            </h2>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
              We're not just another agency — we’re your trusted partner across
              Florida. Backed by experience, local presence, and transparency.
            </p>
            <ul className="space-y-6 text-white/90 text-base md:text-lg leading-relaxed">
              <li>
                <span className="text-[#FFB347] font-semibold">
                  ✅ Personalized Choices:
                </span>{" "}
                Dozens of insurers, one perfect plan for you.
              </li>
              <li>
                <span className="text-[#FFB347] font-semibold">
                  🚀 Expert Guidance:
                </span>{" "}
                Insurance made human — helpful, not robotic.
              </li>
              <li>
                <span className="text-[#FFB347] font-semibold">
                  📞 Local Support:
                </span>{" "}
                Real agents, real conversations, real care.
              </li>
              <li>
                <span className="text-[#FFB347] font-semibold">
                  🌟 Evolving Coverage:
                </span>{" "}
                Your needs change — your protection evolves.
              </li>
              <li>
                <span className="text-[#FFB347] font-semibold">
                  🔒 Built on Trust:
                </span>{" "}
                Always transparent, always on your side.
              </li>
            </ul>
          </div>
          <div className="pt-8">
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  const el = document.getElementById("quote-form");
                  if (el) {
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                    el.classList.add(
                      "scale-[1.03]",
                      "transition-transform",
                      "duration-500",
                      "shadow-xl"
                    );
                    setTimeout(() => {
                      el.classList.remove("scale-[1.03]", "shadow-xl");
                    }, 1500);
                  }
                }, 100);
              }}
              className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#FFB347] text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Start Your Quote →
            </Link>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="lg:w-[26%] bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.01]">
          <h3 className="text-2xl md:text-3xl font-bold text-[#FFB347] mb-4">
            📞 Talk to an Agent
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Call us now:
            <br />
            <span className="text-xl font-bold text-white tracking-wide leading-snug block mt-2">
              <a
                href="tel:+19049907797"
                className="font-bold text-[#FFB347] hover:underline"
              >
                (904) 990-7797
              </a>{" "}
              <br />
              <a
                href="tel:+19044505055"
                className="font-bold text-[#FFB347] hover:underline"
              >
                (904) 450-5055
              </a>
            </span>
          </p>
          <Link
            to="/contact/agents"
            className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#FFB347] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Meet Our Agents →
          </Link>
        </div>

        {/* RIGHT */}
        <div className="lg:w-[26%] flex flex-col bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
          <iframe
            title="Insurance Planet Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.106364869186!2d-81.5898272236827!3d30.22111860967183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5c9b12d8382cd%3A0xe582eb79cc20e9d6!2s7999%20Philips%20Hwy%20%23209%2C%20Jacksonville%2C%20FL%2032256%2C%20USA!5e0!3m2!1sen!2sua!4v1711829980000!5m2!1sen!2sua"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px]"
          ></iframe>

          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold text-[#FFB347] mb-1">
              📍 Visit Our Office
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              7999 Philips Hwy #209
              <br />
              Jacksonville, FL 32256
              <br />
              United States
            </p>
            <a
              href="https://maps.google.com/?q=7999+Philips+Hwy+%23209,+Jacksonville,+FL+32256"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#FFB347] font-medium hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
