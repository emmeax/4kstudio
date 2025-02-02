import React, { useState, useRef, useEffect } from 'react';
import Footer from './Footer';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";


const Image440B = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const scrollContainerRef = useRef(null);
  

  const images = [
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293281/44DB2/ULOKO_gn0ap7.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293279/44DB2/ZAMIR_jh2a68.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293279/44DB2/ZAYY_cqutvp.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293253/44DB2/SOLDOUT_SHOW_g07kbr.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293251/44DB2/SGAWD_kgerhf.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293250/44DB2/SHUFFLE_zhtonw.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293115/44DB2/LOTI_w80vca.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293112/44DB2/LOTI_1_ul44s1.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293111/44DB2/KARLITO_oan3d5.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293248/44DB2/PALMWINE_wkpod9.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293245/44DB2/OKWI_mvkxou.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293243/44DB2/NTY_oheqxw.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293276/44DB2/TEME_ozgbck.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293274/44DB2/TAVES_cz0wxs.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293253/44DB2/OSIKOYA_SPEAKS_xgpte4.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293110/44DB2/BLNDE_mz8kfa.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293109/44DB2/FRAYZ_e5cffw.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293106/44DB2/20_SOMETHING_STORIES_irm63q.png",
    "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738293106/44DB2/44db_and_friends_v2_iubgrw.png",
  ];

 
  const checkScroll = (container) => {
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll(container);
      container.addEventListener('scroll', () => checkScroll(container));
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', () => checkScroll(container));
      }
    };
  }, []);

  const scroll = (direction, containerRef) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#C9C9C9]  font-outfit">
      <div className="text-center mt-10 px-4">
        <h1 className="text-4xl font-bold md:text-5xl text-blue-900 font-outfit">
          44DB AND FRIENDS (VOL. 1)
        </h1>
      </div>

      <div className="mt-8 px-4 text-center">
        <p className="text-[#848282] mb-10 font-bold font-outfit">
          Designs we worked on for International Producer <br />Collective, 44DB for their first '44DB AND FRIENDS' event.
        </p>
      </div>

      <div className="relative w-full">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left', scrollContainerRef)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600/80 text-white p-4 rounded-full z-10 hover:bg-blue-700 transition-all"
            aria-label="Scroll left"
          >
            <FaAngleDoubleLeft />
          </button>
        )}
        
        {showRightArrow && (
          <button
            onClick={() => scroll('right', scrollContainerRef)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600/80 text-white p-4 rounded-full z-10 hover:bg-blue-700 transition-all"
            aria-label="Scroll right"
          >
             <FaAngleDoubleRight />
          </button>
        )}

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-4 py-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((src, index) => (
            <div key={index} className="flex-none w-[80vw] md:w-[60vw] lg:w-[30vw] snap-center">
              <img 
                src={src} 
                alt="" 
                className="w-full h-auto object-contain shadow-lg " 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Image440B;