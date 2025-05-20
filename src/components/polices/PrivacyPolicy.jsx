import React from 'react';

const privacyPolicyData = [
  {
    title: 'INTRODUCTION',
    content: `Mahna Astrology Private Limited, operating as VedGuru, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website, book astrology services, or purchase products. By engaging with our platform, you consent to this policy, which complies with applicable laws, including India’s Information Technology Act, 2000, and Digital Personal Data Protection (DPDP) Act, 2023.`
  },
  {
    title: '1. INFORMATION WE COLLECT',
    points: [
      'Personal Information: Includes name, email, phone number, address, date of birth, payment details, and astrological data (e.g., birth chart details) provided during account creation, purchases, or consultations.',
      'Usage Data: Includes IP address, browser type, pages visited, time spent on the site, and device information collected via cookies and analytics tools.',
      'Submissions: Feedback, reviews, or other content you submit to us.',
      'Consultation Data: Information shared during astrology sessions, which may be recorded for quality assurance.'
    ]
  },
  {
    title: '2. HOW WE USE YOUR INFORMATION',
    points: [
      'Service Delivery: To process orders, schedule consultations, and provide personalized astrology services.',
      'Communication: To send transactional emails (e.g., order confirmations), respond to inquiries, and, with your consent, share promotional offers.',
      'Improvement: To analyze usage patterns and enhance our website, products, and services.',
      'Legal Compliance: To meet regulatory requirements or protect our rights.'
    ]
  },
  {
    title: '3. COOKIES AND TRACKING',
    points: [
      'Cookies: We use cookies to improve your browsing experience, track preferences, and analyze traffic. By using our site, you consent to cookies.',
      'Opt-Out: You can disable cookies via browser settings, but this may affect site functionality.'
    ]
  },
  {
    title: '4. SHARING YOUR INFORMATION',
    points: [
      'We share data with:',
      'Independent astrologers for consultation purposes.',
      'Payment processors (e.g., banks, gateways) for transactions.',
      'Shipping partners for product delivery.',
      'Analytics providers (e.g., Google Analytics) for site performance.',
      'Legal Disclosure: We may share data if required by law, to enforce our Terms, or to protect our rights, safety, or property.',
      'No Sale: We do not sell your personal information to third parties.'
    ]
  },
  {
    title: '5. DATA STORAGE AND SECURITY',
    points: [
      'Location: Data is stored on secure servers in India. If you are outside India, your data may be transferred to and processed here.',
      'Security: We use encryption (e.g., SSL for payments) and reasonable safeguards, but no system is fully secure—we are not liable for breaches beyond our control.',
      'Retention: We retain data as long as needed for service delivery, legal obligations, or business purposes, after which it is securely deleted.'
    ]
  },
  {
    title: '6. YOUR RIGHTS',
    points: [
      'Access and Correction: You may request access to or correction of your personal data by emailing support@vedguru.com.',
      'Deletion: You may request data deletion, subject to legal retention requirements.',
      'Opt-Out: Unsubscribe from marketing emails via the link in our communications.'
    ]
  },
  {
    title: '7. THIRD-PARTY LINKS AND TOOLS',
    content: `Our site may include third-party links or tools (e.g., zodiac calculators). We are not responsible for their privacy practices—review their policies before use.`
  },
  {
    title: '8. CHANGES TO THIS POLICY',
    content: `We may update this policy by posting changes here. Continued use after updates implies consent. Check periodically for the latest version.`
  },
  {
    title: '9. CONTACT',
    content: `For privacy inquiries, reach us at support@gmail.com.`
  }
];

const PrivacyPolicy = () => {
  return (
    <div className="max-w-[1140px] xl:px-0 mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-green">Privacy Policy</h1>
      {privacyPolicyData.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>

          {section.content && (
            <p className="text-base leading-relaxed">{section.content}</p>
          )}

          {section.points && (
            <ul className="list-disc pl-10 space-y-2 text-base">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
