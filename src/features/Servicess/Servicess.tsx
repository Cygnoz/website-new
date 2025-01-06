import React from "react";
import cyglogo from "../../assets/icons/service-cygnoz.png";
import FullStack from "./components/FullStack";
import Cloud from "./components/Cloud";
import MobileApp from "./components/MobileApp";
import Analytics from "./components/Analytics";
import Cyber from "./components/Cyber";
import Digital from "./components/Digital";
import wide from "../../assets/icons/wide.png";
import "./Service.css";

const Servicess: React.FC = () => {
  return (
    <>
      <div className=" ">
        <div className="animated-background bg-black ">
          <div className=" text-white h-auto grid grid-cols-1  border-b border-b-gray-600  pt-10">
          <div className="px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row">
  {/* Image Section */}
  <div className="lg:ml-[200px] mb-6 lg:mb-0 flex justify-center lg:block order-2 lg:order-1">
    <img
      src={cyglogo}
      alt="Decorative"
      className="w-[150px] h-auto lg:w-[400px] lg:h-[96] object-contain"
    />
  </div>

  {/* Text Section */}
  <div className="flex-1 text-center lg:text-left pt-4 lg:pt-10 order-1 lg:order-2">
    <div className="flex justify-center lg:justify-start items-center space-x-2 mb-4">
      <img src={wide} alt="" className="w-[20px] h-auto" />
      <h3 className="text-sm sm:text-lg font-medium text-blue-300 tracking-wide">
        SERVICES
      </h3>
    </div>

    <h1 className="bg-gradient-to-r from-[#45B4FF] via-[#BAFFED] to-[#84CCFF] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight mb-4">
      Crafting the Future, <br />
      <span className="bg-gradient-to-r from-[#45B4FF] to-[#84CCFF] bg-clip-text text-transparent">
        Today
      </span>
    </h1>
    <p className="text-base sm:text-lg lg:text-xl text-gray-300">
      We help you to build high-quality digital solutions and products as well
      as deliver a wide range of related professional services. We are providing
      world-class service to our clients.
    </p>
  </div>
</div>


          </div>

          <div className="flex flex-wrap justify-center sm:flex-col sm:items-center lg:ml-[200px] md:ml-[100px] sm:ml-0 gap-4">
  <FullStack />
  <Cloud />
  <MobileApp />
  <Analytics />
  <Cyber />
  <Digital />
</div>


        </div>
      </div>
    </>
  );
};

export default Servicess;
