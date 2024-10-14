import crownImage from "../assets/crown icon.png";
import crownDark from "../assets/crown black.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const WhyChooseUsSection = () => {
  const [memberType, setMemberType] = useState("new");
  return (
    <div className="bg-white" id="why-choose-us">
      {/* Top Section with White Background */}
      <div className="container mx-auto px-4 ">
        {/* Title */}
        <div className="mb-8 lg:pt-10 flex flex-col items-center">
          <img src={crownImage} alt="Crown icon" className="w-20 h-10 mb-2" />
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-center">
            Why Choose Us?
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {["Affordable Plans:", "Simple Process:", "Peace of Mind:"].map(
            (title, index) => (
              <div
                key={index}
                className="bg-[#B8A061] rounded-lg p-4 text-center w-full md:w-64"
              >
                <h3 className="font-bold text-white">{title}</h3>
                <p className="text-sm font-semibold">
                  {index === 0
                    ? "Flexible options to suit your budget."
                    : index === 1
                    ? "Easy sign up with very little paperwork."
                    : "Cover that guarantees support when it’s needed most."}
                </p>
              </div>
            )
          )}
        </div>
        <div className="flex justify-center mb-4">
          <Link
            to="/products"
            className="bg-[#B8A061] hover:bg-[#a38c54] text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Bottom Section*/}

      <div className="bg-[#CFB46E]">
        <div className="container mx-auto px-4 lg:py-12">
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Get Started Today */}
            <div className=" md:w-2/3 p-8">
              <img
                src={crownDark}
                alt="Crown"
                className="w-20 h-12 mb-2 text-black"
              />
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
                Get Started Today
              </h1>
              <h3 className="mb-4 text-xl lg:text-2xl max-w-2xl">
                Speak to one of our friendly agents today! Safeguard your
                family’s future with a plan that provides peace of mind for you
                and your loved ones. Simply fill in the form and an agent will
                be in touch shortly to tell you more about our funeral policy
                options.
              </h3>
            </div>

            {/* Form */}
            <div className="w-full md:w-1/3 bg-black text-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-center">
                Fill out the fields below and we'll call you back:
              </h4>
              <form className="space-y-4">
                <div className="flex justify-center space-x-4 mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="memberType"
                      value="new"
                      checked={memberType === "new"}
                      onChange={() => setMemberType("new")}
                    />
                    <span className="ml-2">New Member</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="memberType"
                      value="current"
                      checked={memberType === "current"}
                      onChange={() => setMemberType("current")}
                    />
                    <span className="ml-2">Current Member</span>
                  </label>
                </div>

                <div>
                  <label htmlFor="fullName" className="block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full p-2 rounded bg-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="cellphone" className="block mb-1">
                    Cellphone Number
                  </label>
                  <input
                    type="tel"
                    id="cellphone"
                    className="w-full p-2 rounded bg-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 rounded bg-gray-800"
                  />
                </div>

                {memberType === "new" && (
                  <div>
                    <label htmlFor="province" className="block mb-1">
                      Province
                    </label>
                    <input
                      type="text"
                      id="province"
                      className="w-full p-2 rounded bg-gray-800"
                    />
                  </div>
                )}

                {memberType === "current" && (
                  <div>
                    <label htmlFor="membershipId" className="block mb-1">
                      Membership / ID Number
                    </label>
                    <input
                      type="text"
                      id="membershipId"
                      className="w-full p-2 rounded bg-gray-800"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-yellow-200 text-black font-bold py-2 px-4 rounded hover:bg-[#CFB46E] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
