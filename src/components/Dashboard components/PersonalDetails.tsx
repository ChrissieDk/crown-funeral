import React from "react";
import crownImage from "../../assets/crown icon.png";
import { useMemberInfo } from "../../Hooks/useMemberInfo";

const PersonalDetails: React.FC = () => {
  const { memberInfo, loading, error } = useMemberInfo();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl w-full mx-auto p-8 bg-white rounded-3xl shadow-lg animate-pulse">
          <div className="h-8 bg-gray-200 w-48 mb-6"></div>
          <div className="space-y-6">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-40 bg-gray-200 rounded"></div>
              <div className="h-40 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl w-full mx-auto p-8">
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded">
            Failed to load member information: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl w-full mx-auto p-8 bg-white rounded-3xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-[#CFB46D]">
            Personal Details
          </h1>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center mb-6">
            <div className="mr-4 h-14 w-16 pt-2">
              <img src={crownImage} alt="" />
            </div>
            <div>
              <p className="font-semibold text-sm uppercase">POLICY HOLDER</p>
              <p className="text-lg">{memberInfo?.FullName}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
            <div>
              <h2 className="text-[#CFB46D] font-semibold mb-4">
                Personal Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-y-4">
                <div>
                  <p className="text-xs text-gray-500">Full Name</p>
                  <p className="font-semibold">{memberInfo?.FullName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">ID number</p>
                  <p className="font-semibold">{memberInfo?.IDNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Gender</p>
                  <p className="font-semibold">{memberInfo?.Gender}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Date of Birth</p>
                  <p className="font-semibold">{memberInfo?.DateOfBirth}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[#CFB46D] font-semibold mb-4">
                Policy Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-y-4">
                <div>
                  <p className="text-xs text-gray-500">Policy Number</p>
                  <p className="font-semibold">{memberInfo?.PolicyNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="font-semibold">
                    {memberInfo?.StatusDescription}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Agent</p>
                  <p className="font-semibold">{memberInfo?.Agent}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Inception Date</p>
                  <p className="font-semibold">{memberInfo?.InceptionDate}</p>
                </div>
              </div>
            </div>
          </div>

          {memberInfo?.Contact && memberInfo.Contact.length > 0 && (
            <div className="border-t border-gray-200 pt-6 mb-6">
              <h2 className="text-[#CFB46D] font-semibold mb-4">
                Contact Details
              </h2>
              <div className="grid sm:grid-cols-3 gap-y-4">
                <div>
                  <p className="text-xs text-gray-500">Contact Number</p>
                  <p className="font-semibold">{memberInfo.Contact[0].Cell}</p>
                </div>
                {memberInfo.Contact[0].WorkTel && (
                  <div>
                    <p className="text-xs text-gray-500">Work Number</p>
                    <p className="font-semibold">
                      {memberInfo.Contact[0].WorkTel}
                    </p>
                  </div>
                )}
                {memberInfo.Contact[0].Email && (
                  <div>
                    <p className="text-xs text-gray-500">Email Address</p>
                    <p className="font-semibold">
                      {memberInfo.Contact[0].Email}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {memberInfo?.Beneficiary && memberInfo.Beneficiary.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-[#CFB46D] font-semibold mb-4">
                Beneficiary Details
              </h2>
              {memberInfo.Beneficiary.map((beneficiary, index) => (
                <div key={index} className="mb-4">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Beneficiary Name</p>
                      <p className="font-semibold">{beneficiary.FullName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Relationship</p>
                      <p className="font-semibold">{beneficiary.Relation}</p>
                    </div>
                    {/* <div>
                      <p className="text-xs text-gray-500">Percentage</p>
                      <p className="font-semibold">{beneficiary.Percentage}%</p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
