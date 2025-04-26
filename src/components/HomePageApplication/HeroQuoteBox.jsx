// 📦 src/components/HomePageApplication/HeroQuoteBox.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaPaperPlane } from "react-icons/fa";

const HeroQuoteBox = () => {
  const [selection, setSelection] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalized = selection.toLowerCase();
    if (
      ["auto", "motorcycle", "boat", "non-owner", "trailer"].includes(
        normalized
      )
    ) {
      navigate("/insurance/auto");
    } else if (normalized === "home") {
      navigate("/insurance/home");
    } else if (normalized === "commercial auto") {
      navigate("/insurance/commercial");
    } else if (normalized === "business") {
      navigate("/insurance/business");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mt-10 mx-auto w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-6 flex flex-col gap-4 items-center text-center"
    >
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-1">Get a Free Insurance Quote</h2>
        <p className="text-sm text-white/80">
          Personalized consultation — quick, secure, and easy.
        </p>
      </div>

      <div className="relative w-full">
        <select
          value={selection}
          onChange={(e) => setSelection(e.target.value)}
          className="appearance-none w-full px-4 py-3 rounded-xl text-sm text-black bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-[#FFB347] pr-10"
        >
          <option value="">Select Insurance Type</option>
          <option value="Auto">Auto Insurance</option>
          <option value="Motorcycle">Motorcycle Insurance</option>
          <option value="Boat">Boat Insurance</option>
          <option value="Non-Owner">Non-Owner Policy</option>
          <option value="Trailer">Trailer Insurance</option>
          <option value="Home">Home Insurance</option>
          <option value="Commercial Auto">Commercial Auto</option>
          <option value="Business">Business Insurance</option>
        </select>
        <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>

      <button
        type="submit"
        disabled={!selection}
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
          selection
            ? "bg-gradient-to-r from-[#ff6b81] via-[#fcae3b] to-[#ffb347] text-white hover:scale-105 hover:shadow-2xl"
            : "bg-gray-400 text-white cursor-not-allowed"
        }`}
      >
        <FaPaperPlane className="text-base" />
        Get Quote
      </button>
    </form>
  );
};

export default HeroQuoteBox;
