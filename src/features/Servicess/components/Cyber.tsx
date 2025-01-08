import React from "react";
import cyber from "../../../assets/servisess/cber.gif";
import Star_wide from "../../../assets/Icons/Star_wide";
const Cyber: React.FC = () => {
  return (
    <div className="bg-transparent text-white h-auto flex flex-col lg:flex-row gap-10 justify-center p-5 border-b border-b-slate-600">
      <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
      <img src={cyber} alt="full stack" className="w-[154px] h-[154px] object-cover -mt-7" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight mb-4 lg:mb-0">
          Cyber <br className="hidden lg:block" /> Security
        </h2>
      </div>
      <div className="max-w-full lg:max-w-4xl flex flex-col items-center lg:items-start">
      <h1 className="hidden lg:block text-xl lg:text-3xl font-extralight mb-4">
          Cyber Security
        </h1>
        <p className="mb-6 text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
          Cybersecurity involves protecting systems, networks, and data from
          cyber threats. It ensures confidentiality, integrity, and availability
          of information by employing advanced technologies and practices. By
          safeguarding digital assets, cybersecurity enables businesses to
          operate securely in an interconnected world
        </p>
        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Threat Detection
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Identifying potential vulnerabilities and malicious activities in
              real-time to prevent breaches
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Data Protection
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Encrypting and securing sensitive data against unauthorized access
              or theft
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center lg:items-start mb-2">
              <Star_wide />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight mt-2 sm:mt-0 sm:ml-2">
                Incident Response
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B6B6B6] text-center lg:text-left">
              Responding swiftly to cyberattacks to minimize impact and recover
              systems effectively
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cyber;
