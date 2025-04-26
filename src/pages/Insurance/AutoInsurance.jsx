import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import InsuranceTypeForm from "../../components/AutoApplication/InsuranceTypeForm";
import PrimaryDriverFields from "../../components/AutoApplication/PrimaryDriverFields";
import AdditionalDriversList from "../../components/AutoApplication/AdditionalDriversList";
import ContactFields from "../../components/AutoApplication/ContactFields";
import VehicleList from "../../components/AutoApplication/VehicleList";
import InsuranceOptions from "../../components/AutoApplication/InsuranceOptions";
import TrailerFields from "../../components/AutoApplication/TrailerFields";
import BoatFields from "../../components/AutoApplication/BoatFields";
import CaptchaAndSubmit from "../../components/CaptchaAndSubmit";

const AutoInsurance = () => {
  const [insuranceType, setInsuranceType] = useState("");
  const [form, setForm] = useState({});
  const [drivers, setDrivers] = useState([{ fullName: "", dob: "" }]);
  const [vehicles, setVehicles] = useState([{ vin: "", ownership: "Owned" }]);
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

  const handleVehicleChange = (index, field, value) => {
    const updated = [...vehicles];
    updated[index][field] = value;
    setVehicles(updated);
  };

  const addDriver = () => {
    if (drivers.length < 8) {
      setDrivers([...drivers, { fullName: "", dob: "" }]);
    }
  };

  const removeDriver = (index) => {
    setDrivers((prev) => prev.filter((_, i) => i !== index));
  };

  const addVehicle = () => {
    if (vehicles.length < 6) {
      setVehicles([...vehicles, { vin: "", ownership: "Owned" }]);
    }
  };

  const removeVehicle = (index) => {
    setVehicles((prev) => prev.filter((_, i) => i !== index));
  };

  const resetFormState = () => {
    setForm({});
    setDrivers([{ fullName: "", dob: "" }]);
    setVehicles([{ vin: "", ownership: "Owned" }]);
    setCaptchaChecked(false);
    setInsuranceType("");
    setResetTrigger((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `\n🚗 New ${insuranceType} Insurance Request\n\n` +
      `Full Name: ${form.fullName || "N/A"}\nDOB: ${form.dob || "N/A"}\n` +
      `State: ${form.state || "N/A"}\nLicense Number: ${
        form.licenseNumber || "N/A"
      }\n` +
      `\nDrivers: ${drivers
        .map(
          (d, i) =>
            `\n${i + 1}) ${d.fullName || "N/A"}, DOB: ${
              d.dob || "N/A"
            }, State: ${d.state || ""}, License: ${
              d.licenseNumber || ""
            }, Drives: ${d.drives || ""}`
        )
        .join("")}\n` +
      `\n📍 Address: ${form.address || "N/A"}, ${
        form.residenceStatus || "N/A"
      }` +
      `\n📧 ${form.email || "N/A"}, 📞 ${form.phone || "N/A"}` +
      (insuranceType !== "Non-Owner"
        ? `\n\n🚘 Vehicles: ${vehicles
            .map((v, i) => `\n${i + 1}) VIN: ${v.vin || "N/A"}, ${v.ownership}`)
            .join("")}`
        : "") +
      `\n\n🛡️ Coverage Type: ${form.coverageType || "N/A"}` +
      `\nPrior Insurance: ${form.priorInsurance || "N/A"}` +
      `\n\nℹ️ Additional Info: ${form.additionalInfo || "None"}` +
      (insuranceType === "Trailer"
        ? `\n\n🏕️ Trailer Details:\n${Object.entries(form)
            .filter(([k]) => k.startsWith("trailer_"))
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n")}`
        : "") +
      (insuranceType === "Boat"
        ? `\n\n🚤 Boat Details:\n${Object.entries(form)
            .filter(([k]) => k.startsWith("boat_"))
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n")}`
        : "") +
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
          alert("Application submitted successfully!");
          resetFormState();
        },
        () => alert("Failed to send. Please try again.")
      );
  };

  return (
    <div className="min-h-screen pt-[120px] pb-24 px-4 text-white bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <section className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center tracking-tight">
          {insuranceType
            ? `🚘 ${insuranceType} Insurance Application`
            : "🛡️ Get Your Vehicle Quote"}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8"
        >
          <InsuranceTypeForm
            insuranceType={insuranceType}
            setInsuranceType={setInsuranceType}
            form={form}
            handleChange={handleChange}
          />
          <PrimaryDriverFields form={form} handleChange={handleChange} />
          <AdditionalDriversList
            drivers={drivers}
            addDriver={addDriver}
            handleDriverChange={handleDriverChange}
            removeDriver={removeDriver}
          />
          <ContactFields form={form} handleChange={handleChange} />
          {insuranceType !== "Non-Owner" && (
            <VehicleList
              vehicles={vehicles}
              addVehicle={addVehicle}
              handleVehicleChange={handleVehicleChange}
              removeVehicle={removeVehicle}
            />
          )}
          <InsuranceOptions form={form} handleChange={handleChange} />
          {insuranceType === "Trailer" && (
            <TrailerFields form={form} handleChange={handleChange} />
          )}
          {insuranceType === "Boat" && (
            <BoatFields form={form} handleChange={handleChange} />
          )}
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

export default AutoInsurance;
