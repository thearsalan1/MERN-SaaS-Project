import React from "react";
import group102 from "../assets/Group102.png";
import group103 from "../assets/Group103.png";
import group105 from "../assets/Group105.png";
import group106 from "../assets/Group106.png";
import group129 from "../assets/Group129.png";

const FeatureCards = () => {
  const cards = [
    {
      id: 1,
      img: group102,
      title: "Fully Customizable",
      description:
        "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    },
    {
      id: 2,
      img: group103,
      title: "Fully Customizable",
      description:
        "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    },
    {
      id: 3,
      img: group129,
      title: "Fully Customizable",
      description:
        "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    },
    {
      id: 4,
      img: group105,
      title: "Fully Customizable",
      description:
        "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    },
    {
      id: 5,
      img: group106,
      title: "Fully Customizable",
      description:
        "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    },
    {
      id: 6,
      img: group102,
      title: "Fully Customizable",
      description:
        "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-[#1A1A1A] px-6 py-10 rounded-lg text-center"
        >
          {/* Image wrapper */}
          <div
            className={
              card.id === 3
                ? "w-[100px] h-[100px] mx-auto mb-5 flex items-center justify-center"
                : "w-[100px] h-[100px] mx-auto mb-5 bg-[#222228] flex items-center justify-center rounded-md"
            }
          >
            <img src={card.img} alt={card.title} className="object-contain" />
          </div>

          {/* Title + description */}
          <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
          <p className="text-[#9E9E9E] text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
