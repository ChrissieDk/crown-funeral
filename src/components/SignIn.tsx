import React from "react";
import crownSignIn from "../assets/crown-sign-in.png";
import logo from "../assets/crown-logo-white.png";
import { useNavigate } from "react-router-dom";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-4 flex justify-between items-center lg:px-[6.3rem]">
        <div className="flex items-center">
          <img
            src={logo}
            alt=""
            className="h-16 w-[9rem] lg:h-28 lg:w-[16rem]"
          />
        </div>
        <nav>
          <a href="#" className="text-[#CFB46D] text-lg">
            Home
          </a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-12 lg:pl-24 flex flex-col justify-center">
          <h1 className="text-5xl lg:text-7xl font-light mb-6 text-[#CFB46D]">
            Welcome
          </h1>
          <p className="text-white mb-8">
            You're part of something truly special. At Crown, we honor your
            journey with care, dignity, and the support you deserve. Thank you
            for trusting us to stand by your side.
          </p>
          <h2 className="text-3xl mb-4 font-bold">
            Sign in to view and manage your profile
          </h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-lg font-light"
                htmlFor="policy-number"
              >
                Policy Number
              </label>
              <input
                id="policy-number"
                type="text"
                className="w-full lg:w-[80%] bg-transparent border-b border-white py-2 focus:outline-none focus:border-[#CFB46D]"
              />
            </div>
            <div>
              <label className="block text-lg font-light" htmlFor="id-number">
                ID Number
              </label>
              <input
                id="id-number"
                type="text"
                className="w-full lg:w-[80%] bg-transparent border-b border-white py-2 focus:outline-none focus:border-[#CFB46D]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#CFB46D] text-black font-semibold px-6 py-3 rounded w-auto lg:w-[40%] hover:bg-[#CFB46D] transition-colors mt-6"
              onClick={() => navigate("/dashboard")}
            >
              SIGN IN
            </button>
          </form>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-black">
          <div
            className="bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${crownSignIn})`,
              width: "80%", // Adjust this value to change the width
              height: "100%", // Adjust this value to change the height
              maxWidth: "500px", // Optional: set a maximum width
              maxHeight: "600px", // Optional: set a maximum height
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
