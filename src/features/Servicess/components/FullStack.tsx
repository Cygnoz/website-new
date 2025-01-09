import React from "react";
import fullstack from "../../../assets/servisess/fsdev.gif";
import Star_wide from "../../../assets/Icons/Star_wide";

const FullStack: React.FC = () => {
  return (
    <div className="bg-transparent px-5 text-white h-auto flex flex-col lg:flex-row gap-10 justify-between  border-b border-b-slate-600 py-5">
      <div className="flex gap-2">
        <div className="w-[160px]">
          <img src={fullstack} alt="full stack" className="w-[154px] h-[154px] object-cover " />
        </div>
        <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-regular leading-tight mb-4 pt-7 lg:mb-0">
        Full Stack  <br className="hidden lg:block" /> Engineering
        </h2>
      </div>
      <div className="px-14">
        <div className="pl-16">
          <h1 className=" lg:block text-[28px] font-regular  mb-2">
            Full Stack Engineering
          </h1>
          <p className="mb-6 text-sm sm:text-[17px] font-medium text-[#B6B6B6]  text-start lg:text-left">
            Full Stack Engineering is a comprehensive approach to software
            development, encompassing both front-end and back-end technologies.
            Our skilled full-stack engineers possess expertise in a wide range of
            technologies, enabling us to deliver end-to-end solutions.
          </p>
        </div>
        <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
          <Star_wide />
          <div>

            <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
              Front-End Development          </h2>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
              Front-end development is the art and science of building the user
              interface (UI) of a website or web application. It involves
              creating the visual elements that users interact with, such as
              buttons, forms, and navigation menus.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
            <Star_wide />
            <div>

              <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
                Back-End Development
              </h2>
              <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
                Back-end development focuses on the server-side logic and
                infrastructure of a web application. It involves building and
                maintaining the underlying systems that power the front-end.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
            <Star_wide />
            <div>
              <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
                Data Visualization
              </h2>
              <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
                Data visualization is the graphical representation of information
                and data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStack;
