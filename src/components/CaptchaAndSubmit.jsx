// CaptchaAndSubmit.jsx
import React, { useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaAndSubmit = ({
  captchaChecked,
  setCaptchaChecked,
  resetTrigger,
}) => {
  const recaptchaRef = useRef(null);

  const handleCaptcha = (value) => {
    setCaptchaChecked(!!value);
  };

  useEffect(() => {
    if (resetTrigger && recaptchaRef.current) {
      recaptchaRef.current.reset();
      setCaptchaChecked(false);
    }
  }, [resetTrigger, setCaptchaChecked]);

  return (
    <div className="transition-all duration-500 ease-in-out">
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
          disabled={!captchaChecked}
          className={`w-full py-3 px-6 rounded-full text-base font-semibold tracking-wide transition-all duration-300 ease-in-out ${
            captchaChecked
              ? "bg-gradient-to-r from-[#FF6B6B] to-[#FFB347] hover:scale-105 hover:shadow-lg"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Submit Application →
        </button>
      </div>
    </div>
  );
};

export default CaptchaAndSubmit;
