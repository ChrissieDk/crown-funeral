import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/crown-logo-white.png";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const targetId = href?.replace("#", "");
      const elem = document.getElementById(targetId || "");
      elem?.scrollIntoView({ behavior: "smooth" });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) =>
      link.addEventListener("click", handleScroll as any)
    );

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleScroll as any)
      );
    };
  }, []);

  return (
    <>
      <header
        className={`flex justify-between items-center px-4 py-5 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <img src={logo} alt="Crown Funeral Logo" className="w-40 h-16" />
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#about-us" className="text-white hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <Link to="/products" className="text-white hover:text-yellow-400">
                Products
              </Link>
            </li>
            <li>
              <a href="#faqs" className="text-white hover:text-yellow-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="#about-us" className="text-white hover:text-yellow-400">
                How To Claim
              </a>
            </li>
            <li>
              <a
                href="#why-choose-us"
                className="text-white hover:text-yellow-400"
              >
                Value-Added Services
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center">
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition-colors hidden md:block"
            onClick={() => navigate("/sign-in")}
          >
            SIGN IN
          </button>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white z-50 relative ml-4"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden">
          <nav className="flex items-center justify-center h-full">
            <ul className="flex flex-col space-y-4 items-center">
              <li>
                <a
                  href="#about-us"
                  className="text-white text-lg"
                  onClick={toggleMenu}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="text-white text-lg"
                  onClick={toggleMenu}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="text-white text-lg"
                  onClick={toggleMenu}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="text-white text-lg"
                  onClick={toggleMenu}
                >
                  How To Claim
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="text-white text-lg"
                  onClick={toggleMenu}
                >
                  Value-Added Services
                </a>
              </li>
              <li>
                <a
                  href="#verify"
                  className="text-white text-lg"
                  onClick={toggleMenu}
                >
                  Verify an Agent
                </a>
              </li>
              <li>
                <button
                  className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition-colors text-lg"
                  onClick={() => {
                    toggleMenu();
                    navigate("/sign-in");
                  }}
                >
                  SIGN IN
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
