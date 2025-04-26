// 📦 src/pages/ContactUs.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CaptchaAndSubmit from "../../components/CaptchaAndSubmit";

const ContactUs = () => {
  const formRef = useRef();
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const message =
      `📨 New Contact Message\n\n` +
      `Name: ${formData.get("fullName")}\n` +
      `Email: ${formData.get("email")}\n` +
      `Phone: ${formData.get("phone")}\n` +
      `Message: ${formData.get("message")}`;

    emailjs
      .send(
        "service_3ic1imr",
        "template_yebh3gc",
        { message },
        "-k4OtJNBRST8FQzbd"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        formRef.current.reset();
        setCaptchaChecked(false);
        setResetTrigger((prev) => !prev);
      })
      .catch(() => alert("❌ Failed to send. Please try again."));
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#141E30] to-[#243B55] pt-32 pb-24 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#FFB347] mb-4">
            📨 Send Us a Message
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Have questions or need personalized assistance? Our department
            specialists are here to help.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl"
        >
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-white/80 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white/80 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-white/80 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
              placeholder="(555) 123-4567"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white/80 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <CaptchaAndSubmit
            captchaChecked={captchaChecked}
            setCaptchaChecked={setCaptchaChecked}
            resetTrigger={resetTrigger}
          />
        </form>

        <div className="grid md:grid-cols-3 gap-8 text-white/90">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:shadow-xl transition-all shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">👋</div>
              <h2 className="text-xl font-bold text-[#FFB347]">Welcome</h2>
            </div>
            <p>
              Thank you for visiting Insurance Planet! Our commitment and care
              for our clients is what makes us stand out across Jacksonville and
              surrounding areas.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:shadow-xl transition-all shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">🌍</div>
              <h2 className="text-xl font-bold text-[#FFB347]">Languages</h2>
            </div>
            <p>
              We speak English, Russian, and Ukrainian — feel free to connect in
              the language you're most comfortable with!
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:shadow-xl transition-all shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">📍</div>
              <h2 className="text-xl font-bold text-[#FFB347]">Visit Us</h2>
            </div>
            <p className="mb-2">
              7999 Philips Hwy #209
              <br />
              Jacksonville, FL 32256
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>
              <br />
              <a
                href="tel:9049907797"
                className="text-[#FFB347] hover:underline"
              >
                904-990-7797
              </a>{" "}
              or
              <a
                href="tel:9044505055"
                className="text-[#FFB347] hover:underline ml-2"
              >
                904-450-5055
              </a>
            </p>
            <p>
              We typically respond within 24–48 hours. Call or submit a message
              anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
