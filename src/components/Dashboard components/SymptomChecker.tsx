import React from "react";

const SymptomChecker: React.FC = () => {
  return (
    <div className="w-full h-full border border-gray-200 rounded-lg p-6 shadow-md lg:px-32">
      <h2 className="text-4xl font-bold mb-4 text-[#CFB46D]">FeelBetterFast</h2>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-lg font-medium mb-2">Not feeling your best?</p>
        <p className="text-sm text-gray-600 mb-4">
          Click here to use our reliable symptom checker and get started on the
          path to feeling better.
        </p>
        <button className="px-4 py-2 bg-[#C9A86C] hover:bg-[#B08F4F] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A86C]">
          START SYMPTOM CHECKER
        </button>
      </div>
    </div>
  );
};

export default SymptomChecker;
