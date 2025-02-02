import React, { useRef, useState, useEffect } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Footer from "./Footer";

const Ottawa = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Images Array
  const images = [
   "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262839/44DB/TICKETS_pvc3v6.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262841/44DB/YOSA_tleoe2.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262839/44DB/SMALLZTHEDJ_roesmd.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262839/44DB/tickets_sold_out_krcyrf.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262838/44DB/SMEEZ_AND_DEAN_zd9olx.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262837/44DB/dj_kiss_heyo9f.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262194/44DB/SETLIST_vexczq.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262184/44DB/RANE_dh9br1.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262180/44DB/PALMWINE_f4bi1q.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262140/44DB/everything-you-need-to-know_03_s5zfvy.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262144/44DB/everything-you-need-to-know_04_pieeov.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262148/44DB/everything-you-need-to-know_05_neqptf.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262133/44DB/eitd-skate-jam-newspaper_wexnjh.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262137/44DB/everything-you-need-to-know_01_ek1wqg.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262137/44DB/everything-you-need-to-know_02_rdo0zd.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262127/44DB/COUNTDOWN_2_DAYS_sxqda2.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262127/44DB/COUNTDOWN_1_DAY_i2hryj.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262127/44DB/CALIXX_hkphml.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262130/44DB/COUNTDOWN_LIVE_TODAY_poswxv.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262096/44DB/BALA_vt8whm.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262096/44DB/AK_SMUTH_mhfgnp.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262096/44DB/ACTIVITIES_tfsl16.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262098/44DB/CRAYVELLI_orqvpa.png",
         "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262100/44DB/DROP_vjclwj.png",
         "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262129/44DB/EVEN_IN_THE_PARK_WITH_BG_tlzlxk.png",
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
        CONQUERING OTTAWA

        </h1>
      </div>

      <div className="mt-4">
        <p className="text-[#848282] text-center mb-10 font-bold font-outfit">
        Designs we worked on for ‘Conquering Ottawa’, Party franchise in 
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

export default Ottawa;
