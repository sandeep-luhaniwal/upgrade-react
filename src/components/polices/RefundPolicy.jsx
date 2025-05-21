import React from 'react';

const refundPolicyData = [
  {
    title: 'INTRODUCTION',
    content: `This Refund Policy governs purchases and services provided by Mahna Astrology Private Limited, operating under the brand VedGuru. By booking astrology services or purchasing products such as gems, jewelry (artificial and real), holy water, essential oils, perfumes, yantras, god idols, astrological charts, books, clothing, merchandise, and general Ayurvedic, religious, and astrology products through our website, you agree to this policy, which is incorporated into our Terms & Conditions. We operate a strict non-refunded policy unless explicitly stated below.`
  },
  {
    title: '1. NON-REFUNDABLE PURCHASES',
    points: [
      'General Rule: All sales of products and services are final and non-refundable, except as outlined in this policy.',
      'No refunds will be issued for change of mind, dissatisfaction with product quality, or subjective disagreement with astrology consultation outcomes.'
    ]
  },
  {
    title: '2. REFUNDS FOR NON-DELIVERY',
    points: [
      'Eligibility: Refunds are only available if VedGuru or our vendors fail to deliver a purchased product or scheduled astrology service.',
      'Products: If a product cannot be shipped (e.g., due to stock unavailability or vendor failure), you will be notified, and a full refund will be issued at our discretion.',
      'Services: If an astrology consultation is not provided due to our error (e.g., astrologer unavailability), you may request a refund, subject to our approval.',
      'Request Process: Submit refund requests within 7 days of the expected delivery date or service time to support@vedguru.com. Include proof of purchase and details of non-delivery.',
      'Processing: Approved refunds will be processed within 10 business days to your original payment method, though delays may occur due to bank policies, for which we are not liable.'
    ]
  },
  {
    title: '3. DAMAGED PRODUCTS AND REPLACEMENTS',
    points: [
      'Condition: If a product arrives damaged, we will provide a replacement only if the damage occurred during transit, as determined by our satisfaction.'
    ],
    subPoints: [
      'Notify us within 7 days of delivery at support@vedguru.com with photos of the damage and packaging.',
      'Upon inspection and confirmation of transit damage, a replacement will be shipped within 5 business days, subject to availability. Original product delivered needs to be returned to get the replacement.',
      'Non-Eligible Damage: Damage due to mishandling after delivery or normal wear and tear does not qualify for replacement.',
      'Refund for Non-Replacement: If we cannot provide a replacement (e.g., item out of stock), a refund may be issued at VedGuru’s sole discretion, processed within 10 business days of return receipt.'
    ]
  },
  {
    title: '4. EXCLUSIONS',
    points: [
      'Non-Refundable Fees: Shipping costs, taxes, and additional fees (e.g., customs duties) are non-refundable under all circumstances.',
      'Personalized/Perishable Items: Custom products (e.g., astrological charts) and perishable items are non-returnable and non-refundable.',
      'Force Majeure: No refunds or replacements will be provided for delays or non-delivery due to events beyond our control (e.g., natural disasters, strikes).'
    ]
  },
  {
    title: '5. DISCRETIONARY AUTHORITY',
    points: [
      'Sole Discretion: VedGuru reserves the right to approve or deny refunds and replacements based on the circumstances, even within the conditions outlined above.',
      'We may offer credits or alternatives instead of refunds at our discretion.'
    ]
  },
  {
    title: '6. CONTACT',
    content: 'For refund or replacement inquiries, email abc@gmail.com. This policy may be updated—check this page for the latest version.'
  }
];

const RefundPolicy = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-4 xl:px-0 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-orange">Refund Policy</h1>
      {refundPolicyData.map((section, idx) => (
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

          {section.subPoints && (
            <ul className="list-decimal pl-10 mt-3 space-y-1 text-base text-gray-700">
              {section.subPoints.map((sub, i) => (
                <li key={i}>{sub}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default RefundPolicy;
