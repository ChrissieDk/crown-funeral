import crownImage from "../assets/crown icon.png";
import crownDark from "../assets/crown black.png";

const WhyChooseUsSection = () => {
  return (
    <div className="bg-white" id="why-choose-us">
      {/* Top Section with White Background */}
      <div className="container mx-auto px-4 ">
        {/* Title */}
        <h2 className="text-4xl lg:text-6xl font-bold text-center py-8 ">
          Why Choose Us?
          <img
            src={crownImage}
            alt="Crown"
            className="inline-block w-10 h-8 lg:w-20 lg:h-10 -mt-2 ml-2"
          />
        </h2>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Affordable Plans:", "Simple Process:", "Peace of Mind:"].map(
            (title, index) => (
              <div
                key={index}
                className="bg-[#CFB46E] rounded-lg p-4 text-center w-full md:w-64"
              >
                <h3 className="font-bold text-white">{title}</h3>
                <p className="text-sm font-semibold">
                  {index === 0
                    ? "Flexible options to suit your budget."
                    : index === 1
                    ? "Easy enrollment with minimal paperwork."
                    : "Coverage that guarantees support when it's needed most."}
                </p>
              </div>
            )
          )}
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
                Safeguard your family's future with a plan that gives you and
                your loved ones peace of mind. Contact us now to learn more
                about our funeral policy options.
              </h3>
            </div>

            {/* Form */}
            <div className="w-full md:w-1/3 bg-black text-white p-8 rounded-lg shadow-lg ">
              <h4 className="text-xl font-bold mb-4 text-center">
                Protect What Matters Most - Start Now
              </h4>
              <p className="mb-4 text-center">Fill out the form below:</p>
              <form className="space-y-4 ">
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
