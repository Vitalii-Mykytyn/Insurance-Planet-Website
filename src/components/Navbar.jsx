import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/images/white-logo-cropped.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg transition-all">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/">
            <img
              src={Logo}
              alt="Insurance Planet Logo"
              className="h-20 w-auto transition-transform duration-300 hover:scale-105 drop-shadow-lg"
            />
          </Link>
        </div>

        <div className="hidden lg:flex gap-8 items-center text-[15px] font-medium text-[#FAF3F0]">
          <NavLink to="/" label="Home" />
          <Dropdown
            label="Insurance"
            items={["Auto", "Home", "Commercial Auto", "Business"]}
            base="/insurance"
          />
          <Dropdown
            label="About"
            items={["About Us", "Privacy Policy"]}
            base="/about"
          />
          <NavLink to="/testimonials" label="Testimonials" />
          <Dropdown
            label="Contact"
            items={["Agents", "Contact Us"]}
            base="/contact"
          />
          <Dropdown
            label="Education"
            items={["Overview", "Resources"]}
            base="/education"
          />
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const el = document.getElementById("quote-form");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                  el.classList.add(
                    "scale-[1.03]",
                    "transition-transform",
                    "duration-500",
                    "shadow-xl"
                  );
                  setTimeout(
                    () => el.classList.remove("scale-[1.03]", "shadow-xl"),
                    1500
                  );
                }
              }, 50);
            }}
            className="bg-gradient-to-r from-[#FF6B6B] to-[#FFB347] text-white px-5 py-2 rounded-full font-semibold text-sm shadow-md hover:scale-105 hover:shadow-lg transition"
          >
            Start Your Quote
          </Link>
          <div className="flex gap-3 text-[18px] text-[#FAF3F0]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon Icon={FaFacebookF} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon Icon={FaInstagram} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon Icon={FaLinkedinIn} />
            </a>
          </div>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isOpen && <MobileMenu toggleMenu={toggleMenu} />}
    </nav>
  );
};

const NavLink = ({ to, label }) => (
  <Link to={to} className="hover:text-[#FFB347] transition-colors duration-200">
    {label}
  </Link>
);

const SocialIcon = ({ Icon }) => (
  <Icon className="hover:text-[#FFB347] transition-colors cursor-pointer" />
);

const Dropdown = ({ label, items, base }) => (
  <div className="group relative">
    <span className="cursor-pointer hover:text-[#FFB347]">{label}</span>
    <ul className="absolute left-0 top-[calc(100%+0.5rem)] w-48 bg-gradient-to-br from-white to-[#f9f9f9] text-sm text-gray-800 rounded shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-40">
      {items.map((item, idx) => (
        <li key={idx}>
          <Link
            to={`${base}/${formatRoute(item)}`}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const MobileMenu = ({ toggleMenu }) => (
  <div className="lg:hidden px-6 pt-2 pb-6 space-y-4 bg-white/10 text-[#FAF3F0] backdrop-blur-md border-t border-white/10">
    <MobileLink to="/" label="Home" />
    <MobileGroup
      label="Insurance"
      links={["Auto", "Home", "Commercial Auto", "Business"]}
      base="/insurance"
    />
    <MobileGroup
      label="About"
      links={["About Us", "Privacy Policy"]}
      base="/about"
    />
    <a
      href="https://facebook.com"
      className="block text-sm py-2 border-b border-white/20 hover:text-[#FFB347]"
    >
      Facebook
    </a>
    <a
      href="https://instagram.com"
      className="block text-sm py-2 border-b border-white/20 hover:text-[#FFB347]"
    >
      Instagram
    </a>
    <MobileLink to="/testimonials" label="Testimonials" />
    <MobileGroup
      label="Contact"
      links={["Agents", "Contact Us"]}
      base="/contact"
    />
    <MobileGroup
      label="Education"
      links={["Overview", "Resources"]}
      base="/education"
    />
    <Link
      to="/quote"
      onClick={toggleMenu}
      className="block w-full text-center mt-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFB347] text-white font-semibold py-2 rounded-full hover:scale-105 transition"
    >
      Start Your Quote
    </Link>
  </div>
);

const MobileLink = ({ to, label }) => (
  <Link
    to={to}
    className="block text-sm py-2 border-b border-white/20 hover:text-[#FFB347]"
  >
    {label}
  </Link>
);

const MobileGroup = ({ label, links, base }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold text-[#FAF3F0] mt-2"
        aria-expanded={open}
      >
        {label}
      </button>
      {open && (
        <ul className="ml-3 mt-1">
          {links.map((text, idx) => (
            <li key={idx}>
              <Link
                to={`${base}/${formatRoute(text)}`}
                className="block py-1 text-sm hover:text-[#FFB347]"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const formatRoute = (text) => text.toLowerCase().replace(/\s+/g, "-");

export default Navbar;
