import { RiBehanceFill } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#03095B] text-white py-12 px-8 border  rounded-xl">
            <div className="container mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start text-left">
                    {/* Left: Title */}
                    <div className="lg:col-span-1">
                        <h2 className="  text-7xl sm:text-xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug text-left mb-14 md:10 sm:mb-2">
                            <span className="sm:hidden">Start your Project Today!</span>
                            <span className="hidden sm:inline">
                                Start your<br /> Project&nbsp;Today!
                            </span>
                        </h2>
                    </div>

                    {/* Center: Form */}
                    <div className="lg:col-span-2 lg:ml-10 w-full mt-24 ">
                        <form className="relative w-full mr-20">
                            {/* Label */}
                            <label className="absolute -top-3 left-4 text-sm text-white mt-4 sm:mb-0 ">
                                What's your name?
                            </label>

                            {/* Input Field - Hidden on small screens */}
                            <input
                                type="text"
                                placeholder=""
                                className="w-11/12 border-b border-white bg-transparent text-white focus:outline-none py-2 placeholder-white pl-4 hidden sm:block"
                            />

                            {/* Submit Button - Visible on all screens but moved on small screens */}
                            <button
                                type="submit"
                                className="mt-4 mr-20 sm:mt-0 sm:absolute sm:right-0 sm:top-1/3 sm:transform sm:-translate-y-1/2 bg-white text-[#03095B] font-bold px-6 py-2 rounded-full hover:opacity-90 transition-all "
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 w-12/11 border-white hidden sm:block" />

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left">
                    {/* Left: Social Media Icons and Navigation Links */}
                    <div className="flex flex-col items-start space-y-4">
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <a href="#" className="text-white text-2xl hover:opacity-80 transition-all">
                                <div className="border-2 border-white rounded-full p-4 w-12 h-12 flex items-center justify-center">
                                    <RiBehanceFill />
                                </div>
                            </a>
                            <a href="#" className="text-white text-2xl hover:opacity-80 transition-all">
                                <div className="border-2 border-white rounded-full p-4 w-12 h-12 flex items-center justify-center">
                                    <AiOutlineLinkedin />
                                </div>
                            </a>
                            <a href="#" className="text-white text-2xl hover:opacity-80 transition-all">
                                <div className="border-2 border-white rounded-full p-4 w-12 h-12 flex items-center justify-center">
                                    <FaInstagram />
                                </div>
                            </a>
                        </div>

                        {/* Navigation Links */}
                        <div className="text-white text-sm flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <a href="#" className="hover:underline">Home</a>
                            <span className="hidden sm:inline">/</span>
                            <a href="#" className="hover:underline">About Us</a>
                            <span className="hidden sm:inline">/</span>
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
                        <div className="flex flex-col sm:flex-row sm:space-x-16 space-y-4 sm:space-y-0">
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

                {/* Divider */}
                <hr className="my-8 border-white hidden sm:block" />
            </div>
        </footer>
    );
};

export default Footer;
