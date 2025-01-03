// import React from 'react'
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
function Careers() {
  const images = [aboutus1, aboutus2, aboutus3, aboutus4, aboutus5]

  return (
<div className="relative w-full min-h-screen mt-20">
      {/* Background Grid */}
      <BackgroundGrid width="100%" height="100%" />

    <div className="p-4 mt-5 flex w-full">
      <div className="flex justify-start mx-4">
        <Wide/>
        <p className="font-questrial font-thin text-[#0380CE] flex justify-center items-center px-2">CAREERS</p>
      </div>
    </div>

    <div className="p-4 mx-4 justify-start flex">
    <h1 className="font-gilroy  text-[#3E4F65]  text-4xl md:text-5xl font-extrabold leading-tight max-w-6xl mb-6 ">Be part of our <br /> mission</h1>
    </div>

</div>
  )
}

export default Careers