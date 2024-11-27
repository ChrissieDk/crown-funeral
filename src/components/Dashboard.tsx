import { useState } from "react";
import Sidebar from "./dashboard components/Sidebar";
import Welcome from "./dashboard components/Welcome";
import PersonalDetails from "./dashboard components/PersonalDetails";
import ClaimsComponent from "./dashboard components/Claims";
import ContactUsModal from "./dashboard components/ContactUs";
import SymptomChecker from "./dashboard components/SymptomChecker";
import WellnessApp from "./dashboard components/WelnessApp";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const services = [
    { name: "Wellness App", active: true },
    { name: "Symptom Checker", active: true },
    { name: "FeelBetterFast", active: false },
    { name: "Repatriation", active: false },
  ];

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  // Function to render the active page component
  const renderActivePage = () => {
    switch (activePage) {
      case "Home":
        return <Welcome />;
      case "Personal Details":
        return <PersonalDetails />;
      case "Claims":
        return <ClaimsComponent />;
      case "Contact Us":
        return (
          <div className="p-6 bg-white rounded-lg shadow-sm h-full lg:px-32">
            <h1 className="text-4xl font-bold mb-4 text-[#CFB46D]">
              Contact Us
            </h1>
            <hr className="border-gray-200 mb-4" />
            <button
              onClick={openContactModal}
              className="px-4 py-2 bg-[#C9A86C] hover:bg-[#B08F4F] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A86C]"
            >
              Open Contact Form
            </button>
          </div>
        );
      case "Symptom Checker":
        return <SymptomChecker />;
      case "Wellness App":
        return <WellnessApp />;
      default:
        return <div className="p-8">Page not implemented yet</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        services={services}
      />
      <div className="flex-1 overflow-auto">
        {renderActivePage()}
        <ContactUsModal
          isOpen={isContactModalOpen}
          onClose={closeContactModal}
        />
      </div>
    </div>
  );
};

export default Dashboard;
