import React from "react";

const CompanyInfo = ({ form, handleChange }) => {
  const inputClass =
    "w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const labelClass = "block mb-1 text-sm font-semibold tracking-wide";

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white">🏢 Company Information</h3>

      <div>
        <label className={labelClass}>Company Name</label>
        <input
          name="companyName"
          value={form.companyName || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="e.g. ABC Services Inc."
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
          <label className={labelClass}>Years in Business</label>
          <input
            name="yearsInBusiness"
            value={form.yearsInBusiness || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. 5"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Company Website (optional)</label>
        <input
          name="website"
          value={form.website || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="https://..."
        />
      </div>

      <div>
        <label className={labelClass}>Dealer License (if applicable)</label>
        <input
          name="dealerLicense"
          value={form.dealerLicense || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="DL-123456 (optional)"
        />
      </div>
    </div>
  );
};

export default CompanyInfo;
