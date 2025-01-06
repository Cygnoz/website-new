import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cygnoz from "../assets/icons/Cygnoz-logo.svg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`py-4 px-5 sm:px-10 md:px-20 fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center w-full relative">
        {/* Left Section: Logo and Company Name */}
        <div className="flex items-center">
          <img src={cygnoz} alt="Cygnoz Logo" className="w-[40px] h-[40px]" />
          <span className="text-2xl font-semibold">Cygnoz.com</span>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="hidden md:flex space-x-10">
          {["Home", "Services", "Products", "About Us", "Careers", "Contact"].map((item, idx) => (
            <Link
              key={idx}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className={`text-xl hover:text-[#64C4FF] transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-gray-300"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 ${isScrolled || isMobileMenuOpen ? "text-white" : "text-black"}`}
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
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={closeMobileMenu}
          ></div>

          {/* Menu */}
          <div className="md:hidden flex flex-col mt-4 space-y-4 text-center bg-black rounded-lg p-4 fixed w-full top-16 left-0 z-50">
            {["Home", "Services", "Products", "About Us", "Careers", "Contact"].map((item, idx) => (
              <Link
                key={idx}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="text-xl hover:text-[#64C4FF] text-white transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                {item}
              </Link>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}

export default Header;
