export default async function handler(req, res) {
  try {
    // Clean and construct target URL
    const queryString = req.url.includes("?")
      ? req.url
          .substring(req.url.indexOf("?"))
          .replace(/&\.\.\.path=proxy$/, "")
      : "";
    const targetUrl = `https://web09.pol360.co.za/api/360API.php${queryString}`;

    // Prepare headers based on request type
    const isAuthRequest = req.url.includes("GenerateAuthToken");
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-authorization-token": req.headers["x-authorization-token"],
    };

    if (!isAuthRequest && req.headers.authorization) {
      headers["Authorization"] = req.headers.authorization;
    }

    // Make request to target API
    const response = await fetch(targetUrl, {
      method: "GET",
      headers,
    });

    const text = await response.text();
    if (!text.trim()) {
      throw new Error("Empty response from server");
    }

    const data = JSON.parse(text);
    if (data.Result !== "Success") {
      throw new Error(data.Message || "Request failed");
    }

    // Set CORS headers and return response
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "authorization, x-authorization-token, content-type, accept"
    );
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({
      error: "Gateway Error",
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
}
