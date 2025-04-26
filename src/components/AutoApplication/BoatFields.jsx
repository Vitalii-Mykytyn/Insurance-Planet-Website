import React from "react";

const BoatFields = ({ form, handleChange }) => {
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";

  return (
    <div className="space-y-6 transition-all duration-500 ease-in-out border border-white/10 p-6 rounded-2xl bg-white/5">
      <h3 className="text-lg font-bold text-white">🚤 Boat / PWC Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="boat_year"
          value={form.boat_year || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Year"
        />
        <input
          name="boat_make"
          value={form.boat_make || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Make"
        />
        <input
          name="boat_model"
          value={form.boat_model || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Model"
        />
        <input
          name="boat_hullLength"
          value={form.boat_hullLength || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Hull Length (ft)"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="boat_hullMaterial"
          value={form.boat_hullMaterial || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Hull Material"
        />
        <input
          name="boat_numMotors"
          value={form.boat_numMotors || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Number of Motors"
        />
        <input
          name="boat_totalHP"
          value={form.boat_totalHP || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Total Horsepower"
        />
        <input
          name="boat_propulsion"
          value={form.boat_propulsion || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Propulsion Type"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <select
          name="boat_exposedEngine"
          value={form.boat_exposedEngine || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Exposed Engine?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <input
          name="boat_modifiedPerformance"
          value={form.boat_modifiedPerformance || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Modified for Performance?"
        />
        <input
          name="boat_maxSpeed"
          value={form.boat_maxSpeed || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Max Speed (mph)"
        />
        <input
          name="boat_value"
          value={form.boat_value || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Watercraft Market Value ($)"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="boat_purchaseYear"
          value={form.boat_purchaseYear || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Purchase Year"
        />
        <select
          name="boat_originalOwner"
          value={form.boat_originalOwner || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Original Owner?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input
          name="boat_zip"
          value={form.boat_zip || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Storage / Mooring ZIP"
        />
        <select
          name="boat_keptAtResidence"
          value={form.boat_keptAtResidence || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Kept at Residence?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input
          name="boat_residenceLocation"
          value={form.boat_residenceLocation || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Location at Residence"
        />
        <input
          name="boat_keptDuringSeason"
          value={form.boat_keptDuringSeason || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Kept During Boating Season"
        />
      </div>
    </div>
  );
};

export default BoatFields;
