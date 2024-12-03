import React, { useEffect, useState } from "react";
import productBg from "../../assets/AdobeStock_397028890.jpeg";
import crown from "../../assets/crown icon.png";
import contactBg from "../../assets/contact us background.png";
import Navbar from "../Navbar";
import Vaps from "./Vaps";
import PricingComponent from "./Pricing";
import Footer from "../Footer";

const Products: React.FC = () => {
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
      <div className="min-h-screen bg-black text-white p-8 relative mx-auto pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${productBg})`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Products and Prices
          </h1>
          <p className="text-lg lg:text-xl mb-12 max-w-3xl">
            Crown Funeral is specifically tailored for SASSA recipients aged 18
            and over. Signing up is simple with our fast application
            process—just request a visit from one of our friendly consultants,
            and we'll take care of the rest.
          </p>

          <div className="mb-8 lg:pt-10 flex flex-col items-center">
            <img src={crown} alt="Crown icon" className="w-20 h-10 mb-2" />
            <h2 className="text-4xl font-bold mb-6 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center w-full">
              {[
                {
                  title: "Affordable Plans:",
                  description: "Flexible options to suit your budget.",
                },
                {
                  title: "Simple Process:",
                  description: "Easy enrollment with minimal paperwork.",
                },
                {
                  title: "Peace of Mind:",
                  description:
                    "Coverage that guarantees support when it's needed most.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-[#B8A061] p-4 rounded-lg">
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="font-semibold text-black">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Vaps />
      <PricingComponent />
      <div
        className="text-white p-8 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <p className="mb-6 max-w-md lg:text-xl">
              Save our contact details to speak with a friendly Crown Funeral
              agent:
            </p>
            <div className="space-y-4 text-left w-full md:w-auto">
              <p className="font-semibold">
                Funeral Call Centre: 087 372 1094{" "}
              </p>
              {/* <p className="font-semibold">WhatsApp Line: 081 398 6351</p> */}
              <p>
                Member Queries:{" "}
                <a
                  href="mailto:customerservices@crownfuneral.co.za"
                  className="text-yellow-400 hover:underline"
                >
                  customerservices@crownfuneral.co.za
                </a>
              </p>
              <p>
                Member Complaints:{" "}
                <a
                  href="mailto:complaints@crownfuneral.co.za"
                  className="text-yellow-400 hover:underline"
                >
                  complaints@crownfuneral.co.za
                </a>
              </p>
              <p>
                Claims:{" "}
                <a
                  href="mailto:claims@crownfuneral.co.za"
                  className="text-yellow-400 hover:underline"
                >
                  claims@crownfuneral.co.za
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
