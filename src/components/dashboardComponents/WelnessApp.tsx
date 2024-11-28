import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { getIllionAutoLogin } from "../../Services/data.service";
import { useMemberInfo } from "../../Hooks/useMemberInfo";
import type { IllionUserData } from "../../Types";

const WellnessApp = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [illionUrl, setIllionUrl] = useState("");
  const [error, setError] = useState("");
  const { memberInfo, loading } = useMemberInfo();

  const handleButtonClick = async () => {
    try {
      if (!memberInfo) {
        setError("Member information not available");
        return;
      }

      const userData: IllionUserData = {
        name: memberInfo.FirstName,
        surname: memberInfo.LastName,
        mobile: memberInfo.Contact[0]?.Cell || "",
        email: memberInfo.Contact[0]?.Email || "",
        policyNumber: memberInfo.PolicyNumber,
        productName: "crowfuneral",
      };

      const response = await getIllionAutoLogin(userData);
      if (response.data.redirectionUrl) {
        setIllionUrl(response.data.redirectionUrl);
        setShowIframe(true);
      }
    } catch (err) {
      setError("Failed to connect to wellness app. Please try again later.");
      console.error(err);
    }
  };

  const handleBackClick = () => {
    setShowIframe(false);
    setIllionUrl("");
    setError("");
  };

  const handleOpenInNewTab = () => {
    if (illionUrl) {
      window.open(illionUrl, "_blank", "noopener,noreferrer");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (showIframe && illionUrl) {
    return (
      <div className="w-full h-screen flex flex-col">
        <div className="bg-[#C9A86C] p-4 flex justify-between items-center">
          <button
            onClick={handleBackClick}
            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={handleOpenInNewTab}
            className="flex items-center gap-2 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white px-4 py-2 rounded"
          >
            <span>Open in new tab</span>
            <FaArrowLeft size={16} />
          </button>
        </div>
        <div className="flex-grow w-full relative">
          <iframe
            src={illionUrl}
            title="Wellness App"
            className="w-full h-full border-none"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            onError={(e) => {
              setError(
                "Failed to load the Wellness App. Please try opening in a new tab."
              );
              console.error("iframe error:", e);
            }}
          />
          {error && (
            <div className="absolute top-0 left-0 right-0 bg-red-100 p-4 text-red-700">
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full border border-gray-200 rounded-lg p-6 shadow-md lg:px-32">
      <h2 className="text-4xl font-bold mb-4 text-[#CFB46D]">Wellness App</h2>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-lg font-medium mb-2">
          Our health coach takes a holistic approach to transforming your
          habits.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          className="px-4 py-2 bg-[#C9A86C] hover:bg-[#B08F4F] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A86C]"
          onClick={handleButtonClick}
          disabled={!memberInfo}
        >
          START WELLNESS APP
        </button>
      </div>
    </div>
  );
};

export default WellnessApp;
