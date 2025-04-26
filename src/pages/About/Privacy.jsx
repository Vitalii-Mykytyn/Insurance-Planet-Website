// 📦 src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className=" min-h-screen bg-gradient-to-b from-[#141E30] to-[#243B55] text-white py-44 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-[#FFB347] mb-6">
          Privacy Policy
        </h1>
        <p className="text-white/70 italic">Last Updated: 04/17/2025</p>

        <p>
          Insurance Planet LLC ("Insurance Planet," "we," "our," or "us") is
          committed to protecting your privacy and ensuring the security of your
          personal information. This Privacy Policy outlines our practices
          regarding the collection, use, sharing, and protection of information
          obtained through our website, products, and services.
        </p>

        <h2 className="text-2xl font-semibold text-[#FFB347]">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>
            <strong>Personal Information:</strong> Name, address, phone number,
            email, date of birth, driver’s license number, Social Security
            number, and payment details.
          </li>
          <li>
            <strong>Insurance Information:</strong> Details relevant to
            insurance coverage, claims history, vehicle and property
            information.
          </li>
          <li>
            <strong>Usage Data:</strong> IP address, browser type, pages
            visited, and interactions with our website.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#FFB347]">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>Provide, manage, and enhance insurance services.</li>
          <li>Process transactions and manage payments.</li>
          <li>
            Communicate with you about your policies, claims, and services.
          </li>
          <li>Comply with legal obligations and regulatory requirements.</li>
          <li>Improve our website functionality and user experience.</li>
          <li>Offer relevant products, services, and information.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#FFB347]">
          Sharing Your Information
        </h2>
        <p className="text-white/80">
          We may share your personal information with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>
            Insurance carriers, underwriters, and agents to facilitate policy
            underwriting, claims processing, and customer service.
          </li>
          <li>
            Service providers for payment processing, website hosting,
            analytics, and marketing.
          </li>
          <li>
            Regulatory and law enforcement authorities when required by law.
          </li>
          <li>Third parties with your explicit consent.</li>
        </ul>
        <p className="text-white/80">
          We do not sell your personal information.
        </p>

        <h2 className="text-2xl font-semibold text-[#FFB347]">
          Protecting Your Information
        </h2>
        <p className="text-white/80">
          Insurance Planet implements appropriate security measures to protect
          your personal information against unauthorized access, disclosure,
          alteration, or destruction. Access to your personal data is restricted
          to authorized personnel only.
        </p>

        <h2 className="text-2xl font-semibold text-[#FFB347]">
          Your Rights and Choices
        </h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>Access your personal information we hold.</li>
          <li>Request corrections or updates to your personal data.</li>
          <li>Opt-out of marketing communications.</li>
          <li>
            Request the deletion of your personal data, subject to legal and
            regulatory requirements.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#FFB347]">
          Cookies and Tracking Technologies
        </h2>
        <p className="text-white/80">
          We use cookies and similar technologies to improve your browsing
          experience, analyze website traffic, and deliver targeted
          advertisements. You may disable cookies in your browser settings;
          however, this may limit certain functionalities of our website.
        </p>

        <h2 className="text-2xl font-semibold text-[#FFB347]">
          Third-Party Links
        </h2>
        <p className="text-white/80">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those sites.
          Please review their privacy policies before providing personal
          information.
        </p>

        <h2 className="text-2xl font-semibold text-[#FFB347]">
          Children’s Privacy
        </h2>
        <p className="text-white/80">
          Our services are not intended for children under the age of 13. We do
          not knowingly collect personal information from individuals under 13
          years old.
        </p>

        <h2 className="text-2xl font-semibold text-[#FFB347]">
          Changes to This Privacy Policy
        </h2>
        <p className="text-white/80">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. We encourage
          you to review this policy regularly.
        </p>

        <h2 className="text-2xl font-semibold text-[#FFB347]">Contact Us</h2>
        <p className="text-white/80">
          For questions or concerns regarding this Privacy Policy or our privacy
          practices, please contact us at:
        </p>
        <p className="text-white/70 whitespace-pre-line">
          Insurance Planet LLC 7999 Philips Hwy #209 Jacksonville, FL 32256
          Email: support@insuranceplanet.com Phone: (904) 990-7797
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
