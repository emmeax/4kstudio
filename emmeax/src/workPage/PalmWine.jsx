import { useState, useRef, useEffect } from "react";
import Footer from "./Footer";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const PalmWine = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Cloudinary Image Paths (with correct format)
  const imagePaths = [
    "v1738324122/PalmWine/YUNG_ODI_afppv2.png",
    "v1738324124/PalmWine/ZADDY_TC_dozfsx.png",
    "v1738324219/PalmWine/bat_new_edlwwc.png",
    "v1738324101/PalmWine/quotable_2_co1b7s.png",
    "v1738324102/PalmWine/PNF_ABUJA_WITH_TEXTURE_FIRST_POST_f4tumj.png",
    "v1738324103/PalmWine/SLIMZYACE_objkr4.png",
    "v1738324096/PalmWine/PIIZII_bdsczk.png",
    "v1738324094/PalmWine/PNF_ABUJA_SETLIST_FINAL_mrk3oa.png",
    "v1738324091/PalmWine/bolaryn_fdavyc.png",
    "v1738324092/PalmWine/pnf_vertical_abuja_muhrek.png",
    "v1738324090/PalmWine/PALMWINE_eya3hy.png",
    "v1738324088/PalmWine/makama_wjuspl.png",
    "v1738324075/PalmWine/3N4WRLD_ko7l1b.png",
    "v1738324079/PalmWine/BEGHO_ot0pop.png",
    "v1738324073/PalmWine/bat_cave_bvn5hi.png",
  ];

  // Cloudinary Base URL
  const cloudinaryBaseURL = "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/";

  // Scroll function
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -500 : 500;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Function to check if scroll buttons should be visible
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
    <div className="flex flex-col items-center min-h-screen px-4 bg-[#C9C9C9] font-outfit">
      {/* Heading */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold md:text-5xl text-blue-900 ">
          PALMWINE & FRIENDS <br /> (CAVE RAVE) GALLERY
        </h1>
      </div>

      <div className="mt-4">
        <p className="text-[#848282] text-center mb-10 font-bold font-outfit">
          Designs we worked on for Palmwine and Friends’ Bat Cave Themed event in Abuja.
        </p>
      </div>

      {/* Horizontal Scrollable Gallery */}
      <div className="relative w-full">
        {/* Left Scroll Button */}
        {showLeftArrow && (
                            <button
                                onClick={() => scroll('left')}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600/80 text-white p-4 rounded-full z-10 hover:bg-blue-700 transition-all"
                                aria-label="Scroll left"
                            >
                                <FaAngleDoubleLeft />
                            </button>
                        )}
        
                        {showRightArrow && (
                            <button
                                onClick={() => scroll('right')}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600/80 text-white p-4 rounded-full z-10 hover:bg-blue-700 transition-all"
                                aria-label="Scroll right"
                            >
                                <FaAngleDoubleRight />
                            </button>
                        )}
        
        
      
        {/* Scrollable Image Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-4 py-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {imagePaths.map((path, index) => (
            <div key={index} className="flex-none w-[80vw] md:w-[60vw] lg:w-[30vw] snap-center">
              <img
                src={`${cloudinaryBaseURL}${path}`}
                alt={`Palmwine Image ${index + 1}`}
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

export default PalmWine;
