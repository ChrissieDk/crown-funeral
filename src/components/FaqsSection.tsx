import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import crownImage from "../assets/crown icon.png";

const faqData = [
  { question: "What is a funeral policy?", answer: "Answer to question 1..." },
  {
    question: "How soon does coverage begin?",
    answer: "Answer to question 2...",
  },
  {
    question: "How do my beneficiaries claim the policy?",
    answer: "Answer to question 3...",
  },
  {
    question: "What happens if I miss a payment?",
    answer: "Answer to question 4...",
  },
  {
    question: "How do I apply for a funeral policy?",
    answer: "Answer to question 5...",
  },
  {
    question: "Who can be covered under a funeral policy?",
    answer: "Answer to question 6...",
  },
];

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-12 px-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-start p-4">
          <img src={crownImage} alt="Crown" className="w-14 h-10 mb-2" />
          <h2 className="text-5xl font-bold mb-4">FAQs</h2>
          <p className="text-lg text-gray-600">
            We're here to answer all your questions
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 md:pl-12 md:border-l md:border-gray-300 p-4">
          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-medium">
                  <span className="mr-4 text-yellow-500">{index + 1}.</span>
                  <span className="mr-4">{item.question}</span>
                </span>
                <IoChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsSection;
