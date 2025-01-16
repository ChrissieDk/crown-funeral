import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import crownSignIn from "../assets/crown-sign-in.png";
import logo from "../assets/crown-logo-white.png";
import {
  getMemberInformation,
  getMemberTransactionHistory,
} from "../Services/data.service";
import axios from "axios";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    policyNumber: "",
    idNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id === "policy-number" ? "policyNumber" : "idNumber"]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!credentials.policyNumber || !credentials.idNumber) {
        throw new Error("Please fill in all fields");
      }

      // First validate member exists
      await getMemberInformation(
        credentials.idNumber,
        credentials.policyNumber
      );

      const fetchTransactionHistory = async () => {
        try {
          const result = await getMemberTransactionHistory(
            credentials.idNumber,
            credentials.policyNumber
          );
          console.log("Transaction history result:", result);

          const hasTransactionHistory =
            result?.Message === "Transaction History Found" &&
            Array.isArray(result?.TransactionHist) &&
            result.TransactionHist.length > 0;

          // Store everything in session storage upon successful result
          sessionStorage.setItem(
            "memberInfo",
            JSON.stringify({
              policyNumber: credentials.policyNumber,
              idNumber: credentials.idNumber,
              hasServiceAccess: hasTransactionHistory,
            })
          );

          navigate("/dashboard");
        } catch (error) {
          console.error("Full error:", error);
          if (axios.isAxiosError(error)) {
          }
          throw error;
        }
      };

      // Execute the transaction history check
      await fetchTransactionHistory();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Invalid credentials. Please check your policy number and ID number."
      );
    } finally {
      setLoading(false);
    }
  };

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

          {error && (
            <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 p-4 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
                value={credentials.policyNumber}
                onChange={handleInputChange}
                className="w-full lg:w-[80%] bg-transparent border-b border-white py-2 focus:outline-none focus:border-[#CFB46D]"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-lg font-light" htmlFor="id-number">
                ID Number
              </label>
              <input
                id="id-number"
                type="text"
                value={credentials.idNumber}
                onChange={handleInputChange}
                className="w-full lg:w-[80%] bg-transparent border-b border-white py-2 focus:outline-none focus:border-[#CFB46D]"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className={`bg-[#CFB46D] text-black font-semibold px-6 py-3 rounded w-auto lg:w-[40%] 
                ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#CFB46D]"
                } 
                transition-colors mt-6`}
              disabled={loading}
            >
              {loading ? "SIGNING IN..." : "SIGN IN"}
            </button>
          </form>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-black">
          <div
            className="bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${crownSignIn})`,
              width: "80%",
              height: "100%",
              maxWidth: "500px",
              maxHeight: "600px",
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
