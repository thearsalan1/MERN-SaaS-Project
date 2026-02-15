import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="text-white py-20 px-20">
      <div>
        <h1 className="text-5xl font-semibold mb-10">Coming soon</h1>
        <p className="text-lg mb-5">
          <FaArrowRight className="inline mr-3" />
          Inner Pages
        </p>
        <p className="text-lg mb-5">
          <FaArrowRight className="inline mr-3" />
          40+ Sections
        </p>
        <p className="text-lg mb-5">
          <FaArrowRight className="inline mr-3" />
          HTML/CSS Version
        </p>
        <p className="text-lg mb-5">
          <FaArrowRight className="inline mr-3" />
          Adobe XD Version
        </p>
        <p className="text-lg mb-10">
          <FaArrowRight className="inline mr-3" />
          Webflow Template
        </p>
      </div>
      <div className="text-3xl font-bold w-90">
        <h1 className="mb-20">Need Custom Design, Development or Branding?</h1>
        <h1>www.inkyy.com</h1>
      </div>
    </div>
  );
};

export default ComingSoon;
