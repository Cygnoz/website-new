import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cygnoz from "../assets/icons/Cygnoz-logo.svg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation(); // Get the current location

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

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

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); // Trigger on route changes

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/aboutus" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

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
          <span
            className={`text-2xl font-semibold ${
              ["/aboutus", "/careers", "/contact"].includes(location.pathname)
                ? "text-[#0380CE]" // Set header color to blue
                : "text-white" // Default color
            }`}
          >
            Cygnoz
          </span>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`text-[16px] font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-gray-300 text-[18px] font-semibold scale-105" // Active state with scaling
                  : isScrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-300 hover:text-gray-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle (Hamburger or Close Button) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden flex flex-col space-y-6 text-start bg-black min-h-screen rounded-lg p-8 fixed w-full left-0 z-50 transform transition-transform duration-1000 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {navItems.map((item, idx) => (
            <div key={idx}>
              <Link
                to={item.path}
                className={`text-[18px] hover:text-[#64C4FF] transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-blue-500 font-bold" // Active state
                    : "text-white"
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
              <hr className="border-t-2 border-gray-600 my-2" />
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Header;
