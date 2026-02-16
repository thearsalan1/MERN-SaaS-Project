import FeatureCards from "./FeatureCards";
import img from "../assets/Group123.png";
import ellipse11 from "../assets/Ellipse11.png";
import ellipse10 from "../assets/Ellipse10.png";
import ellipse9 from "../assets/Ellipse9.png";
import group124 from "../assets/Group124.png";
import vector from "../assets/Vector.png";

const FeatureBox = () => {
  return (
    <div className="text-white w-[80%] mx-auto flex justify-between flex-col">
      <div className="w-[35%]">
        <h1 className="text-5xl font-bold mb-4">Feature Boxes</h1>
        <p className="text-[#9E9E9E] text-md">
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>
      </div>
      <div>
        <FeatureCards></FeatureCards>
      </div>
      <div className="flex justify-between items-center ">
        <div className="relative">
          <img src={img} alt="Feature Box Image" />
          <img
            src={ellipse11}
            alt="Ellipse 11"
            className="absolute top-48 left-35"
          />
          <img
            src={ellipse10}
            alt="Ellipse 10"
            className="absolute bottom-31 left-53"
          />
          <img
            src={ellipse9}
            alt="Ellipse 9"
            className="absolute top-55 right-33"
          />
          <img
            src={group124}
            alt="Group 124"
            className="absolute top-35 right-60"
          />
          <img
            src={group124}
            alt="Group 124"
            className="absolute bottom-65 left-33"
          />
          <img
            src={group124}
            alt="Group 124"
            className="absolute bottom-39 right-50"
          />
          <img
            src={vector}
            alt="Vector"
            className="absolute h-12.5 w-15 invert top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex flex-col gap-6 h-full w-1/2">
          <p className="text-[#FFFFFF] text-5xl font-semibold w-[70%] mx-auto">
            We're here to guide and help you at all times
          </p>
          <p className="text-[#9E9E9E] w-[70%] mx-auto text-lg tracking-wide">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>

          <button className="w-49.5 h-11 px-7 py-3 rounded-[5px] text-[#FFFFFF] bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] ml-20">
            Download Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
