import React from "react";

const VehicleList = ({
  vehicles,
  addVehicle,
  handleVehicleChange,
  removeVehicle,
}) => {
  const labelClass = "block mb-1 text-sm font-medium";
  const inputClass =
    "w-full text-black rounded-lg px-4 py-2 placeholder-gray-400";

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white">🚚 Vehicle Information</h3>
      {vehicles.map((vehicle, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end border border-white/10 p-4 rounded-xl bg-white/5"
        >
          <div>
            <label className={labelClass}>VIN</label>
            <input
              type="text"
              value={vehicle.vin || ""}
              onChange={(e) =>
                handleVehicleChange(index, "vin", e.target.value)
              }
              className={inputClass}
              placeholder="e.g. 1HGCM82633A123456"
            />
          </div>

          <div>
            <label className={labelClass}>Loan / Lease</label>
            <select
              value={vehicle.hasLoan || "No"}
              onChange={(e) =>
                handleVehicleChange(index, "hasLoan", e.target.value)
              }
              className={inputClass}
            >
              <option value="No">No Loan</option>
              <option value="Yes">Loan / Lease</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Vehicle ACV (Estimated Value)</label>
            <input
              type="text"
              value={vehicle.value || ""}
              onChange={(e) =>
                handleVehicleChange(index, "value", e.target.value)
              }
              className={inputClass}
              placeholder="$ Value"
            />
          </div>

          <div className="md:col-span-3 text-right">
            <button
              type="button"
              onClick={() => removeVehicle(index)}
              className="text-xs text-red-400 hover:text-white"
            >
              ❌ Remove Vehicle
            </button>
          </div>
        </div>
      ))}

      {vehicles.length < 32 && (
        <div className="text-right">
          <button
            type="button"
            onClick={addVehicle}
            className="text-sm font-semibold text-[#FFB347] hover:text-white"
          >
            ➕ Add Vehicle
          </button>
        </div>
      )}
    </div>
  );
};

export default VehicleList;
