import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import InsuranceTypeForm from "../../components/HomeApplication/InsuranceTypeForm";
import CommonFields from "../../components/HomeApplication/CommonFields";
import TypeSpecificFields from "../../components/HomeApplication/TypeSpecificFields";
import CaptchaAndSubmit from "../../components/CaptchaAndSubmit";

const ENTITY_TYPES = ["Individual", "Inc", "LLC", "LLP"];

const HomeInsurance = () => {
  const [insuranceType, setInsuranceType] = useState("");
  const [entityType, setEntityType] = useState(ENTITY_TYPES[0]);
  const [form, setForm] = useState({});
  const [isCoApplicant, setIsCoApplicant] = useState(false);
  const [isNewPurchase, setIsNewPurchase] = useState(false);
  const [usage, setUsage] = useState([]);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
    if (name === "coApplicantToggle") setIsCoApplicant(checked);
    else if (name === "newPurchase") setIsNewPurchase(checked);
    else if (name === "usage") {
      setUsage((prev) =>
        checked ? [...prev, value] : prev.filter((u) => u !== value)
      );
    }
  };

  const handleFile = (e) => {
    const { name, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files[0] }));
  };

  const resetFormState = () => {
    setForm({});
    setUsage([]);
    setIsCoApplicant(false);
    setIsNewPurchase(false);
    setCaptchaChecked(false);
    setInsuranceType("");
    setEntityType(ENTITY_TYPES[0]);
    setResetTrigger((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
📄 New ${insuranceType || "N/A"} Insurance Application

Entity Type: ${entityType || "N/A"}
${
  ["Inc", "LLC", "LLP"].includes(entityType)
    ? `🏢 Entity Name: ${form.entityName || "N/A"}`
    : ""
}

👤 Owner: ${form.ownerName || "N/A"}
📅 DOB: ${form.ownerDOB || "N/A"}
📧 Email: ${form.ownerEmail || "N/A"}
📞 Phone: ${form.ownerPhone || "N/A"}
📍 Property Address: ${form.propertyAddress || "N/A"}

${
  isCoApplicant
    ? `
👥 Co-Applicant: ${form.coApplicantName || "N/A"}
📅 DOB: ${form.coApplicantDOB || "N/A"}
📧 Email: ${form.coApplicantEmail || "N/A"}
📞 Phone: ${form.coApplicantPhone || "N/A"}
`
    : ""
}

${
  isNewPurchase
    ? `
🆕 New Purchase
📍 Prior Address: ${form.priorAddress || "N/A"}
📅 Closing Date: ${form.closingDate || "N/A"}
`
    : ""
}

🏡 Usage: ${usage.length ? usage.join(", ") : "N/A"}
${
  usage.includes("Secondary") || usage.includes("Rental")
    ? `📬 Mailing Address: ${form.mailingAddress || "N/A"}`
    : ""
}

${
  insuranceType === "Home" || insuranceType === "Condo"
    ? `
📄 Mitigation Docs: ${form.mitigationDocs || "N/A"}
🔨 Roof Year: ${form.roofYear || "N/A"}
🛡️ Prior Policy: ${form.priorPolicy || "N/A"}
📃 Claims (5 yrs): ${form.claimsDetails || "N/A"}
${
  insuranceType === "Condo"
    ? `
🏢 HOA Policy: ${form.hoaPolicy || "N/A"}
🏙️ Unit Floor: ${form.unitFloor || "N/A"} / ${form.totalFloors || "N/A"}
🏠 Prior Condo Address: ${form.condoPriorAddress || "N/A"}
`
    : ""
}
`
    : ""
}

${
  insuranceType === "Renters"
    ? `
📜 Landlord Requirements: ${form.landlordRequirements || "N/A"}
📅 Start Date: ${form.startDate || "N/A"}
🏢 Floor: ${form.apartmentFloor || "N/A"} / ${form.totalFloors || "N/A"}
`
    : ""
}

${
  insuranceType === "Flood"
    ? `
🌊 Elevation Certificate: ${form.elevationCert || "N/A"}
`
    : ""
}

${
  insuranceType === "Builder's Risk"
    ? `
📬 Mailing Address: ${form.mailingAddress || "N/A"}
👷 Contractor Role: ${form.contractorRole || "N/A"}
🏗️ Contracting Company: ${form.contractCompany || "N/A"}
💰 Purchase Price: ${form.purchasePrice || "N/A"}
🔧 Renovation Investment: ${form.renovationInvestment || "N/A"}
🛠️ Work Types: ${form.workTypes || "N/A"}
📝 Additional Info: ${form.additionalInfo || "N/A"}
`
    : ""
}

— Sent via Insurance Planet Form
`;

    emailjs
      .send(
        "service_3ic1imr",
        "template_yebh3gc",
        { message },
        "-k4OtJNBRST8FQzbd"
      )
      .then(
        () => {
          alert("Application submitted and email sent successfully!");
          resetFormState();
        },
        () => {
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="relative min-h-screen pt-[120px] pb-24 px-4 text-white bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <section className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          {insuranceType
            ? `📄 ${insuranceType} Insurance Application`
            : "🛡️ Get Your Insurance Quote"}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8"
        >
          <InsuranceTypeForm
            insuranceType={insuranceType}
            setInsuranceType={setInsuranceType}
            entityType={entityType}
            setEntityType={setEntityType}
            handleChange={handleChange}
          />
          <CommonFields
            insuranceType={insuranceType}
            form={form}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            isCoApplicant={isCoApplicant}
            isNewPurchase={isNewPurchase}
            usage={usage}
          />
          {insuranceType && (
            <TypeSpecificFields
              insuranceType={insuranceType}
              form={form}
              isNewPurchase={isNewPurchase}
              handleChange={handleChange}
              handleFile={handleFile}
            />
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

export default HomeInsurance;
