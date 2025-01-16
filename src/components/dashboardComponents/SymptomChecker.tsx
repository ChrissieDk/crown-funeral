import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios"; // Import axios for API calls
import { useMemberInfo } from "../../Hooks/useMemberInfo"; // Reuse the member info hook

const SymptomChecker = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [botUrl, setBotUrl] = useState("");
  const [error, setError] = useState("");
  const { memberInfo, loading } = useMemberInfo(); // Reuse the member info hook

  // Basic Auth credentials
  const username = "Illion";
  const password = "IoYzAAqD21WrzDg";
  const base64Credentials = btoa(`${username}:${password}`);

  const handleButtonClick = async () => {
    try {
      if (!memberInfo) {
        setError("Member information not available");
        return;
      }

      // Prepare user data for the API call
      const userData = {
        name: memberInfo.FirstName,
        surname: memberInfo.LastName,
        mobile: memberInfo.Contact[0]?.Cell || "",
        email: memberInfo.Contact[0]?.Email || "",
        policyNumber: memberInfo.PolicyNumber,
      };

      // Call the API endpoint
      const response = await axios.post(
        "https://api.one81.com/v1/Notification/AutoSignUpBot",
        userData,
        {
          headers: {
            Authorization: `Basic ${base64Credentials}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response contains a redirection URL
      if (response.data.isSuccessful && response.data.data?.redirectionUrl) {
        setBotUrl(response.data.data.redirectionUrl);
        setShowIframe(true);
      } else {
        throw new Error("Invalid response from the bot service");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("API Error:", err.response?.data || err.message); // Log detailed error
      } else {
        console.error("Unexpected Error:", err);
      }
      setError(
        "Failed to connect to the symptom checker. Please try again later."
      );
    }
  };

  const handleBackClick = () => {
    setShowIframe(false);
    setBotUrl("");
    setError("");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (showIframe && botUrl) {
    return (
      <div className="w-full h-screen flex flex-col">
        <div className="bg-[#C9A86C] p-4 flex justify-between items-center">
          <button
            onClick={handleBackClick}
            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FaArrowLeft size={24} />
          </button>
          <div className="text-white">Symptom Checker Session Active</div>
        </div>
        <div className="flex-grow w-full relative flex items-center justify-center bg-gray-50">
          <iframe
            src={botUrl}
            title="Symptom Checker"
            className="w-full h-full border-0"
            allow="camera *; microphone *; geolocation *; clipboard-write; fullscreen"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full border border-gray-200 rounded-lg p-6 shadow-md lg:px-32">
      <h2 className="text-4xl font-bold mb-4 text-[#CFB46D]">FeelBetterFast</h2>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-lg font-medium mb-2">Not feeling your best?</p>
        <p className="text-sm text-gray-600 mb-4">
          Click here to use our reliable symptom checker and get started on the
          path to feeling better.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          className="px-4 py-2 bg-[#C9A86C] hover:bg-[#B08F4F] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A86C]"
          onClick={handleButtonClick}
          disabled={!memberInfo}
        >
          START SYMPTOM CHECKER
        </button>
      </div>
    </div>
  );
};

export default SymptomChecker;
