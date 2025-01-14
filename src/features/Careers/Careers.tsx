import BackgroundGrid from "../../assets/Reusable_Images/BackgroundGrid"
import Wide from "../../assets/Icons/Wide"
import career1 from "../../assets/Images/Frame 3.svg"
import career2 from "../../assets/Images/Frame 4.svg"
import career3 from "../../assets/Images/Frame 6.svg"
import rightarrow from "../../assets/Icons/rightArrow.png"
import CustomButton from "../../commonComponents/CustomButton"
import line from "../../assets/Images/Vector 211.svg"
import angledarrow from "../../assets/Images/material-symbols--location-on-outline-rounded 1.svg"
import location from "../../assets/Images/location.svg"

import img1 from '../../assets/Images/Img 1.jpg'
import img2 from '../../assets/Images/Text.jpg'
import img3 from '../../assets/Images/Img 3.jpg'
import img4 from '../../assets/Images/Img 4.jpg'
import img5 from '../../assets/Images/Img 4 (1).jpg'

function Careers() {
  return (
    <div className="relative w-full min-h-screen mt-20">
      {/* Background Grid */}
      <BackgroundGrid width="100%" height="100%" />

      <div className="mx-5">
        <div className="block md:flex 2xl:grid grid-cols-2  gap-12 p-4">
          {/* Left Section */}
          <div className="">
            <div className="p-4 mt-5 flex w-full">
              <div className="flex justify-start">
                <Wide />
                <p className="font-questrial font-thin text-[#0380CE] flex justify-center items-center px-2">CAREERS</p>
              </div>
            </div>

            <div className="p-4 justify-start flex">
              <h1 className="font-gilroy text-[#3E4F65] text-4xl md:text-5xl font-extrabold leading-tight max-w-6xl mb-6">
                Be part of our <br /> mission
              </h1>
            </div>

            <div className="px-4 justify-start flex">
              <p className="text-[#6F7B8A] text-xl">
                At Cygnoz, we're more than just a tech company. <br />
                We're a community of passionate innovators, <br />
                problem-solvers, and dreamers, united by a <br />
                shared vision to push the boundaries of <br />
                technology.
              </p>
            </div>
            <div className="px-4 mt-3 justify-start flex">
              <button className="bg-[#0099F8] font-gilroy text-white font-thin py-2 px-6 rounded-full flex items-center gap-2 shadow-md hover:bg-[#0089f9] hover:shadow-lg ease-in-out">
                Current Openings
                <span className="text-lg justify-center flex">
                  {" "}
                  <img src={rightarrow} className="w-5 h-6 justify-center flex" loading="lazy" alt="" />{" "}
                </span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative ms-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Main large image */}
              <div className="col-span-2">
                <img src={career1} alt="Career Image 1" loading="lazy" className="w-full h-full object-cover rounded-3xl" />
              </div>

              {/* Right side smaller images */}
              <div className="md:col-span-1 space-y-4">
                <div>
                  <img src={career2} alt="Career Image 2" loading="lazy" className="w-full object-cover rounded-xl" />
                </div>
                <div>
                  <img src={career3} alt="Career Image 3" loading="lazy" className="w-full object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* we're hiring */}

      <section id="vacancies">
        <div className="bg-[#F5FAFC] ">
          <div className="mx-7">

          
          <div className="p-4 mt-5 flex w-full">
            <div className="flex justify-start mt-7">
              <Wide />
              <p className="font-questrial font-thin text-[#0380CE] flex justify-center items-center px-2">We're hiring</p>
            </div>
          </div>

          <div className="p-4 justify-start flex">
            <h5 className="font-gilroy text-[#3E4F65]  md:text-4xl font-semibold leading-tight max-w-6xl mb-6">Be part of something Great</h5>
          </div>

          <div className="flex justify-start px-4">
            <p className="font-gilroy text-gray-600">
              Are you passionate about technology and looking for a challenging and rewarding career? Cygnoz offers a dynamic and collaborative <br /> work environment where you can grow and learn alongside talented professionals
            </p>
          </div>
          <div className="px-4 mt-5 flex flex-wrap justify-start gap-2">
            <CustomButton
              bgColor="#0099F8"
              hoverBgColor="#0089f9"
              text="View All"
            // icon={rightarrow}
            />

            <button className="bg-transparent font-gilroy text-[#0099F8] font-thin py-2 px-6 border-2 border-[#0099F8] rounded-full flex items-center gap-2 shadow-md hover:shadow-lg ease-in-out">Development</button>

            <button className="bg-transparent font-gilroy text-[#0099F8] font-thin py-2 px-6 border-2 border-[#0099F8] rounded-full flex items-center gap-2 shadow-md hover:shadow-lg ease-in-out">Design</button>

            <button className="bg-transparent font-gilroy text-[#0099F8] font-thin py-2 px-6 border-2 border-[#0099F8] rounded-full flex items-center gap-2 shadow-md hover:shadow-lg ease-in-out">Cloud</button>

            <button className="bg-transparent font-gilroy text-[#0099F8] font-thin py-2 px-6 border-2 border-[#0099F8] rounded-full flex items-center gap-2 shadow-md hover:shadow-lg ease-in-out">Data Analytics</button>

            <button className="bg-transparent font-gilroy text-[#0099F8] font-thin py-2 px-6 border-2 border-[#0099F8] rounded-full flex items-center gap-2 shadow-md hover:shadow-lg ease-in-out">Cyber Security</button>

            <button className="bg-transparent font-gilroy text-[#0099F8] font-thin py-2 px-6 border-2 border-[#0099F8] rounded-full flex items-center gap-2 shadow-md hover:shadow-lg ease-in-out">Marketing</button>

            <button className="bg-transparent font-gilroy text-[#0099F8] font-thin py-2 px-6 border-2 border-[#0099F8] rounded-full flex items-center gap-2 shadow-md hover:shadow-lg ease-in-out">Sales</button>
          </div>

          {/*JOBS Available  */}
          <div className="flex justify-center px-4 mt-10">
            <img src={line} alt="Horizontal Line" className="w-10/12" />
          </div>

          {/* frontend dev */}
          <div className="w-full p-6 bg-transparent rounded-lg ">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-gilroy font-normal text-[#3E4F65]">Front-End Developer</h2>
              <div className="flex">
                <button className="text-[#3E4F65] font-medium flex items-center">
                  Apply
                  <img src={angledarrow} alt="" className="ml-2" /> {/* Add margin to space out the image */}
                </button>
              </div>
            </div>

            <p className="text-gray-600 mb-4">Build stunning user interfaces with HTML, CSS, and JavaScript. Work with design teams to create pixel-perfect experiences. Optimize for performance and cross-browser compatibility.</p>

            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6F7B8A] bg-gray-50">
                <span className="flex gap-1 text-sm text-gray-600">
                  Full Time <img src={location} alt="location" />{" "}
                </span>
              </div>

              <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6F7B8A] bg-">
                <span className="flex gap-1 text-sm text-gray-600">
                  100% Remote <img src={location} alt="location" />{" "}
                </span>
              </div>
            </div>
          </div>
          {/* line */}
          <div className="flex justify-center px-4 mt-10">
            <img src={line} alt="Horizontal Line" className="w-10/12" />
          </div>

          {/* backend dev */}
          <div className="w-full p-6 bg-transparent rounded-lg ">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-gilroy font-normal text-[#3E4F65]">Backend-End Developer</h2>
              <div className="flex">
                <button className="text-[#3E4F65] font-medium flex items-center">
                  Apply
                  <img src={angledarrow} alt="" className="ml-2" /> {/* Add margin to space out the image */}
                </button>
              </div>
            </div>

            <p className="text-gray-600 mb-4">Develop server-side logic and APIs to support front-end applications</p>

            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6F7B8A] bg-gray-50">
                <span className="flex gap-1 text-sm text-gray-600">
                  Full Time <img src={location} alt="location" />{" "}
                </span>
              </div>

              <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6F7B8A] bg-">
                <span className="flex gap-1 text-sm text-gray-600">
                  In Office <img src={location} alt="location" />{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center px-4 mt-10">
            <img src={line} alt="Horizontal Line" className="w-10/12" />
          </div>

          {/* fullstack dev */}
          <div className="w-full p-6 bg-transparent rounded-lg ">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-gilroy font-normal text-[#3E4F65]">FullStack Developer</h2>
              <div className="flex">
                <button className="text-[#3E4F65] font-medium flex items-center">
                  Apply
                  <img src={angledarrow} alt="" className="ml-2" /> {/* Add margin to space out the image */}
                </button>
              </div>
            </div>

            <p className="text-gray-600 mb-4">Design and develop both front-end and back-end components of web applications</p>

            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6F7B8A] bg-gray-50">
                <span className="flex gap-1 text-sm text-gray-600">
                  Full Time <img src={location} alt="location" />{" "}
                </span>
              </div>

              <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6F7B8A] bg-">
                <span className="flex gap-1 text-sm text-gray-600">
                  100% Remote <img src={location} alt="location" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center px-4 mt-10">
            <img src={line} alt="Horizontal Line" className="w-10/12" />
          </div>

          {/* fullstack dev */}
          <div className="w-full p-6 bg-transparent rounded-lg ">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-gilroy font-normal text-[#3E4F65]">Mobile-App Developer</h2>
              <div className="flex">
                <button className="text-[#3E4F65] font-medium flex items-center">
                  Apply
                  <img src={angledarrow} alt="" className="ml-2" /> {/* Add margin to space out the image */}
                </button>
              </div>
            </div>

            <p className="text-gray-600 mb-4">Design, develop, and test mobile applications for iOS and Android platforms</p>

            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6F7B8A] bg-gray-50">
                <span className="flex gap-1 text-sm text-gray-600">
                  Full Time <img src={location} alt="location" />{" "}
                </span>
              </div>

              <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6F7B8A] bg-">
                <span className="flex gap-1 text-sm text-gray-600">
                  100% Remote <img src={location} alt="location" />{" "}
                </span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>



      {/* images // life @ cygnoz */}

      <section>

        <div className="flex w-full p-4 bg-white justify-center items-center">
          <div className="text-center p-2">
            <h1 className=" text-[#3E4F65] text-[48px] font-regular leading-tight max-w-6xl mb-6 mx-auto">
              Life @ CYGNOZ
            </h1>
            <p className="text-[#6F7B8A] p-4">
              At Cygnoz, we foster a vibrant and collaborative environment where innovation meets excellence. Our team is a close-knit community of passionate professionals dedicated to delivering cutting-edge solutions in the cloud computing space.
            </p>
          </div>
        </div>



        <div className="container mx-auto bg-white p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

            {/* Large group selfie - spans 2 cols */}
            <div className="col-span-1 sm:col-span-2 rounded-2xl overflow-hidden">
              <img src={img1} loading="lazy" alt="" className="w-full h-full object-cover" />
            </div>

            {/* Blue box image - reduced height */}
            <div className="rounded-2xl overflow-hidden h-48 lg:h-64">
              <img src={img2} loading="lazy" alt="" className="w-full h-64 object-cover" />
            </div>

            {/* Logo */}
            <div className="rounded-2xl overflow-hidden">
              <img src={img4} loading="lazy" alt="" className="w-full object-cover" />
            </div>

            {/* Frame photo */}
            <div className="rounded-2xl overflow-hidden">
              <img src={img3} loading="lazy" alt="" className="w-full object-cover" />
            </div>

            {/* Group photo - positioned up */}
            <div className="rounded-2xl overflow-hidden  lg:-mt-40">
              <img src={img5} loading="lazy" alt="" className="w-full object-cover -mb-10" />
            </div>
          </div>
        </div>





      </section>













    </div>
  )
}

export default Careers
