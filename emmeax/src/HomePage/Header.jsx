import React from 'react'
import Footers from '../contactPage/Footers'
import Visual from '../assets/Visuals.png'
import rightframe from '../assets/rightframe.png'
import memframe from '../assets/memframe.png'
import leftFrame from '../assets/leftFrame.png'
import hero from '../assets/hero.png'
import location from '../assets/location.png'
import work from '../assets/work.png'
import hero2 from '../assets/hero2.png'
import side from '../assets/side.png'

const Header = () => {
  return (
    <div className="min-h-screen font-outfit">
      <header className="text-center mt-16">
        
        {/* Top Logo Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
          <img src={Visual} alt="Visuals" className="w-[250px] md:w-[400px] lg:w-[500px] mr-24" />
          <img src={leftFrame} alt="Left Frame" className="hidden lg:block mt-6 lg:mt-20 w-[30px] md:w-[40px] lg:w-[50px]" />
        </div>

        {/* Content Section - Swapping Order for Mobile */}
        <div className="mt-12 lg:mt-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
          
          {/* Text Section - Moves Above Images on Small Screens */}
          <div className="lg:w-1/2 block lg:hidden">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-left mb-8 font-outfit font-bold ">
              At 4K Studios, we specialize in Graphic Design, Illustration, and 3D Art that turn ideas into unforgettable visuals. From event graphics to album covers, we amplify your vision with stunning, custom-made designs.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex flex-col  lg:justify-end mb-20 ">
  <img 
    src={rightframe} 
    alt="Frame" 
    className="w-[250px] sm:w-[250px] md:w-[300px] lg:w-full max-w-sm lg:max-w-md mb-6 mr-20" 
  />
  <div className="">
    <img 
      src={memframe}
      alt="Member Frame" 
      className="w-[300px] sm:w-[200px] md:w-[250px] lg:w-full max-w-sm lg:max-w-md mb-6 mr-20"
    />
  </div>
</div>

          {/* Text Section - Stays Below Images on Large Screens */}
          <div className="lg:w-1/2 hidden lg:block">
            <p className="text-gray-600 text-5xl sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-left lg:text-left mb-20 ">
              At 4K Studios, we specialize in Graphic Design, Illustration, and 3D Art that turn ideas into unforgettable visuals. From event graphics to album covers, we amplify your vision with stunning, custom-made designs.
            </p>
          </div>

        </div>

        {/* Hero Image Section */}
        <div className="relative">
          <img src={hero} alt="Hero" className="w-full h-auto" />
          <div className="absolute -top-14 right-8 flex items-center space-x-4 max-w-xs">
            <img src={side} alt="Side Icon" className="w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64" />
          </div>
        </div>

        {/* Other Sections */}
        <div>
          <img src={location} alt="Location" />
        </div>
        <div>
          <img src={work} alt="Work" />
        </div>
        <div>
          <img src={hero2} alt="Hero2" />
        </div>

      </header>
      <Footers />
    </div>
  );
}

export default Header;
