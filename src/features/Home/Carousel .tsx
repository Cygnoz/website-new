import { useState } from "react";
import left from "../../assets/Icons/left arrow.svg"
import right from "../../assets/Icons/rigth arrow.svg"
import billbizz from "../../assets/Images/billbizz.png"
import salonex from "../../assets/Images/salonex.png"
import swenex from "../../assets/Images/swenex.png"
import nexd from "../../assets/Images/6nexd.jpg"
import bg from "../../assets/Images/swenexbg.jpg"
import bilbizzicon from "../../assets/Icons/billbizzicon.svg"
import nexdicon from "../../assets/Icons/6nexd.svg"
import salonexcon from "../../assets/Icons/salonexicon.svg"

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
           
            content: (
                <div className="flex flex-col md:flex-row gap-10">
                <div className="">
                    <div className="w-full h-[360px] bg-slate-300">

                    </div>
                    <div className=" mt-10 p-10"
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            width: "670px",
                            height: "250px",
                        }}>
                        <button className="bg-[#004B49] rounded-lg text-white px-4 py-2">
                            <img src={bilbizzicon} alt="" />
                        </button>
                        <p className="text-[#3E4F65] text-[25px] font-medium py-2">
                        Efficient Invoicing System                        </p>

                        <div className="flex justify-between">
                            <p className="text-[#6F7B8A] text-[18px]">
                                Intelligent billing, automated workflows. Save time, reduce <br /> errors.
                            </p>
                            <button className="underline text-[#0380CE]">
                                See More
                            </button>

                        </div>
                    </div>
                </div>
                <div >
                    <img className="h-[650px] w-[650px]" src={billbizz} alt="" />
                </div>
            </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className="flex flex-col md:flex-row gap-10">
                    <div >
                        <img className="h-[650px] w-[650px]" src={swenex} alt="" />
                    </div>
                    <div className="">
                        <div className="w-full h-[360px] bg-slate-300">

                        </div>
                        <div className=" mt-10 p-10"
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                width: "670px",
                                height: "250px",
                            }}>
                            <button className="bg-[#004B49] rounded-lg text-white px-4 py-1.5">
                                Sewnex
                            </button>
                            <p className="text-[#3E4F65] text-[25px] font-medium py-2">
                                Comprehensive Boutique Software with <br /> POS and Analytics
                            </p>

                            <div className="flex justify-between">
                                <p className="text-[#6F7B8A] text-[18px]">
                                    Intelligent billing, automated workflows. Save time, reduce <br /> errors.
                                </p>
                                <button className="underline text-[#0380CE]">
                                    See More
                                </button>

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
                <div className="">
                    <div className="w-full h-[360px] bg-slate-300">

                    </div>
                    <div className=" mt-10 py-5 px-10"
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            width: "670px",
                            height: "250px",
                        }}>
                        <button className=" px-4 py-2">
                            <img src={salonexcon} alt="" />
                        </button>
                        <p className="text-[#3E4F65] text-[25px] font-medium py-2">
                        A New Standard in Beauty and Wellness  Management                      </p>

                        <div className="flex justify-between">
                            <p className="text-[#6F7B8A] text-[18px]">
                            Manage appointments, payments, inventory, and customer relationships – effortlessly.
                            </p>
                            <button className="underline w-32 text-[#0380CE]">
                                See More
                            </button>

                        </div>
                    </div>
                </div>
                <div >
                    <img className="h-[650px] w-[650px]" src={salonex} alt="" />
                </div>
            </div>
            ),
        },
        {
            id: 4,
            content: (
                <div className="flex flex-col md:flex-row gap-10">
                <div >
                    <img className="h-[650px] w-[650px]" src={nexd} alt="" />
                </div>
                <div className="">
                    <div className="w-full h-[360px] bg-slate-300">

                    </div>
                    <div className=" mt-10 py-8 px-10"
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            width: "670px",
                            height: "250px",
                        }}>
                        <button className="px-4 py-2">
                            <img src={nexdicon} alt="" />
                        </button>
                        <p className="text-[#3E4F65] text-[25px] font-medium py-2">
                        Automate all-in-one management platform.
                                              </p>

                            <p className="text-[#6F7B8A] text-[18px]">
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
        <div className="relative overflow-hidden  mx-auto">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <div key={slide.id} className="min-w-full">
                        {slide.content}
                    </div>
                ))}
            </div>
          

            {currentSlide !== 0 && ( // Hide button if on the first slide
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                onClick={prevSlide}
            >
                <img className="w-10" src={left} alt="Previous" />
            </button>
        )}
          {currentSlide !== slides.length - 1 && ( // Hide button if on the last slide
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
