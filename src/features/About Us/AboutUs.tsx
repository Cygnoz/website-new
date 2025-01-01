import BackgroundGrid from "../../assets/Reusable_Images/BackgroundGrid";
import Wide from "../../assets/Icons/Wide";

function AboutUs() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Grid */}
      <BackgroundGrid width="100%" height="100%" />

      {/* Content Section */}
      <div className=" flex flex-col items-center justify-center py-10 px-2">
  {/* ABOUT US Heading */}
  <div className="flex items-center justify-center gap-2 mb-6">
    <Wide color="#0380CE" size="44" />
    <p className="text-[#0380CE] text-lg uppercase tracking-wide">
      About Us
    </p>
  </div>

  {/* Main Heading */}
<h1 className="font-gilroy text-center text-[#3E4F65] justify-center text-4xl md:text-5xl font-extrabold leading-tight max-w-6xl mb-6 ">
  Empowering Businesses, Transforming 
</h1>

  <h1 className="font-gilroy text-center text-[#3E4F65] text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
    Industries
  </h1>

  {/* Subtext */}
  <p className="text-center text-[#3E4F65] text-base md:text-lg leading-relaxed max-w-4xl mb-8">
    Cygnoz is a leading technology solutions provider dedicated to empowering businesses through innovation. With a team of highly skilled experts, we deliver cutting-edge solutions tailored to meet the unique needs of our clients.
  </p>

  {/* Contact Us Button */}
  <button className="bg-[#0380CE] text-white font-gilroy font-thin text-lg py-3 px-6 rounded-full hover:bg-[#026BB0] transition duration-200">
    Contact Us
  </button>
</div>

    </div>
  );
}

export default AboutUs;
