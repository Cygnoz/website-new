import indiagate from "../../assets/icons/india-gate_7667695 1.svg";
import contactbg from "../../assets/Images/contactinfobg.png";
import burj from "../../assets/icons/noun-burj-khalifa-107653 1.svg";
// import doha from "../../assets/icons/noun-burj-khalifa-107653 1 (1).svg";
import loc from "../../assets/icons/material-symbols--location-on-outline-rounded 1.svg";
import contactimg from "../../assets/Images/contactimg.svg";
import arrow from "../../assets/icons/rightArrow.png";
import fb from "../../assets/social/fb.png";
import insta from "../../assets/social/insta.png";
import tweet from "../../assets/social/twitter.png";
import phoneIcon from "../../assets/icons/calll.png";
import mailIcon from "../../assets/icons/emailss.png";

import Star_wide from "../../assets/Icons/Star_wide";
import ContactSection from "../../commonComponents/ContactInfo";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: phoneIcon,
      text: "+91 9544431166",
    },
    {
      icon: mailIcon,
      text: "notify@cygnonex.com",
      iconHeight: 16,
    },
  ];
  return (
    <div className=" pt-10">
      <main>
        <section className="bg-white pt-5 shadow rounded-lg">
          <div className="flex justify-center lg:justify-start items-center space-x-2 mb-4 px-8">
            <Star_wide />
            <h3 className="text-sm sm:text-lg font-medium text-blue-300 tracking-wide">
              CONTACT
            </h3>
          </div>
          <div className="flex flex-col md:flex-row justify-between px-8">
            <h2 className="text-5xl font-bold mb-6 text-[#3E4F65]">
              Get in touch with us. We're <br /> here to assist you.
            </h2>
            <div className="flex lg:flex-col gap-2 items-start md:items-end">
              <a href=" https://www.facebook.com/cygnotechlabs/">
                <img
                  src={fb}
                  alt=""
                  className="rounded-full h-[50px] w-[50px] hover:bg-gradient-to-r from-[#1877f2] to-[#3b5998] mb-2" // Facebook gradient
                />
              </a>
              <a href="https://www.instagram.com/cygnoz_/">
                <img
                  src={insta}
                  alt=""
                  className="rounded-full h-[50px] w-[50px] hover:bg-gradient-to-r from-[#f58529] via-[#dd2a7b] via-[#8134af] to-[#515bd4] mb-2" // Instagram gradient
                />
              </a>
              <img
                src={tweet}
                alt=""
                className="rounded-full h-[50px] w-[50px] hover:bg-gradient-to-r from-[#1da1f2] to-[#00aced] mb-2" // Twitter gradient
              />
            </div>
          </div>

          <div className="p-8 flex flex-col lg:flex-row gap-8">
            <div className=" ">
              <img src={contactimg} alt="Contact" className="" />
            </div>
            <div className=" lg:w-[743px] lg:h-[506px] lg:gap-[48px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="h-[78px]">
                  <label className="block px-1 text-18px text-[#3E4F65]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="lg:m-4 m-2 w-full border-0 border-b border-[#CACACA] focus:border-blue-500 focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="h-[78px]">
                  <label className="block px-1 text-18px text-[#3E4F65]">
                    Phone Number (optional)
                  </label>
                  <input
                    type="text"
                    className="lg:m-4 m-2 w-full border-0 border-b border-[#CACACA] focus:border-blue-500 focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div className="h-[78px]">
                <label className="block px-1 text-18px text-[#3E4F65]">
                  Email
                </label>
                <input
                  type="email"
                  className="lg:m-4 m-2 w-full border-0 border-b border-[#CACACA] focus:border-blue-500 focus:ring-0 focus:outline-none"
                />
              </div>
              <div className="h-[146px]">
                <label className="block px-1 text-18px text-[#3E4F65]">
                  Message
                </label>
                <textarea
                  name="message"
                  className="lg:m-4  w-full border-0 border-b border-[#CACACA] focus:border-blue-500 focus:ring-0 focus:outline-none"
                ></textarea>
              </div>
              <div className="pt-8">
                <button className="bg-[#0099F8] flex justify-center items-center py-2 px-4 gap-1 rounded-3xl font-light text-xl text-white w-full sm:w-[290px] h-[60px]">
                  Leave us a Message{" "}
                  <img src={arrow} className="w-6 mt-[2px]" alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <ContactSection
          background={contactbg}
          title="We are always"
          subtitle="happy to assist you."
          contactInfo={contactInfo}
        />

        <section className="bg-black p-9 flex justify-evenly flex-wrap">
          <div className="max-w-sm bg-[#EBFCFF] shadow h-[459px] w-[90%] sm:w-[390px] mb-8">
            <div className="flex justify-center p-4 h-[156px]">
              <img
                className="rounded-t-lg object-cover"
                src={indiagate}
                alt="India Gate"
              />
            </div>
            <div className="flex gap-4 bg-[#1F1F26] h-[303px] py-10">
              <div className="rounded-full p-4">
                <img
                  className="bg-[#EBFCFF] object-cover rounded-full w-[56px] h-[56px]"
                  src={loc}
                  alt="Location"
                />
              </div>
              <div>
                <h6 className="text-[28px] font-normal leading-[33.6px] text-left text-white">
                  India
                </h6>
                <p className="text-[#E7E7E7] py-4">
                  NM Arcade, Near All India <br /> Radio(AIR), NGO Quarters,{" "}
                  <br />
                  Kochi, Kerala, India
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-[#C8EAFF] shadow h-[459px] w-[90%] sm:w-[390px] mb-8">
            <div className="flex justify-center p-4 h-[156px]">
              <img
                className="rounded-t-lg object-cover"
                src={burj}
                alt="Burj Khalifa"
              />
            </div>
            <div className="flex gap-4 bg-[#1F1F26] h-[303px] py-10">
              <div className="rounded-full p-4">
                <img
                  className="bg-[#EBFCFF] object-cover rounded-full w-[56px] h-[56px]"
                  src={loc}
                  alt="Location"
                />
              </div>
              <div>
                <h6 className="text-[28px] font-normal leading-[33.6px] text-left text-white">
                  Dubai
                </h6>
                <p className="text-[#E7E7E7] py-4 ">
                  Business Tower - Office <br /> 809 Zaheel1 - 28th St - Al{" "}
                  <br /> Nahda 1 - Dubai - UAE
                </p>
              </div>
            </div>
          </div>

          {/* <div className="max-w-sm bg-[#E2E4FF] shadow h-[459px] w-[90%] sm:w-[390px] mb-8">
            <div className="flex justify-center p-4 h-[156px]">
              <img
                className="rounded-t-lg object-cover"
                src={doha}
                alt="Doha"
              />
            </div>
            <div className="flex gap-4 bg-[#1F1F26] h-[303px] py-10">
              <div className="rounded-full p-4">
                <img
                  className="bg-[#E2E4FF] object-cover rounded-full w-[56px] h-[56px]"
                  src={loc}
                  alt="Location"
                />
              </div>
              <div>
                <h6 className="text-[28px] font-normal leading-[33.6px] text-left text-white">
                  Qatar
                </h6>
                <p className="text-[#E7E7E7] py-4">
                  PO Box 25422, Al Hithmi
                  <br /> Building Corniche road. <br />
                  Doha, Qatar
                </p>
              </div>
            </div>
          </div> */}
        </section>

        <section className="flex justify-center items-center bg-[#0099F8] text-white py-8 sm:py-12 lg:h-[396px]">
          <div className="flex flex-col sm:flex-row   sm:gap-10 md:gap-20 w-[90%] max-w-5xl">
            <div className="w-full sm:w-1/2">
              <h2 className="text-xl lg:text-3xl sm:text-2xl md:text-2xl font-bold mb-3 sm:mb-4">
                Subscribe to our Newsletter
              </h2>
              <p className="text-sm sm:text-base mb-4 leading-relaxed font-extralight">
                Subscribe for Updates: Stay informed about the latest investor
                updates, financial results, and announcements by subscribing to
                our newsletter.
              </p>
            </div>
            <form className="flex  p-4 sm:p-[27px]  rounded-md  sm:w-auto">
              <div className="relative w-full">
                <input
                  type="email"
                  className="w-[370px] p-4 sm:p-2  bg-[#FFFFFF1A] bg-opacity-0 focus:outline-none  text-gray-800 placeholder-white lg:w-[474px] lg:h-[84px] rounded-full"
                  placeholder="  Enter Your Email"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-1 transform -translate-y-1/2 border bg-white text-[#0099F8] p-4 lg:-mx-2 -mx-4 lg:h-[84px]  lg:p-7 text-sm rounded-r-full hover:bg-blue-100"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
