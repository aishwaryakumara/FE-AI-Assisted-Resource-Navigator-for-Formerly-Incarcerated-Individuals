import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 m-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-4">
          Last Updated: <strong>[Dec 8, 2024]</strong>
        </p>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By accessing or using the LegalAI platform, you agree to be bound by these Terms of Service, our Privacy Policy, and any additional terms that apply to specific services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            2. Description of Services
          </h2>
          <p className="text-gray-600">
            LegalAI provides general legal information and resources. We do not provide legal advice. For specific legal concerns, please consult a qualified attorney.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            3. User Responsibilities
          </h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>You must be 18 years or older to use this service.</li>
            <li>Do not misuse the platform or attempt unauthorized access.</li>
            <li>You are responsible for the accuracy of the information you provide.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions, please contact us at{" "}
            <a href="mailto:support@legalai.com" className="text-blue-500 underline">
              support@legalai.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
