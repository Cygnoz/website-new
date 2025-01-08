import { useState, useEffect } from "react";
import cygnoz from "../assets/icons/Cygnoz-logo.svg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          <span className="text-2xl font-semibold">Cygnoz</span>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="hidden md:flex space-x-10">
          {[
            "Home",
            "Services",
            "Products",
            "About Us",
            "Careers",
            "Contact",
          ].map((item, idx) => (
            <a
              key={idx}
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "")}`
              }
              className={`text-xl hover:text-[#64C4FF] transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-gray-300"
              }`}
            >
              {item}
            </a>
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
                className="w-6 h-6 text-white "
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
        <>
          {/* Animated Sidebar (From Left) */}
          <div
            className={`md:hidden flex flex-col space-y-6 text-start bg-black min-h-screen rounded-lg p-8 fixed w-full left-0 z-50 transform transition-transform duration-1000 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {[
              "Home",
              "Services",
              "Products",
              "About Us",
              "Careers",
              "Contact",
            ].map((item, idx) => (
              <div key={idx}>
                <a
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "")}`
                  }
                  className="text-xl hover:text-[#64C4FF] text-white transition-colors duration-300 font-extralight"
                  onClick={closeMobileMenu}
                >
                  {item}
                </a>
                <hr className="border-t-2 border-gray-600 my-2" />
              </div>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}

export default Header;
