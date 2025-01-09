import BackgroundGrid from "../../assets/Reusable_Images/BackgroundGrid"
import Wide from "../../assets/Icons/Wide"
import aboutus1 from "../../assets/Reusable_Images/aboutus1.jpg"
import aboutus2 from "../../assets/Reusable_Images/aboutus2.png"
import aboutus3 from "../../assets/Reusable_Images/aboutus3.jpg"
import aboutus4 from "../../assets/Reusable_Images/aboutus4.png"
import aboutus5 from "../../assets/Reusable_Images/aboutus5.png"
import card1 from "../../assets/Images/Group 110.svg"
import card2 from "../../assets/Images/Group 110 (1).svg"
import card3 from "../../assets/Images/Group 110 (2).svg"
import card4 from "../../assets/Images/Group 110 (3).svg"
import card5 from "../../assets/Images/Group 110 (4).svg"
import circles from '../../assets/Images/Group 113.svg'

function AboutUs() {
  const images = [aboutus1, aboutus2, aboutus3, aboutus4, aboutus5]

  return (
    <div className="relative w-full min-h-screen mt-20">
      {/* Background Grid */}
      <BackgroundGrid width="100%" height="100%" />

      {/* Content Section */}
      <div className=" flex flex-col items-center justify-center py-10 px-2">
        {/* ABOUT US Heading */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Wide color="#2b9cff" size="44" />
          <p className="text-[#2b9cff] text-lg font-questrial uppercase tracking-wide">About Us</p>
        </div>

        {/* Main Heading */}
        <h1 className="font-gilroy text-center text-[#3E4F65] justify-center text-4xl md:text-5xl font-extrabold leading-tight max-w-6xl mb-6 ">Empowering Businesses, Transforming</h1>

        <h1 className="font-gilroy text-center text-[#3E4F65] text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">Industries</h1>

        {/* Subtext */}
        <p className="text-center text-[#3E4F65] text-base font-gilroy md:text-lg leading-relaxed max-w-4xl mb-8">Cygnoz is a leading technology solutions provider dedicated to empowering businesses through innovation. With a team of highly skilled experts, we deliver cutting-edge solutions tailored to meet the unique needs of our clients.</p>

        {/* Contact Us Button */}
        <button className="bg-[#2b9cff] text-white font-gilroy font-thin  py-3 px-6 rounded-full hover:bg-[#026BB0] transition duration-200">Contact Us</button>
      </div>
      <div className="container mx-auto p-4">
        {/* For Mobile View (First Two Images Horizontally Aligned) */}
        <div className="flex items-center gap-4 overflow-hidden md:hidden">
          <div className="relative w-[50%] aspect-[3/4] overflow-hidden rounded-lg">
            <img
              src={images[0]} // First Image
              alt="Image 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative w-[50%] aspect-[3/4] overflow-hidden rounded-lg">
            <img
              src={images[1]} // Second Image
              alt="Image 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* For Desktop View (All Images in Grid) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative w-full aspect-[3/4] overflow-hidden rounded-lg transform ${index % 2 === 0 ? "-translate-y-4" : "translate-y-4"
                }`}
            >
              <img
                src={src}
                alt={`Grid image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>



      {/* guidelines and priciples section */}

      <section className="bg-[#0380CE] mt-40">
        <div className="container px-8 md:px-20 lg:px-40 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* <h1 className=" text-[#BEF3FF] text-xl sm:text-2xl md:text-[40px]  max-w-full md:max-w-[500px] whitespace-pre-line">
              {"Our Guiding Principles:\nA Commitment to\nExcellence"}
            </h1> */}
            <h1 className="text-[#BEF3FF] text-xl  text-[45px] max-w-full md:max-w-[500px]  leading-tight">
            Our Guiding Principles: <br /> A Commitment to Excellence
            </h1>
            
            <p className="text-white text-justify mt-1 text-sm md:text-base max-w-full md:max-w-[400px]">
              At Cygnos we're driven by a set of core values that guide our work and shape our culture. These values are the foundation of our success and commitment to excellence in everything we do.
            </p>
          </div>
        </div>

        {/* Cards Row 1 */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 px-8 md:px-20 lg:px-40">
          <div className="w-full sm:w-auto py-6">
            <img src={card1} loading="lazy" alt="" className="mx-auto sm:mx-0" />
            <h1 className="text-white font-questrial mt-2 font-bold text-center sm:text-left">Innovation</h1>
            <p className="mt-2 text-white text-center sm:text-left" style={{ whiteSpace: "pre-line" }}>
              {"We embrace innovation and continuously \n seek new ways to improve our services."}
            </p>
          </div>

          <div className="w-full sm:w-auto py-6">
            <img src={card2} loading="lazy" alt="" className="mx-auto sm:mx-0" />
            <h1 className="text-white font-questrial mt-2 font-bold text-center sm:text-left">Excellence</h1>
            <p className="mt-2 text-white text-center sm:text-left" style={{ whiteSpace: "pre-line" }}>
              {"We strive for excellence in everything we\n do, from the smallest detail to the largest\n project"}
            </p>
          </div>

          <div className="w-full sm:w-auto py-6">
            <img src={card3} loading="lazy" alt="" className="mx-auto sm:mx-0" />
            <h1 className="text-white font-questrial mt-2 font-bold text-center sm:text-left">Integrity</h1>
            <p className="mt-2 text-white text-center sm:text-left" style={{ whiteSpace: "pre-line" }}>
              {"We uphold the highest standards of\n honesty, transparency, and ethical behavior"}
            </p>
          </div>
        </div>

        {/* Cards Row 2 */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 px-8 md:px-20 lg:px-40">
          <div className="w-full sm:w-auto py-6">
            <img src={card4}  alt="" loading="lazy" className="mx-auto sm:mx-0" />
            <h1 className="text-white font-questrial mt-2 font-bold text-center sm:text-left">Collaboration</h1>
            <p className="mt-2 text-white text-center sm:text-left" style={{ whiteSpace: "pre-line" }}>
              {"We foster a collaborative environment\n where teamwork and open\n communication thrive"}
            </p>
          </div>

          <div className="w-full sm:w-auto py-6">
            <img src={card5} loading="lazy" alt="" className="mx-auto sm:mx-0" />
            <h1 className="text-white font-questrial mt-2 font-bold text-center sm:text-left">Customer Focus</h1>
            <p className="mt-2 text-white text-center sm:text-left" style={{ whiteSpace: "pre-line" }}>
              {"We prioritize the needs of our clients and\n are committed to delivering exceptional\n value"}
            </p>
          </div>
        </div>

        {/* Circles */}
        <div className="flex justify-end -mt-48 lg:-mt-96 -z-10">
          <img src={circles} loading="lazy" alt="" className="w-3/4 md:w-1/2 lg:w-1/3" />
        </div>
      </section>


    </div>
  )
}

export default AboutUs
