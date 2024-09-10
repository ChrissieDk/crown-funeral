import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

const Welcome = () => {
  const policyDetails = {
    username: "John",
    policyNumber: "22915/CF",
    plan: "[Name]",
    monthlyPremium: "R 600.00",
  };

  const services = [
    { name: "Wellness App", active: true },
    { name: "Symptom Checker", active: true },
    { name: "FeelBetterFast Voucher", active: false },
    { name: "Registration", active: false },
  ];

  return (
    <div className="p-8 max-w-5xl ">
      <h1 className="text-4xl font-bold mb-4 text-[#CFB46D]">
        Welcome, {policyDetails.username}
      </h1>
      <hr className="border-gray-300 mb-6 w-full" />

      <div className="rounded-t-3xl overflow-hidden">
        {/* Top section with golden background */}
        <div className="bg-[#CFB46D] p-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-light">Policy</p>
              <p className="font-bold">{policyDetails.policyNumber}</p>
            </div>
            <div>
              <p className="text-sm font-light">Plan</p>
              <p className="font-bold">{policyDetails.plan}</p>
            </div>
            <div>
              <p className="text-sm font-light">Monthly premium</p>
              <p className="font-bold">{policyDetails.monthlyPremium}</p>
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
              <div key={service.name} className="flex items-center font-bold">
                {service.active ? (
                  <IoCheckmarkCircle className="w-6 h-6 text-green-500 mr-2" />
                ) : (
                  <IoIosCloseCircle className="w-6 h-6 text-red-500 mr-2" />
                )}
                <span className="text-sm">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
