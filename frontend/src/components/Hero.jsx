import React from "react";
import ellipse from "../assets/Ellipse1.png";
import Behind from "../assets/BehindHead.png";
import ellipse3 from "../assets/Ellipse3.png";
import ellipse4 from "../assets/Ellipse4.png";
import subtract from "../assets/Subtract.png";
import Analytics from "./Analytics";

const Hero = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center h-screen">
        {/* Top ellipse */}
        <div className="w-full flex justify-center absolute top-0 z-10">
          <img src={ellipse} alt="Ellipse" />
        </div>

        {/* Heading + Behind image */}
        <div className="relative flex justify-center items-center">
          <img
            src={Behind}
            alt="img"
            className="absolute inset-0 mx-auto my-auto z-0 max-w-[749px] h-auto translate-y-15"
          />

          <h1 className="font-poppins font-bold text-[74px] leading-[72px] tracking-normal text-white text-center max-w-[849px] mt-30 z-10 mb-6">
            Beautiful Landing Page Design for You
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-[#9E9E9E] text-[20px] max-w-[580px] text-center mb-8">
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>

        {/* Button */}
        <button className="px-7 py-3 rounded-md text-white bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] mb-25">
          Download Template
        </button>
        {/* Analytics section */}
        <Analytics />
      </div>

      {/* Decorative ellipses */}
      <div className="w-full flex justify-center absolute top-[300px] left-[550px] h-35">
        <img src={ellipse3} alt="Ellipse" />
      </div>
      <div className="w-full flex justify-center absolute top-[395px] right-[550px] h-45">
        <img src={ellipse4} alt="Ellipse" />
      </div>

      {/* Bottom subtract image */}
      <div className="w-full">
        <img src={subtract} alt="Subtract" className="w-full z-0" />
      </div>
    </div>
  );
};

export default Hero;
