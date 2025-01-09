import React from "react";
import digital from "../../../assets/servisess/digitalbuis.gif";
import Star_wide from "../../../assets/Icons/Star_wide";
const Digital: React.FC = () => {
  return (
    <div className="bg-transparent px-5 text-white h-auto flex flex-col lg:flex-row gap-2 sm:gap-[100px] justify-between  border-b border-b-slate-600 py-5">
      <div className="flex gap-2">
        <div className="w-[160px]">
          <img src={digital} alt="full stack" className="w-[154px] h-[154px] object-cover " />
        </div>
        <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-regular leading-tight mb-4 pt-4 lg:mb-0">
        Digital <br className="block lg:hidden md:hidden sm:hidden" /> Business  </h2>
      </div>
      <div className="px-14">
        <div className="pl-16">
          <h1 className=" lg:block text-[28px] font-regular  mb-2">
            Digital Business     </h1>
          <p className="mb-6 text-sm sm:text-[17px] font-medium text-[#B6B6B6]  text-start lg:text-left">
            Digital marketing leverages online platforms to promote products and
            services, connecting businesses with their target audience. It
            utilizes strategies like SEO, social media marketing, and content
            creation to build brand awareness. This approach drives engagement,
            boosts conversions, and fosters customer loyalty
          </p>
        </div>
        <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
          <Star_wide />
          <div>

            <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
              Audience Targeting
            </h2>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
              Identifying and reaching the right audience through data-driven
              strategies and analytics.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
            <Star_wide />
            <div>

              <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
                Brand Promotion
              </h2>
              <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
                Enhancing brand visibility and reputation through optimized online
                campaigns.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Digital;
