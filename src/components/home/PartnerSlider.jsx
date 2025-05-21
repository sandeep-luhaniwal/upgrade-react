import React from 'react';
import amazon_pay from '../../assets/images/webp/amazon-pay.webp';
import samsung from '../../assets/images/webp/samsung.webp';
import visa from '../../assets/images/webp/visa.webp';
import alipay from '../../assets/images/webp/alipay.webp';
import spherule from '../../assets/images/webp/spherule.webp';
import paypal from '../../assets/images/webp/paypal.webp';

const logos = [
  { src: spherule, alt: 'spherule', widthClass: 'w-[151px]' },
  { src: samsung, alt: 'samsung', widthClass: 'w-[116px]' },
  { src: visa, alt: 'visa', widthClass: 'w-[116px]' },
  { src: amazon_pay, alt: 'amazon_pay', widthClass: 'w-[124px]' },
  { src: paypal, alt: 'paypal', widthClass: 'w-[72px]' },
  { src: alipay, alt: 'alipay', widthClass: 'w-[100px]' },
  { src: spherule, alt: 'spherule', widthClass: 'w-[151px]' },
  { src: samsung, alt: 'samsung', widthClass: 'w-[116px]' },
  { src: visa, alt: 'visa', widthClass: 'w-[116px]' },
  { src: amazon_pay, alt: 'amazon_pay', widthClass: 'w-[124px]' },
  { src: paypal, alt: 'paypal', widthClass: 'w-[72px]' },
  { src: alipay, alt: 'alipay', widthClass: 'w-[100px]' },
];

const PartnerSlider = () => {
  return (
    <div className='bg-natural-green'>
      <div className='max-w-[1140px] mx-auto px-4 xl:px-0 py-5'>
        <div className='overflow-clip'>
          <div className='flex items-center w-full slide_container'>
            {logos.map((obj, i) => (
              <div key={i} className="min-w-[190px] flex justify-center w-full">
                <img src={obj.src} alt={obj.alt} className={obj.widthClass} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;
