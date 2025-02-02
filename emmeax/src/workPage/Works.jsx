import React, { useRef } from "react";
import Footer from "./Footer";
import Frame3 from '../assets/workimage/Frame3.png';
import Project1 from '../assets/workimage/Project1.png'
import Project2 from '../assets/workimage/Project2.png'
import Project3 from '../assets/workimage/Project3.png'
import co_1 from '../assets/workimage/co_1.png'
import co_2 from '../assets/workimage/co_2.png'
import IMG_8562 from '../assets/workimage/IMG_8562.png'
import IMG_2944 from '../assets/workimage/IMG_2944.png'
import FRIENDSABLES from '../assets/workimage/FRIENDSABLES.png'
import FRIENDSTICKETS from '../assets/workimage/FRIENDSTICKETS.png'
import Asake from '../assets/workimage/Asake.png'
import Oguns from '../assets/workimage/Oguns.png'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate

const Works = () => {
  const navigate = useNavigate(); // ✅ Define navigate

  const handleImageClick = (route) => {
    navigate(route); // ✅ Navigate correctly
  };

  // Ref to scroll to the content section
  const lastImageRef = useRef(null);

  // Scroll function
  const scrollToBottom = () => {
    lastImageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#C9C9C9]  font-outfit">
      {/* Heading Section */}
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold md:text-5xl text-blue-900 font-outfit">
          SELECTED WORKS
        </h1>
      </div>

      {/* Scroll Button */}
      <div className="mt-8">
        <button
          onClick={scrollToBottom}
          className="flex items-center gap-2 px-6 py-2 border-2 border-[#151E99] text-[#151E99] font-bold font-oufit rounded hover:bg-blue-600 hover:text-white transition rounded-full text-2xl"
        >
          SCROLL DOWN <span className="text-[#151E99] text-2xl"><MdOutlineKeyboardDoubleArrowDown /></span>
        </button>
      </div>

      {/* Content Section */}
      <div>
      <div className="bg-[#C9C9C9] p-6 flex flex-col md:flex-row gap-6">
      {/* Left Image (3D Art) - Wider */}
      <div className="flex-[2.1]">  
          {/* <p className="-top-14 right-8 flex items-center space-x-4 max-w-xs bg-slate-500">3D ART</p> */}
        <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1738425945/Arts/44db_jhbrkm.png" alt="3D Art"   fetchPriority="high" className="w-full h-[420px] max-h-[420px] object-cover cursor-pointer" 
         onClick={() => handleImageClick("/Image440B")}/>
        <p className="text-xl  font-semibold mt-2 text-left">44DB AND FRIENDS (VOL. 1)</p>
      </div>
    
      {/* Right Image (Tracklist) - Standard Width */}
      <div className="flex-1">
        <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/f_auto,q_auto/v1738295447/44DB3/44DB_AND_FRIENDS_VOL2_y0qjql.png" 
        alt="Tracklist"  fetchPriority="high" className="w-full h-[420px] object-cover cursor-pointer"
         onClick={() => handleImageClick("/Image44db")} />
        <p className=" text-xl font-semibold mt-2 ">44DB AND FRIENDS (VOL. 2) </p>
      </div>
    </div>
    
        <div className="bg-[#C9C9C9] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div className=" flex flex-col ">
    <img src='https://res.cloudinary.com/ddjnrebkn/image/upload/v1738262130/44DB/COUNTDOWN_LIVE_TODAY_poswxv.png' alt="Frame1"  fetchPriority="high" className="w-full h-[420px] object-cover cursor-pointer "
     onClick={() => handleImageClick("/SkateJam")} />
    <p className=" text-xl font-semibold mt-2">EVEN IN THE DAY (SKATE JAM)</p>
  </div>
  
  <div className="   flex flex-col">
    <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1738268034/SKYLAA/even_with_skyla_tylaa_ABUJA_with_qr_pqehbw.png" alt="Frame2" fetchPriority="high" className="w-full h-[420px] object-cover cursor-pointer" 
     onClick={() => handleImageClick("/SkylaTylaa")}/>
    <p className=" text-xl font-semibold mt-2">EVEN IN THE DAY (WITH SKYLA TYLA)</p>
  </div>

  <div className=" flex flex-col r">
    <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1738324105/PalmWine/SETLIST_FINAL_whsuhc.png" alt="Frame3"   fetchPriority="high" className="w-full h-[420px] object-cover cursor-pointer"  
     onClick={() => handleImageClick("/PalmWine")}/>
    <p className=" text-xl font-semibold mt-2 item-start">PALMWINE & FRIENDS (CAVE RAVE)</p>
  </div>
</div>
</div>
       
       
        <div className="bg-[#C9C9C9] p-6 cursor-pointer">
          <img src={Frame3} className="w-full h-[420px]" alt="Frame3" 
           onClick={() => handleImageClick("/StreetWear")}/>
        </div>
        <div className="bg-[#C9C9C9] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div className=" flex flex-col ">
    <img src={FRIENDSABLES} fetchPriority="high" alt="Frame1" className="w-full h-[420px] object-cover cursor-pointer "
     onClick={() => handleImageClick("/Rave")} />
    <p className=" text-xl font-semibold mt-2"> PALMWINE & FRIENDS (RAVE OR RAVE)
    </p>
  </div>
  
  <div className="   flex flex-col">
    <img src={FRIENDSTICKETS} fetchPriority="high" alt="Frame2" className="w-full h-[420px] object-cover cursor-pointer" 
     onClick={() => handleImageClick("/Musical")}/>
    <p className=" text-xl font-semibold mt-2">MUSICAL HEAVEN
    </p>
  </div>

  <div className=" flex flex-col r">
    <img src={co_2} fetchPriority="high" alt="Frame3" className="w-full h-[420px] object-cover cursor-pointer"  
     onClick={() => handleImageClick("/Ottawa")}/>
    <p className=" text-xl font-semibold mt-2 item-start">CONQUERING OTTAWA</p>
  </div>
</div>
</div>
       
        <div className="bg-[#C9C9C9] p-6 flex flex-col md:flex-row gap-6">
      {/* Left Image (3D Art) - Wider */}
      <div className="flex-[2.1]">  
          {/* <p className="-top-14 right-8 flex items-center space-x-4 max-w-xs bg-slate-500">3D ART</p> */}
        <img src={co_1} fetchPriority="high" alt="3D Art" className="w-full h-[420px] max-h-[420px] object-cover cursor-pointer" 
          onClick={() => handleImageClick("/Party")}/>
        <p className=" text-2xl font-semibold  mt-2 text-left">CG RELEASE PARTY</p>
      </div>
    
      {/* Right Image (Tracklist) - Standard Width */}
      <div className="flex-1">
        <img src={Oguns} fetchPriority="high" alt="Tracklist" className="w-full h-[420px] object-cover cursor-pointer" 
        onClick={() => handleImageClick("/WaleSec")} />
        <p className=" text-2xl font-semibold mt-2 ">WITH LOVE, WALE OGUNS </p>
      </div>
    </div>
       
    <div className="bg-[#C9C9C9] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div className=" flex flex-col ">
    <img src={IMG_2944} fetchPriority="high" alt="Frame1" className="w-full h-[420px] object-cover cursor-pointer "
     onClick={() => handleImageClick("/Wale")} />
    <p className=" text-xl font-semibold mt-2">ON MY PRIDE</p>
  </div>
  
  <div className="   flex flex-col">
    <img src={Asake} fetchPriority="high" alt="Frame2" className="w-full h-[420px] object-cover cursor-pointer" 
     onClick={() => handleImageClick("/Love")}/>
    <p className=" text-xl font-semibold mt-2"> WHY LOVE?
    </p>
  </div>

  <div  ref={lastImageRef} className=" flex flex-col r">
    <img src={IMG_8562} fetchPriority="high" alt="Frame3" className="w-full h-[420px] object-cover cursor-pointer"  
     onClick={() => handleImageClick("/Crazy")}/>
    <p className=" text-xl font-semibold mt-2 item-start">CRAZY</p>
  </div>
</div>
</div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Works;
