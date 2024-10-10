import React from "react";
import bgImage from "../../assets/AdobeStock_631419996 copy.jpeg";
import vapsBox from "../../assets/VAPS image.png";

const Vaps: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Content box image */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <img
          src={vapsBox}
          alt="Crown Funeral Services Information"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Vaps;
