import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ellipse from "../assets/Ellipse1.png";

const MoreSections = () => {
  const [isDark, setIsDark] = useState(
    () => (localStorage.getItem("theme") || "dark") === "dark",
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark((localStorage.getItem("theme") || "dark") === "dark");
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative h-screen overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#18181C]" : "bg-white"}`}
    >
      <div className="flex flex-col items-center h-full relative pt-50">
        <h1
          className={`text-7xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          More Sections
        </h1>
        <button className="w-[200px] h-[44px] px-7 py-3 rounded-[5px] text-white bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 transition mt-10">
          Download Template
        </button>
      </div>

      <img
        src={ellipse}
        alt="Ellipse"
        className="absolute bottom-[150px] right-[100px] w-[150px]"
      />
      <img
        src={ellipse}
        alt="Ellipse"
        className="absolute bottom-[170px] left-[120px] w-[200px]"
      />
      <img
        src={ellipse}
        alt="Ellipse"
        className="absolute top-20 left-180 w-[100px]"
      />
    </div>
  );
};

export default MoreSections;
