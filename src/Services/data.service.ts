import axios from "axios";

// Base URL without the proxy prefix
export const POL_BASE_URL = "/pol360/api/360API.php";

// Get configuration from environment variables
const POL_AUTH_TOKEN = import.meta.env.VITE_POL_AUTH_TOKEN;
const POL_CLIENT_NAME = import.meta.env.VITE_POL_CLIENT_NAME;

// Validate environment variables
if (!POL_AUTH_TOKEN || !POL_CLIENT_NAME) {
  throw new Error("Missing required environment variables for POL360 service");
}

// Helper function to get auth token
export const getPOL360AuthToken = async () => {
  try {
    const response = await axios({
      method: "get",
      url: POL_BASE_URL,
      params: {
        Function: "GenerateAuthToken",
        ClientName: POL_CLIENT_NAME,
      },
      headers: {
        "x-authorization-token": POL_AUTH_TOKEN,
      },
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

    // Create the axios instance with headers
    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    // Make the request
    const response = await axiosInstance({
      method: "get",
      url: POL_BASE_URL,
      params: {
        Function: "GetMemberInformation",
        ClientName: POL_CLIENT_NAME,
        IDNumber: idNumber,
        MemberType: memberType,
        PolicyNumber: policyNumber,
      },
    });

    if (response.data.Result === "Success") {
      return response.data;
    }

    throw new Error(
      response.data.Message || "Failed to get member information"
    );
  } catch (error: any) {
    const errorMessage = error.response?.data?.Message || error.message;
    throw new Error(errorMessage);
  }
};
