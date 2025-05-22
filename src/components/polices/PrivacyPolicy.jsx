import React from "react";

const privacyPolicyData = [
  {
    title: "Effective Date",
    content: ["22 May 2025"],
  },
  {
    title: "INTRODUCTION",
    content: [
      "Thank you for using Interactive Invoice. Your privacy is important to us, and this Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.",
      "By using the Interactive Invoice app, you agree to the terms outlined in this Privacy Policy.",
    ],
  },
  {
    title: "1. Information We Collect",
    content: [
      "We collect the following types of information:",
      "a) Personal Information",
      [
        "Name, email address, and contact details when you register or contact support.",
        "Company name, address, and tax information when setting up your profile.",
      ],
      "b) Business Data",
      [
        "Invoice and estimate details (e.g., client name, billing items, amounts).",
        "Payment status and due dates.",
        "Optional notes and descriptions provided by you.",
      ],
      "c) Device Information",
      [
        "Device model, operating system, app version, and crash logs to improve app performance.",
        "IP address for security and analytics purposes.",
      ],
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information to:",
      [
        "Generate invoices and estimates.",
        "Store and sync your billing data securely.",
        "Send you service-related notifications.",
        "Improve app performance and user experience.",
        "Provide customer support.",
      ],
    ],
  },
  {
    title: "3. Data Sharing and Disclosure",
    content: [
      "We do not sell or rent your personal or business data.",
      "We may share your data with:",
      [
        "Cloud service providers (e.g., for secure data storage and backup).",
        "Law enforcement or regulatory bodies, when required by law.",
        "Third-party analytics tools (non-personal information only) for app improvement.",
      ],
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement appropriate technical and organizational measures to safeguard your information. All sensitive data is encrypted during transmission and securely stored.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "Your data is retained as long as your account is active or as needed to provide our services. You may request deletion of your account and data at any time by contacting us.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Depending on your location, you may have rights to:",
      [
        "Access or correct your information.",
        "Delete your data.",
        "Withdraw consent.",
        "Lodge a complaint with a regulatory authority.",
      ],
      "To exercise your rights, please contact us at [support@interactiveinvoice.com].",
    ],
  },
  {
    title: "7. Children's Privacy",
    content: [
      "Interactive Invoice is not intended for users under the age of 13. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of any material changes through the app or via email.",
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy, contact us at:",
      ["Email: support@myinteractiveinvoice.com"],
    ],
  },
];

const PrivacyPolicy = () => {
  const renderContent = (item, i) => {
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

    if (Array.isArray(item)) {
      return (
        <ul key={i} className="list-disc list-inside mb-1 ps-6 text-gray-700">
          {item.map((point, j) => (
            <li key={j} className="text-sm md:text-base">
              {typeof point === "string" && emailRegex.test(point) ? (
                <>
                  {point.split(emailRegex).map((part, k) =>
                    emailRegex.test(part) ? (
                      <a key={k} href={`mailto:${part}`} className="text-blue-600 duration-300 underline">
                        {part}
                      </a>
                    ) : (
                      part
                    )
                  )}
                </>
              ) : (
                point
              )}
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p key={i} className="mb-1 ps-3 text-sm md:text-base text-gray-700 whitespace-pre-line">
          {typeof item === "string" && emailRegex.test(item) ? (
            <>
              {item.split(emailRegex).map((part, k) =>
                emailRegex.test(part) ? (
                  <a key={k} href={`mailto:${part}`} className="text-blue-600 underline">
                    {part}
                  </a>
                ) : (
                  part
                )
              )}
            </>
          ) : (
            item
          )}
        </p>
      );
    }
  };


  return (
    <div className="max-w-[1140px] mx-auto px-4 xl:px-0 py-10 text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-orange">Privacy Policy for Interactive Invoice</h1>
      {privacyPolicyData.map((section, index) => (
        <div key={index} className="mb-8 ps-3">
          <h2 className="text-xl md:text-2xl font-bold mb-1">{section.title}</h2>
          {section.content.map((item, i) => renderContent(item, i))}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
