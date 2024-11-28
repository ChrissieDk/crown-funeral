import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { getIllionAutoLogin } from "../../Services/data.service";
import { useMemberInfo } from "../../Hooks/useMemberInfo";
import type { IllionUserData } from "../../Types";

const WellnessApp = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [illionUrl, setIllionUrl] = useState("");
  const [error, setError] = useState("");
  const [windowRef, setWindowRef] = useState<Window | null>(null);
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
        // Create a controlled popup window
        const popupWindow = window.open(
          response.data.redirectionUrl,
          "WellnessApp",
          "width=1000,height=800,left=100,top=100"
        );

        if (!popupWindow) {
          setError("Please enable popups to access the Wellness App");
          return;
        }

        setWindowRef(popupWindow);
        setIllionUrl(response.data.redirectionUrl);
        setShowIframe(true);

        // Monitor window state
        const checkWindow = setInterval(() => {
          if (popupWindow.closed) {
            clearInterval(checkWindow);
            setWindowRef(null);
            setShowIframe(false);
            setIllionUrl("");
          }
        }, 500);
      }
    } catch (err) {
      setError("Failed to connect to wellness app. Please try again later.");
      console.error(err);
    }
  };

  const handleBackClick = () => {
    if (windowRef && !windowRef.closed) {
      windowRef.close();
    }
    setWindowRef(null);
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
        <div className="bg-[#C9A86C] p-4 flex justify-between items-center">
          <button
            onClick={handleBackClick}
            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FaArrowLeft size={24} />
          </button>
          <div className="text-white">Wellness App Session Active</div>
        </div>
        <div className="flex-grow w-full relative flex items-center justify-center bg-gray-50">
          <div className="text-center p-6">
            <h3 className="text-xl font-medium mb-4">
              Your Wellness App session is active in a separate window
            </h3>
            <p className="text-gray-600 mb-4">
              Please complete your session in the opened window. You can return
              here once you're done.
            </p>
            <button
              onClick={handleBackClick}
              className="px-4 py-2 bg-[#C9A86C] hover:bg-[#B08F4F] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A86C]"
            >
              End Session
            </button>
          </div>
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
