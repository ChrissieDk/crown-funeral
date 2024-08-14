import funeralImage from "../assets/AdobeStock_843502912.jpeg";
import crownImage from "../assets/crown icon.png";

const VerifyAgentSection = () => {
  return (
    <div className="bg-black text-white pt-8 lg:pt-0">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-end">
        <div className="md:w-1/3 mb-8 md:mb-0 relative">
          <div className="absolute -top-8 lg:-top-12 left-0">
            <img
              src={crownImage}
              alt="Crown icon"
              className="w-16 lg:w-24 h-8 lg:h-12"
            />
          </div>
          <h2 className="text-3xl lg:text-7xl font-bold mb-4 px-4">
            Protect What Matters Most
          </h2>
          <p className="mb-4 px-4">
            Secure your family's future with our comprehensive funeral policies.
            At Crown Funeral Services, we offer tailored plans to ensure your
            loved ones are financially protected during difficult times.
          </p>
          <div className="h-1 w-full lg:w-[130%] absolute bg-yellow-500 lg:ml-4"></div>
        </div>
        <div className="md:w-2/3 flex justify-center items-center px-4">
          <img
            src={funeralImage}
            alt="Funeral service"
            className="rounded-lg w-full lg:w-10/12 mb-12"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-yellow-700 md:w-1/3 py-4 px-6 flex items-center justify-center">
          <span className="text-white font-bold text-xl">VERIFY AN AGENT</span>
        </div>
        <div className="bg-white md:w-2/3 py-4 px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-black text-sm md:text-base mb-4 md:mb-0 md:mr-4 text-center md:text-left">
            To ensure you're speaking with a genuine agent, please check their
            identification below. Our team is here to provide you with
            trustworthy and professional assistance.
          </p>
          <button className="bg-yellow-200 text-black px-6 py-2 rounded whitespace-nowrap">
            View Agent ID Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyAgentSection;
