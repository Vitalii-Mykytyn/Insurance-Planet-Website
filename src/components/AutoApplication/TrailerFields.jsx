import React from "react";

const TrailerFields = ({ form, handleChange }) => {
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";

  return (
    <div className="space-y-6 transition-all duration-500 ease-in-out border border-white/10 p-6 rounded-2xl bg-white/5">
      <h3 className="text-lg font-bold text-white">🏕️ Trailer Details</h3>

      <div>
        <label className={labelClass}>Is it a Travel Trailer?</label>
        <select
          name="trailer_travel"
          value={form.trailer_travel || ""}
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
          name="trailer_make"
          value={form.trailer_make || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Make"
        />
        <input
          name="trailer_model"
          value={form.trailer_model || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Model"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="trailer_slides"
          value={form.trailer_slides || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Slides"
        />
        <input
          name="trailer_style"
          value={form.trailer_style || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Style"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="trailer_length"
          value={form.trailer_length || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Length (ft)"
        />
        <input
          name="trailer_bodyStyle"
          value={form.trailer_bodyStyle || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Body Style"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="trailer_purchaseYear"
          value={form.trailer_purchaseYear || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Purchase Year"
        />
        <select
          name="trailer_originalOwner"
          value={form.trailer_originalOwner || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Original Owner?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="trailer_rvValue"
          value={form.trailer_rvValue || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Estimated ACV ($)"
        />
        <select
          name="trailer_parkedYearRound"
          value={form.trailer_parkedYearRound || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Parked Year-Round?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>
  );
};

export default TrailerFields;
