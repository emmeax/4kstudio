import { RiBehanceFill } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
const Footers = () => {
    return (
        <footer className="bg-[#03095B] text-white rounded-2xl py-12 px-8 ">
            <div className="container mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
    {/* Left: Title */}
    <div className="text-left lg:col-span-1">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug text-center lg:text-left  mb-14 ">
  Start your<br />
  Project&nbsp;Today!
</h2>

    </div>

    {/* Center: Form */}
    <div className="lg:col-span-2 lg:ml-10 mt-24">
        <form className="relative">
            <label className="absolute -top-3 left-10 text-sm text-white">
                What's your name?
            </label>
            <input
                type="text"
                placeholder=""
                className="w-full border-b border-white bg-transparent text-white focus:outline-none py-2 placeholder-white pl-10"
            />
            <button
                type="submit"
                className="absolute right-0 top-1/1 transform -translate-y-[40%] bg-white text-[#03095B] font-bold px-6 py-2 rounded-full hover:opacity-90 transition-all"
            >
                SUBMIT
            </button>
        </form>
    </div>
</div>

                {/* Divider */}
                <hr className="my-8 border-white" />

                {/* Bottom Section */}
{/* Bottom Section */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-5">
    {/* Left: Social Media Icons and Navigation Links */}
    <div className="lg:flex lg:flex-col lg:items-start">
        {/* Social Media Icons */}
        <div className="flex space-x-4 justify-start mb-4">
            <a href="#" className="text-white text-2xl hover:opacity-80 transition-all">
                <i className="fab fa-behance border-2 border-white rounded-full p-4 w-12 h-12 flex items-center justify-center">
                    <RiBehanceFill />
                </i>
            </a>
            <a href="#" className="text-white text-2xl hover:opacity-80 transition-all">
                <i className="fab fa-linkedin border-2 border-white rounded-full p-4 w-12 h-12 flex items-center justify-center">
                    <AiOutlineLinkedin />
                </i>
            </a>
            <a href="#" className="text-white text-2xl hover:opacity-80 transition-all">
                <i className="fab fa-instagram border-2 border-white rounded-full p-4 w-12 h-12 flex items-center justify-center">
                    <FaInstagram />
                </i>
            </a>
        </div>

        {/* Navigation Links */}
        <div className="text-white text-sm space-x-4 text-left mt-6">
            <a href="#" className="hover:underline">Home</a>
            <span>/</span>
            <a href="#" className="hover:underline">About Us</a>
            <span>/</span>
            <a href="#" className="hover:underline">Projects</a>
        </div>
    </div>

    {/* Right: Contact Info */}
    <div className="flex flex-col space-y-6">
                        {/* Phone */}
                        <div>
                            <p className="text-sm text-gray-400">Phone</p>
                            <p className="font-medium">(123) 456 7890</p>
                        </div>
                        
                        {/* Location and Email side by side */}
                        <div className="flex space-x-16">
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="font-medium">123 Blvd, Design City, USA.</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <p className="font-medium">contact@4kstudios.com</p>
                            </div>
                        </div>
                    </div>
                
</div>
                
            </div>
        </footer>
    );
};

export default Footers;
