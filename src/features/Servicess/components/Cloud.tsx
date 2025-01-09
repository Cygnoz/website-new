import React from "react";
import cloud from "../../../assets/servisess/cloudss.gif";
import Star_wide from "../../../assets/Icons/Star_wide";

const Cloud: React.FC = () => {
  return (
    <div className="bg-transparent px-5 text-white h-auto flex flex-col lg:flex-row gap-10 justify-between  border-b border-b-slate-600 py-5">
      <div className="flex gap-2">
        <div className="w-[160px]">
          <img src={cloud} alt="full stack" className="w-[160px] h-[160px] object-cover " />
        </div>
        <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-regular leading-tight mb-4 pt-7 lg:mb-0">
        Cloud   <br className="hidden lg:block" /> Engineering
        </h2>
      </div>
      <div className="px-14">
        <div className="pl-16">
          <h1 className=" lg:block text-[28px] font-regular  mb-2">
            Cloud Engineering
          </h1>
          <p className="mb-6 text-sm sm:text-[17px] font-medium text-[#B6B6B6]  text-start lg:text-left">
            Cloud engineering is a specialized field that involves designing,
            building, and managing cloud-based applications and infrastructure.
            Cloud engineers leverage cloud computing platforms like AWS, Azure,
            and GCP to create scalable, reliable, and cost-effective solutions.
          </p>
        </div>
        <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
          <Star_wide />
          <div>

            <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
              Cloud Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
              Cloud infrastructure refers to the collection of hardware and
              software resources that make up the cloud. It provides a scalable,
              flexible, and cost-effective platform for delivering IT services
              over the internet{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
            <Star_wide />
            <div>

              <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
                DevOps
              </h2>
              <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
                DevOps is a set of practices that combines software development
                (Dev) and IT operations (Ops). It aims to shorten the software
                development lifecycle and provide continuous delivery with high 1
                quality.{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
            <Star_wide />
            <div>
              <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
                Security
              </h2>
              <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
                Security is a critical aspect of modern software development and
                IT operations. It involves protecting systems, networks, and data
                from unauthorized access, use, disclosure, disruption,
                modification, or destruction.{" "}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cloud;
