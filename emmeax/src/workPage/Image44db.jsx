import React, { useState, useRef, useEffect } from 'react';
import Footer from './Footer';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Image44db = () => {
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
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295706/44DB3/WALE_OGUNS_kqo461.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295709/44DB3/WAVESTAR_wubdc9.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295709/44DB3/YIMEEKA_mf9k4e.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295710/44DB3/ULOKO_li9sa5.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295710/44DB3/ZAYLEVELTEN_s2esob.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295711/44DB3/ZAYYTHEDINO_jwtus6.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295702/44DB3/ULOKO_NEW_POSTER_44DB_VOL2_vnqw75.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295699/44DB3/TRAD_dis1op.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295697/44DB3/T32_usqesl.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295695/44DB3/T31_lx5su3.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295694/44DB3/T3_itjddn.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295692/44DB3/SOLIS4EVR_pww1tg.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295691/44DB3/SGAWD_lk0bko.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295688/44DB3/S_SMART_doouxx.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295687/44DB3/QUAPPI_LEE_b61v59.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295683/44DB3/PDSTRN_zf9abg.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295683/44DB3/PAM_PAM_kcs8im.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295591/44DB3/NU_fp83q0.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295588/44DB3/NINETY9_wcb420.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295587/44DB3/MOHALIZER_sksciz.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295584/44DB3/MNSTR_yolhs0.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295582/44DB3/MINZ_hcaxqm.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295580/44DB3/MAVO_abtjw1.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295579/44DB3/LOTI_aftk2k.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295577/44DB3/JEMIYO_zjewmu.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295576/44DB3/JAHEIL_zcw3at.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295574/44DB3/GIMBA_ju2s4w.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295572/44DB3/EBUN_YELE_hk71hu.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295568/44DB3/DAI_VERSE_u1pyro.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295570/44DB3/DUTCH_pjm8zl.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295567/44DB3/CHOCOBANTIS_cttv67.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295488/44DB3/AR4_ccw6tl.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295447/44DB3/44DB_VOL_2_thanks_for_coming_ph5jyl.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295447/44DB3/44DB_AND_FRIENDS_VOL2_y0qjql.png",
      ];

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
                        <div key={index} className="flex-none w-[80vw] md:w-[60vw] lg:w-[30vw] snap-center">
                            <img 
                                src={src} 
                                alt={`Gallery Image ${index + 1}`} 
                                className="w-full h-auto object-contain shadow-lg" 
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

export default Image44db;
