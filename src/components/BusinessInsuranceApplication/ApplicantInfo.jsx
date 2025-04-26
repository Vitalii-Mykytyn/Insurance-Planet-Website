import React from "react";

const ApplicantInfo = ({ form, handleChange }) => {
  const inputClass =
    "w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const labelClass = "block mb-1 text-sm font-semibold tracking-wide";

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white">👤 Applicant Information</h3>

      <div>
        <label className={labelClass}>First and Last Name</label>
        <input
          name="fullName"
          value={form.fullName || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="John Doe"
        />
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
          />
        </div>
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicantInfo;
