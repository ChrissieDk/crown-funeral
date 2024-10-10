import React from "react";
import KP from "../assets/KP.png";
import GSH from "../assets/GSH_Logo.png";
import Crown from "../assets/CROWN.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#212121] text-white py-12 px-8">
      <div className="container mx-auto lg:px-20">
        <div className="flex flex-wrap justify-center items-center mb-8 gap-3 lg:gap-20">
          <div className="w-40 h-16 flex items-center justify-center">
            <img
              src={Crown}
              alt="Crown Funeral"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="w-40 h-16 flex items-center justify-center">
            <img
              src={GSH}
              alt="Get Savvi Health"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="w-40 h-16 flex items-center justify-center">
            <img
              src={KP}
              alt="King Price Insurance"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
        <p className="text-xs leading-relaxed max-w-4xl mx-auto text-center">
          The Crown Funeral Plan is administered by GetSavvi Health (Pty) Ltd,
          an authorised Financial Services Provider (FSP No. 44283). The
          intermediary is M and C Financial Service, an authorised Financial
          Services Provider (FSP No. 52811). The insurer is King Price Life
          Insurance Limited, a licensed insurer and authorised FSP no. 47235 |
          Registration no. 1948/029011/06.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
