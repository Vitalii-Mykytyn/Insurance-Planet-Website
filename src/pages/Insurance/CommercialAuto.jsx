import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import BusinessInfo from "../../components/CommercialAutoApplication/BusinessInfo";
import DriverList from "../../components/CommercialAutoApplication/DriverList";
import VehicleList from "../../components/CommercialAutoApplication/VehicleList";
import CoverageOptions from "../../components/CommercialAutoApplication/CoverageOptions";
import UploadNotice from "../../components/CommercialAutoApplication/UploadNotice";
import CaptchaAndSubmit from "../../components/CaptchaAndSubmit";

const CommercialAuto = () => {
  const [form, setForm] = useState({});
  const [drivers, setDrivers] = useState([
    { name: "", cdlNumber: "", licenseState: "", cdlDate: "" },
  ]);
  const [vehicles, setVehicles] = useState([
    { vin: "", hasLoan: "No", value: "" },
  ]);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDriverChange = (index, field, value) => {
    const updated = [...drivers];
    updated[index][field] = value;
    setDrivers(updated);
  };

  const addDriver = () => {
    if (drivers.length < 32)
      setDrivers([
        ...drivers,
        { name: "", cdlNumber: "", licenseState: "", cdlDate: "" },
      ]);
  };

  const removeDriver = (index) => {
    setDrivers((prev) => prev.filter((_, i) => i !== index));
  };

  const handleVehicleChange = (index, field, value) => {
    const updated = [...vehicles];
    updated[index][field] = value;
    setVehicles(updated);
  };

  const addVehicle = () => {
    if (vehicles.length < 32)
      setVehicles([...vehicles, { vin: "", hasLoan: "No", value: "" }]);
  };

  const removeVehicle = (index) => {
    setVehicles((prev) => prev.filter((_, i) => i !== index));
  };

  const resetFormState = () => {
    setForm({});
    setDrivers([{ name: "", cdlNumber: "", licenseState: "", cdlDate: "" }]);
    setVehicles([{ vin: "", hasLoan: "No", value: "" }]);
    setCaptchaChecked(false);
    setResetTrigger((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `\n🚛 Commercial Auto Insurance Request\n\n` +
      `🏢 Company: ${form.companyName || "N/A"}\n📍 Address: ${
        form.companyAddress || "N/A"
      }\n` +
      `🔢 EIN: ${form.ein || "N/A"}\n🚛 DOT/MC: ${form.dot || "N/A"}\n` +
      `🏭 Business Type: ${form.businessType || "N/A"}\n📞 ${
        form.phone || "N/A"
      }, 📧 ${form.email || "N/A"}\n` +
      `\n👥 Drivers:\n${drivers
        .map(
          (d, i) =>
            `  ${i + 1}) ${d.name}, CDL#: ${d.cdlNumber}, CDL: ${
              d.cdlDate
            }, State: ${d.licenseState}`
        )
        .join("\n")}\n` +
      `\n🚚 Vehicles:\n${vehicles
        .map(
          (v, i) =>
            `  ${i + 1}) VIN: ${v.vin}, Loan/Lease: ${v.hasLoan}, ACV: ${
              v.value
            }`
        )
        .join("\n")}\n` +
      `\n📋 Coverage: ${(form.coverageTypes || []).join(
        ", "
      )}\n📦 Cargo Type: ${form.cargo || "N/A"}\n📍 Radius: ${
        form.radius || "N/A"
      }\n📅 Yrs in Biz: ${form.years || "N/A"}\n` +
      `✅ Prior Insurance: ${
        form.priorInsurance || "N/A"
      }\n🗓️ Need Coverage Starting: ${form.insuranceDate || "N/A"}\n` +
      `\n📩 MVR + 3yr Loss Run required for non-Progressive (send to insuranceplanetfl@gmail.com)` +
      `\n\n— Sent via Insurance Planet Form`;

    emailjs
      .send(
        "service_3ic1imr",
        "template_yebh3gc",
        { message },
        "-k4OtJNBRST8FQzbd"
      )
      .then(
        () => {
          alert("Commercial insurance submitted!");
          resetFormState();
        },
        () => alert("Send failed. Try again.")
      );
  };

  return (
    <div className="min-h-screen pt-[120px] pb-24 px-4 text-white bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <section className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center tracking-tight">
          🚛 Commercial Auto Insurance Application
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8"
        >
          <BusinessInfo form={form} handleChange={handleChange} />
          <DriverList
            drivers={drivers}
            addDriver={addDriver}
            removeDriver={removeDriver}
            handleDriverChange={handleDriverChange}
          />
          <VehicleList
            vehicles={vehicles}
            addVehicle={addVehicle}
            removeVehicle={removeVehicle}
            handleVehicleChange={handleVehicleChange}
          />
          <CoverageOptions form={form} handleChange={handleChange} />
          <UploadNotice />
          <CaptchaAndSubmit
            captchaChecked={captchaChecked}
            setCaptchaChecked={setCaptchaChecked}
            resetTrigger={resetTrigger}
          />
        </form>
      </section>
    </div>
  );
};

export default CommercialAuto;
