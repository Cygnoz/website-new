import React from "react";
import mobile from "../../../assets/servisess/mob.gif";
import Star_wide from "../../../assets/Icons/Star_wide";

const MobileApp: React.FC = () => {
  return (
    <div className="bg-transparent text-white h-auto flex flex-col lg:flex-row gap-8 justify-center p-5 border-b border-b-slate-600">
      <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
        <img src={mobile} alt="full stack" className="w-[154px] h-[154px] object-cover -mt-7" />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight mb-4 lg:mb-0">
          Mobile App <br className="hidden lg:block" /> Engineering
        </h2>
      </div>
      <div className="max-w-full lg:max-w-4xl flex flex-col items-center lg:items-start">
      <h1 className="hidden lg:block text-xl lg:text-3xl font-extralight mb-4">
          Mobile App Engineering
        </h1>
        <p className="mb-6 text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
          Mobile app engineering involves the design, development, testing, and
          deployment of mobile applications for smartphones and tablets. It
          encompasses both iOS and Android platforms, and often utilizes
          cross-platform frameworks to streamline development.{" "}
        </p>
        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Platform-Specific Development
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Platform-specific development involves building applications
              tailored to a specific operating system or device platform.{" "}
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Cross-Platform Development
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Cross-platform development involves creating applications that can
              run on multiple platforms (iOS, Android, web, etc.) using a single
              codebase{" "}
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Backend Integration
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Backend integration involves connecting a mobile app to a
              server-side infrastructure to handle data storage, retrieval, and
              processing{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
