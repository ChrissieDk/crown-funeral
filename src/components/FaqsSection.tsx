import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import crownImage from "../assets/crown icon.png";

const faqData = [
  {
    question: "What is funeral cover?",
    answer:
      "Funeral cover is insurance that helps pay for funeral expenses, such as services, burial or cremation, as well as related costs, easing the financial burden on the family.",
  },
  {
    question: "Why do you need a funeral plan?",
    answer:
      "To prepare for the expense of a funeral. Funerals can strain your family financially. So get peace of mind for everyone in knowing that you're covered for the cost of a funeral.",
  },
  {
    question: "Who qualifies for Crown Funeral cover?",
    answer:
      "Our funeral services are specifically designed for SASSA recipients aged 18 to 79.",
  },
  {
    question: "How can I join?",
    answer:
      "Interested customers may request a call from our helpful staff directly or schedule a meeting with a field agent in person. Our team will guide you through the process, answer any questions, and help you find the best cover for your needs.",
  },
  {
    question: "Do you cover spouses?",
    answer:
      "Yes, 'spouse' refers to someone who is married to the policyholder (main member) before the start date of the Funeral Plan. This relationship must be in place when the cover is applied for. 'Married' refers to the relationship between the policyholder and their spouse, which must be in place at the time of death. This includes when two people are: Married according to the laws of South Africa; Married according to customary or tribal law; Married under any religion practised in South Africa; Living together for at least two years, with satisfactory proof of the permanency of the relationship provided upon request by the insurer; or Party to a civil union in terms of the Civil Union Act, 2006.",
  },
  {
    question: "What are the age limits for joining?",
    answer: "Anyone from as young as 18 up to 79.",
  },
  {
    question: "How much am I covered for?",
    answer:
      "Depending on Your Plan selection and Your age, the maximum Cover Amount per policy for a Policyholder is limited to R30 000 (Thirty Thousand Rand), R20 000 (Twenty Thousand Rand) for a Spouse and Children aged over 13 (Thirteen) years, and R5 000 (Five Thousand Rand) per Extended Family Member.",
  },
  {
    question: "What are the waiting periods?",
    answer:
      "Natural cause of death: 6 months. Death due to suicide: 12 months. Accidental death: No waiting period. FeelBetterFast voucher benefit: 6 months.",
  },
  {
    question: "What value-added services does the funeral plan offer?",
    answer:
      "Burial Repatriation Benefit: Helps cover the costs and arrangements of bringing your loved one's remains home for burial. Health Coach: Our activity trackers help you set goals, track progress, and earn rewards to stay motivated and healthy. Symptom Check and Symptom Checker: Health Assist provides affordable, professional support, including real-time doctor chats and a symptom checker for expert advice. FeelBetterFast Minor Ailment Service: Redeemable at your local pharmacy, this service voucher efficiently addresses minor health concerns.",
  },
  {
    question: "How do I claim?",
    answer:
      "Members may send their claim along with their membership number or ID number to claims@crownfuneral.co.za ",
  },
  {
    question: "Who will receive the payout amount at the claims stage?",
    answer:
      "If the Policyholder is still alive at claim stage, the Benefits will be paid to the Policyholder. Upon the death of the Policyholder, the Benefits will be paid to the nominated Beneficiary/s.",
  },
  {
    question: "What are the maximum age limits for membership?",
    answer:
      "Main member and spouse: 79 years. Child: 26 years. Extended family member: 74 years.",
  },
  {
    question: "What is a FeelBetterFast voucher?",
    answer:
      "A FeelBetterFast voucher entitles you to a free consultation at a network pharmacy for minor ailments, vaccinations or health tests. As a main member, you'll receive one voucher.",
  },
  {
    question: "How to claim a FeelBetterFast voucher?",
    answer: "Contact our Call Centre on 0861 18 92 02 to request yours.",
  },
];

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-12 px-6 w-full" id="faqs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-start p-4">
          <img src={crownImage} alt="Crown" className="w-14 h-10 mb-2" />
          <h2 className="text-5xl font-bold mb-4">FAQs</h2>
          <p className="text-lg text-gray-600">
            We're here to answer all your questions
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 md:pl-12 md:border-l md:border-gray-300 p-4">
          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-medium">
                  <span className="mr-4 text-yellow-500">{index + 1}.</span>
                  <span className="mr-4">{item.question}</span>
                </span>
                <IoChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsSection;
