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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (showIframe && illionUrl) {
    return (
      <div className="w-full h-screen flex flex-col">
        <div className="bg-[#C9A86C] p-4">
          <button
            onClick={handleBackClick}
            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FaArrowLeft size={24} />
          </button>
        </div>
        <iframe
          src={illionUrl}
          title="Wellness App"
          className="flex-grow w-full border-none"
        />
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
