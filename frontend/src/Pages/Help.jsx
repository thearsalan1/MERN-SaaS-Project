import React from "react";

const Help = () => {
  return (
    <div className="flex justify-center items-center gap-15 py-20 mt-10">
      {/* First Card */}
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
          <button className="w-40 h-13 px-7 py-3 rounded-[5px] text-[#FFFFFF] bg-black mr-30">
            Download
          </button>
        </div>
      </div>

      {/* Second Card with different gradient */}
      <div className="bg-[#222228] w-[430px] h-[500px] rounded-3xl px-10 py-15">
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
          <button className="w-40 h-13 px-7 py-3 rounded-[5px] text-[#FFFFFF] bg-gradient-to-r from-[#FF9898] to-[#8054FF] mr-30">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
