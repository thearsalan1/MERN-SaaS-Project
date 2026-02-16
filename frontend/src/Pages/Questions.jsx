import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Questions = () => {
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
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#18181C]" : "bg-white"}`}
    >
      <div className="w-[80%] mx-auto py-10">
        <h1
          className={`text-7xl font-semibold mb-20 mt-10 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Frequently Asked Questions
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {questions.map((q) => (
            <div
              key={q.id}
              className={`p-4 rounded-md flex flex-col transition-colors duration-300 ${
                q.answer ? "h-[120px]" : "h-[50px]"
              } ${isDark ? "bg-[#404047]" : "bg-gray-100 border border-gray-200"}`}
            >
              <div className="flex justify-between items-center">
                <h2
                  className={`text-sm font-medium truncate transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {q.question}
                </h2>
                {q.answer ? (
                  <FaMinus
                    className={`text-xs transition-colors duration-300 ${isDark ? "text-white" : "text-gray-500"}`}
                  />
                ) : (
                  <FaPlus
                    className={`text-xs transition-colors duration-300 ${isDark ? "text-white" : "text-gray-500"}`}
                  />
                )}
              </div>

              {q.answer && (
                <>
                  <hr
                    className={`my-2 transition-colors duration-300 ${isDark ? "border-[#5a5a5f]" : "border-gray-300"}`}
                  />
                  <p
                    className={`text-xs transition-colors duration-300 ${isDark ? "text-[#9E9E9E]" : "text-gray-500"}`}
                  >
                    {q.answer}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
