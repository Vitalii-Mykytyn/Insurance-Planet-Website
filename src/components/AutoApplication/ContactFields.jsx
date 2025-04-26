import React from "react";

const ContactFields = ({ form, handleChange }) => {
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";

  return (
    <div className="space-y-6 transition-all duration-500 ease-in-out">
      <h3 className="text-lg font-bold text-white">📞 Contact Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g., 904-123-4567"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Address</label>
        <input
          type="text"
          name="address"
          value={form.address || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="123 Main Street, City, State"
        />
      </div>

      <div>
        <label className={labelClass}>Do you Own or Rent?</label>
        <select
          name="residenceStatus"
          value={form.residenceStatus || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select...</option>
          <option value="Own">Own</option>
          <option value="Rent">Rent</option>
        </select>
      </div>
    </div>
  );
};

export default ContactFields;
