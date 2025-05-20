import React from "react";

const termsData = [
  {
    title: "INTRODUCTION",
    content: `This website is operated by Mahna Astrology Private Limited. abc is a brand operated by Mahna Astrology Private Limited, offering astrology services and products. The terms “we,” “us,” “our,” and “abc” refer to Mahna Astrology Private Limited throughout this site...`,
  },
  {
    title: "1. ELIGIBILITY AND USAGE RULES",
    content: `By accepting these Terms, you confirm that you are of legal age of 18+ years. By using our services, you confirm that you meet these age requirements...`,
  },
  {
    title: "2. GENERAL PROVISIONS",
    content: `We may deny service to any individual at any time for any reason. Your data (excluding payment details) may be transmitted unencrypted...`,
  },
  {
    title: "3. INFORMATION RELIABILITY",
    content: `Information on this site, including astrological insights and product details, may not always be precise...`,
  },
  {
    title: "4. SERVICE AND PRICE ADJUSTMENTS",
    content: `Prices for products and astrology services may change without prior notice. We reserve the right to modify...`,
  },
  {
    title: "5. PRODUCTS AND ASTROLOGY OFFERINGS",
    content: `Some products and services, such as personalized astrology readings or exclusive gemstones, may only be available online...`,
  },
  {
    title: "6. BILLING AND ACCOUNT DETAILS",
    content: `We may decline or adjust any order or service request at our discretion...`,
  },
  {
    title: "7. THIRD-PARTY TOOLS",
    content: `We may offer access to third-party tools (e.g., zodiac calculators) without oversight or endorsement...`,
  },
  {
    title: "8. EXTERNAL LINKS",
    content: `Our site may feature content or links to third-party websites. We do not control or verify these external resources...`,
  },
  {
    title: "9. USER INPUT AND SUBMISSIONS",
    content: `If you submit feedback, reviews, or ideas (collectively “submissions”), whether requested or unsolicited...`,
  },
  {
    title: "10. PRIVACY",
    content: `We are committed to protecting your personal information. Our practices comply with applicable data protection laws...`,
  },
  {
    title: "11. ERRORS AND CORRECTIONS",
    content: `Our site may occasionally contain errors in pricing, product details, or availability...`,
  },
  {
    title: "12. RESTRICTED ACTIONS",
    content: `You may not use our site: (a) for illegal activities; (b) to encourage unlawful behavior...`,
  },
  {
    title: "13. WARRANTY DISCLAIMER AND LIABILITY LIMITS",
    content: `We do not assure uninterrupted, secure, or error-free service...`,
  },
  {
    title: "14. INDEMNITY",
    content: `You agree to protect abc, its affiliates, astrologers, and staff from claims...`,
  },
  {
    title: "15. SEVERABILITY",
    content: `If any part of these Terms is invalid, the remaining provisions remain enforceable...`,
  },
  {
    title: "16. TERMINATION",
    content: `We reserve the right to suspend or terminate your account if you violate these Terms...`,
  },
  {
    title: "17. SHIPPING AND DELIVERY",
    content: `We aim to ship products within [X] business days of order confirmation...`,
  },
  {
    title: "18. INTELLECTUAL PROPERTY",
    content: `All content on this website, including text, images, logos, and astrological charts, is the property...`,
  },
  {
    title: "19. COMPLETE AGREEMENT",
    content: `These Terms, with linked policies, form the full agreement between us...`,
  },
  {
    title: "20. APPLICABLE LAW",
    content: `These Terms are governed by the laws of India.`,
  },
  {
    title: "21. ARBITRATION",
    content: `Any disputes arising out of or related to these Terms will be resolved through binding arbitration...`,
  },
  {
    title: "22. TERM UPDATES",
    content: `We may revise these Terms by updating this page...`,
  },
  {
    title: "23. ASTROLOGY SERVICE TERMS",
    content: `Purpose: Astrology services are for spiritual and personal reflection, not professional advice...`,
  },
  {
    title: "24. CONTACT",
    content: `Reach us at support@abc.com`,
  },
];

const TermsAndConditions = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-4 xl:px-0 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-green">Terms & Conditions</h1>
      {termsData.map((section, index) => (
        <div key={index} className="space-y-1">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-gray-700 whitespace-pre-line pb-6">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditions;
