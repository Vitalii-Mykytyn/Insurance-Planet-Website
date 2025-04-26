// 📦 src/components/HomeApplication/fields/RentersFields.jsx
import React from "react";

const RentersFields = ({ form, handleChange, isNewPurchase }) => {
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";

  return (
    <div className="space-y-6">
      {isNewPurchase && (
        <div>
          <label className={labelClass}>Prior Address</label>
          <input
            type="text"
            name="priorAddress"
            value={form.priorAddress || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label className={labelClass}>Landlord Requirements</label>
        <input
          type="text"
          name="landlordRequirements"
          value={form.landlordRequirements || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Insurance Start Date</label>
        <input
          type="date"
          name="startDate"
          value={form.startDate || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="apartmentFloor"
          type="number"
          placeholder="Apartment Floor"
          value={form.apartmentFloor || ""}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          name="totalFloors"
          type="number"
          placeholder="Total Building Floors"
          value={form.totalFloors || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
    </div>
  );
};

export default RentersFields;
