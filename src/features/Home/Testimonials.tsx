import React, { useState } from 'react';
import './home.css';

type Props = {};

const testimonials = [
    {
        text: "Cynotech Labs' marketing team is exceptional. Their professionalism, creativity, and dedication have significantly boosted our brand's online presence. I highly recommend them for anyone seeking to elevate their marketing strategy.",
        author: 'Hassan Anthru',
    },
    {
        text: 'I recently purchased a tailoring management software from Cygnoz, and I am very pleased with its performance. The software is user-friendly and efficient, making our operations smoother.',
        author: 'Shyla Hameed',
    },
    {
        text: "I'm so glad I went with Cygnoz for my business software! Their software has been a game-changer for us, and their support team is top-notch. I've tried a few other software solutions in the past, but the support teams were totally unhelpful.",
        author: 'Elsa Mary Gigi',
    },
    {
        text: 'We had an excellent experience with Cygnoz on the development of our new website. From start to finish, their team was professional and highly skilled. Their team ensured that all features were seamlessly integrated and the website performs flawlessly across all devices.',
        author: 'Paily Kory',
    }
];

function Testimonials({ }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const container = e.currentTarget;
        const scrollLeft = container.scrollLeft;
        const visibleWidth = container.offsetWidth;

        const currentSection = Math.round(scrollLeft / visibleWidth);
        setActiveIndex(currentSection);
    };

    // Determine visible indicators (max 3)
    const totalSections = Math.ceil(testimonials.length / 3);
    const start = Math.max(0, Math.min(activeIndex - 1, totalSections - 3));
    const visibleIndicators = Array.from(
        { length: Math.min(3, totalSections) },
        (_, i) => start + i
    );

    return (
        <div className="carousel-container w-full">
            <div className="carousel" onScroll={handleScroll}>
                {testimonials.map((testimonial, index) => (
                    <div className="card" key={index}>
                        <p className='h-[80%] '>{testimonial.text}</p>
                        <h4 className='text-'>{testimonial.author}</h4>
                    </div>
                ))}
            </div>
            <div className="carousel-indicators">
                {visibleIndicators.map((indicator, index) => (
                    <span
                        key={index}
                        className={`indicator ${indicator === activeIndex ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
