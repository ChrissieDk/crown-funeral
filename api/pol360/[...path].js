export default async function handler(req, res) {
  try {
    const targetUrl = `https://web09.pol360.co.za/api/360API.php${
      req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : ""
    }`;

    // For GenerateAuthToken, only send x-authorization-token
    const isAuthRequest = req.url.includes("GenerateAuthToken");

    // Log all incoming headers for debugging
    console.log("All incoming headers:", req.headers);

    const headers = {};

    // Add content type and accept headers
    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";

    if (isAuthRequest) {
      // For auth request, only send X-Authorization-Token with uppercase
      headers["X-Authorization-Token"] =
        req.headers["x-authorization-token"] ||
        req.headers["X-Authorization-Token"];
    } else {
      // For member info request, send both headers with correct casing
      const authHeader = req.headers.authorization || req.headers.Authorization;
      const xAuthToken =
        req.headers["x-authorization-token"] ||
        req.headers["X-Authorization-Token"];

      if (authHeader) {
        headers["Authorization"] = authHeader.startsWith("Bearer ")
          ? authHeader
          : `Bearer ${authHeader}`;
      }

      if (xAuthToken) {
        headers["X-Authorization-Token"] = xAuthToken;
      }
    }

    console.log("Request URL:", targetUrl);
    console.log("Outgoing headers:", headers);

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: headers,
    });

    const text = await response.text();
    console.log("Response status:", response.status);
    console.log("Response text:", text);

    try {
      const data = JSON.parse(text);
      // Set CORS headers
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization, X-Authorization-Token"
      );

      return res.status(response.status).json(data);
    } catch (e) {
      return res.status(500).json({
        error: "Parse Error",
        raw: text,
      });
    }
  } catch (error) {
    console.error("Request failed:", error);
    return res.status(500).json({
      error: "Request Failed",
      message: error.message,
    });
  }
}
