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

    if (req.headers["x-authorization-token"]) {
      headers["X-Authorization-Token"] = req.headers["x-authorization-token"];
    }

    if (req.headers.authorization) {
      headers["Authorization"] = req.headers.authorization;
    }

    console.log("Request headers:", headers);

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
    });

    // Log raw response for debugging
    const responseText = await response.text();
    console.log("Raw response:", responseText);

    let data;
    try {
      // Try to parse the response as JSON
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse response:", parseError);
      return res.status(500).json({
        error: "Invalid Response",
        message: "Unable to parse API response",
        rawResponse: responseText,
      });
    }

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Return the parsed response
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy Error:", {
      message: error.message,
      stack: error.stack,
    });
    return res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
