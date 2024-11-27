import React, { useState } from "react";

type ContactUsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [cellphone, setCellphone] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", { name, cellphone });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#333333] rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-[#C9A86C] font-semibold mb-2">Contact Us</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl font-bold"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <p className="text-gray-300 mb-4">
            We're here to help. Please complete the details below, and we will
            call you back.
          </p>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-[#444444] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C9A86C]"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="cellphone"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Cellphone number:
            </label>
            <input
              type="tel"
              id="cellphone"
              value={cellphone}
              onChange={(e) => setCellphone(e.target.value)}
              className="w-full px-3 py-2 bg-[#444444] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C9A86C]"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#C9A86C] hover:bg-[#B08F4F] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A86C]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsModal;
