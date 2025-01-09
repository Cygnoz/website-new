import banner from "../../assets/Images/grids.svg" // Adjust the path as necessary
import clients from "../../assets/icons/clients.svg"
import star from "../../assets/icons/AMk1eXIzzjYQwO3lBV61vl7c819FzRa89v0MlUZRrlmkPREt0rSJxD7kd2TM3N9M1-jlqRLppXI2fo40tSpVxw 1.svg"
import bannervideo from "../../assets/icons/343f2ae5-cc22-4bf5-98d2-59327775cd9b.mp4"
import "./Banner.css"

function Banner() {
  return (
    <>
      <div className="relative w-full lg:h-[730px]  h-[830px] overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute  pt-9">
          <video
            className="w-[1446px] lg:h-[700px] h-[830px] object-cover transform scale-110 transition-all duration-500 ease-in-out"
            src={bannervideo}
            autoPlay
            loop
            muted
            playsInline // Ensures faster initial loading
            style={{
              opacity: "100%",
              transform: "scale(1.2)",
            }}
          ></video>
        </div>

        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "100%",
          }}
        ></div>
        <div
          className="absolute inset-0 z-10 "
          style={{
            background: "radial-gradient(circle at top, #0475C6 10%, black 50%)",
            opacity: "80%",
          }}
        ></div>

        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center   text-white z-20">
          {/* Tagline */}

          <button className="button">
            <div className="dots_border"></div>
            <img className="text_button" loading="lazy" src={star} alt="" />
            <span className="text_button">Engineering your Business for the World</span>
          </button>

          {/* Title */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 font-extralight">
            Empowering Businesses with <br />
            <span className="bg-gradient-to-r from-[#45B4FF] via-[#BAFFED] to-[#84CCFF] bg-clip-text text-transparent font-black">Next-Gen Technology</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#FFFFFF] text-opacity-80 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl mb-6">Harness the power of AI, data, and cloud to lead your industry</p>

          {/* Call-to-Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="bg-[#0099F8] text-white px-4 sm:px-8 py-3 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-blue-400 transition">Contact Us</button>

            {/* Trust Section */}
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left mt-4 sm:mt-0">
              <img
                src={clients}
                alt="Clients"
                loading="lazy"
                // className="sm:w-10 h-8 sm:h-10"
              />
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white text-opacity-80">
                Trusted by Over +20k
                <br />
                Clients in India
              </p>
            </div>
            {/* Video Layer */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
