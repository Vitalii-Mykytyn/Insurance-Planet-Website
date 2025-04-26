import React from "react";

const VehicleList = ({
  vehicles,
  addVehicle,
  handleVehicleChange,
  removeVehicle,
}) => {
  const labelClass = "block mb-2 text-sm font-semibold tracking-wide";
  const inputClass =
    "input w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";

  return (
    <div className="space-y-6 transition-all duration-500 ease-in-out">
      <h3 className="text-lg font-bold text-white">🚘 Vehicle Information</h3>

      {vehicles.map((vehicle, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-white/10 p-4 rounded-xl bg-white/5"
        >
          <div>
            <label className={labelClass}>Vehicle {index + 1} VIN</label>
            <input
              type="text"
              value={vehicle.vin}
              onChange={(e) =>
                handleVehicleChange(index, "vin", e.target.value)
              }
              className={inputClass}
              placeholder="e.g., 1HGCM82633A123456"
            />
          </div>

          <div>
            <label className={labelClass}>Ownership</label>
            <select
              value={vehicle.ownership}
              onChange={(e) =>
                handleVehicleChange(index, "ownership", e.target.value)
              }
              className={inputClass}
            >
              <option value="Owned">Owned</option>
              <option value="Financed">Financed</option>
              <option value="Leased">Leased</option>
            </select>
          </div>

          <div className="md:col-span-2 text-right">
            <button
              type="button"
              onClick={() => removeVehicle(index)}
              className="text-xs font-medium text-red-400 hover:text-white transition"
            >
              ❌ Remove Vehicle {index + 1}
            </button>
          </div>
        </div>
      ))}

      {vehicles.length < 6 && (
        <div className="text-right">
          <button
            type="button"
            onClick={addVehicle}
            className="text-sm font-semibold text-[#FFB347] hover:text-white transition"
          >
            ➕ Add Another Vehicle
          </button>
        </div>
      )}
    </div>
  );
};

export default VehicleList;
