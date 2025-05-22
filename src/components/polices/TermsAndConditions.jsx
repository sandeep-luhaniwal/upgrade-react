import React from "react";

const termsData = [
  {
    title: "Last Updated",
    content: ["22 May 2025"],
  },
  {
    title: "INTRODUCTION",
    content: [
      'Welcome to Interactive Invoice! These Terms and Conditions ("Terms") govern your use of our mobile application ("App") and the services provided by Interactive Invoice ("we", "us", or "our"). By downloading, accessing, or using the App, you agree to be bound by these Terms.',
      "Please read these Terms carefully before using the App.",
    ],
  },
  {
    title: "1. Eligibility",
    content: ["You must be at least 18 years old and capable of entering into a legally binding agreement to use this App."],
  },
  {
    title: "2. Services Provided",
    content: [
      "The App allows users to:",
      [
        "Create and manage invoices and estimates",
        "Customize invoice templates",
        "Export and share invoice documents",
        "Track payment status",
      ],
      "We reserve the right to add, modify, or remove features without notice.",
    ],
  },
  {
    title: "3. User Responsibilities",
    content: [
      "You agree to:",
      [
        "Provide accurate and complete information in your invoices/estimates",
        "Use the App only for lawful business or personal purposes",
        "Not use the App to create fraudulent or misleading documents",
      ],
    ],
  },
  {
    title: "4. Account and Data Security",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials and all activities under your account. We do not take responsibility for data loss due to user negligence or third-party access.",
    ],
  },
  {
    title: "5. Payment and Subscription",
    content: [
      "Some features may require a paid subscription. By subscribing, you authorize us to charge the applicable fees. All payments are non-refundable unless otherwise stated.",
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "All content and technology used in the App, including logos, graphics, and source code, are owned or licensed by us. You may not copy, modify, distribute, or reverse engineer any part of the App.",
    ],
  },
  {
    title: "7. Privacy",
    content: [
      'We are committed to protecting your privacy. Please refer to our [Privacy Policy] for details on how we collect, use, and store your information.',
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      'We provide the App "as is" without any warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of the App, including errors in invoices or financial losses.',
    ],
  },
  {
    title: "9. Termination",
    content: [
      "We may suspend or terminate your access to the App at our sole discretion if you violate these Terms or use the App in a manner that could cause harm to us or others.",
    ],
  },
  {
    title: "10. Modifications to Terms",
    content: [
      "We may update these Terms from time to time. Changes will be notified via the App or email. Continued use of the App after such updates constitutes acceptance of the new Terms.",
    ],
  },
  {
    title: "11. Governing Law",
    content: [
      "These Terms shall be governed by and interpreted in accordance with the laws of United States of America, without regard to conflict of laws principles.",
    ],
  },
  {
    title: "12. Contact Us",
    content: [
      "If you have any questions about these Terms, please contact us at:",
      ["Email: support@myinteractiveinvoice.com"],
    ],
  },
];

const TermsAndConditions = () => {
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
    <div className="max-w-[1140px] mx-auto px-4 xl:px-0 py-10 md:py-14 lg:py-20 text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-orange">Terms and Conditions</h1>
      {termsData.map((section, index) => (
        <div key={index} className="mb-8 ps-3">
          <h2 className="text-xl lg:text-2xl font-bold mb-1">{section.title}</h2>
          {section.content.map((item, i) => renderContent(item, i))}
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditions;
