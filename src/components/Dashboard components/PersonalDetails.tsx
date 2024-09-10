import React from "react";
import { FaRegEdit } from "react-icons/fa";
import crownImage from "../../assets/crown icon.png";

interface PersonalDetailsProps {
  fullName: string;
  idNumber: string;
  maritalStatus: string;
  employerName: string;
  employmentStatus: string;
  salaryDate: string;
  contactNumber: string;
  workNumber: string;
  emailAddress: string;
  homeAddress: string;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  fullName,
  idNumber,
  maritalStatus,
  employerName,
  employmentStatus,
  salaryDate,
  contactNumber,
  workNumber,
  emailAddress,
  homeAddress,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl w-full mx-auto p-8 bg-white rounded-3xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-[#CFB46D]">
            Personal Details
          </h1>
          <button className="text-[#CFB46D] flex items-center">
            Edit <FaRegEdit className="ml-2" />
          </button>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center mb-6 ">
            <div className="mr-4 h-14 w-16 pt-2">
              <img src={crownImage} alt="" />
            </div>
            <div>
              <p className="font-semibold text-sm uppercase">POLICY HOLDER</p>
              <p className="text-lg">{fullName}</p>
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
                  <p className="font-semibold">{fullName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">ID number</p>
                  <p className="font-semibold">{idNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Marital Status</p>
                  <p className="font-semibold">{maritalStatus}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[#CFB46D] font-semibold mb-4">
                Employment Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-y-4">
                <div>
                  <p className="text-xs text-gray-500">Employer Name</p>
                  <p className="font-semibold">{employerName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Employment Status</p>
                  <p className="font-semibold">{employmentStatus}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Salary Date</p>
                  <p className="font-semibold">{salaryDate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-[#CFB46D] font-semibold mb-4">
              Contact Details
            </h2>
            <div className="grid sm:grid-cols-3 gap-y-4">
              <div>
                <p className="text-xs text-gray-500">Contact Number</p>
                <p className="font-semibold">{contactNumber}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Work Number</p>
                <p className="font-semibold">{workNumber}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email Address</p>
                <p className="font-semibold">{emailAddress}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-[#CFB46D] font-semibold mb-4">
              Address Details
            </h2>
            <div>
              <p className="text-xs text-gray-500">Home Address</p>
              <p className="font-semibold">{homeAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
