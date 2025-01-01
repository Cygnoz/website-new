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
        <div className="">
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
                    <div className="px-20 py-16  flex">
                        <div className="w-[60%]">
                            <p className="flex gap-2 mt-10">
                                <Star_wide /> <span className="text-[#6FB7FF] text-[14px] font-[12px] py-2">ABOUT US</span>
                            </p>
                            <h1 className="text-[#3E4F65] text-[50px] font-400 py-2.5" >
                                Why Companies Choose Cygnoz
                            </h1>
                            <p className="text-[#6F7B8A] text-[20px] font-400 py-3">
                                Cygnoz is a Tier 1 global software solutions company headquartered in Kochi, Kerala, India, established in 2019. Our clientele includes over200 customers located in the Asia Pacific, the Middle East, including Saudi Arabia. We provide software solutions and technology services to our customers to solve their business problems and assist in growing businesses.
                            </p>
                            <div className="grid grid-cols-3 g pe-14 py-10">
                                <div className="">
                                    <p className="text-[#0099F8] text-[42px] font-bold" >450
                                        <span className="font-extrbold text-[42px]">+</span>
                                    </p>
                                    <p className="text-[#6F7B8A] text-[18px] font-400">Completed Projects</p>
                                </div>
                                <div >
                                    <div className="flex gap-5" >
                                        <div className="w-[1px] mt-3 bg-[#6F7B8A] h-10"></div>
                                        <p className="text-[#0099F8] text-[42px] font-bold">200
                                            <span className="font-extrbold text-[42px]">+</span>
                                        </p>
                                    </div>
                                    <p className="ms-5 text-[#6F7B8A] text-[18px] font-400">Happy Clients</p>
                                </div>
                                <div className="">
                                    <div className="flex gap-5" >
                                        <div className="w-[1px] mt-3 bg-[#6F7B8A] h-10"></div>
                                        <p className="flex gap-1 text-[#0099F8] text-[42px] font-bold">4.9
                                            <img src={star} alt="" />
                                        </p>
                                    </div>
                                    <p className="ms-5 text-[#6F7B8A] text-[18px] font-400">Client Rating</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="grid grid-cols-3 gap-4 justify-items-end w-full">
                                <div></div>
                                <div>
                                    <IMG_1 width="160px" height="160px" radius="40px" />
                                </div>
                                <div>
                                    <IMG_2 width="160px" height="160px" radius="40px" />
                                </div>
                            </div>
                            <div className="grid py-5 grid-cols-3 gap-4">
                                <div className="w-[120px] h-[120px] rounded-[40px] m-3 bg-[#DFEBF3]"></div>
                                <div className="">
                                    <IMG_3 width="160px" height="160px" radius="40px" />

                                </div>
                                <div className="">
                                    <IMG_4 width="160px" height="160px" radius="40px" />

                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="">
                                    <IMG_5 width="160px" height="160px" radius="40px" />

                                </div>
                                <div className="">
                                    <IMG_6 width="160px" height="160px" radius="40px" />

                                </div>
                                <div className="">
                                    <IMG_7 width="160px" height="160px" radius="40px" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* our projects */}
            <section>
                <div className="bg-[#F6F6F6] px-20 py-16 ">
                    <div className="justify-center gap-2 flex">
                        <Star_wide />
                        <p className="text-[#6FB7FF] text-[14px] font-[12px] py-2">
                            OUR PROJECT
                        </p>
                    </div>
                    <h1 className="text-[#3E4F65] text-center text-[50px] font-400 py-2.5">
                        Empower Your Journey with our  <br />
                        Seamless Solutions
                    </h1>
                    <p className="text-[#6F7B8A] text-center text-[18px] font-400 py-3">Explore Our Products</p>
                    <div className="my-5">
                        <Carousel />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section>
                <div
                    className="bg-[#011321]"
                    style={{
                        backgroundImage: `url(${services})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "auto",
                        
                    }}>
                    <div className="px-20 py-16 ">

                        <div className="grid grid-cols-3 gap-5">
                            <div className="">
                                <p className="gap-2 flex " >
                                    <Star_wide color="#FFFFFF" />
                                    <span className="text-[#6FB7FF] text-[14px] font-[12px] py-2.5">
                                        SERVICES
                                    </span>
                                </p>
                                <h1 className="text-[#FFFFFF] text-[48px] font-400 py-3">
                                    Crafting the <br /> Future, Today
                                </h1>
                            </div>
                            <div className="text-[#E3E3E3]">
                                <p className="w-[330px]">We help you to build high-quality digital  solutions and products as well as deliver a wide range of related professional services. <br /> We are providing world-class service to our clients.</p>
                            </div>
                            <div
                                className="rounded-xl blur-70 border-[#BAF2FF] border-[.01px] p-10"
                                style={{
                                    background: "linear-gradient(to left, #03192B 100%, #03192B 10%)",
                                }}
                            >
                                <img src={fullstack} alt="" />
                                <p className="text-[#E7E7E7] text-[24px] py-2 font-400">Full Stack Engineering</p>
                                <p className="text-[#B6B6B6] text-[18px]">Our custom web development covers front-end, back-end, and enterprise solutions—ready for any challenge.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-5 my-5">
                            {
                                Services.map((service) => (
                                    <div
                                        className="rounded-xl blur-70 border-[#BAF2FF] border-[.01px] p-10"
                                        style={{
                                            background: "linear-gradient(to left, #03192B 100%, #03192B 10%)",
                                        }}
                                    >
                                        <img src={service.icon} alt="" />
                                        <p className="text-[#E7E7E7] text-[24px] py-2 font-400">{service.p1}</p>
                                        <p className="text-[#B6B6B6] text-[18px]">{service.p2}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section>
                <div
                    className="px-20 py-16 "
                 style={{
                    backgroundImage: `url(${process})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "3000px",
                }}>
                     <div className="justify-center gap-2 flex">
                        <Star_wide />
                        <p className="text-[#6FB7FF] text-[14px] font-[12px] py-2">
                        OUR PROCESS                        </p>
                    </div>
                    <h1 className="text-[#3E4F65] text-center text-[50px] font-400 py-2.5">
                    How We Build Your Solutions
                    </h1>
                    <p className="text-[#6F7B8A] text-center text-[18px] font-400 py-3">Our rigorous development process ensures the delivery of high-quality, reliable, and efficient software solutions.</p>
                    <div >
                        <OurProcess/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
