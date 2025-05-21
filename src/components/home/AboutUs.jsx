import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import about_us from '../../assets/images/webp/about-us.webp';
import TagBox from '../common/TagBox';
import Heading from '../common/Heading';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Expenses Tracker',
    desc: 'Track your business expenses with ease. Gain valuable insights into your spending patterns, categorize expenses.',
  },
  {
    title: 'Invoice Management',
    desc: 'Generate invoices with just a few clicks and send them directly to clients.',
  },
  {
    title: 'Automated Payment Reminders',
    desc: 'No more manual follow-ups. Set up automated reminders for overdue payments.',
  }
];

const AboutUs = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;

      // Animate the vertical line height from 0% to 100% as you scroll
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      });

      // Update active index based on scroll progress relative to the line animation
      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1
          // Divide progress into sections by length of features
          let section = Math.floor(progress * features.length);
          if (section >= features.length) section = features.length - 1; // clamp max
          setActiveIndex(section);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
   <div className='max-w-[1140px] mx-auto px-4 w-full xl:px-0 py-14 md:py-16 lg:py-20 xl:pt-[100px] xl:pb-[120px]'>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] lg:grid-cols-2  items-center">
        <div className='flex justify-center md:pe-4'>
          <img src={about_us} alt="chart" className="max-w-[493px] w-full" />
        </div>
        <div className='md:ps-3 pt-10 md:pt-0'>
          <TagBox border>about us</TagBox>
          <Heading className={"py-4"} left>All your money needs in one app</Heading>
          <div className="relative pl-6 lg:pl-[31px]" ref={containerRef}>
            <div className="absolute left-0 top-0 h-full w-2 lg:w-[11px] bg-[#d9d9d9] rounded-full">
              <div
                ref={lineRef}
                className="w-full bg-[#04684C] rounded-full h-0 origin-top"
              ></div>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-[20px] lg:p-5 px-3 py-3 lg:py-6 border  ${index === activeIndex ? 'bg-[#FFF2E6] border-[#FFF2E6] text-black' : 'bg-white text-[#6B6969] border-[#E5E5E5]'
                    }`}
                >
                  <h3 className="lg:text-xl leading-150 text-base md:text-lg font-bold text-black">{feature.title}</h3>
                  <p className=" text-sm lg:text-base leading-150">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
