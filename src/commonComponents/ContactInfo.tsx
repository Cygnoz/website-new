import React from "react";

interface ContactInfoItem {
  icon: string;
  text: string;
  iconHeight?: number;
}

interface ContactSectionProps {
  background: string;
  title: string;
  subtitle: string;
  contactInfo: ContactInfoItem[];
}

const ContactSection: React.FC<ContactSectionProps> = ({
  background,
  title,
  subtitle,
  contactInfo,
}) => {
  return (
    <section
      className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[8rem] h-[294px] "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section */}
      <div className="text-left">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#3E4F65] mb-3">
          {title}
        </h2>
        <h2 className="text-3xl lg:text-5xl font-bold text-[#3E4F65]">
          {subtitle}
        </h2>
      </div>

      {/* Right Section */}
      <div className="text-center lg:text-left">
        <h2 className="text-xl lg:text-2xl font-bold text-[#3E4F65] mb-4">
          Contact Info
        </h2>
        <div className="flex flex-col  md:flex-row justify-between gap-6">
          <div>
            {contactInfo.map((info, index) => (
              <div className="flex items-center lg:mb-4" key={index}>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">
                    <img
                      src={info.icon}
                      alt=""
                      className={`w-[20px] h-[${info.iconHeight || 20}px]`}
                    />
                  </span>
                  <span className="text-gray-700">{info.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-gray-700">
              Assistance hours: <br /> Monday – Friday 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
