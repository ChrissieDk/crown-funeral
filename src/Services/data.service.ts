import axios from "axios";
import { IllionUserData } from "../Types";

// Base URL without the proxy prefix
const POL_BASE_URL = "/pol360/api/360API.php";

const ILLION_BASE_URL =
  "https://api.one81.com/v1/Notification/AutoSignUpIllion";

// Get configuration from environment variables
const POL_AUTH_TOKEN = import.meta.env.VITE_POL_AUTH_TOKEN;
const POL_CLIENT_NAME = import.meta.env.VITE_POL_CLIENT_NAME;

// Validate environment variables
if (!POL_AUTH_TOKEN || !POL_CLIENT_NAME) {
  throw new Error("Missing required environment variables for POL360 service");
}

// Illion
const ILLION_USERNAME = import.meta.env.VITE_ILLION_USERNAME;
const ILLION_PASSWORD = import.meta.env.VITE_ILLION_PASSWORD;

// Create base64 encoded credentials
const base64Credentials = btoa(`${ILLION_USERNAME}:${ILLION_PASSWORD}`);

// Helper function to get auth token
export const getPOL360AuthToken = async () => {
  try {
    const response = await axios({
      method: "get",
      url: POL_BASE_URL,
      params: {
        Function: "GenerateAuthToken", // This was incorrect before
        ClientName: POL_CLIENT_NAME,
      },
      headers: {
        "x-authorization-token": POL_AUTH_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (response.data.Result === "Success") {
      return response.data.JWTToken;
    }
    throw new Error(response.data.Message || "Failed to get auth token");
  } catch (error: any) {
    console.error("Auth Error:", error.response?.data || error.message);
    throw error;
  }
};

export const getMemberInformation = async (
  idNumber: string,
  policyNumber: string,
  memberType: string = "MEM"
) => {
  try {
    // Get fresh token
    const token = await getPOL360AuthToken();

    // Make the request with all headers
    const response = await axios({
      method: "get",
      url: POL_BASE_URL,
      params: {
        Function: "GetMemberInformation",
        ClientName: POL_CLIENT_NAME,
        IDNumber: idNumber,
        MemberType: memberType,
        PolicyNumber: policyNumber,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "x-authorization-token": POL_AUTH_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (response.data.Result === "Success") {
      return response.data;
    }

    throw new Error(
      response.data.Message || "Failed to get member information"
    );
  } catch (error: any) {
    console.error("Full error response:", error.response);
    const errorMessage = error.response?.data?.Message || error.message;
    throw new Error(errorMessage);
  }
};

// Illion
export const getIllionAutoLogin = async (userData: IllionUserData) => {
  try {
    const response = await axios({
      method: "post",
      url: ILLION_BASE_URL,
      headers: {
        Authorization: `Basic ${base64Credentials}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: userData,
    });

    if (response.data) {
      return response.data;
    }
    throw new Error("Failed to get Illion auto-login URL");
  } catch (error: any) {
    console.error(
      "Illion Auto-login Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
