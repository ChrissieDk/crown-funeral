import React from "react";
import bgImage from "../../assets/AdobeStock_631419996 copy.jpeg";
import VapsInfoBox from "./VapsInfoBox"; // Make sure this path is correct

const Vaps: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Content box */}
      <div className="relative z-10 w-full max-w-4xl">
        <VapsInfoBox />
      </div>
    </div>
  );
};

export default Vaps;
