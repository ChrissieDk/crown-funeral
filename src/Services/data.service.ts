import axios, { AxiosError } from "axios";
import { IllionUserData } from "../Types";

// API Constants
const POL_BASE_URL = "/api/pol360/proxy";
const ILLION_BASE_URL =
  "https://api.one81.com/v1/Notification/AutoSignUpIllion";

// Environment variables
const POL_AUTH_TOKEN = import.meta.env.VITE_POL_AUTH_TOKEN;
const POL_CLIENT_NAME = import.meta.env.VITE_POL_CLIENT_NAME;
const ILLION_USERNAME = import.meta.env.VITE_ILLION_USERNAME;
const ILLION_PASSWORD = import.meta.env.VITE_ILLION_PASSWORD;

// Validate required environment variables
if (!POL_AUTH_TOKEN || !POL_CLIENT_NAME) {
  throw new Error("Missing required environment variables for POL360 service");
}

if (!ILLION_USERNAME || !ILLION_PASSWORD) {
  throw new Error("Missing required environment variables for Illion service");
}

// Base64 encode Illion credentials
const base64Credentials = btoa(`${ILLION_USERNAME}:${ILLION_PASSWORD}`);

// Error handling utility
const handleApiError = (error: unknown, context: string) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<any>;
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
      headers: {
        "x-authorization-token": POL_AUTH_TOKEN,
      },
    });

    if (response.data?.Result !== "Success" || !response.data?.JWTToken) {
      throw new Error(response.data?.Message || "Invalid token response");
    }

    return response.data.JWTToken;
  } catch (error) {
    handleApiError(error, "Authentication");
  }
};

// Member information retrieval
export const getMemberInformation = async (
  idNumber: string,
  policyNumber: string,
  memberType: string = "MEM"
) => {
  const fetchMemberInfo = async (token: string) => {
    try {
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
          "x-authorization-token": POL_AUTH_TOKEN,
          authorization: `Bearer ${token}`,
        },
      });

      if (response.data?.Result !== "Success") {
        throw new Error(
          response.data?.Message || "Failed to get member information"
        );
      }

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        throw new Error("TOKEN_EXPIRED");
      }
      handleApiError(error, "Member Information");
    }
  };

  try {
    const token = await getPOL360AuthToken();

    try {
      return await fetchMemberInfo(token);
    } catch (error) {
      if (error instanceof Error && error.message === "TOKEN_EXPIRED") {
        const newToken = await getPOL360AuthToken();
        return await fetchMemberInfo(newToken);
      }
      throw error;
    }
  } catch (error) {
    handleApiError(error, "Member Information");
  }
};

// Connection verification
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
