export default async function handler(req, res) {
  try {
    const queryString = req.url.includes("?")
      ? req.url
          .substring(req.url.indexOf("?"))
          .replace(/&\.\.\.path=proxy$/, "")
      : "";

    const targetUrl = `https://web09.pol360.co.za/api/360API.php${queryString}`;

    console.log("Making request to:", targetUrl);

    const isAuthRequest = req.url.includes("GenerateAuthToken");

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (isAuthRequest) {
      headers["x-authorization-token"] = req.headers["x-authorization-token"];
    } else {
      headers["Authorization"] = req.headers.authorization;
      headers["x-authorization-token"] = req.headers["x-authorization-token"];
    }

    console.log("Request headers:", headers);

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: headers,
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", Object.fromEntries(response.headers));

    const text = await response.text();
    console.log("Raw response:", text);

    if (!text.trim()) {
      throw new Error("Empty response from server");
    }

    const data = JSON.parse(text);

    if (data.Result !== "Success") {
      throw new Error(data.Message || "Request failed");
    }

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "authorization, x-authorization-token, content-type, accept"
    );

    return res.status(200).json(data);
  } catch (error) {
    console.error("Handler error:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });

    return res.status(502).json({
      error: "Gateway Error",
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
}
