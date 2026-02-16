import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const ComingSoon = () => {
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
      <div
        className={`py-20 px-20 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
      >
        <div>
          <h1 className="text-5xl font-semibold mb-10">Coming soon</h1>
          {[
            "Inner Pages",
            "40+ Sections",
            "HTML/CSS Version",
            "Adobe XD Version",
            "Webflow Template",
          ].map((item, i) => (
            <p
              key={i}
              className={`text-lg mb-5 last:mb-10 flex items-center gap-3 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-700"
              }`}
            >
              <FaArrowRight
                className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-transparent shrink-0"
                style={{ color: "#8054FF" }}
              />
              {item}
            </p>
          ))}
        </div>

        <div className="text-3xl font-bold w-90">
          <h1 className="mb-20">
            Need Custom Design, Development or Branding?
          </h1>
          <h1 className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
            www.inkyy.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
