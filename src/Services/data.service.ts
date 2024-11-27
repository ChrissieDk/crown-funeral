import axios from "axios";
import { IllionUserData } from "../Types";

const POL_BASE_URL = "/api/pol360/360API.php";
const ILLION_BASE_URL =
  "https://api.one81.com/v1/Notification/AutoSignUpIllion";

// Environment variables
const POL_AUTH_TOKEN = import.meta.env.VITE_POL_AUTH_TOKEN;
const POL_CLIENT_NAME = import.meta.env.VITE_POL_CLIENT_NAME;
const ILLION_USERNAME = import.meta.env.VITE_ILLION_USERNAME;
const ILLION_PASSWORD = import.meta.env.VITE_ILLION_PASSWORD;

// Validate environment variables
if (!POL_AUTH_TOKEN || !POL_CLIENT_NAME) {
  throw new Error("Missing required environment variables for POL360 service");
}

const base64Credentials = btoa(`${ILLION_USERNAME}:${ILLION_PASSWORD}`);

// Create axios instance with default config
const polAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
    "x-authorization-token": POL_AUTH_TOKEN,
  },
});

export const getPOL360AuthToken = async () => {
  try {
    const response = await polAxios({
      method: "get",
      url: POL_BASE_URL,
      params: {
        Function: "GenerateAuthToken",
        ClientName: POL_CLIENT_NAME,
      },
    });

    if (response.data.Result === "Success") {
      // Update the axios instance default headers with the new token
      polAxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.JWTToken}`;
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
    const token = await getPOL360AuthToken();
    console.log("Generated Token:", token);

    // Use the polAxios instance which now has the Authorization header set
    const response = await polAxios({
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
        Authorization: `Bearer ${token}`, // Explicitly set the header again to be safe
      },
    });

    if (response.data.Result === "Success") {
      return response.data;
    }

    throw new Error(
      response.data.Message || "Failed to get member information"
    );
  } catch (error: any) {
    console.error("Full error response:", error.response);
    console.error("Request headers:", error.config?.headers); // Add this to debug headers
    throw new Error(error.response?.data?.Message || error.message);
  }
};

export const getIllionAutoLogin = async (userData: IllionUserData) => {
  try {
    const response = await axios({
      method: "post",
      url: ILLION_BASE_URL,
      headers: {
        Authorization: `Basic ${base64Credentials}`,
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
