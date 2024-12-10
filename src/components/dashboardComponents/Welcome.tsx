import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { useMemberInfo } from "../../Hooks/useMemberInfo";
import { useEffect, useState } from "react";

interface Service {
  name: string;
  active: boolean;
}

const Welcome = () => {
  const { memberInfo, loading, error } = useMemberInfo();
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const memberInfoStr = sessionStorage.getItem("memberInfo");
    if (memberInfoStr) {
      const { hasServiceAccess } = JSON.parse(memberInfoStr);

      setServices([
        { name: "Wellness App", active: hasServiceAccess },
        { name: "Symptom Checker", active: hasServiceAccess },
        { name: "FeelBetterFast Voucher", active: hasServiceAccess },
        { name: "Repatriation", active: hasServiceAccess },
      ]);
    }
  }, []);

  if (loading) {
    return (
      <div className="p-8 max-w-5xl">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-1 bg-gray-200 rounded w-full mb-6"></div>
          <div className="rounded-t-3xl overflow-hidden">
            <div className="bg-gray-200 p-6 h-32"></div>
            <div className="bg-gray-300 p-6 h-48"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 max-w-5xl">
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded">
          Failed to load member information: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl ">
      <h1 className="text-4xl font-bold mb-4 text-[#CFB46D]">
        Welcome, {memberInfo?.FirstName || "Member"}
      </h1>
      <hr className="border-gray-300 mb-6 w-full" />

      <div className="rounded-t-3xl overflow-hidden">
        {/* Top section with golden background */}
        <div className="bg-[#CFB46D] p-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-light">Policy</p>
              <p className="font-bold">{memberInfo?.PolicyNumber}</p>
            </div>
            <div>
              <p className="text-sm font-light">Plan</p>
              <p className="font-bold">
                {memberInfo?.PolicyHistory?.[0]?.PolicyDescription || "[Name]"}
              </p>
            </div>
            <div>
              <p className="text-sm font-light">Monthly premium</p>
              <p className="font-bold">
                R {memberInfo?.PolicyHistory?.[0]?.Premium || "0.00"}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section with dark background */}
        <div className="bg-slate-900 p-6 text-white">
          <p className="text-md mb-2">Active Services</p>
          <p className="text-sm text-gray-400 mb-4 text-[#CFB46D] font-semibold">
            (Please note that the availability of services is subject to the
            successful completion of required payments and any applicable
            waiting periods as outlined in your policy terms.)
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center font-bold group "
              >
                {service.active ? (
                  <IoCheckmarkCircle className="w-6 h-6 text-green-500 mr-2" />
                ) : (
                  <IoIosCloseCircle className="w-6 h-6 text-red-500 mr-2" />
                )}
                <span
                  className={`text-sm ${!service.active ? "opacity-60" : ""}`}
                >
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
