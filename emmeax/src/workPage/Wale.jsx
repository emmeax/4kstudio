import React, { useState, useRef, useEffect } from 'react';
import Footer from './Footer';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Wale = () => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollContainerRef = useRef(null);

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
            const handleScroll = () => checkScroll(container);
            container.addEventListener('scroll', handleScroll);

            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -500 : 500;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const gallery2Images = [
        // "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338425/Wale_ogun/farky_and_dabz_pol_finall_mktdkk.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338424/Wale_ogun/OUT_29TH_kr9dej.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338424/Wale_ogun/6_DAYS_TO_GO_mjguj2.jpg",
        // "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338422/Wale_ogun/OUT_NOW_uoes65.jpg",
        // "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338421/Wale_ogun/FARKY-AND-DABZ-NEWS-_-TRACKLIST_02_k5slvc.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338419/Wale_ogun/9_DAYS_TO_GO_bfkjpb.jpg",
        // "https://res.cloudinary.com/ddjnrebkn/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1738338419/Wale_ogun/FARKY-AND-DABZ-NEWS-_-TRACKLIST_01_l5q3rp.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338417/Wale_ogun/5_DAYS_TO_GO_iq3wa2.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338417/Wale_ogun/10_DAYS_TO_GO_hlx7oe.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338416/Wale_ogun/farky_and_dabz_OUT_4TH_dxsjql.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338415/Wale_ogun/8_DAYS_TO_GO_ezzfam.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338414/Wale_ogun/7_DAYS_TO_GO_fd6toq.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338411/Wale_ogun/4_DAYS_TO_GO_etxewg.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338414/Wale_ogun/3_DAYS_TO_GO_npzl8l.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338413/Wale_ogun/2_DAYS_TO_GO_bgoihl.jpg",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738338411/Wale_ogun/1_DAY_TO_GO_nyuojt.jpg",
        
      ];

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#C9C9C9]  font-outfit">
            <div className="text-center mt-10 px-4">
                <h1 className="text-4xl font-bold md:text-5xl text-blue-900 font-outfit">
                ON MY PRIDE


                </h1>
            </div>

            <div className="mt-8 px-4 text-center">
                <p className="text-[#848282] mb-10 font-bold font-outfit">
                Design we worked on for Farky Farkunle’s single,<br /> ‘On My Pride’ featuring Shayo Davids and Ehvi OG
                </p>
            </div>

            <div className="relative w-full">
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

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-hide gap-4 px-4 py-8 snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {gallery2Images.map((src, index) => (
                        <div key={index} className=" flex-none w-[80vw] md:w-[60vw] lg:w-[30vw] snap-center">
                            <img 
                                src={src} 
                                alt={`Gallery Image ${index + 1}`} 
                                className="w-full h-auto object-contain shadow-lg  h-[300px]" 
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

export default Wale;
