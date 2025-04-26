import React from "react";

const LocationDetails = ({ form, handleChange }) => {
  const inputClass =
    "w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const labelClass = "block mb-1 text-sm font-semibold tracking-wide";

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white">📍 Business Location</h3>

      <div>
        <label className={labelClass}>Premises Address</label>
        <input
          name="premisesAddress"
          value={form.premisesAddress || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Business physical address"
        />
      </div>

      <div>
        <label className={labelClass}>Mailing Address (if different)</label>
        <input
          name="mailingAddress"
          value={form.mailingAddress || ""}
          onChange={handleChange}
          className={inputClass}
          placeholder="Optional mailing address"
        />
      </div>

      <h4 className="font-semibold text-white/80">⚙️ Security Details</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className={labelClass}>Fence on property?</label>
          <select
            name="hasFence"
            value={form.hasFence || ""}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Night Lighting</label>
          <select
            name="hasLighting"
            value={form.hasLighting || ""}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Cameras Installed</label>
          <select
            name="hasCameras"
            value={form.hasCameras || ""}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Do you have dogs?</label>
          <select
            name="hasDogs"
            value={form.hasDogs || ""}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Where are keys stored?</label>
          <input
            name="keyStorage"
            value={form.keyStorage || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. office safe, locked drawer"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
