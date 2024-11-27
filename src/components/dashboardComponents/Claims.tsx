import { useState } from "react";
import ClaimsModal from "./ClaimsModal";

const ClaimsComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full lg:px-32">
      <h2 className="text-4xl font-bold mb-4 text-[#CFB46D]">Claims</h2>
      <hr className="border-gray-200 mb-4" />
      <p className="text-gray-600 mb-4">Submit a claim</p>
      <button
        onClick={openModal}
        className="bg-[#C9A86C] hover:bg-[#B08F4F] text-white font-bold py-2 px-4 rounded"
      >
        CLAIM NOW
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <ClaimsModal closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default ClaimsComponent;
