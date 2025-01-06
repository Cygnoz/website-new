import React from "react";
import digital from "../../../assets/Images/digital.png";
import Star_wide from "../../../assets/Icons/Star_wide";
const Digital: React.FC = () => {
  return (
    <div className="bg-transparent text-white h-auto flex flex-col lg:flex-row gap-10 justify-center p-5 border-b border-b-slate-600">
      <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
        <img src={digital} alt="full stack" className="w-[150px] h-[80px]" />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight mb-4 lg:mb-0">
          Digital <br className="hidden lg:block" /> Business
        </h2>
      </div>
      <div className="max-w-full lg:max-w-4xl flex flex-col items-center lg:items-start">
      <h1 className="hidden lg:block text-xl lg:text-3xl font-extralight mb-4">
          Digital Business
        </h1>
        <p className="mb-6 text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
          Digital marketing leverages online platforms to promote products and
          services, connecting businesses with their target audience. It
          utilizes strategies like SEO, social media marketing, and content
          creation to build brand awareness. This approach drives engagement,
          boosts conversions, and fosters customer loyalty
        </p>
        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Audience Targeting
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Identifying and reaching the right audience through data-driven
              strategies and analytics.
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Brand Promotion
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Enhancing brand visibility and reputation through optimized online
              campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
