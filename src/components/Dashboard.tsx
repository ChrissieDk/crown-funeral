import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Dashboard components/Sidebar";
import Welcome from "./Dashboard components/Welcome";
import PersonalDetails from "./Dashboard components/PersonalDetails";
import ClaimsComponent from "./Dashboard components/Claims";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    { name: "Wellness App", active: true },
    { name: "Symptom Checker", active: true },
    { name: "FeelBetterFast", active: false },
    { name: "Repatriation", active: false },
  ];

  // Function to render the active page component
  const renderActivePage = () => {
    switch (activePage) {
      case "Home":
        return <Welcome />;
      case "Personal Details":
        return (
          <PersonalDetails
            fullName="John Daniel Doe"
            idNumber="8190707004081"
            maritalStatus="Married"
            employerName="EPWP"
            employmentStatus="Employed"
            salaryDate="25"
            contactNumber="071 342 3321"
            workNumber="(021) 861 3329"
            emailAddress="johndoe@gmail.com"
            homeAddress="12 Jonkers Road, Brackenfell, 7560"
          />
        );
      case "Claims":
        return <ClaimsComponent />;
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
      <div className="flex-1 overflow-auto">{renderActivePage()}</div>
    </div>
  );
};

export default Dashboard;
