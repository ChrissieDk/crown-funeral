import { useState, useEffect } from "react";
import SideBar from "./dashboardComponents/Sidebar";
import Welcome from "./dashboardComponents/Welcome";
import PersonalDetails from "./dashboardComponents/PersonalDetails";
import ClaimsComponent from "./dashboardComponents/Claims";
import ContactUsModal from "./dashboardComponents/ContactUs";
import SymptomChecker from "./dashboardComponents/SymptomChecker";
import WellnessApp from "./dashboardComponents/WelnessApp";

// Add interface for service type
interface Service {
  name: string;
  active: boolean;
}

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // Set the type for services state
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const memberInfoStr = sessionStorage.getItem("memberInfo");
    if (memberInfoStr) {
      const { hasServiceAccess } = JSON.parse(memberInfoStr);

      setServices([
        { name: "Wellness App", active: hasServiceAccess },
        { name: "Symptom Checker", active: hasServiceAccess },
        { name: "FeelBetterFast", active: false },
        { name: "Repatriation", active: false },
      ]);
    }
  }, []);
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const renderActivePage = () => {
    // Check if current page is an inactive service
    const currentService = services.find(
      (service) => service.name === activePage
    );
    if (currentService && !currentService.active) {
      return (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Service Unavailable
          </h2>
          <p className="text-gray-600">
            This service is only available for members with active payments.
            Please make a payment to access this feature.
          </p>
        </div>
      );
    }

    // Rest of your switch statement remains the same
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
      <SideBar
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
