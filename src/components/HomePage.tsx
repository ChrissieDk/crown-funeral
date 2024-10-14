import React, { useEffect, useState } from "react";
import heroImage from "../assets/AdobeStock_549976257.jpeg";
import VerifyAgentSection from "./VerifyAgent";
import AboutUsSection from "./AboutUs";
import WhyChooseUsSection from "./WhyChooseUs";
import FaqsSection from "./FaqsSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollChange = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScrollChange);

    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />

      <div
        className="min-h-screen bg-cover bg-center text-white flex flex-col"
        style={{ backgroundImage: `url(${heroImage})` }}
        id="about"
      >
        {/* Main Content */}
        <main className="flex flex-col items-center justify-end text-center flex-grow pb-20 mx-2 pt-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Find peace in difficult times.
          </h1>
          <p className="max-w-2xl mb-8">
            You have the power to ensure that your family is supported during
            life’s most challenging times. Get funeral cover from as little as
            R95 per month. Now you can have peace of mind when it matters most.
          </p>

          <div className="space-x-4">
            <a href="#about-us">
              <button className="bg-yellow-200 text-black px-6 py-3 rounded hover:bg-[#B8A061] transition-colors">
                LEARN MORE
              </button>
            </a>

            <a href="#why-choose-us">
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-black transition-colors">
                CALL ME
              </button>
            </a>
          </div>
        </main>
      </div>

      <VerifyAgentSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <FaqsSection />
      <Footer />
    </>
  );
};

export default HomePage;
