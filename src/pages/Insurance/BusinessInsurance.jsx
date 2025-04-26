import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import ApplicantInfo from "../../components/BusinessInsuranceApplication/ApplicantInfo";
import CompanyInfo from "../../components/BusinessInsuranceApplication/CompanyInfo";
import OperationsDescription from "../../components/BusinessInsuranceApplication/OperationsDescription";
import RevenuePayrollInfo from "../../components/BusinessInsuranceApplication/RevenuePayrollInfo";
import LocationDetails from "../../components/BusinessInsuranceApplication/LocationDetails";
import CoverageSelect from "../../components/BusinessInsuranceApplication/CoverageSelect";
import CaptchaAndSubmit from "../../components/CaptchaAndSubmit";

const BusinessInsurance = () => {
  const [form, setForm] = useState({ coverageTypes: [] });
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      const updated = checked
        ? [...prev.coverageTypes, value]
        : prev.coverageTypes.filter((c) => c !== value);
      return { ...prev, coverageTypes: updated };
    });
  };

  const resetFormState = () => {
    setForm({ coverageTypes: [] });
    setCaptchaChecked(false);
    setResetTrigger((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `\n🧾 Business Insurance Application\n\n` +
      `👤 Name: ${form.fullName || "N/A"}\n📞 ${form.phone || ""}, ✉️ ${
        form.email || ""
      }\n` +
      `🏢 Company: ${form.companyName || "N/A"}\n🔢 EIN: ${
        form.ein || "N/A"
      }\n🌐 Website: ${form.website || "-"}\n📅 Yrs in Business: ${
        form.yearsInBusiness || "N/A"
      }\n` +
      `📍 Premises: ${form.premisesAddress || "-"}, Mailing: ${
        form.mailingAddress || "-"
      }\n` +
      `🏭 Type: ${form.businessCategory || "-"}\n🧾 Description: ${
        form.operationsDescription || "-"
      }\n👥 Employees: ${form.employeeCount || "N/A"} (FT: ${
        form.fullTimeEmployees || "-"
      }, PT: ${form.partTimeEmployees || "-"})\n` +
      `📌 Positions: ${form.positions || "-"}, Exp: ${
        form.experienceYears || "-"
      } yrs\n💰 Revenue: ${form.revenue || "-"}, Area: ${
        form.occupiedArea || "-"
      } sqft\n` +
      `📋 Payroll: Curr: ${form.payrollCurrent || "-"}, Prior: ${
        form.payrollPrior || "-"
      }, Est: ${form.payrollEstimated || "-"}\n` +
      `🛡 Workers Comp: ${form.hasWorkersComp || "N/A"} ${
        form.hasWorkersComp === "Yes"
          ? `(expires ${form.workersCompExpiration || "N/A"})`
          : ""
      }\n🧾 Owners Exempt: ${form.ownersExempt || "N/A"}\n` +
      `🚧 Security: Fence: ${form.hasFence || "-"}, Light: ${
        form.hasLighting || "-"
      }, Cameras: ${form.hasCameras || "-"}, Dogs: ${
        form.hasDogs || "-"
      }, Keys: ${form.keyStorage || "-"}\n` +
      `✅ Selected Coverage: ${(form.coverageTypes || []).join(", ")}\n` +
      `\n— Sent via Insurance Planet Form`;

    emailjs
      .send(
        "service_3ic1imr",
        "template_yebh3gc",
        { message },
        "-k4OtJNBRST8FQzbd"
      )
      .then(
        () => {
          alert("Business insurance request submitted successfully!");
          resetFormState();
        },
        () => alert("Failed to send email. Please try again.")
      );
  };

  return (
    <div className="min-h-screen pt-[120px] pb-24 px-4 text-white bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <section className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center tracking-tight">
          🏢 Business Insurance Application
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8"
        >
          <ApplicantInfo form={form} handleChange={handleChange} />
          <CompanyInfo form={form} handleChange={handleChange} />
          <OperationsDescription form={form} handleChange={handleChange} />
          <RevenuePayrollInfo form={form} handleChange={handleChange} />
          <LocationDetails form={form} handleChange={handleChange} />
          <CoverageSelect form={form} handleCheckbox={handleCheckbox} />
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

export default BusinessInsurance;
