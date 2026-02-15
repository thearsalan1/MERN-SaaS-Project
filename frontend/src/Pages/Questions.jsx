import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Questions = () => {
  const questions = [
    { id: 1, question: "How to use this template?" },
    { id: 2, question: "What is your refund policy?" },
    { id: 3, question: "How to use this template?" },
    { id: 4, question: "Best web design agency ever is?" },
    { id: 5, question: "How can i order web design services?" },
    { id: 6, question: "What are your shopping routes?" },
    { id: 7, question: "How can i track my order?" },
    { id: 8, question: "I received the wrong item, What do i do?" },
    { id: 9, question: "What are benefits of this template?" },
    {
      id: 10,
      question: "How to promote the product?",
      answer:
        "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem. Good design is not only aesthetically pleasing, but also functional.",
    },
  ];

  return (
    <div className="w-[80%] mx-auto py-10">
      <h1 className="text-7xl font-semibold mb-20 mt-10 text-white">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`bg-[#404047] p-4 rounded-md flex flex-col ${
              q.answer ? "h-[120px]" : "h-[50px]"
            }`}
          >
            {/* Question row */}
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium text-white truncate">
                {q.question}
              </h2>
              {q.answer ? (
                <FaMinus className="text-white text-xs" />
              ) : (
                <FaPlus className="text-white text-xs" />
              )}
            </div>

            {/* Divider + Answer */}
            {q.answer && (
              <>
                <hr className="border-t border-[#5a5a5f] my-2" />
                <p className="text-[#9E9E9E] text-xs">{q.answer}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
