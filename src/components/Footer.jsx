import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/images/white-logo-cropped.png";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 pt-16 pb-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        {/* 1️⃣ Brand */}
        <div>
          <img src={Logo} alt="Insurance Planet Logo" className="h-12 mb-4" />
          <p className="text-white/80 leading-relaxed text-[15px]">
            Trusted across Florida since 2016, Insurance Planet provides
            personalized insurance backed by service, transparency, and real
            support.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h4 className="font-semibold text-[#FFB347] text-base mb-4 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link
                to="/"
                className="hover:text-[#FFB347] transition-colors duration-200"
              >
                🏠 Home
              </Link>
            </li>
            <li>
              <Link
                to="/about/about-us"
                className="hover:text-[#FFB347] transition-colors duration-200"
              >
                🌟 About Us
              </Link>
            </li>
            <li>
              <Link
                to="/insurance/auto"
                className="hover:text-[#FFB347] transition-colors duration-200"
              >
                🚗 Insurance
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  setTimeout(
                    () => window.scrollTo({ top: 0, behavior: "smooth" }),
                    100
                  );
                }}
              >
                📝 Get a Quote
              </Link>
            </li>
            <li>
              <Link
                to="/contact/agents"
                className="hover:text-[#FFB347] transition-colors duration-200"
              >
                📞 Contact Agents
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Contact */}
        <div>
          <h4 className="font-semibold text-[#FFB347] text-base mb-4 uppercase tracking-wide">
            Contact
          </h4>
          <ul className="space-y-4 text-white/80 text-sm leading-relaxed">
            <li>
              📍 7999 Philips Hwy #209
              <br />
              Jacksonville, FL 32256, USA
            </li>
            <li>
              📞{" "}
              <a
                href="tel:+19049907797"
                className="hover:underline text-white/80 hover:text-[#FFB347]"
              >
                (904) 990-7797
              </a>
              <br />
              ☎️{" "}
              <a
                href="tel:+19044505055"
                className="hover:underline text-white/80 hover:text-[#FFB347]"
              >
                (904) 450-5055
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:support@insuranceplanet.com"
                className="hover:underline text-white/90"
              >
                support@insuranceplanet.com
              </a>
            </li>
          </ul>
        </div>

        {/* 4️⃣ Social & Legal */}
        <div>
          <h4 className="font-semibold text-[#FFB347] text-base mb-4 uppercase tracking-wide">
            Connect
          </h4>
          <div className="flex gap-4 text-xl mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFB347] transition-transform hover:scale-110 duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFB347] transition-transform hover:scale-110 duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFB347] transition-transform hover:scale-110 duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <ul className="text-white/60 text-xs space-y-1">
            <li>
              <Link
                to="/about/privacy-policy"
                className="hover:text-[#FFB347] transition-colors duration-200"
              >
                🔐 Privacy Policy
              </Link>
            </li>

            <li>📜 License #FL-123456</li>
          </ul>
        </div>
      </div>

      {/* 📌 Bottom */}
      <div className="mt-14 text-center text-xs text-white/50 tracking-wide">
        © {new Date().getFullYear()} Insurance Planet, LLC — All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
