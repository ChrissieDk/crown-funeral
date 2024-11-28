import axios from "axios";

export default async function handler(req, res) {
  try {
    const targetUrl = `https://web09.pol360.co.za/api/360API.php${
      req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : ""
    }`;

    console.log("Making request to:", targetUrl);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // Add auth headers if present
    if (req.headers["x-authorization-token"]) {
      headers["X-Authorization-Token"] = req.headers["x-authorization-token"];
    }
    if (req.headers.authorization) {
      headers["Authorization"] = req.headers.authorization;
    }

    console.log("Request headers:", headers);

    // Use axios instead of fetch
    const response = await axios({
      method: req.method,
      url: targetUrl,
      headers: headers,
      validateStatus: function (status) {
        return true; // Always resolve promise to handle all status codes
      },
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers);
    console.log("Response data:", response.data);

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Forward the response status and data
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Detailed error:", {
      message: error.message,
      stack: error.stack,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers,
    });

    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return res.status(error.response.status).json({
          error: "API Error",
          status: error.response.status,
          data: error.response.data,
        });
      } else if (error.request) {
        // The request was made but no response was received
        return res.status(503).json({
          error: "No Response",
          message: "The API server did not respond",
        });
      }
    }

    return res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
