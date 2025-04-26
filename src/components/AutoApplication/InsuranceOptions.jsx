import React from "react";

const InsuranceOptions = ({ form, handleChange }) => {
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";

  return (
    <div className="space-y-6 transition-all duration-500 ease-in-out">
      <div>
        <label className={labelClass}>
          🛡️ What type of insurance coverage are you interested in?
        </label>
        <div className="flex flex-col gap-3 text-white/90">
          <label className="inline-flex items-center gap-3">
            <input
              type="radio"
              name="coverageType"
              value="State Minimum"
              checked={form.coverageType === "State Minimum"}
              onChange={handleChange}
              className="accent-[#FF6B6B]"
            />
            State Minimum Coverage
          </label>

          <label className="inline-flex items-center gap-3">
            <input
              type="radio"
              name="coverageType"
              value="Liability Only"
              checked={form.coverageType === "Liability Only"}
              onChange={handleChange}
              className="accent-[#FF6B6B]"
            />
            Liability Only (custom limits)
          </label>

          <label className="inline-flex items-center gap-3">
            <input
              type="radio"
              name="coverageType"
              value="Full Coverage"
              checked={form.coverageType === "Full Coverage"}
              onChange={handleChange}
              className="accent-[#FF6B6B]"
            />
            Full Coverage (Comprehensive & Collision)
          </label>
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Prior Insurance Provider / Policy Limits
        </label>
        <input
          type="text"
          name="priorInsurance"
          value={form.priorInsurance || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="e.g., Geico / 100k-300k"
        />
      </div>

      <div>
        <label className={labelClass}>Additional Information (optional)</label>
        <textarea
          name="additionalInfo"
          value={form.additionalInfo || ""}
          onChange={handleChange}
          className="input w-full min-h-[100px] text-black rounded-lg px-4 py-2"
          placeholder="Anything else we should know?"
        />
      </div>
    </div>
  );
};

export default InsuranceOptions;
