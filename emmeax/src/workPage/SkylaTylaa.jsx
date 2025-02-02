// import React, { useRef } from "react";
import Footer from "./Footer";

const SkylaTylaa = () => {
    // const lastImageRef = useRef(null);

    // // Scroll function
    // const scrollToBottom = () => {
    //     if (lastImageRef.current) {
    //         lastImageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    //     }
    // };

    const images=[
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738268034/SKYLAA/even_with_skyla_tylaa_ABUJA_with_qr_pqehbw.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738268030/SKYLAA/even_with_skyla_tylaa_with_qr_ABUJA_BW_bje8fn.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738268028/SKYLAA/even_with_skyla_tylaa_ANNOUNCEMENT_LAGOS_AND_ABUJA_m9jysi.png",
        "https://res.cloudinary.com/ddjnrebkn/image/upload/v1738268028/SKYLAA/even_with_skyla_tylaa_with_qr_lagos_hlmjvw.png",
    ]

    return (
        <div className="flex flex-col items-center min-h-screen overflow-auto">
            {/* Heading Section */}
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold md:text-5xl text-blue-900 font-outfit">
                    SKYLA TYLAA GALLERY
                </h1>
            </div>
            <div className="mt-8">
                <p className="flex items-center text-[#848282] mb-10 font-bold font-outfit">
                Designs we worked on for Even In The Day’s <br />events with International Superstar DJ, Skyla Tylaa
                </p>
            </div>
            {/* <div className="mb-10">
                <button
                    onClick={scrollToBottom}
                    className="flex items-center gap-2 px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white transition"
                >
                    SCROLL DOWN <span>⬇️</span>
                </button>
            </div> */}
            
            {/* Image Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4'>
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt="" 
            className='w-full h-auto object-cover rounded-lg shadow-md' 
            // ref={index === images.length - 1 ? lastImageRef : null} 
          />
        ))}
      </div>
            <div className="mt-14">
                <Footer />
            </div>
        </div>
    );
};

export default SkylaTylaa;
