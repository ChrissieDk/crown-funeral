import React from "react";
import FBF from "../../assets/FBF.png";
import HealthCoach from "../../assets/Health coach.png";
import Repatriation from "../../assets/Repatriation.png";
import SymptomCheck from "../../assets/Symptom check.png";

const VapsInfoBox = () => {
  return (
    <div className="bg-[#c8a652] rounded-3xl shadow-lg max-w-3xl mx-auto overflow-hidden">
      <div className="p-6 bg-[#c8a652] text-white">
        <h2 className="text-lg lg:text-xl font-semibold text-center leading-tight px-2 lg:px-12">
          At Crown Funeral, we offer more than just funeral cover. Our holistic
          approach to wellness supports you throughout life with a range of
          value-added services, including:
        </h2>
      </div>

      <div className="bg-white py-6 space-y-4">
        <div className="px-4 sm:px-12">
          <InfoItem
            icon={
              <img
                src={Repatriation}
                alt="Repatriation"
                className="w-16 h-16 object-contain"
              />
            }
            title="Repatriation"
            description="During this difficult time, we understand the importance of bringing your loved one home within South Africa. Our compassionate team will guide you through every step, ensuring a respectful and seamless repatriation."
          />
        </div>

        <hr className="border-t border-[#c8a652] mx-4 sm:mx-12" />

        <div className="px-4 sm:px-12">
          <InfoItem
            icon={
              <img
                src={HealthCoach}
                alt="Health Coach"
                className="w-16 h-16 object-contain"
              />
            }
            title="Health Coach"
            description="Improve your overall well-being with our free wellness service. As a SASSA grant recipient, you deserve the best. This service offers personalised exercise plans and hydration reminders to help you feel healthier and more energised. Take control of your health and improve your quality of life."
          />
        </div>

        <hr className="border-t border-[#c8a652] mx-4 sm:mx-12" />

        <div className="px-4 sm:px-12">
          <InfoItem
            icon={
              <img
                src={SymptomCheck}
                alt="Symptom Check"
                className="w-16 h-16 object-contain"
              />
            }
            title="Symptom Check"
            description="Your AI-powered health bot. We have included a smart digital assistant to enhance personalised healthcare. Our bot provides quick and reliable symptom assessments, potential causes and recommended solutions. It helps you take control of your health and well-being with just a few clicks, available 24 hours a day."
          />
        </div>

        <hr className="border-t border-[#c8a652] mx-4 sm:mx-12" />

        <div className="px-4 sm:px-12">
          <InfoItem
            icon={
              <img
                src={FBF}
                alt="FeelBetterFast"
                className="w-14 h-14 object-contain"
              />
            }
            title="FeelBetterFast Pharmacy Voucher"
            description="Your personal health pass. Perform a symptom check, and depending on the outcome, you could qualify for a FeelBetterFast Pharmacy Voucher. You can redeem this voucher at our partnered pharmacies for convenient access to minor ailments, preventative tests and vaccinations. Another way we're helping you take control of your well-being to enjoy peace of mind."
          />
        </div>
      </div>

      <div className="px-4 sm:px-12 py-4 bg-[#c8a652] text-black text-center text-sm">
        The value-added services have no surrender value, and aren't
        underwritten by King Price Life Insurance Limited.
      </div>
    </div>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, description }) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4">
    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center mb-2 sm:mb-0">
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-700 text-center sm:text-left">
        <span className="font-semibold text-sm text-[#c8a652]">{title}:</span>{" "}
        {description}
      </p>
    </div>
  </div>
);

export default VapsInfoBox;
