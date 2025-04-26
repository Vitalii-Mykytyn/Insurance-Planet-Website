// 📦 src/components/HomeApplication/fields/CondoFields.jsx
import React from "react";

const CondoFields = ({ form, handleChange, isNewPurchase }) => {
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";

  return (
    <div className="space-y-6">
      <div>
        <label className={labelClass}>
          HOA & Master Policy covering roof/walls?
        </label>
        <select
          name="hoaPolicy"
          value={form.hoaPolicy || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="unitFloor"
          type="number"
          value={form.unitFloor || ""}
          placeholder="Unit Floor"
          onChange={handleChange}
          className={inputClass}
        />
        <input
          name="totalFloors"
          type="number"
          value={form.totalFloors || ""}
          placeholder="Total Floors"
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {!isNewPurchase && (
        <div>
          <label className={labelClass}>
            Prior Address (if purchased within 5 years)
          </label>
          <input
            type="text"
            name="condoPriorAddress"
            value={form.condoPriorAddress || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      )}
    </div>
  );
};

export default CondoFields;
