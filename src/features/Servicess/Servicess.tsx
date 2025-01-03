import React from "react";
import cyglogo from "../../assets/icons/service-cygnoz.png";
import FullStack from "./components/FullStack";
import Cloud from "./components/Cloud";
import MobileApp from "./components/MobileApp";
import Analytics from "./components/Analytics";
import Cyber from "./components/Cyber";
import Digital from "./components/Digital";
import wide from "../../assets/icons/wide.png";
const Servicess: React.FC = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-900 to-black text-white h-auto flex items-center border-b border-b-gray-600 pt-10">
        <div className="container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row">
          {/* Left Section */}
          <div>
            <img
              src={cyglogo}
              alt="Decorative"
              className="container w-[45] h-[64] lg:w-[450px] lg:h-[96] object-contain"
            />
          </div>

          {/* Right Section */}
          <div className="flex-1 text-center lg:text-left pt-10">
            <div className="flex justify-center lg:justify-start items-center space-x-2">
              <img src={wide} alt="" width={20} />
              <h3 className="text-lg font-medium text-blue-300 tracking-wide">
                SERVICES
              </h3>
            </div>

            <h1 className="bg-gradient-to-r from-[#45B4FF] via-[#BAFFED] to-[#84CCFF] bg-clip-text text-transparent text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Crafting the Future, <br />
              <span className="bg-gradient-to-r from-[#45B4FF] to-[#84CCFF] bg-clip-text text-transparent">
                Today
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300">
              We help you to build high-quality digital solutions and products
              as well as deliver a wide range of related professional services.
              We are providing world-class service to our clients.
            </p>
          </div>
        </div>
      </div>

      <FullStack />
      <Cloud />
      <MobileApp />
      <Analytics />
      <Cyber />
      <Digital />
    </>
  );
};

export default Servicess;
