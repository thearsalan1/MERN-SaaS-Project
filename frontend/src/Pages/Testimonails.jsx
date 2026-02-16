import React, { useState, useEffect } from "react";
import group92 from "../assets/Group92.png";
import group93 from "../assets/Group93.png";
import group94 from "../assets/Group94.png";
import group222 from "../assets/Group222.png";

const Testimonails = () => {
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
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#18181C]" : "bg-white"}`}
    >
      <div className="flex flex-col justify-center items-center gap-20 py-20">
        <h1
          className={`text-5xl font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Testimonails
        </h1>
        <div className="flex justify-between items-center gap-15">
          <img src={group94} alt="Group 94" />
          <img src={group92} alt="Group 92" />
          <img src={group93} alt="Group 93" />
        </div>
        <img src={group222} alt="Group 222" />
      </div>
    </div>
  );
};

export default Testimonails;
