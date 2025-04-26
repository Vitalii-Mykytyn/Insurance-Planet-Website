import React from "react";

const INSURANCE_TYPES = ["Auto", "Motorcycle", "Boat", "Non-Owner", "Trailer"];

const InsuranceTypeForm = ({
  insuranceType,
  setInsuranceType,
  form,
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
          <option value="">Select Vehicle Type...</option>
          {INSURANCE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter your full legal name"
        />
      </div>

      <div>
        <label className={labelClass}>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={form.dob || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>State of Driver's License</label>
          <input
            type="text"
            name="state"
            value={form.state || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g., FL"
          />
        </div>

        <div>
          <label className={labelClass}>License Number</label>
          <input
            type="text"
            name="licenseNumber"
            value={form.licenseNumber || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>
    </div>
  );
};

export default InsuranceTypeForm;
