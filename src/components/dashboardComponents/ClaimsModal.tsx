import React, { useState } from "react";

interface ChecklistGroupProps {
  title: string;
  items: string[];
}

const ChecklistGroup: React.FC<ChecklistGroupProps> = ({ title, items }) => (
  <div className="mb-4">
    <h4 className="text-[#C9A86C] font-semibold mb-2">{title}</h4>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex items-start mb-1">
          <span className="text-[#C9A86C] mr-2">•</span>
          <span className="text-[#CCCCCC] text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface ModernChecklistProps {
  closeModal: () => void;
}

const ModernChecklist: React.FC<ModernChecklistProps> = ({ closeModal }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const checklistGroups = [
    {
      title: "Required Documents",
      items: [
        "Certified copy of policyholder’s ID",
        "Certified copy of beneficiary’s ID (if deceased is the policyholder)",
        " Certified copy of deceased member’s ID or birth certificate",
        "Police report in case of an unnatural death",
        "Certified copy of deceased’s death certificate",
        "BI-1663 form with complete information of the notice of death",
        "Copy of beneficiary’s bank statement with bank stamp",
        "Any other documents/reports needed to assess the validity of the claim",
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form with:", { name, phone });
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#333333] p-4 rounded-lg max-w-xl w-full"
    >
      <h3 className="text-xl font-semibold text-white mb-6">Submit a Claim</h3>
      <p className="text-[#CCCCCC] text-sm mb-4">
        Please have the following information ready:
      </p>
      <div className="mb-6">
        {checklistGroups.map((group, index) => (
          <ChecklistGroup key={index} title={group.title} items={group.items} />
        ))}
      </div>
      <p className="text-[#CCCCCC] text-sm mb-6">
        One of our Claim agents will be in contact with you soon to assist you
        through the process with care and support.
      </p>
      <div className="mb-4">
        <label htmlFor="name" className="block text-[#CCCCCC] text-sm mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[#444444] text-white p-2 rounded"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block text-[#CCCCCC] text-sm mb-2">
          Cellphone number:
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-[#444444] text-white p-2 rounded"
          required
        />
      </div>
      <div className="mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="h-5 w-5 text-[#C9A86C] rounded border-gray-300 focus:ring-[#C9A86C]"
            required
          />
          <span className="ml-2 text-[#CCCCCC] text-sm">
            I have the above mentioned information ready
          </span>
        </label>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={closeModal}
          className="bg-[#666666] hover:bg-[#555555] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#C9A86C] hover:bg-[#B08F4F] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ModernChecklist;
