export default async function handler(req, res) {
  try {
    const targetUrl = `https://web09.pol360.co.za/api${req.url.replace(
      "/pol360/api",
      ""
    )}`;

    // Log incoming request
    console.log("Incoming request:", {
      url: req.url,
      method: req.method,
      headers: req.headers,
      query: req.query,
    });

    // Handle preflight
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "*");
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

    // Forward all relevant headers from the original request
    const headers = {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json",
      "x-authorization-token": process.env.VITE_POL_AUTH_TOKEN,
    };

    // Ensure both header variations are forwarded
    if (req.headers.authorization) {
      headers["Authorization"] = req.headers.authorization;
      headers["authorization"] = req.headers.authorization;
    }

    if (req.headers["x-authorization-token"]) {
      headers["X-Authorization-Token"] = req.headers["x-authorization-token"];
      headers["x-authorization-token"] = req.headers["x-authorization-token"];
    }

    // Log outgoing request
    console.log("Outgoing request:", {
      url: targetUrl,
      method: req.method,
      headers: headers,
    });

    // Make the request to the target API
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
      redirect: "follow",
    });

    // Get response data
    const data = await response.json();

    // Log response for debugging
    console.log("API Response:", {
      status: response.status,
      headers: Object.fromEntries(response.headers),
      data: data,
    });

    // Forward original response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Add CORS headers to response
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Expose-Headers",
      "Authorization, X-Authorization-Token"
    );

    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy Error:", {
      message: error.message,
      stack: error.stack,
    });

    return res.status(500).json({
      error: "Internal Server Error",
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "An error occurred",
    });
  }
}
