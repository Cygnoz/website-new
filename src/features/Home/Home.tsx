import Star_wide from "../../assets/Icons/Star_wide";
import backgroundImg from "../../assets/Images/Rectangle.svg";
import star from "../../assets/Icons/Star 1.svg"
import IMG_1 from "../../assets/Reusable_Images/IMG_1";
import IMG_2 from "../../assets/Reusable_Images/IMG_2";
import IMG_3 from "../../assets/Reusable_Images/IMG_3";
import IMG_4 from "../../assets/Reusable_Images/IMG_4";
import IMG_6 from "../../assets/Reusable_Images/IMG_6";
import IMG_7 from "../../assets/Reusable_Images/IMG_7";
import IMG_5 from "../../assets/Reusable_Images/IMG_5";
import Carousel from "./Carousel ";
import services from "../../assets/Images/servicesbg.svg";
import cloud from "../../assets/Icons/cloud.svg";
import mobile from "../../assets/Icons/mobile.svg";
import analytics from "../../assets/Icons/analytics.svg";
import cyber from "../../assets/Icons/cyber.svg";
import Digital from "../../assets/Icons/digital.svg";
import fullstack from "../../assets/Icons/fullstack.svg";
import process from "../../assets/Images/OurProcessbg.svg";
import OurProcess from "./OurProcess";
import TestimonialsCarousel from "./Testimonials";
import servicescbg from "../../assets/Images/servicescbg.png";

import './home.css'
import Banner from "./Banner";


type Props = {};

function Home({ }: Props) {


    const Services = [
        {
            icon: (cloud),
            p1: "Cloud Engineering",
            p2: "Cloud Engineering design and manages scalable, secure, and efficient solutions "
        }, {
            icon: (mobile),
            p1: "Mobile App Engineering",
            p2: "Our mobile application engineering services deliver robust and scalable apps"
        }, {
            icon: (analytics),
            p1: "Analytics Engineering",
            p2: "Our custom web development covers front-end, band-end, and enterprise solutions-ready for any challenge"
        }, {
            icon: (cyber),
            p1: "Cyber Security",
            p2: "our cybersecurity engineering services fortify businesses against emerging threats"
        }, {
            icon: (Digital),
            p1: "Digital Business",
            p2: "By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform."
        },
    ]

    return (
      <>
      <Banner/>
      <div className="">

{/* About Us Section */}
<section>
    <div
        style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "auto",
        }}
    >
        <div className="px-5 sm:px-10 md:px-20 py-16 flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="w-full lg:w-[60%] mb-10 lg:mb-0">
                <p className="flex gap-2 mt-10">
                    <Star_wide /> <span className="text-[#6FB7FF] text-[14px] font-[12px] py-2">ABOUT US</span>
                </p>
                <h1 className="text-[#3E4F65] text-[32px] sm:text-[40px] md:text-[50px] font-400 py-2.5">
                    Why Companies Choose Cygnoz
                </h1>
                <p className="text-[#6F7B8A] text-[16px] sm:text-[18px] md:text-[20px] font-400 py-3">
                    Cygnoz is a Tier 1 global software solutions company headquartered in Kochi, Kerala, India, established in 2019. Our clientele includes over 200 customers located in the Asia Pacific, the Middle East, including Saudi Arabia. We provide software solutions and technology services to our customers to solve their business problems and assist in growing businesses.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                    <div className="">
                        <p className="text-[#0099F8] text-[32px] sm:text-[42px] font-bold">450
                            <span className="font-extrabold text-[32px] sm:text-[42px]">+</span>
                        </p>
                        <p className="text-[#6F7B8A] text-[16px] sm:text-[18px] font-400">Completed Projects</p>
                    </div>
                    <div className="">
                        <div className="flex  gap-5">
                            {/* <div className="w-[1px] bg-[#6F7B8A] h-10"></div> */}
                            <p className="text-[#0099F8] text-[32px] sm:text-[42px] font-bold">200
                                <span className="font-extrabold text-[32px] sm:text-[42px]">+</span>
                            </p>
                        </div>
                        <p className="text-[#6F7B8A] text-[16px] sm:text-[18px] font-400">Happy Clients</p>
                    </div>
                    <div className="">
                        <div className="flex gap-5">
                            {/* <div className="w-[1px] bg-[#6F7B8A] h-10"></div> */}
                            <p className="flex gap-1 text-[#0099F8] text-[32px] sm:text-[42px] font-bold">4.9
                                <img src={star} alt="" />
                            </p>
                        </div>
                        <p className="text-[#6F7B8A] text-[16px] sm:text-[18px] font-400">Client Rating</p>
                    </div>
                </div>
            </div>

            {/* Right Section (Images) */}
            <div className="w-full lg:w-[40%] grid grid-cols-3 sm:grid-cols-3 gap-4 justify-items-center lg:justify-items-end">
                <div>

                </div>
                <div>
                    <IMG_1 width="160px" height="160px" radius="40px" />
                </div>
                <div>
                    <IMG_2 width="160px" height="160px" radius="40px" />
                </div>
                <div className="w-[120px] h-[120px] rounded-[40px] bg-[#DFEBF3] m-5"></div>
                <div>
                    <IMG_3 width="160px" height="160px" radius="40px" />
                </div>
                <div>
                    <IMG_4 width="160px" height="160px" radius="40px" />
                </div>
                <div>
                    <IMG_5 width="160px" height="160px" radius="40px" />
                </div>
                <div>
                    <IMG_6 width="160px" height="160px" radius="40px" />
                </div>
                <div>
                    <IMG_7 width="160px" height="160px" radius="40px" />
                </div>
            </div>
        </div>
    </div>
</section>


{/* our projects */}
<section>
    <div className="bg-[#F6F6F6] px-5 sm:px-10 md:px-16 lg:px-20 py-16">
        <div className="flex justify-center gap-2">
            <Star_wide />
            <p className="text-[#6FB7FF] text-[12px] sm:text-[14px] font-[12px] py-2">
                OUR PROJECT
            </p>
        </div>
        <h1 className="text-[#3E4F65] text-center text-[32px] sm:text-[40px] md:text-[50px] font-400 py-2.5">
            Empower Your Journey with our <br />
            Seamless Solutions
        </h1>
        <p className="text-[#6F7B8A] text-center text-[16px] sm:text-[18px] font-400 py-3">
            Explore Our Products
        </p>
        <div className="my-5">
            <Carousel />
        </div>
    </div>
</section>


{/* Services */}
<section>
    <div className="bg-[#011321] relative">
        {/* Background with mix-blend-mode */}
        <div
            style={{
                backgroundImage: `url(${services})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                mixBlendMode: "color", // Blending effect only on the background
                opacity: 0.8, // Optional: adjust transparency for better blending
            }}
            className="absolute inset-0"
        ></div>

        {/* Content wrapper */}
        <div className="relative z-10 px-5 sm:px-10 md:px-20 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                    <p className="gap-2 flex items-center">
                        <Star_wide color="#FFFFFF" />
                        <span className="text-[#6FB7FF] text-[14px] sm:text-[16px] py-2.5">
                            SERVICES
                        </span>
                    </p>
                    <h1 className="text-white text-[32px] sm:text-[40px] lg:text-[48px] font-gilroy font-400 py-3">
                        Crafting the <br /> Future, Today
                    </h1>
                </div>
                <div className="text-[#E3E3E3]">
                    <p className=" w-full text-[16px] sm:text-[18px] md:text-[20px] py-10 font-light">
                        We help you to build high-quality digital solutions and products as well as deliver a wide range of related professional services. We are providing world-class service to our clients.
                    </p>
                </div>
                <div
                    style={{
                        backdropFilter: "blur(70px)", // Apply the blur effect
                        WebkitBackdropFilter: "blur(70px)", // Ensure compatibility with Safari
                        border: "0.1px solid transparent",
                        borderImageSource: "linear-gradient(180.37deg, #BAF2FF -18.72%, rgba(6, 128, 250, 0) 113.62%)",
                        borderImageSlice: 1, // Required for border-image to display correctly
                        background: "linear-gradient(180deg, #03192B 0%, rgba(3, 25, 43, 0.1) 100%)",
                        borderRadius: "10px", // Apply rounded corners
                        overflow: "hidden", // Ensures the content respects the radius
                    }}
                >
                    <div
                        style={{
                            backgroundImage: `url(${servicescbg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right",
                            WebkitBackdropFilter: "blur(70px)", // Ensure compatibility with Safari
                            backdropFilter: "blur(70px)", // Apply the blur effect here as well
                            padding: "2.5rem",
                            borderRadius: "10px", // Ensure inner content respects the border radius
                        }}
                    >
                        <img src={fullstack} alt="" />
                        <p className="text-[#E7E7E7] text-[24px] sm:text-[28px] font-bold py-2">
                            Full Stack Engineering
                        </p>
                        <p className="text-[#B6B6B6] text-[16px] sm:text-[18px]">
                            Our custom web development covers front-end, back-end, and enterprise solutions—ready for any challenge.
                        </p>
                    </div>
                </div>

            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {Services.map((service) => (
                    <div
                        key={service.p1}
                        className="backdrop-filter: blur(70px)"
                        style={{
                            border: "0.6px solid transparent",
                            borderImageSource: "linear-gradient(180.37deg, #BAF2FF -18.72%, rgba(6, 128, 250, 0) 113.62%)",
                            borderImageSlice: 1, // Required for border-image to display correctly
                            background: "linear-gradient(180deg, #03192B 0%, rgba(3, 25, 43, 0.1) 100%)",
                            borderRadius: "10px", // Ensures rounded corners
                            overflow: "hidden", // Ensures border respects the radius
                        }}
                    >
                        <div
                            className="p-10 backdrop-filter: blur(70px)"
                            style={{
                                backgroundImage: `url(${servicescbg})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right",
                                WebkitBackdropFilter: "blur(70px)", // Ensures compatibility with Safari
                            }}
                        >
                            <img src={service.icon} alt={service.p1} />
                            <p className="text-[#E7E7E7] text-[20px] sm:text-[24px] font-bold py-2">
                                {service.p1}
                            </p>
                            <p className="text-[#B6B6B6] text-[16px] sm:text-[18px]">
                                {service.p2}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>


{/* Our Process */}
<section>
    <div
        className="px-5 md:px-10 lg:px-20 py-10 md:py-16"
        style={{
            backgroundImage: `url(${process})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
        }}
    >
        <div className="flex justify-center items-center gap-2">
            <Star_wide />
            <p className="text-[#6FB7FF] text-[14px] font-medium py-2">
                OUR PROCESS
            </p>
        </div>

        <h1 className="text-[#3E4F65] text-center text-[28px] md:text-[36px] lg:text-[50px] font-normal py-2.5">
            How We Build Your Solutions
        </h1>

        <p className="text-[#6F7B8A] text-center text-sm md:text-base lg:text-[18px] font-normal py-3">
            Our rigorous development process ensures the delivery of high-quality, reliable, and efficient software solutions.
        </p>

        <div className="pt-5">
            <OurProcess />
        </div>
    </div>
</section>


{/* TESTIMONIALS */}
<section>
    <div
        className="w-full min-h-[800px] bg-opacity-90"
        style={{
            background: "rgba(1, 19, 33, 0.9)",
            backdropFilter: "blur(250px)",
        }}
    >
        <div className="px-5 md:px-10 lg:px-20 py-10 md:py-16">
            <p className="flex items-center gap-2">
                <Star_wide color="#FFFFFF" />
                <span className="text-[#6FB7FF] text-[14px] font-medium">
                    TESTIMONIALS
                </span>
            </p>

            <h1 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-normal py-3">
                Join the Satisfied Customer Club
            </h1>

            <div className="text-[#E3E3E3]">
                <p className="text-sm md:text-base">
                    We help you to build high-quality digital solutions and products as well as deliver a wide range of related <br className="hidden md:block" /> professional services. We are providing world-class service to our clients.
                </p>
            </div>

            <div className="py-5">
                <TestimonialsCarousel />
            </div>
        </div>
    </div>
</section>



</div>
      </>
    );
}

export default Home;
