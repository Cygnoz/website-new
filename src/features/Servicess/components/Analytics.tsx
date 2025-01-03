import React from "react";
import analytic from "../../../assets/Images/AIeng.png";
import Star_wide from "../../../assets/icons/Star_wide";
const Analytics: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-black text-white h-auto flex flex-col lg:flex-row gap-10 justify-center p-5 border-b border-b-slate-600">
      <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
        <img src={analytic} alt="full stack" className="w-[150px] h-[80px]" />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight mb-4 lg:mb-0">
          Analytic <br className="hidden lg:block" /> Engineering
        </h2>
      </div>
      <div className="max-w-full lg:max-w-4xl flex flex-col items-center lg:items-start">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extralight mb-4">
          Analytic Engineering
        </h1>
        <p className="mb-6 text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
          Analytic engineering involves designing, developing, and maintaining
          data pipelines and analytics solutions to extract valuable insights
          from data. It combines data engineering, data science, and machine
          learning techniques to transform raw data into actionable information.
        </p>
        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Data Engineering
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Data engineering is the process of designing and building systems
              for collecting, storing, and analyzing data at scale
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Data Science
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Data science is an interdisciplinary field that combines
              statistical methods, machine learning, and domain expertise to
              extract insights from large datasets.
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Data Visualization
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Data visualization is the graphical representation of information
              and data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
