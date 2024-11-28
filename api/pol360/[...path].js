export default async function handler(req, res) {
  // Handle OPTIONS requests for CORS
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "authorization, x-authorization-token, content-type, accept"
    );
    return res.status(204).end();
  }

  try {
    const targetUrl = `https://web09.pol360.co.za/api/360API.php${
      req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : ""
    }`;

    const isAuthRequest = req.url.includes("GenerateAuthToken");

    // Ensure headers are lowercase and stripped of any whitespace
    const authHeader = req.headers.authorization?.trim();
    const xAuthToken = req.headers["x-authorization-token"]?.trim();

    console.log("Incoming headers:", {
      auth: authHeader,
      xAuth: xAuthToken,
    });

    const headers = {
      accept: "application/json",
      "content-type": "application/json",
    };

    if (isAuthRequest) {
      headers["x-authorization-token"] = xAuthToken;
    } else {
      if (!authHeader) {
        return res.status(400).json({
          error: "Missing Authorization header",
        });
      }
      headers["authorization"] = authHeader;
      headers["x-authorization-token"] = xAuthToken;
    }

    console.log("Request:", {
      url: targetUrl,
      method: "GET",
      headers: headers,
    });

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: headers,
    });

    // Set CORS headers on response
    res.setHeader("Access-Control-Allow-Origin", "*");

    const text = await response.text();
    console.log("Response:", {
      status: response.status,
      body: text,
    });

    try {
      const data = JSON.parse(text);
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
