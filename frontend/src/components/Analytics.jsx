import React from "react";
import vector from "../assets/Vector.png";
import group108 from "../assets/Group108.png";
import group109 from "../assets/Group109.png";
import group110 from "../assets/Group110.png";
import group111 from "../assets/Group111.png";
import group116 from "../assets/Group116.png";
import group121 from "../assets/Group121.png";
import group115 from "../assets/Group115.png";
import group113 from "../assets/Group113.png";
import group132 from "../assets/Group132.png";
import rectangle from "../assets/Rectangle.png";

const Analytics = () => {
  return (
    <div className=" flex justify-evenly w-[60%] bg-[#131415] rounded-2xl mx-auto px-10 py-10">
      <div className="flex flex-col items-center justify-center bg-[#222228] rounded-2xl w-[30%] py-5">
        <div className="w-16 h-16">
          <img src={vector} alt="Vector" />
        </div>
        <div className="w-[80%] h-0.5 bg-gray-900 rounded-full mb-4" />
        <div className="flex flex-col justify-evenly h-60 mb-5 mr-8">
          <img src={group116} alt="Group 116" />
          <img src={group116} alt="Group 116" />
          <img src={group116} alt="Group 116" />
          <img src={group116} alt="Group 116" />
          <img src={group116} alt="Group 116" />
        </div>
        <div>
          <img src={group121} alt="Group 121" />
        </div>
      </div>
      <div className="flex flex-col items-center h-full w-[30%] justify-between ">
        <div className="bg-[#222228] rounded-2xl py-5 w-full flex flex-col items-center h-[48%]">
          <img src={group115} alt="Group 115" />
        </div>
        <div className="bg-[#222228] rounded-2xl py-5 w-full flex flex-col items-center gap-5 h-[48%] ">
          <img src={group113} alt="Group 113" />{" "}
          <div className="w-[80%] h-0.5 bg-gray-900 rounded-full mb-4" />
          <img src={group132} alt="Group 132" />
        </div>
      </div>
      <div className="bg-[#222228] rounded-2xl w-[30%] h-30 flex flex-col gap-4">
        <div className="bg-[#222228] rounded-2xl py-5 w-full flex flex-col items-center gap-5 relative">
          <img src={group113} alt="Group 121" />
          <img src={group108} alt="Group 108" />
          <img src={rectangle} alt="Rectangle" className="absolute top-38" />
          <img src={group109} alt="Group 109" />
          <img src={group110} alt="Group 110" />
          <img src={group111} alt="Group 111" />
        </div>
        <div className="bg-[#222228] rounded-2xl w-full min-h-23"></div>
      </div>
    </div>
  );
};

export default Analytics;
