// 📦 src/components/HomeApplication/fields/PersonalLiabilityFields.jsx
import React from "react";

const PersonalLiabilityFields = ({ form, handleChange }) => {
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const textareaClass =
    "input w-full min-h-[100px] text-black rounded-lg px-4 py-2 placeholder-gray-400";

  return (
    <div className="space-y-6 transition-all duration-500 ease-in-out">
      <div>
        <label className={labelClass}>Who is the policy for?</label>
        <input
          type="text"
          name="policyFor"
          value={form.policyFor || ""}
          onChange={handleChange}
          placeholder="e.g., John Smith or Family"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Why do you need personal liability insurance?
        </label>
        <textarea
          name="liabilityReason"
          value={form.liabilityReason || ""}
          onChange={handleChange}
          placeholder="Describe purpose of this policy — e.g., umbrella protection, landlord requirement..."
          className={textareaClass}
        />
      </div>

      <div>
        <label className={labelClass}>Desired Liability Coverage Limit</label>
        <select
          name="liabilityLimit"
          value={form.liabilityLimit || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select...</option>
          <option value="$100,000">$100,000</option>
          <option value="$300,000">$300,000</option>
          <option value="$500,000">$500,000</option>
          <option value="$1,000,000">$1,000,000</option>
          <option value="More">$1,000,000+</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Additional Notes</label>
        <textarea
          name="personalLiabilityNotes"
          value={form.personalLiabilityNotes || ""}
          onChange={handleChange}
          placeholder="Optional details, concerns, exclusions..."
          className={textareaClass}
        />
      </div>
    </div>
  );
};

export default PersonalLiabilityFields;
