import Form from "./Form"
import Footers from "./Footers"

import Frame from "../assets/Frame.png"

const Contacts = () => {
  return (
    <div className=" text-[#151E99] ">
         <header className=" flex flex-col lg:flex-row items-start justify-between px-10 lg:px-32">
      {/* Left Section: Text */}
      <div className="lg:w-1/2">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-left font-outfit">
            Ready to bring your vision to life? <br /> Let’s talk.
        </h1>
        <p className="text-lg text-[#848282] text-left">
            Let us help you become even greater at what you do.
            <br />
            Fill out the following form and we will get back to you in the next 24 hours.
        </p>
      </div>

      {/* Right Section: Circular "Get In Touch" Graphic */}
      <div className="mt-10 lg:mt-0">
        <img
          src={Frame}
          alt="Get in Touch Graphic"
          className="w-40 h-40 object-contain"
        />
      </div>
    </header>
    <Form />
    <Footers />
    </div>

  );
};

export default Contacts;
