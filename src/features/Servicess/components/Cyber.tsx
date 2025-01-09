import React from "react";
import cyber from "../../../assets/servisess/cber.gif";
import Star_wide from "../../../assets/Icons/Star_wide";
const Cyber: React.FC = () => {
  return (
    <div className="bg-transparent px-5 text-white h-auto flex flex-col lg:flex-row gap-2 sm:gap-28 justify-between  border-b border-b-slate-600 py-5">
      <div className="flex gap-2">
        <div className="w-[160px]">
          <img src={cyber} alt="full stack" className="w-[154px] h-[154px] object-cover " />
        </div>
        <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-regular leading-tight mb-4 pt-4 lg:mb-0">
        Cyber <br className="block lg:hidden md:hidden sm:hidden" /> Security
        </h2>
      </div>
      <div className="px-14">
        <div className="pl-16">
          <h1 className=" lg:block text-[28px] font-regular  mb-2">
            Cyber Security        </h1>
          <p className="mb-6 text-sm sm:text-[17px] font-medium text-[#B6B6B6]  text-start lg:text-left">
            Cybersecurity involves protecting systems, networks, and data from
            cyber threats. It ensures confidentiality, integrity, and availability
            of information by employing advanced technologies and practices. By
            safeguarding digital assets, cybersecurity enables businesses to
            operate securely in an interconnected world
          </p>
        </div>
        <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
          <Star_wide />
          <div>

            <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
              Threat Detection
            </h2>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
              Identifying potential vulnerabilities and malicious activities in
              real-time to prevent breaches
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
            <Star_wide />
            <div>

              <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
                Data Protection
              </h2>
              <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
                Encrypting and securing sensitive data against unauthorized access
                or theft
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:flex-row items-center lg:items-start py-2">
            <Star_wide />
            <div>
              <h2 className="text-lg sm:text-xl lg:text-[22px] font-regular mt-2 sm:mt-0 ">
                Incident Response
              </h2>
              <p className="text-sm sm:text-base text-[#B6B6B6] text-start py-2 lg:text-left">
                Responding swiftly to cyberattacks to minimize impact and recover
                systems effectively
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cyber;
