import React, { useRef, useState, useEffect } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Footer from "./Footer";

const Musical = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Images Array
  const images = [
   "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738291451/Naija%20StreetWear%20Editions/Cave%20or%20Rave/DLM_nnviab.png",
   "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738291453/Naija%20StreetWear%20Editions/Cave%20or%20Rave/drop_qxpneg.png",
   "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738291455/Naija%20StreetWear%20Editions/Cave%20or%20Rave/NTY_truj2g.png",
   "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738291454/Naija%20StreetWear%20Editions/Cave%20or%20Rave/FARATI_ygberg.png",
   "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738291456/Naija%20StreetWear%20Editions/Cave%20or%20Rave/OMOLAWYER_konvd5.png",
   "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738291458/Naija%20StreetWear%20Editions/Cave%20or%20Rave/P_F_X_KARLA_g2k1vp.png",
   "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738291461/Naija%20StreetWear%20Editions/Cave%20or%20Rave/PALMWINE_AND_FRIENDS_TICKETS_mcgmhr.png",
   "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738291459/Naija%20StreetWear%20Editions/Cave%20or%20Rave/PALMWINE_AND_FRIENDS_RR_THANKS_FOR_COMING_LAST_POST_kjni6x.png",
  ];

  // Scroll function
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -500 : 500;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Check scroll visibility
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 px-4  bg-[#C9C9C9]  font-outfit">
      {/* Heading */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold md:text-5xl text-blue-900 font-outfit">
        MUSICAL HEAVEN
        </h1>
      </div>

      <div className="mt-4">
        <p className="text-[#848282] text-center mb-10 font-bold font-outfit">
        Designs we worked on for Palmwine and Friends’ Rave Themed event.
        </p>
      </div>

      {/* Scrollable Image Gallery */}
      <div className="relative w-full max-w-6xl">
        {/* Left Scroll Button */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600/80 text-white p-4 rounded-full z-10 hover:bg-blue-700 transition-all text-2xl"
            aria-label="Scroll left"
          >
            <FaAngleDoubleLeft />
          </button>
        )}

        {/* Right Scroll Button */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600/80 text-white p-4 rounded-full z-10 hover:bg-blue-700 transition-all text-2xl"
            aria-label="Scroll right"
          >
            <FaAngleDoubleRight />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-4 py-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((src, index) => (
            <div key={index} className="flex-none w-[80vw] md:w-[50vw] lg:w-[30vw] snap-center">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-[400px] object-cover shadow-md "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Musical;
