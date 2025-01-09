import Star_wide from "../../assets/Icons/Star_wide"
import bgGrid from "../../assets/Images/bgGrid.svg"
import sewenex from "../../assets/Icons/sewnexButton.svg"
import tic from "../../assets/Icons/ticIcon.svg"
import sewenexImg from "../../assets/Images/sewnexProduct.svg"
import bilbizzvideo from "../../assets/Videos/billbizz.mp4"
import swenexvideo from "../../assets/Videos/Sewnex_1.mp4"
import salonexvideo from "../../assets/Videos/Elevate salon operations with comprehensive tools for seamless management and satisfaction..mp4"
import nexdvideo from "../../assets/Videos/Precision management for car detailing studios, ensuring exceptional workflow and service..mp4"
import frameSewenex from "../../assets/Images/framesewenex.jpg";
import bilbizzIcone from "../../assets/Icons/billbizIcon.svg"
import bilbizzImg from "../../assets/Images/bilbizzImgp.svg"
import frameBilbizz from "../../assets/Images/billbizzImg2.svg";
import frameSalonex from "../../assets/Images/salonexframeo.jpg";
import SalonexImg from "../../assets/Images/saloneximg.svg";
import salonexIcone from "../../assets/Icons/salonexIcono.jpg"
import framenexd from "../../assets/Images/nexdframeo.jpg";
import nexdImg from "../../assets/Images/nexdImg.svg";
import nexdIcone from "../../assets/Icons/6nexd.svg"
import phoneIcon from "../../assets/icons/calll.png";
import mailIcon from "../../assets/icons/emailss.png";
import ContactSection from "../../commonComponents/ContactInfo"
import contactbg from "../../assets/Images/contactinfobg.png";type Props = {}

function Products({ }: Props) {
    const projects = {
        sewnex: {
            point1: "Order Management",
            point2: "Client Measurement Management",
            point3: "Inventory Management",
            point4: "AI Integrated Chat Bot",
            point5: "E-Commerce Integration",
        },
        bilbizz: {
            point1: "Effortless Inventory & Accounting Management",
            point2: "Real Time Customer Insights",
            point3: "Optimized Financial Control",
            point4: "Effortless Reccurring Payments",
            point5: "E-Commerce Integration",
        },
        salonex: {
            point1: "Appointment Scheduling",
            point2: "Staff Working Management",
            point3: "Inventory Management",
            point4: "Consultation form",
            point5: "Whatsapp/SMS Campaign",
        },
        nexd: {
            point1: "Appointment Scheduling ",
            point2: "Job Card Management",
            point3: "Vehicle Tracking",
            point4: "Staff Management",
            point5: "E-Commerce Integration",
        },
    }
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
        <div>
            <div className="">

                {/* sewenx */}
                <section>
                    <div className="bg-[#0F0F12]">
                        <div
                            style={{
                                backgroundImage: `url(${bgGrid})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "auto",
                            }}
                        >
                            <div className="p-8 md:p-16">
                                <p className="flex gap-2 mt-10 px-3">
                                    <Star_wide />
                                    <span className="text-[#6FB7FF] text-[14px] font-[12px] py-2">
                                        OUR PROJECTS
                                    </span>
                                </p>
                                <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8">
                                    {/* Left Content */}
                                    <div className="w-full lg:w-[60%]">
                                        <img src={sewenex} className="py-5" alt="" loading="lazy" />
                                        <p className="text-white text-[32px] md:text-[42px] leading-tight">
                                            Comprehensive Boutique <br /> Software with POS and Analytics
                                        </p>
                                        <p className="text-white py-5">
                                            Are you passionate about technology and looking for a challenging
                                            and rewarding career? Cygnoz offers a dynamic and collaborative
                                            work environment where you can grow and learn alongside talented
                                            professionals.
                                        </p>
                                    </div>
                                    {/* Right Content */}
                                    <div className="w-full lg:w-auto pe-0 lg:pe-10">
                                        {Object.values(projects.sewnex).map((point, index) => (
                                            <p key={index} className="text-white flex gap-2 py-3">
                                                <img src={tic} alt="" />
                                                <span className="py-2">{point}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-10 py-10">
                                    {/* Image Section */}
                                    <div className="flex justify-center">
                                        <img src={sewenexImg} loading="lazy" alt="" />
                                    </div>
                                    {/* Video and Additional Image */}
                                    <div className="flex-1">
                                        <div className="w-full p-5">
                                            <video
                                                className="object-cover transform scale-110 transition-all duration-500 ease-in-out"
                                                src={swenexvideo}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline // Ensures faster initial loading
                                                style={{
                                                    opacity: "100%",
                                                }}
                                            ></video>
                                        </div>
                                        <div className="mt-8 lg:mt-16 cursor-pointer">
                                            <img src={frameSewenex} className="rounded-3xl" loading="lazy" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* bilbizz */}
                <section>
                    <div
                        style={{
                            backgroundImage: `url(${bgGrid})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "auto",
                        }}
                    >
                        <div className="p-8 md:p-16">
                            <div className="flex flex-col lg:flex-row justify-between gap-8">
                                {/* Left Content */}
                                <div className="w-full lg:w-[60%]">
                                    <img src={bilbizzIcone} className="py-5" loading="lazy" alt="" />
                                    <p className="text-[#3E4F65] text-[32px] md:text-[42px] leading-tight">
                                        Efficient Invoicing System
                                    </p>
                                    <p className="text-[#6F7B8A] py-5">
                                        Our Efficient Accounting and Inventory Management system is designed
                                        to streamline your business operations by integrating seamless
                                        accounting functions with robust inventory control. This
                                        comprehensive solution ensures accurate financial reporting,
                                        optimized inventory levels, and enhanced decision-making
                                        capabilities.
                                    </p>
                                </div>
                                {/* Right Content */}
                                <div className="w-full lg:w-auto pe-0 lg:pe-10">
                                    {Object.values(projects.bilbizz).map((point, index) => (
                                        <p key={index} className="text-[#6F7B8A] flex gap-2 py-3">
                                            <img src={tic} alt="" />
                                            <span className="py-2">{point}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-10 py-10">
                                {/* Video Section */}
                                <div className="flex-1">
                                    <div className="w-full p-5">
                                        <video
                                            className="object-cover transform scale-110 transition-all duration-500 ease-in-out"
                                            src={bilbizzvideo}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline // Ensures faster initial loading
                                            style={{
                                                opacity: "100%",
                                            }}
                                        ></video>
                                    </div>
                                    <div className="mt-8 lg:mt-[5rem] cursor-pointer">
                                        <img src={frameBilbizz} className="rounded-3xl" loading="lazy" alt="" />
                                    </div>
                                </div>
                                {/* Image Section */}
                                <div className="w-full lg:w-[50%] flex justify-center">
                                    <img src={bilbizzImg} loading="lazy" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* salonex */}
                <section>
                    <div className="bg-[#0F0F12]">
                        <div
                            style={{
                                backgroundImage: `url(${bgGrid})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "auto",
                            }}
                        >
                            <div className="p-8 md:p-16">
                                {/* Top Section */}
                                <div className="flex flex-col lg:flex-row justify-between gap-8">
                                    {/* Left Content */}
                                    <div className="w-full lg:w-[60%]">
                                        <img src={salonexIcone} loading="lazy" className="py-5 rounded w-24" alt="" />
                                        <p className="text-white text-[32px] md:text-[42px] leading-tight">
                                            A New Standard in Beauty and <br /> Wellness Management
                                        </p>
                                        <p className="py-5 text-white">
                                            Salonex is an all-encompassing ERP system tailored for beauty salons and spas, designed to enhance business operations and client satisfaction. Its modules with an AI-integrated chatbot, seamless e-commerce integration, and comprehensive staff salary and wage management, Salonex transforms your business, boosting efficiency, client engagement, and overall profitability.
                                        </p>
                                    </div>
                                    {/* Right Content */}
                                    <div className="w-full lg:w-auto pe-0 lg:pe-10">
                                        {Object.values(projects.salonex).map((point, index) => (
                                            <p key={index} className="text-white flex gap-2 py-3">
                                                <img src={tic} loading="lazy" alt="" />
                                                <span className="py-2">{point}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                {/* Bottom Section */}
                                <div className="flex flex-col lg:flex-row gap-10 py-10">
                                    {/* Image Section */}
                                    <div className="w-full lg:w-auto">
                                        <img src={SalonexImg} loading="lazy" alt="" />
                                    </div>
                                    {/* Video Section */}
                                    <div className="flex-1">
                                        <div className="w-full p-5">
                                            <video
                                                className="object-cover transform scale-110 transition-all duration-500 ease-in-out"
                                                src={salonexvideo}
                                                autoPlay
                                                loop
                                                muted
                                                style={{
                                                    opacity: "100%",
                                                }}
                                                playsInline // Ensures faster initial loading
                                            ></video>
                                        </div>
                                        <div className="mt-8 lg:mt-16 cursor-pointer">
                                            <img src={frameSalonex} loading="lazy" className="rounded-3xl" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* nexd */}
                <section>
                    <div
                        style={{
                            backgroundImage: `url(${bgGrid})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "auto",
                        }}
                    >
                        <div className="p-8 md:p-16">
                            <div className="flex flex-col lg:flex-row justify-between gap-8">
                                {/* Left Content */}
                                <div className="w-full lg:w-[60%]">
                                    <img src={nexdIcone} className="py-5" loading="lazy" alt="" />
                                    <p className="text-[#3E4F65] text-[32px] md:text-[42px] leading-tight">
                                        Automate all-in-one <br /> management platform
                                    </p>
                                    <p className="text-[#6F7B8A] py-5">
                                        Are you passionate about technology and looking for a challenging and rewarding career? Cygnoz offers a dynamic and collaborative work environment where you can grow and learn alongside talented professionals
                                    </p>
                                </div>
                                {/* Right Content */}
                                <div className="w-full lg:w-auto pe-0 lg:pe-10">
                                    {Object.values(projects.nexd).map((point, index) => (
                                        <p key={index} className="text-[#6F7B8A] flex gap-2 py-3">
                                            <img src={tic} alt="" />
                                            <span className="py-2">{point}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-10 py-10">
                                {/* Video Section */}
                                <div className="flex-1">
                                    <div className="w-full p-5">
                                        <video
                                            className="object-cover transform scale-110 transition-all duration-500 ease-in-out"
                                            src={nexdvideo}
                                            autoPlay
                                            loop
                                            muted
                                            style={{
                                                opacity: "100%",
                                            }}
                                            playsInline // Ensures faster initial loading
                                        ></video>
                                    </div>
                                    <div className="mt-8 lg:mt-[5rem] cursor-pointer">
                                        <img src={framenexd} loading="lazy" className="rounded-3xl" alt="" />
                                    </div>
                                </div>
                                {/* Image Section */}
                                <div className="w-full lg:w-[50%] flex justify-center">
                                    <img src={nexdImg} loading="lazy" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <ContactSection
                        background={contactbg}
                        title="We are always"
                        subtitle="happy to assist you."
                        contactInfo={contactInfo}
                    />              
                      </section>
            </div>
        </div>
    )
}

export default Products