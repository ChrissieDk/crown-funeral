import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const SymptomChecker = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    setShowIframe(true);
  };

  const handleBackClick = () => {
    setShowIframe(false);
  };

  if (showIframe) {
    return (
      <div className="w-full h-screen flex flex-col">
        <div className="bg-[#C9A86C] p-4">
          <button
            onClick={handleBackClick}
            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FaArrowLeft size={24} />
          </button>
        </div>
        <iframe
          src="https://landbot.online/v3/H-2140524-8HL0HEXNHP9DEXPZ/index.html"
          title="Symptom Checker"
          className="flex-grow w-full border-none"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full border border-gray-200 rounded-lg p-6 shadow-md lg:px-32">
      <h2 className="text-4xl font-bold mb-4 text-[#CFB46D]">FeelBetterFast</h2>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-lg font-medium mb-2">Not feeling your best?</p>
        <p className="text-sm text-gray-600 mb-4">
          Click here to use our reliable symptom checker and get started on the
          path to feeling better.
        </p>
        <button
          className="px-4 py-2 bg-[#C9A86C] hover:bg-[#B08F4F] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A86C]"
          onClick={handleButtonClick}
        >
          START SYMPTOM CHECKER
        </button>
      </div>
    </div>
  );
};

export default SymptomChecker;
