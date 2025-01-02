import { useState } from "react";
import left from "../../assets/Icons/left arrow.svg";
import right from "../../assets/Icons/rigth arrow.svg";
import billbizz from "../../assets/Images/billbizz.png";
import salonex from "../../assets/Images/salonex.png";
import swenex from "../../assets/Images/swenex.png";
import nexd from "../../assets/Images/6nexd.jpg";
import bg from "../../assets/Images/swenexbg.jpg";
import bilbizzicon from "../../assets/Icons/billbizzicon.svg";
import nexdicon from "../../assets/Icons/6nexd.svg";
import salonexcon from "../../assets/Icons/salonexicon.svg";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            content: (
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <div className="w-full h-[360px] bg-slate-300"></div>
                        <div className="mt-14 p-5 sm:p-8 md:p-10"
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                width: "100%",
                                maxWidth: "670px", // Ensures it is responsive
                                height: "auto",
                            }}>
                            <button className="bg-[#004B49] rounded-lg text-white px-3 sm:px-4 py-2">
                                <img src={bilbizzicon} alt="" />
                            </button>
                            <p className="text-[#3E4F65] text-[20px] sm:text-[22px] md:text-[25px] font-medium py-2 ">
                                Efficient Invoicing System
                            </p>

                            <div className="flex flex-col sm:flex-row justify-between sm:items-end  mt-2">
                                <p className="text-[#6F7B8A] text-[16px] sm:text-[18px]">
                                    Intelligent billing, automated workflows. Save time, reduce <br /> errors.
                                </p>
                                <div className="text-end">
                                    <button className="underline text-[#0380CE] mt-2 sm:mt-0">
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex-1">
                        <img className="w-full h-auto object-cover" src={billbizz} alt="" />
                    </div>

                </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <img className="w-full h-auto object-cover" src={swenex} alt="" />
                    </div>
                    <div className="flex-1">
                        <div className="w-full h-[360px] bg-slate-300"></div>
                        <div className="mt-10 p-5 sm:p-8 md:p-10"
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                width: "100%",
                                maxWidth: "670px", // Ensure it’s responsive
                                height: "auto",
                            }}>
                            <button className="bg-[#004B49] rounded-lg text-white px-3 sm:px-4 py-1.5">
                                Sewnex
                            </button>
                            <p className="text-[#3E4F65] text-[20px] sm:text-[22px] md:text-[25px] font-medium py-2">
                                Comprehensive Boutique Software with <br /> POS and Analytics
                            </p>

                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-2">
                                <p className="text-[#6F7B8A] text-[16px] sm:text-[18px]">
                                    Intelligent billing, automated workflows. Save time, reduce <br /> errors.
                                </p>
                                <div className="text-end">
                                    <button className="underline text-[#0380CE] mt-2 sm:mt-0">
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <div className="w-full h-[360px] bg-slate-300"></div>

                        <div className="mt-10 py-5 sm:py-6 md:py-8 px-5 sm:px-8 md:px-10"
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                width: "100%",
                                maxWidth: "670px", // Ensure it’s responsive
                                height: "auto",
                            }}>
                            <button className="px-3 sm:px-4 py-2">
                                <img src={salonexcon} alt="" />
                            </button>
                            <p className="text-[#3E4F65] text-[20px] sm:text-[22px] md:text-[25px] font-medium py-2">
                                A New Standard in Beauty and Wellness Management
                            </p>

                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-2">
                                <p className="text-[#6F7B8A] text-[16px] sm:text-[18px]">
                                    Manage appointments, payments, inventory, and customer relationships – effortlessly.
                                </p>
                                <div className="text-end">
                                    <button className="underline w-32 sm:w-auto text-[#0380CE] mt-2 sm:mt-0">
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img className="w-full h-auto object-cover" src={salonex} alt="" />
                    </div>
                </div>
            ),
        },
        {
            id: 4,
            content: (
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <img className="w-full h-auto object-cover" src={nexd} alt="" />
                    </div>
                    <div className="flex-1">
                        <div className="w-full h-[360px] bg-slate-300"></div>

                        <div className="mt-10 py-5 sm:py-6 md:py-8 px-5 sm:px-8 md:px-10"
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                width: "100%",
                                maxWidth: "670px", // Ensure it’s responsive
                                height: "auto",
                            }}>
                            <button className="px-3 sm:px-4 py-2">
                                <img src={nexdicon} alt="" />
                            </button>
                            <p className="text-[#3E4F65] text-[20px] sm:text-[22px] md:text-[25px] font-medium py-2">
                                Automate all-in-one management platform.
                            </p>

                            <p className="text-[#6F7B8A] text-[16px] sm:text-[18px]">
                                6nexd is an all-in-one software solution for the Automotive industry.
                            </p>
                            <div className="text-end py-3">
                                <button className="underline text-[#0380CE]">
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <div key={slide.id} className="min-w-full">
                        {slide.content}
                    </div>
                ))}
            </div>

            {currentSlide !== 0 && (
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                    onClick={prevSlide}
                >
                    <img className="w-10" src={left} alt="Previous" />
                </button>
            )}

            {currentSlide !== slides.length - 1 && (
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                    onClick={nextSlide}
                >
                    <img className="w-10" src={right} alt="Next" />
                </button>
            )}
        </div>
    );
};

export default Carousel;
