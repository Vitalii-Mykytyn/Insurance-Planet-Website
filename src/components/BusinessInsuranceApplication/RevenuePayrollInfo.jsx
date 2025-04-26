import React from "react";

const RevenuePayrollInfo = ({ form, handleChange }) => {
  const inputClass =
    "w-full text-black rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347]";
  const labelClass = "block mb-1 text-sm font-semibold tracking-wide";

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white">💰 Revenue & Payroll</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Annual Revenue</label>
          <input
            name="revenue"
            value={form.revenue || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="$ Amount"
          />
        </div>
        <div>
          <label className={labelClass}>Occupied Area (sq. ft.)</label>
          <input
            name="occupiedArea"
            value={form.occupiedArea || ""}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. 1200"
          />
        </div>
      </div>

      <h4 className="font-semibold text-white/80">Payroll Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className={labelClass}>Current Year</label>
          <input
            name="payrollCurrent"
            value={form.payrollCurrent || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Prior Year</label>
          <input
            name="payrollPrior"
            value={form.payrollPrior || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Estimated</label>
          <input
            name="payrollEstimated"
            value={form.payrollEstimated || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Workers Comp Policy In Force?</label>
          <select
            name="hasWorkersComp"
            value={form.hasWorkersComp || ""}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {form.hasWorkersComp === "Yes" && (
          <div>
            <label className={labelClass}>Expiration Date</label>
            <input
              type="date"
              name="workersCompExpiration"
              value={form.workersCompExpiration || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        )}
      </div>

      <div>
        <label className={labelClass}>Owners Exempted?</label>
        <select
          name="ownersExempt"
          value={form.ownersExempt || ""}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select...</option>
          <option value="Yes">Yes, exempted</option>
          <option value="No">No, include in policy</option>
        </select>
      </div>
    </div>
  );
};

export default RevenuePayrollInfo;
