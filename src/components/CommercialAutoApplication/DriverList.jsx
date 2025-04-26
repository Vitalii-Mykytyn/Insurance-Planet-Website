import React from "react";

const CDLFieldSet = ({ driver, index, handleDriverChange, removeDriver }) => {
  const inputClass = "text-black px-4 py-2 rounded-lg w-full";
  const labelClass = "block mb-1 text-sm font-medium";

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end border border-white/20 rounded-xl p-4 bg-white/5">
      <div>
        <label className={labelClass}>Driver Name</label>
        <input
          type="text"
          value={driver.name}
          onChange={(e) => handleDriverChange(index, "name", e.target.value)}
          className={inputClass}
          placeholder="Full Name"
        />
      </div>
      <div>
        <label className={labelClass}>CDL Number</label>
        <input
          type="text"
          value={driver.cdlNumber || ""}
          onChange={(e) =>
            handleDriverChange(index, "cdlNumber", e.target.value)
          }
          className={inputClass}
          placeholder="#"
        />
      </div>
      <div>
        <label className={labelClass}>CDL State</label>
        <input
          type="text"
          value={driver.licenseState}
          onChange={(e) =>
            handleDriverChange(index, "licenseState", e.target.value)
          }
          className={inputClass}
          placeholder="e.g. FL"
        />
      </div>
      <div>
        <label className={labelClass}>CDL Issue Date</label>
        <input
          type="date"
          value={driver.cdlDate}
          onChange={(e) => handleDriverChange(index, "cdlDate", e.target.value)}
          className={inputClass}
        />
      </div>
      <div className="md:col-span-4 text-right">
        <button
          type="button"
          onClick={() => removeDriver(index)}
          className="text-xs text-red-400 hover:text-white"
        >
          ❌ Remove Driver
        </button>
      </div>
    </div>
  );
};

const DriverList = ({
  drivers,
  addDriver,
  handleDriverChange,
  removeDriver,
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white">🧑‍✈️ Drivers Information</h3>
      {drivers.map((driver, index) => (
        <CDLFieldSet
          key={index}
          index={index}
          driver={driver}
          handleDriverChange={handleDriverChange}
          removeDriver={removeDriver}
        />
      ))}
      {drivers.length < 32 && (
        <div className="text-right">
          <button
            type="button"
            onClick={addDriver}
            className="text-sm font-semibold text-[#FFB347] hover:text-white"
          >
            ➕ Add Driver
          </button>
        </div>
      )}
    </div>
  );
};

export default DriverList;
