import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 m-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          Last Updated: <strong>[Insert Date]</strong>
        </p>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
          <p className="text-gray-600">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Personal Information: Name, email address, and contact details.</li>
            <li>Usage Data: Information about your interactions with the platform.</li>
            <li>Device Information: Browser type, IP address, and operating system.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>To provide and improve our services.</li>
            <li>To respond to queries and feedback.</li>
            <li>To personalize your experience on the platform.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">3. Your Rights</h2>
          <p className="text-gray-600">
            Depending on your location, you may have the right to access, correct, or delete your personal data. You may also withdraw consent for data collection at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions, please contact us at{" "}
            <a href="mailto:privacy@legalai.com" className="text-blue-500 underline">
              privacy@legalai.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
