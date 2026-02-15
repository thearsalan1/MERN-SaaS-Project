import Navbar from "../Components/Navbar";
import ellipse from "../assets/Ellipse1.png";

const MoreSections = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center h-full relative pt-50">
        <h1 className="text-white text-7xl font-bold">More Sections</h1>
        <button className="w-[200px] h-[44px] px-7 py-3 rounded-[5px] text-white bg-gradient-to-r from-[#FF9898] to-[#8054FF] mt-10">
          Download Template
        </button>
      </div>

      {/* Decorative Ellipses */}
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
