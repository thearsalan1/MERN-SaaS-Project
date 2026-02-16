import React, { useState, useEffect } from "react";

const Help = () => {
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
      <div className="flex justify-center items-center gap-15 py-20 mt-10">
        <div className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] w-[430px] h-[500px] rounded-3xl px-10 py-15">
          <div className="mb-20">
            <h1 className="text-white text-5xl font-semibold py-10">
              We're here to guide and help you at all times
            </h1>
            <p className="text-white">
              A good design is not only aesthetically pleasing, but also
              functional.
            </p>
          </div>
          <div>
            <button className="w-40 h-13 px-7 py-3 rounded-[5px] text-white bg-black hover:bg-black/80 transition mr-30">
              Download
            </button>
          </div>
        </div>

        <div
          className={`w-[430px] h-[500px] rounded-3xl px-10 py-15 transition-colors duration-300 ${isDark ? "bg-[#222228]" : "bg-gray-100"}`}
        >
          <div className="mb-20">
            <h1
              className={`text-5xl font-semibold py-10 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              We're here to guide and help you at all times
            </h1>
            <p
              className={`transition-colors duration-300 ${isDark ? "text-white" : "text-gray-600"}`}
            >
              A good design is not only aesthetically pleasing, but also
              functional.
            </p>
          </div>
          <div>
            <button className="w-40 h-13 px-7 py-3 rounded-[5px] text-white bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 transition mr-30">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
