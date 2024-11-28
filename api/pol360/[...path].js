export default async function handler(req, res) {
  try {
    const targetUrl = `https://web09.pol360.co.za/api${req.url.replace(
      "/pol360/api",
      ""
    )}`;

    // Log incoming request for debugging
    console.log({
      targetUrl,
      method: req.method,
      headers: req.headers,
      query: req.query,
    });

    // Handle preflight requests
    if (req.method === "OPTIONS") {
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization, X-Authorization-Token, Content-Type, Accept"
      );
      res.setHeader("Access-Control-Max-Age", "86400");
      return res.status(204).end();
    }

    // Prepare headers with consistent casing
    const headers = {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json",
      "x-authorization-token": process.env.VITE_POL_AUTH_TOKEN,
    };

    // Forward authorization header if present
    if (req.headers.authorization) {
      headers["authorization"] = req.headers.authorization;
    }

    // Log outgoing request
    console.log("Outgoing request:", {
      url: targetUrl,
      method: req.method,
      headers: headers,
    });

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    });

    // Get response data
    const data = await response.json().catch(() => null);

    // Log response for debugging
    console.log("API Response:", {
      status: response.status,
      headers: Object.fromEntries(response.headers),
      data: data,
    });

    // Forward response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Set CORS headers for the response
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Expose-Headers",
      "Authorization, X-Authorization-Token"
    );

    // Send response
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy Error:", error);

    // Send detailed error in development, generic in production
    const errorMessage =
      process.env.NODE_ENV === "development"
        ? error.message
        : "Internal Server Error";

    return res.status(500).json({
      error: "Internal Server Error",
      message: errorMessage,
      ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    });
  }
}
