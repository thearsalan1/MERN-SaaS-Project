import React from "react";
import group250 from "../assets/Group250.png";
import group254 from "../assets/Group254.png";
import group255 from "../assets/Group255.png";
import group253 from "../assets/Group253.png";
import silver from "../assets/silver.png";
import gold from "../assets/gold.png";
import diamond from "../assets/diamond.png";

const Pricing = () => {
  return (
    <div className="items-center px-50 py-20">
      <div className="flex justify-between text-5xl font-semibold items-center mb-10">
        <h1 className="text-white">Pricing</h1>
        <img src={group253} alt="Group 253" />
      </div>
      <div className="flex justify-between relative">
        <img src={group250} alt="Group 250" />
        <img src={group254} alt="Group 254" />
        <img src={group255} alt="Group 255" />
        <img
          src={diamond}
          alt="Diamond"
          className="absolute right-26 bottom-105"
        />
        <img
          src={silver}
          alt="Silver"
          className="absolute left-30 bottom-105"
        />
        <img src={gold} alt="Gold" className="absolute right-122 bottom-105" />
      </div>
    </div>
  );
};

export default Pricing;
