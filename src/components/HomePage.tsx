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
            Your Trusted Partner
            <br /> in Life's Final Tribute.
          </h1>
          <p className="max-w-2xl mb-8">
            Ensure your family is supported during life's most challenging
            times. Our policies provide peace of mind and ease when it matters
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

      <VerifyAgentSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <FaqsSection />
      <Footer />
    </>
  );
};

export default HomePage;
