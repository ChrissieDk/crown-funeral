import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import crownImage from "../assets/crown icon.png";

const faqData = [
  {
    question: "What is funeral cover?",
    answer:
      "Funeral cover is insurance that helps pay for funeral expenses, such as services, burial or cremation, and related costs, easing the financial burden on the family.",
  },
  {
    question: "How can I join? ",
    answer:
      "Interested customers can request a call or speak to a field agent to learn more about joining. Our team will guide you through the process, answer any questions, and help you find the best coverage for your needs.",
  },
  {
    question: "What are the age limits for joining?",
    answer:
      "The youngest participants can be as young as 16 years old, while the oldest can be up to 84 years old.",
  },
  {
    question: "How to claim?",
    answer:
      "Members can simply send their claim along with their membership number/ID number to claims@crown.co.za ",
  },
  {
    question: "Who will receive the payout amount at the claims stage?",
    answer:
      "We encourage members to regularly update their beneficiary details to ensure that the payout is made to the correct individual.",
  },
  {
    question: "What are the value-added benefits?",
    answer:
      "Symptom Check BOT: Members can use our symptom check BOT for a quick diagnosis and advice on how to feel better.",
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
