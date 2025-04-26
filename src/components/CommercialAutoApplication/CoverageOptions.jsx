import React from "react";

const CoverageOptions = ({ form, handleChange }) => {
  const inputClass =
    "w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const labelClass = "block mb-1 text-sm font-semibold tracking-wide";

  const coverageTypes = [
    "Liability",
    "Physical Damage",
    "Cargo",
    "NTL (Bobtail / Non-Trucking Liability)",
    "Trailer Interchange",
    "Rental Reimbursement",
    "Medical Payments",
    "Uninsured Motorist",
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white">🛡 Coverage & Operations</h3>

      <div>
        <label className={labelClass}>Select Coverage Types</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coverageTypes.map((type) => (
            <label key={type} className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="coverageTypes"
                value={type}
                checked={form.coverageTypes?.includes(type) || false}
                onChange={(e) => {
                  const selected = form.coverageTypes || [];
                  const next = e.target.checked
                    ? [...selected, type]
                    : selected.filter((t) => t !== type);
                  handleChange({
                    target: { name: "coverageTypes", value: next },
                  });
                }}
                className="accent-[#FF6B6B]"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <details className="bg-white/5 p-4 rounded-xl border border-yellow-400 text-yellow-100">
        <summary className="cursor-pointer font-semibold">
          📘 What is NTL / Bobtail Coverage?
        </summary>
        <p className="mt-2 text-sm">
          Coverage that protects truckers when driving without a trailer or
          cargo — for personal use outside commercial dispatch. Includes Bodily
          Injury, Property Damage, and Legal Defense. Required when operating
          under your own authority.
        </p>
      </details>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Type of Cargo</label>
          <input
            name="cargo"
            value={form.cargo || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. General Freight, Auto, Refrigerated Goods"
          />
        </div>
        <div>
          <label className={labelClass}>Radius of Operations (miles)</label>
          <input
            name="radius"
            value={form.radius || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. 250"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Years in Business</label>
          <input
            name="years"
            value={form.years || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. 3"
          />
        </div>
        <div>
          <label className={labelClass}>Prior Insurance Info</label>
          <input
            name="priorInsurance"
            value={form.priorInsurance || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. Progressive, StateFarm, None"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Desired Start Date</label>
        <input
          type="date"
          name="insuranceDate"
          value={form.insuranceDate || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
    </div>
  );
};

export default CoverageOptions;
