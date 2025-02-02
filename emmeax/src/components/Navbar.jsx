import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navbar from "../assets/navbar.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full ">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo Section */}
          <img src={navbar} alt="Navbar" className="h-8 md:h-10" />

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex gap-6 md:gap-8">
              <li>
                <Link to="/Header" className="text-gray-700 hover:text-blue-600 text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-700 hover:text-blue-600 text-sm md:text-base">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* "Contact Us" Button (Desktop) */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <button className="border border-blue-600 text-blue-600 py-1 px-3 md:py-2 md:px-4 text-sm md:text-base rounded hover:bg-blue-600 hover:text-white">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden ">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="md:hidden w-full">
            <div className="w-full  bg-[#C9C9C9] shadow-lg">
              <Link
                to="/Header"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/work"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;