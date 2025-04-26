import React from "react";

const AdditionalDriversList = ({
  drivers,
  addDriver,
  handleDriverChange,
  removeDriver,
}) => {
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";

  return (
    <div className="space-y-6 transition-all duration-500 ease-in-out">
      <div className="bg-white/10 p-4 rounded-xl border border-yellow-500 text-sm text-yellow-200">
        <strong>⚠️ Note:</strong> All individuals 15 years or older residing
        with you must be listed on your policy.
      </div>

      {drivers.map((driver, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-white/10 p-4 rounded-xl bg-white/5"
        >
          <div>
            <label className={labelClass}>Driver {index + 2} Full Name</label>
            <input
              type="text"
              value={driver.fullName}
              onChange={(e) =>
                handleDriverChange(index, "fullName", e.target.value)
              }
              className={inputClass}
              placeholder="Enter full name"
            />
          </div>
          <div>
            <label className={labelClass}>
              Driver {index + 2} Date of Birth
            </label>
            <input
              type="date"
              value={driver.dob}
              onChange={(e) => handleDriverChange(index, "dob", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>State of Driver's License</label>
            <input
              type="text"
              value={driver.state || ""}
              onChange={(e) =>
                handleDriverChange(index, "state", e.target.value)
              }
              className={inputClass}
              placeholder="e.g., FL"
            />
          </div>
          <div>
            <label className={labelClass}>License Number</label>
            <input
              type="text"
              value={driver.licenseNumber || ""}
              onChange={(e) =>
                handleDriverChange(index, "licenseNumber", e.target.value)
              }
              className={inputClass}
              placeholder="License #"
            />
          </div>
          <div>
            <label className={labelClass}>Drives Vehicle?</label>
            <div className="flex gap-6">
              {["Yes", "No"].map((val) => (
                <label key={val} className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name={`drives_${index}`}
                    value={val}
                    checked={driver.drives === val}
                    onChange={(e) =>
                      handleDriverChange(index, "drives", e.target.value)
                    }
                    className="accent-[#FF6B6B]"
                  />
                  {val}
                </label>
              ))}
            </div>
          </div>
          <div className="text-right md:col-span-2">
            <button
              type="button"
              onClick={() => removeDriver(index)}
              className="text-xs font-medium text-red-400 hover:text-white transition"
            >
              ❌ Remove Driver {index + 2}
            </button>
          </div>
        </div>
      ))}

      {drivers.length < 8 && (
        <div className="text-right">
          <button
            type="button"
            onClick={addDriver}
            className="text-sm font-semibold text-[#FFB347] hover:text-white transition"
          >
            ➕ Add Another Driver
          </button>
        </div>
      )}
    </div>
  );
};

export default AdditionalDriversList;
