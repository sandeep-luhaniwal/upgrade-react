import React, { useEffect, useState } from "react";
import top from "../../assets/images/svg/back-to-top.svg"; // Adjust the path as necessary
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={onTop}
      className={`fixed bottom-2.5 right-2.5 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-orange cursor-pointer hover:bg-green text-white  rounded-full shadow-lg`}
      aria-label="Back to top"
    >
      {/* Replace this with your actual icon or image */}
      <img src={top} alt="top" className="w-10" />
    </div>
  );
};

export default BackToTop;
