import React from "react";
import fullstack from "../../../assets/Images/fullstacks.mp4";
import Star_wide from "../../../assets/Icons/Star_wide";

const FullStack: React.FC = () => {
  return (
    <div className="bg-transparent text-white h-auto flex flex-col lg:flex-row gap-10 justify-center p-5 border-b border-b-slate-600">
      <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
        <video
          src={fullstack}
          className="w-[150px] h-[80px]"
          autoPlay
          loop
          muted
        ></video>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight mb-4 lg:mb-0 ">
          Full Stack <br className="hidden lg:block" /> Engineering
        </h2>
      </div>
      <div className="max-w-full lg:max-w-4xl flex flex-col items-center lg:items-start">
        <h1 className="hidden lg:block text-xl lg:text-3xl font-extralight mb-4">
          Full Stack Engineering
        </h1>

        <p className="mb-6 text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
          Full Stack Engineering is a comprehensive approach to software
          development, encompassing both front-end and back-end technologies.
          Our skilled full-stack engineers possess expertise in a wide range of
          technologies, enabling us to deliver end-to-end solutions.
        </p>
        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Front-End Development
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Front-end development is the art and science of building the user
              interface (UI) of a website or web application. It involves
              creating the visual elements that users interact with, such as
              buttons, forms, and navigation menus.
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Back-End Development
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Back-end development focuses on the server-side logic and
              infrastructure of a web application. It involves building and
              maintaining the underlying systems that power the front-end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStack;
