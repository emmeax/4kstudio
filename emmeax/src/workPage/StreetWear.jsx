import React, { useRef } from "react";
import Footer from "./Footer";

// Importing Images
import GIVEAWAY1 from "../assets/StreetWear/GIVEAWAY1.jpg";
import GIVEAWAY2 from "../assets/StreetWear/GIVEAWAY2.jpg";
import UTHMAN_S from "../assets/StreetWear/UTHMAN_S.jpg";
import LIVE_TODAY from "../assets/StreetWear/LIVE_TODAY.jpg";
import Pf_X_NINE from "../assets/StreetWear/PF_X_NINE.jpg";
import PF_X_4KCTRL from "../assets/StreetWear/PF_X_4KCTRL.jpg";
import PF_NSE_BILLBOARD from "../assets/StreetWear/PF_NSE_BILLBOARD.png"; 
import MERCH_ANNOUNCEMENT from "../assets/StreetWear/MERCH_ANNOUNCEMENT.jpg";
import style_guide_BOYZ from "../assets/StreetWear/style_guide_men.jpg";
import style_guide_WOMEN from "../assets/StreetWear/style_guide_women.jpg";
import SUPPORTED_BY_BRANDS from '../assets/StreetWear/SUPPORTED_BY_BRANDS.jpg';
import THANKS_FOR_COMING from '../assets/StreetWear/THANKS_FOR_COMING.jpg';

const StreetWear = () => {
  const scrollContainerRef = useRef(null);

  // Scroll function for horizontal movement
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -500 : 500;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Image Array
  const images = [
    GIVEAWAY1, GIVEAWAY2, UTHMAN_S, LIVE_TODAY, Pf_X_NINE, PF_X_4KCTRL, 
    PF_NSE_BILLBOARD, MERCH_ANNOUNCEMENT, style_guide_BOYZ, style_guide_WOMEN, 
    SUPPORTED_BY_BRANDS, THANKS_FOR_COMING
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 px-4  font-outfit bg-[#C9C9C9]">
      {/* Heading Section */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold md:text-5xl text-blue-900 font-outfit">
          PALMWINE & FRIENDS <br /> (NAIJA STREETWEAR EDITION)
        </h1>
      </div>

      <div className="mt-4">
        <p className="text-[#848282] text-center mb-10 font-bold font-outfit">
          Designs we worked on for Palmwine and Friends’ Streetwear Themed event.
        </p>
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-between w-full max-w-6xl px-4 mb-6">
        <button
          onClick={() => scroll("left")}
          className="absolute right-4 top-1 transform -translate-y-1/2 bg-blue-600/80 text-white p-4 rounded-full z-10 hover:bg-blue-700 transition-all"
          aria-label="Scroll left"
        >
          ⬅️
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-blue-600/80 text-white p-4 rounded-full hover:bg-blue-700 transition-all"
          aria-label="Scroll right"
        >
          ➡️
        </button>
      </div>

      {/* Horizontal Scrollable Image Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 px-4 py-8 snap-x snap-mandatory whitespace-nowrap"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="w-[80vw] md:w-[60vw] lg:w-[30vw] h-[400px] object-cover shadow-md rounded-lg snap-center flex-none"
          />
        ))}
      </div>

      {/* Footer */}
      <div className="w-full mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default StreetWear;
