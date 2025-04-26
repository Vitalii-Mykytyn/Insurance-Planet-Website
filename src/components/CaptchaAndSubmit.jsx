import React, { useRef, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaAndSubmit = ({
  captchaChecked,
  setCaptchaChecked,
  resetTrigger,
  form,
}) => {
  const recaptchaRef = useRef(null);
  const [error, setError] = useState("");

  const handleCaptcha = (value) => {
    setCaptchaChecked(!!value);
  };

  useEffect(() => {
    if (resetTrigger && recaptchaRef.current) {
      recaptchaRef.current.reset();
      setCaptchaChecked(false);
    }
  }, [resetTrigger, setCaptchaChecked]);

  const handleSubmit = (e) => {
    if (
      !form?.ownerName?.trim() ||
      !form?.ownerPhone?.trim() ||
      !form?.ownerEmail?.trim()
    ) {
      e.preventDefault(); // Зупиняємо відправку форми
      window.scrollTo({ top: 0, behavior: "smooth" }); // Скролим вгору
      setError(
        "⚠️ Please fill in Full Name, Phone, and Email before submitting."
      );
    } else if (!captchaChecked) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setError("⚠️ Please complete the CAPTCHA before submitting.");
    } else {
      setError(""); // Все окей, помилок нема
    }
  };

  return (
    <div className="transition-all duration-500 ease-in-out">
      {error && (
        <div className="bg-red-500/80 text-white text-center py-3 rounded-xl mb-6 shadow-lg">
          {error}
        </div>
      )}

      <div className="mt-8">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LcgcCUrAAAAANCgaZZ9h47VQNT1WBKD83yBpkdI"
          onChange={handleCaptcha}
          className="scale-[0.9] md:scale-100 transition-transform duration-300 ease-in-out"
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 px-6 rounded-full text-base font-semibold tracking-wide transition-all duration-300 ease-in-out bg-gradient-to-r from-[#FF6B6B] to-[#FFB347] hover:scale-105 hover:shadow-lg"
        >
          Submit Application →
        </button>
      </div>
    </div>
  );
};

export default CaptchaAndSubmit;
