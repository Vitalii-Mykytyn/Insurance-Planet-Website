import React from "react";

const BUSINESS_TYPES = [
  "Air Conditioner",
  "Handyman",
  "Delivery",
  "Limousine",
  "Mover",
  "Car Hauler",
  "Pickup Truck (2 vehicles)",
  "Pickup Truck (more than 2 vehicles)",
  "Semi Truck (auto)",
  "Box Truck",
  "Cargo Van",
  "Semi Truck",
  "Semi Truck (40k lbs)",
  "Tow Truck",
];

const BusinessInfo = ({ form, handleChange }) => {
  const inputClass =
    "w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const labelClass = "block mb-1 text-sm font-semibold tracking-wide";

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white">🏢 Business Information</h3>

      <div>
        <label className={labelClass}>Company Name</label>
        <input
          name="companyName"
          value={form.companyName || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="e.g., ABC Hauling LLC"
          required
        />
      </div>

      <div>
        <label className={labelClass}>Company Address</label>
        <input
          name="companyAddress"
          value={form.companyAddress || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="123 Main St, City, State ZIP"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>EIN Number</label>
          <input
            name="ein"
            value={form.ein || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="XX-XXXXXXX"
          />
        </div>
        <div>
          <label className={labelClass}>DOT / MC Numbers</label>
          <input
            name="dot"
            value={form.dot || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="DOT # / MC #"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Business Type</label>
        <select
          name="businessType"
          value={form.businessType || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select Business Type...</option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            name="phone"
            value={form.phone || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="(555) 555-5555"
            required
          />
        </div>
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="company@email.com"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
