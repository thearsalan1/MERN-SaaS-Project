import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../components/Hero";
import FeatureBox from "../components/FeatureBox";
import CompanyBoxes from "../components/Companies";
import map from "../assets/map.png";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="relative z-50">
        <Navbar />
      </div>

      <Hero />
      <FeatureBox />

      {/* History Section */}
      <div className="max-h-[100vh] bg-[#18181C] pt-30 mb-70 relative z-10">
        <div className="flex flex-col items-center">
          <div className="w-[40%]">
            <h1 className="text-5xl font-bold text-center text-white">
              Companies we Worked With since 2015
            </h1>
          </div>
          <div className="flex mt-30 mb-30">
            <CompanyBoxes />
          </div>
        </div>

        {/* Gradient Box with Map */}
        <div className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-3xl flex items-center justify-between w-[80%] mx-auto py-10 relative z-10">
          <div className="w-2/3 pl-20">
            <p className="text-white text-xl mb-5">Love our Tool?</p>
            <h1 className="text-white text-6xl font-bold">
              Feel Free to Join our 15 Days Free Trial
            </h1>
            <button className="w-49.5 h-11 px-7 py-3 rounded-[5px] text-white bg-black mt-10">
              Download Template
            </button>
          </div>
          <div>
            <img src={map} alt="Map" className="relative z-0" />
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto mb-10">
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
};

export default Home;
