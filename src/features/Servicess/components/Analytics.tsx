import React from "react";
import analytic from "../../../assets/servisess/analytical.gif";
import Star_wide from "../../../assets/Icons/Star_wide";

const Analytics: React.FC = () => {
  return (
    <div className="bg-transparent px-5 text-white h-auto flex flex-col lg:flex-row gap-10 justify-between  border-b border-b-slate-600 py-5">
      <div className="flex gap-2">
        <div className="w-[160px]">
          <img src={analytic} alt="full stack" className="w-[154px] h-[154px] object-cover " />
        </div>
        <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-regular leading-tight mb-4 pt-7 lg:mb-0">
        Analytic <br className="hidden lg:block" /> Engineering
        </h2>
      </div>
      <div className="px-14">
        <div className="pl-16">
          <h1 className=" lg:block text-[28px] font-regular  mb-2">
            Analytic Engineering
          </h1>
          <p className="mb-6 text-sm sm:text-[17px] font-medium text-[#B6B6B6]  text-start lg:text-left">
            Analytic engineering involves designing, developing, and maintaining
            data pipelines and analytics solutions to extract valuable insights
            from data. It combines data engineering, data science, and machine
            learning techniques to transform raw data into actionable information.
          </p>
        </div>
        <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
          <Star_wide />
          <div>

            <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
              Data Engineering
            </h2>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
              Data engineering is the process of designing and building systems
              for collecting, storing, and analyzing data at scale
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
            <Star_wide />
            <div>

              <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
                Data Science
              </h2>
              <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
                Data science is an interdisciplinary field that combines
                statistical methods, machine learning, and domain expertise to
                extract insights from large datasets.
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

export default Analytics;
