export default async function handler(req, res) {
  try {
    // Construct target URL correctly
    const targetUrl = `https://web09.pol360.co.za/api${req.url.replace(
      "/pol360/api",
      ""
    )}`;

    console.log("Target URL:", targetUrl);
    console.log("Original headers:", req.headers);

    // Get the raw authorization header
    const authHeader = req.headers.authorization || req.headers.Authorization;
    const xAuthToken =
      req.headers["x-authorization-token"] ||
      req.headers["X-Authorization-Token"] ||
      process.env.VITE_POL_AUTH_TOKEN;

    console.log("Auth header:", authHeader);
    console.log("X-Auth-Token:", xAuthToken);

    // Construct headers
    const headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    });

    // Set both variations of auth headers
    if (authHeader) {
      headers.set("Authorization", authHeader);
      headers.set("authorization", authHeader);
    }

    if (xAuthToken) {
      headers.set("X-Authorization-Token", xAuthToken);
      headers.set("x-authorization-token", xAuthToken);
    }

    console.log("Final headers:", Object.fromEntries(headers.entries()));

    // Make the request
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
      redirect: "follow",
    });

    const data = await response.json();

    console.log("API Response:", {
      status: response.status,
      data: data,
    });

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Authorization, X-Authorization-Token, Content-Type"
    );

    // Return the response
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
}
