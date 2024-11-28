// data.service.ts
import axios, { AxiosError } from "axios";
import { IllionUserData } from "../Types";

const POL_BASE_URL = "/pol360/api/360API.php";
const ILLION_BASE_URL =
  "https://api.one81.com/v1/Notification/AutoSignUpIllion";

const POL_AUTH_TOKEN = import.meta.env.VITE_POL_AUTH_TOKEN;
const POL_CLIENT_NAME = import.meta.env.VITE_POL_CLIENT_NAME;
const ILLION_USERNAME = import.meta.env.VITE_ILLION_USERNAME;
const ILLION_PASSWORD = import.meta.env.VITE_ILLION_PASSWORD;

// Validate environment variables
if (!POL_AUTH_TOKEN || !POL_CLIENT_NAME) {
  throw new Error("Missing required environment variables for POL360 service");
}

if (!ILLION_USERNAME || !ILLION_PASSWORD) {
  throw new Error("Missing required environment variables for Illion service");
}

// Create base64 credentials for Illion
const base64Credentials = btoa(`${ILLION_USERNAME}:${ILLION_PASSWORD}`);

// Header creation utility
const createHeaders = (token?: string) => {
  const headers: Record<string, string> = {
    accept: "application/json, text/plain, */*",
    "content-type": "application/json",
    "x-authorization-token": POL_AUTH_TOKEN,
    "x-requested-with": "XMLHttpRequest",
  };

  if (token) {
    headers["authorization"] = `Bearer ${token}`;
  }

  return headers;
};

// Error handling utility
const handleApiError = (error: unknown, context: string) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<any>;
    console.error(`${context} Error:`, {
      status: axiosError.response?.status,
      data: axiosError.response?.data,
      message: axiosError.message,
    });
    throw new Error(
      axiosError.response?.data?.Message ||
        axiosError.message ||
        `${context} failed`
    );
  }
  throw error;
};

// Token generation
export const getPOL360AuthToken = async () => {
  try {
    const response = await axios({
      method: "get",
      url: POL_BASE_URL,
      params: {
        Function: "GenerateAuthToken",
        ClientName: POL_CLIENT_NAME,
      },
      headers: createHeaders(),
    });

    if (response.data?.Result !== "Success" || !response.data?.JWTToken) {
      throw new Error(response.data?.Message || "Invalid token response");
    }

    return response.data.JWTToken;
  } catch (error) {
    handleApiError(error, "Authentication");
  }
};

// Member information retrieval with retry logic
// Member information retrieval with retry logic
export const getMemberInformation = async (
  idNumber: string,
  policyNumber: string,
  memberType: string = "MEM"
) => {
  const fetchMemberInfo = async (token: string) => {
    try {
      console.log("Making request with token:", token); // Debug log

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
          ...createHeaders(token),
          authorization: `Bearer ${token}`,
          "x-authorization-token": POL_AUTH_TOKEN,
          "x-requested-with": "XMLHttpRequest",
        },
      });

      console.log("Response received:", response.data); // Debug log

      if (response.data?.Result !== "Success") {
        throw new Error(
          response.data?.Message || "Failed to get member information"
        );
      }

      return response.data;
    } catch (error) {
      console.error("Request failed:", error); // Debug log
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        throw new Error("TOKEN_EXPIRED");
      }
      handleApiError(error, "Member Information");
    }
  };

  try {
    console.log("Getting initial auth token..."); // Debug log
    const token = await getPOL360AuthToken();
    console.log("Initial token received:", token); // Debug log

    try {
      return await fetchMemberInfo(token);
    } catch (error) {
      if (error instanceof Error && error.message === "TOKEN_EXPIRED") {
        console.log("Token expired, getting new token..."); // Debug log
        const newToken = await getPOL360AuthToken();
        console.log("New token received:", newToken); // Debug log
        return await fetchMemberInfo(newToken);
      }
      throw error;
    }
  } catch (error) {
    handleApiError(error, "Member Information");
  }
};

export const verifyPOL360Connection = async () => {
  try {
    const token = await getPOL360AuthToken();
    return { status: "connected", token };
  } catch (error) {
    return {
      status: "error",
      message:
        error instanceof Error
          ? error.message
          : "Connection verification failed",
    };
  }
};

// Illion integration
export const getIllionAutoLogin = async (userData: IllionUserData) => {
  try {
    const response = await axios({
      method: "post",
      url: ILLION_BASE_URL,
      headers: {
        authorization: `Basic ${base64Credentials}`,
        "content-type": "application/json",
      },
      data: userData,
    });

    if (!response.data) {
      throw new Error("Invalid response from Illion service");
    }

    return response.data;
  } catch (error) {
    handleApiError(error, "Illion Auto-login");
  }
};
