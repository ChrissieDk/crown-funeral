import React, { useState } from "react";
import heroImage from "../assets/AdobeStock_549976257.jpeg";
import logo from "../assets/crown logo white.png";

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Crown Funeral Logo" className="w-32 h-12 ml-2" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <li>
              <a href="#" className="hover:underline block">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline block">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline block">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline block">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline block">
                Verify an Agent
              </a>
            </li>
          </ul>
        </nav>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition-colors">
          SIGN IN
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-end text-center flex-grow pb-20 mx-2">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          We're here for you.
        </h1>
        <h2 className="text-4xl lg:text-6xl font-bold mb-8">
          Every step of the way.
        </h2>
        <p className="max-w-2xl mb-8">
          Ensure your family is taken care of during life's most difficult
          moments. Our policies offer security and simplicity when it's needed
          most.
        </p>

        <div className="space-x-4">
          <button className="bg-yellow-200 text-black px-6 py-3 rounded hover:bg-yellow-300 transition-colors">
            LEARN MORE
          </button>
          <button className="bg-transparent border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-black transition-colors">
            CALL ME
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
