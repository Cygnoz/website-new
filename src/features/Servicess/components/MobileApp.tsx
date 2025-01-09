import React from "react";
import mobile from "../../../assets/servisess/mob.gif";
import Star_wide from "../../../assets/Icons/Star_wide";

const MobileApp: React.FC = () => {
  return (
    <div className="bg-transparent px-5 text-white h-auto flex flex-col lg:flex-row gap-10 justify-between  border-b border-b-slate-600 py-5">
        <div className="flex gap-2">
          <div className="w-[160px]">
            <img src={mobile} alt="full stack" className="w-[154px] h-[154px] object-cover " />
          </div>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-regular leading-tight mb-4 pt-7 lg:mb-0">
  Mobile App <br /> Engineering
</h2>

        </div>
      <div className="px-14">
        <div className="pl-16">
          <h1 className=" lg:block text-[28px] font-regular  mb-2">
            Mobile App Engineering
          </h1>
          <p className="mb-6 text-sm sm:text-[17px] font-medium text-[#B6B6B6]  text-start lg:text-left">
            Mobile app engineering involves the design, development, testing, and
            deployment of mobile applications for smartphones and tablets. It
            encompasses both iOS and Android platforms, and often utilizes
            cross-platform frameworks to streamline development.{" "}
          </p>
        </div>
        <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
          <Star_wide />
          <div>

            <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
              Platform-Specific Development
            </h2>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
              Platform-specific development involves building applications
              tailored to a specific operating system or device platform.{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
            <Star_wide />
            <div>

              <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
                Cross-Platform Development
              </h2>
              <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
                Cross-platform development involves creating applications that can
                run on multiple platforms (iOS, Android, web, etc.) using a single
                codebase{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
            <Star_wide />
            <div>
              <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
                Backend Integration
              </h2>
              <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
                Backend integration involves connecting a mobile app to a
                server-side infrastructure to handle data storage, retrieval, and
                processing{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
