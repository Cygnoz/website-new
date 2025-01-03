import { useState } from "react";
import { Link } from "react-router-dom";  // Import Link component
import cygnoz from "../assets/icons/Cygnoz-logo.svg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white py-4 px-5 sm:px-10 md:px-20 absolute w-full z-50">
      <div className="flex justify-between items-center w-full relative">
        {/* Left Section: Logo and Company Name */}
        <div className="flex items-center ">
          <img src={cygnoz} alt="Cygnoz Logo" className="w-[40px] h-[40px]" />
          <span className="text-lg font-semibold">Cygnoz</span>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <Link
            to="/"
            className="text-gray-300 text-xl hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-300 text-xl hover:text-white transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/products"
            className="text-gray-300 text-xl hover:text-white transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            to="/aboutus"
            className="text-gray-300 text-xl hover:text-white transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/careers"
            className="text-gray-300 text-xl hover:text-white transition-colors duration-300"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 text-xl hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 text-center min-h-screen bg-black  rounded-lg p-4 absolute w-full top-full left-0">
          <Link
            to="/"
            className="text-xl hover:text-[#64C4FF] block pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-xl hover:text-[#64C4FF] block pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/products"
            className="text-xl hover:text-[#64C4FF] block pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/aboutus"
            className="text-xl hover:text-[#64C4FF] block pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/careers"
            className="text-xl hover:text-[#64C4FF] block pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="text-xl hover:text-[#64C4FF] block pb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
