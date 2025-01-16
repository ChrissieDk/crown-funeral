import React, { useState, useEffect } from "react";
import logo from "../../assets/crown-logo-white.png";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaHeartbeat,
  FaStethoscope,
  FaRunning,
  FaPlane,
  FaEnvelope,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface Service {
  name: string;
  active: boolean;
}

interface SideBarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  services: Service[];
}

const SideBar: React.FC<SideBarProps> = ({
  activePage,
  setActivePage,
  services,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pages = [
    { name: "Home", icon: <FaHome /> },
    { name: "Personal Details", icon: <FaUser /> },
    { name: "Claims", icon: <FaClipboardList /> },
    { name: "Wellness App", icon: <FaHeartbeat />, special: true },
    { name: "Symptom Checker", icon: <FaStethoscope />, special: true },
    { name: "FeelBetterFast", icon: <FaRunning />, special: true },
    { name: "Repatriation", icon: <FaPlane />, special: true },
    { name: "Contact Us", icon: <FaEnvelope /> },
    { name: "Sign Out", icon: <FaSignOutAlt /> },
  ];

  const handlePageClick = (pageName: string) => {
    if (pageName === "Sign Out") {
      // Clear session storage
      sessionStorage.clear();
      // Navigate to sign-in page
      navigate("/sign-in");
      return;
    }
    const service = services.find((s) => s.name === pageName);
    if (service && !service.active) {
      return;
    }

    setActivePage(pageName);
    if (isMobile) setIsOpen(false);
  };

  const isServiceActive = (pageName: string) => {
    const service = services.find((s) => s.name === pageName);
    return service ? service.active : true;
  };

  const renderItem = (page: {
    name: string;
    icon: React.ReactNode;
    special?: boolean;
  }) => {
    const isServiceInactive = page.special && !isServiceActive(page.name);

    return (
      <React.Fragment key={page.name}>
        <button
          className={`w-full text-left py-2 px-4 my-1 flex items-center justify-between 
            ${activePage === page.name ? "bg-gray-700" : ""}
            ${isServiceInactive ? "cursor-not-allowed opacity-60" : ""}
            hover:${isServiceInactive ? "" : "bg-gray-700"}`}
          onClick={() => handlePageClick(page.name)}
          disabled={isServiceInactive}
          title={
            isServiceInactive ? "Make a payment to access this feature" : ""
          }
        >
          <div className="flex items-center">
            <span
              className={`mr-2 ${
                isServiceInactive ? "text-gray-500" : "text-[#C9A86C]"
              }`}
            >
              {page.icon}
            </span>
            <span
              className={isServiceInactive ? "text-gray-500" : "text-white"}
            >
              {page.name}
            </span>
          </div>
          {page.special && (
            <div className="flex items-center">
              {isServiceActive(page.name) ? (
                <IoCheckmarkCircle className="text-green-500" />
              ) : (
                <IoIosCloseCircle className="text-red-500" />
              )}
            </div>
          )}
        </button>
        {(page.name === "Claims" || page.name === "Repatriation") && (
          <hr className="my-2 border-gray-600" />
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-50 text-white bg-black p-2 rounded-md"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } z-40`
            : "relative"
        } transition-transform duration-300 ease-in-out md:translate-x-0 bg-black text-white h-screen w-64 p-4 overflow-y-auto`}
      >
        <img className="p-8" src={logo} alt="Crown Logo" />
        <nav>{pages.map(renderItem)}</nav>
      </div>
    </div>
  );
};

export default SideBar;
