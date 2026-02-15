import group133 from "../assets/Group133.png";
import ellipse from "../assets/Ellipse3.png";

const GetInTouch = () => {
  return (
    <div className="flex gap-5 relative">
      {/* Decorative Ellipse */}
      <img
        src={ellipse}
        alt="Ellipse"
        className="absolute -top-2.5 -left-2.5 w-24"
      />

      <div className="w-[50%] items-center relative">
        <img src={group133} alt="Get In Touch" className="w-[500px]" />
        <img
          src={ellipse}
          alt="Ellipse"
          className="absolute bottom-0 right-10 w-30"
        />
      </div>

      <div className="w-[50%]">
        <h1 className="text-5xl font-bold text-white">Get In Touch</h1>
        <p className="text-[#9E9E9E] mt-5 w-[75%] text-lg">
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>

        {/* Form Section */}
        <form className="mt-8 flex flex-col gap-5 w-[60%]">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-[#18181C] text-white placeholder-[#9E9E9E] focus:outline-none"
          />

          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-[#18181C] text-white placeholder-[#9E9E9E] focus:outline-none"
          />

          {/* Textarea */}
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-lg bg-[#18181C] text-white placeholder-[#9E9E9E] focus:outline-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-white py-3 rounded-lg hover:opacity-90 transition px-4 w-40 text-left"
          >
            Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
