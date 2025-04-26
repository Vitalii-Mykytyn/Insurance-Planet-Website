// 📦 src/components/HomeApplication/fields/HomeFields.jsx
import React from "react";

const HomeFields = ({ form, handleChange, isNewPurchase }) => {
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const textareaClass =
    "input w-full min-h-[100px] text-black rounded-lg px-4 py-2";

  return (
    <div className="space-y-6">
      <div>
        <label className={labelClass}>
          Do you have 4-Point or Wind Mitigation inspection documents?
        </label>
        <div className="flex items-center gap-6">
          {["Yes", "No"].map((val) => (
            <label key={val} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="mitigationDocs"
                value={val}
                checked={form.mitigationDocs === val}
                onChange={handleChange}
                className="accent-[#FF6B6B]"
              />
              {val}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>Roof Replacement Year</label>
        <input
          type="number"
          name="roofYear"
          placeholder="e.g., 2018"
          value={form.roofYear || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {!isNewPurchase && (
        <div>
          <label className={labelClass}>Prior Insurance Policy?</label>
          <input
            type="text"
            name="priorPolicy"
            placeholder="Yes / No"
            value={form.priorPolicy || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label className={labelClass}>
          Claims in past 5 years (non-weather)?
        </label>
        <textarea
          name="claimsDetails"
          value={form.claimsDetails || ""}
          onChange={handleChange}
          className={textareaClass}
          placeholder="Provide details if any"
        />
      </div>
    </div>
  );
};

export default HomeFields;
