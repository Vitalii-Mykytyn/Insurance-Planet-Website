// 📦 src/components/HomeApplication/fields/FloodFields.jsx
import React from "react";

const FloodFields = ({ form, handleChange }) => {
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";

  return (
    <div className="space-y-6">
      <div>
        <label className={labelClass}>
          Do you have an Elevation Certificate?
        </label>
        <div className="flex gap-6">
          {["Yes", "No"].map((val) => (
            <label key={val} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="elevationCert"
                value={val}
                checked={form.elevationCert === val}
                onChange={handleChange}
                className="accent-[#FF6B6B]"
              />
              {val}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloodFields;
