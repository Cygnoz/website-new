import React from 'react';
import cloud from '../../../assets/Images/cloudeng.png';
import Star_wide from '../../../assets/icons/Star_wide';

;

const Cloud: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-black text-white h-auto flex flex-col lg:flex-row gap-10 justify-center p-5 border-b border-b-slate-600">
    <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
      <img 
        src={cloud} 
        alt="full stack" 
        className="w-[150px] h-[80px]"
      />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight mb-4 lg:mb-0">
        Cloud <br className="hidden lg:block" /> Engineering
      </h2>
    </div>
    <div className="max-w-full lg:max-w-4xl flex flex-col items-center lg:items-start">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-extralight mb-4">Cloud Engineering</h1>
      <p className="mb-6 text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
      Cloud engineering is a specialized field that involves designing, building, and managing cloud-based applications and infrastructure. Cloud engineers leverage cloud computing platforms like AWS, Azure, and GCP to create scalable, reliable, and cost-effective solutions.
      </p>
      <div className="space-y-8">
        <div>
          <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
            <Star_wide />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">Cloud Infrastructure</h2>
          </div>
          <p className='text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left'>
          Cloud infrastructure refers to the collection of hardware and software resources that make up the cloud. It provides a scalable, flexible, and cost-effective platform for delivering IT services over the internet          </p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
            <Star_wide />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">DevOps</h2>
          </div>
          <p className='text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left'>
          DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the software development lifecycle and provide continuous delivery with high 1  quality.          </p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
            <Star_wide />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">Security</h2>
          </div>
          <p className='text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left'>
          Security is a critical aspect of modern software development and IT operations. It involves protecting systems, networks, and data from unauthorized access, use, disclosure, disruption, modification, or destruction.         </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cloud;
