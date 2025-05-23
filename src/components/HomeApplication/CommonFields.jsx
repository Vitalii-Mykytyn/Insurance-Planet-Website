import React from "react";

const USAGE_TYPES = ["Primary", "Secondary", "Rental"];

const CommonFields = ({
  insuranceType,
  form,
  handleChange,
  handleCheckboxChange,
  isCoApplicant,
  isNewPurchase,
  usage,
}) => {
  const validatePhone = (value) => /^\+?[0-9\-\s]{7,15}$/.test(value);
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleValidatedChange = (e) => {
    const { name, value } = e.target;
    if (
      (name === "ownerPhone" && !validatePhone(value)) ||
      (name === "ownerEmail" && !validateEmail(value)) ||
      (name === "coApplicantPhone" && !validatePhone(value)) ||
      (name === "coApplicantEmail" && !validateEmail(value))
    ) {
      e.target.setCustomValidity("Invalid format!");
    } else {
      e.target.setCustomValidity("");
    }
    handleChange(e);
  };

  const inputClass = "input w-full text-black rounded-lg px-4 py-2";

  return (
    <div className="space-y-8 transition-all duration-500 ease-in-out">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-semibold tracking-wide">
            Owner's Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="ownerName"
            value={form.ownerName || ""}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold tracking-wide">
            Owner's Date of Birth
          </label>
          <input
            type="date"
            name="ownerDOB"
            value={form.ownerDOB || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-semibold tracking-wide">
            Owner's Phone <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            name="ownerPhone"
            value={form.ownerPhone || ""}
            onChange={handleValidatedChange}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold tracking-wide">
            Owner's Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="ownerEmail"
            value={form.ownerEmail || ""}
            onChange={handleValidatedChange}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold tracking-wide">
          Property Address
        </label>
        <input
          type="text"
          name="propertyAddress"
          value={form.propertyAddress || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="inline-flex items-center space-x-3">
          <input
            type="checkbox"
            name="newPurchase"
            checked={isNewPurchase}
            onChange={handleCheckboxChange}
            className="accent-[#FF6B6B] scale-125"
          />
          <span className="text-sm font-medium">
            Is this a new purchase / move-in?
          </span>
        </label>
      </div>

      {isNewPurchase && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="priorAddress"
            placeholder="Prior Address"
            value={form.priorAddress || ""}
            onChange={handleChange}
            className={inputClass}
          />
          {insuranceType !== "Renters" && (
            <input
              name="closingDate"
              type="date"
              value={form.closingDate || ""}
              onChange={handleChange}
              className={inputClass}
            />
          )}
        </div>
      )}

      {(insuranceType === "Home" ||
        insuranceType === "Flood" ||
        insuranceType === "Condo") && (
        <div>
          <span className="block mb-2 text-sm font-semibold">
            🏠 Usage of Home
          </span>
          <div className="flex flex-wrap gap-4">
            {USAGE_TYPES.map((type) => (
              <label key={type} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="usage"
                  value={type}
                  checked={usage.includes(type)}
                  onChange={handleCheckboxChange}
                  className="accent-[#FF6B6B]"
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      )}

      {(usage.includes("Secondary") || usage.includes("Rental")) && (
        <div>
          <label className="block mb-2 text-sm font-semibold tracking-wide">
            📬 Mailing Address
          </label>
          <input
            type="text"
            name="mailingAddress"
            value={form.mailingAddress || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      )}
    </div>
  );
};

export default CommonFields;
