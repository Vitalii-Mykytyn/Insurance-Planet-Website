import React from "react";

const COVERAGES = [
  "General Liability",
  "Property Insurance",
  "Business Interruption",
  "Professional Liability (E&O)",
  "Workers’ Compensation",
  "Cyber Liability",
  "Product Liability",
  "Directors & Officers (D&O)",
  "EPLI",
  "Commercial Crime",
];

const CoverageSelect = ({ form, handleCheckbox }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white">🛡 Coverage Selection</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {COVERAGES.map((coverage) => (
          <label key={coverage} className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              name="coverageTypes"
              value={coverage}
              checked={form.coverageTypes?.includes(coverage) || false}
              onChange={handleCheckbox}
              className="accent-[#FFB347]"
            />
            {coverage}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CoverageSelect;
