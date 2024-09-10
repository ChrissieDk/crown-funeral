import { useState } from "react";

const ClaimsComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full px-32">
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
          <div className="bg-[#333333] p-8 rounded-lg max-w-xl w-full">
            <h3 className="text-xl font-semibold text-white mb-4">
              Submit a Claim
            </h3>
            <p className="text-[#CCCCCC] text-sm mb-4">
              Please have the following ready: your full name, policy number,
              date of death, claim amount, contact information, beneficiary
              details, death certificate, proof of identity, and relevant policy
              documents. One of our Claim agents will be in contact with you
              soon to assist you through the process with care and support.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[#CCCCCC] text-sm mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#444444] text-white p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-[#CCCCCC] text-sm mb-2"
                >
                  Cellphone number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-[#444444] text-white p-2 rounded"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-[#666666] hover:bg-[#555555] text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#C9A86C] hover:bg-[#B08F4F] text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClaimsComponent;
