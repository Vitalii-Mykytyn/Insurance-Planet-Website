// 📦 src/components/HomeApplication/fields/BuildersRiskFields.jsx
import React from "react";

const BuildersRiskFields = ({ form, handleChange }) => {
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const textareaClass =
    "input w-full min-h-[100px] text-black rounded-lg px-4 py-2 placeholder-gray-400";

  return (
    <div className="space-y-6">
      <div>
        <label className={labelClass}>
          Will you act as both contractor and owner?
        </label>
        <div className="flex gap-6">
          {["Both", "Owner Only"].map((role) => (
            <label key={role} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="contractorRole"
                value={role}
                checked={form.contractorRole === role}
                onChange={handleChange}
                className="accent-[#FF6B6B]"
              />
              {role === "Owner Only" ? `${role} (enter company)` : role}
            </label>
          ))}
        </div>
      </div>

      {form.contractorRole === "Owner Only" && (
        <div>
          <label className={labelClass}>Contracting Company</label>
          <input
            type="text"
            name="contractCompany"
            value={form.contractCompany || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Purchase Price</label>
          <input
            type="number"
            name="purchasePrice"
            value={form.purchasePrice || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Renovation Investment</label>
          <input
            type="number"
            name="renovationInvestment"
            value={form.renovationInvestment || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Work Types</label>
        <textarea
          name="workTypes"
          value={form.workTypes || ""}
          onChange={handleChange}
          className={textareaClass}
        />
      </div>

      <div>
        <label className={labelClass}>Additional Info (optional)</label>
        <textarea
          name="additionalInfo"
          value={form.additionalInfo || ""}
          onChange={handleChange}
          className={textareaClass}
        />
      </div>
    </div>
  );
};

export default BuildersRiskFields;
