import group96 from "../assets/Group96.png";
import group97 from "../assets/Group97.png";
import group98 from "../assets/Group98.png";
import group99 from "../assets/Group99.png";
import group100 from "../assets/Group100.png";
import frame from "../assets/Frame.png";

const companies = [
  { id: 1, image: frame },
  { id: 2, image: group96 },
  { id: 3, image: group97 },
  { id: 4, image: group98 },
  { id: 5, image: group99 },
  { id: 6, image: group100 },
];

const CompanyBoxes = () => {
  return (
    <div className="flex flex-row gap-6 flex-wrap">
      {companies.map((company) => (
        <div
          key={company.id}
          className="bg-black w-50 h-25 flex justify-center items-center rounded-xl"
        >
          <img
            src={company.image}
            alt={`Company ${company.id}`}
            className="max-w-[120px] h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default CompanyBoxes;
