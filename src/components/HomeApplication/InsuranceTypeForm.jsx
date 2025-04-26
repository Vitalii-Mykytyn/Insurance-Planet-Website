import React from "react";

const INSURANCE_TYPES = [
  "Home",
  "Condo",
  "Renters",
  "Flood",
  "Builder's Risk",
  "Personal Liability",
];
const ENTITY_TYPES = ["Individual", "Inc", "LLC", "LLP"];

const InsuranceTypeForm = ({
  insuranceType,
  setInsuranceType,
  entityType,
  setEntityType,
  handleChange,
}) => {
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const inputClass =
    "input w-full text-black bg-white placeholder-gray-400 rounded-lg px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#FFB347]";

  return (
    <div className="space-y-6 transition-all duration-500 ease-in-out">
      <div>
        <label className={labelClass}>Insurance Type</label>
        <select
          value={insuranceType}
          onChange={(e) => setInsuranceType(e.target.value)}
          className={inputClass}
        >
          <option value="">Select Insurance Type...</option>
          {INSURANCE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Entity Type</label>
        <select
          value={entityType}
          onChange={(e) => setEntityType(e.target.value)}
          className={inputClass}
        >
          {ENTITY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {["Inc", "LLC", "LLP"].includes(entityType) && (
        <div>
          <label className={labelClass}>🏢 Entity Name</label>
          <input
            type="text"
            name="entityName"
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter your registered entity name"
          />
        </div>
      )}
    </div>
  );
};

export default InsuranceTypeForm;
