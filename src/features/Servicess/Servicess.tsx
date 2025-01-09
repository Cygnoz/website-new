import React from "react";
import cyglogo from "../../assets/icons/service-cygnoz.png";
import FullStack from "./components/FullStack";
import Cloud from "./components/Cloud";
import MobileApp from "./components/MobileApp";
import Analytics from "./components/Analytics";
import Cyber from "./components/Cyber";
import Digital from "./components/Digital";
import "./Service.css";
import Star_wide from "../../assets/Icons/Star_wide";

const Servicess: React.FC = () => {
  return (
    <>
      <div className=" ">
        <div className="animated-background bg-black pt-10">
          <div className=" text-white h-auto grid grid-cols-1  border-b border-b-gray-600  pt-5">
            <div className="px-4 sm:px-6 lg:px-32 flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className=" mb-6 lg:mb-0 flex justify-center lg:block order-2 lg:order-1">
                <img
                  src={cyglogo}
                  alt="Decorative"
                  className="w-[150px] h-auto lg:w-[400px] object-contain -mb-8"
                  loading="lazy"
                />
              </div>

              {/* Text Section */}
              <div className="flex-1 text-center lg:text-left mt-6 lg:pt-10 order-1 lg:order-2">
                <div className="flex justify-center lg:justify-start items-center space-x-2 mb-4">
                  <Star_wide color="#FFFFFF"/>
                  <h3 className="text-sm sm:text-[16px] font-regular text-blue-300 tracking-wide">
                    SERVICES
                  </h3>
                </div>

                <h1 className="service-heading bg-gradient-to-r from-[#45B4FF] via-[#BAFFED] to-[#84CCFF] bg-clip-text text-transparent text-2xl sm:text-3xl  lg:text-5xl  leading-tight mb-4"
                >
                  Crafting the Future, <br />
                  <span className="bg-gradient-to-r from-[#45B4FF] to-[#84CCFF] bg-clip-text text-transparent">
                    Today
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-[20px] font-medium text-gray-300 pt-2">
                  We help you to build high-quality digital solutions and products as well
                  as deliver a wide range of related professional services. We are providing
                  world-class service to our clients.
                </p>
              </div>
            </div>


          </div>

          <div className="justify-center sm:flex-col sm:items-center lg:mx-[20px] md:ml-[100px] sm:ml-0 gap-4">
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
