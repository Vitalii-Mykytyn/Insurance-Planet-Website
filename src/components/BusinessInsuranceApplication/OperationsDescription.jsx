import React from "react";

const OperationsDescription = ({ form, handleChange }) => {
  const inputClass =
    "w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const labelClass = "block mb-1 text-sm font-semibold tracking-wide";
  const textareaClass =
    "w-full text-black rounded-lg px-4 py-3 min-h-[140px] placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#FFB347] bg-white";

  const hideDetailsFor = ["Handyman / Maintenance", "Consulting / Coaching"];
  const hideLocationSection = [
    "Handyman / Maintenance",
    "Consulting / Coaching",
    "Cleaning Services",
    "IT & Tech",
    "Event Services",
    "E-commerce / Online Stores",
  ];
  const isSimpleCategory = hideDetailsFor.includes(form.businessCategory);
  const hideLocation = hideLocationSection.includes(form.businessCategory);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white">🏭 Business Operations</h3>

      <div>
        <label className={labelClass}>Business Category</label>
        <select
          name="businessCategory"
          value={form.businessCategory || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select Category...</option>
          <option>Handyman / Maintenance</option>
          <option>Broker Services</option>
          <option>Dealership / Auto Services</option>
          <option>Restaurants / Cafes</option>
          <option>Retail Stores</option>
          <option>Construction / Contracting</option>
          <option>IT & Tech</option>
          <option>Health & Wellness</option>
          <option>Logistics / Transportation</option>
          <option>Cleaning Services</option>
          <option>Consulting / Coaching</option>
          <option>Childcare / Education</option>
          <option>Manufacturing / Production</option>
          <option>Event Services</option>
          <option>E-commerce / Online Stores</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Description of Operations</label>
        <textarea
          name="operationsDescription"
          value={form.operationsDescription || ""}
          onChange={handleChange}
          className={textareaClass}
          placeholder="Briefly describe what your business does, its services, clientele, and operating setup."
        />
      </div>

      {!isSimpleCategory && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className={labelClass}>Total Employees</label>
              <input
                name="employeeCount"
                value={form.employeeCount || ""}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. 12"
              />
            </div>
            <div>
              <label className={labelClass}>Full-Time</label>
              <input
                name="fullTimeEmployees"
                value={form.fullTimeEmployees || ""}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. 8"
              />
            </div>
            <div>
              <label className={labelClass}>Part-Time</label>
              <input
                name="partTimeEmployees"
                value={form.partTimeEmployees || ""}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. 4"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Position Titles</label>
            <input
              name="positions"
              value={form.positions || ""}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. manager, cook, driver..."
            />
          </div>
        </>
      )}

      <div>
        <label className={labelClass}>
          Experience in this industry (years)
        </label>
        <input
          name="experienceYears"
          value={form.experienceYears || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="e.g. 10"
        />
      </div>

      <input
        type="hidden"
        name="hideLocation"
        value={hideLocation ? "true" : "false"}
      />
    </div>
  );
};

export default OperationsDescription;
