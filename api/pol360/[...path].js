// api/pol360/[...path].js
export default async function handler(req, res) {
  const targetUrl = `https://web09.pol360.co.za/api${req.url.replace(
    "/pol360/api",
    ""
  )}`;

  // Log incoming request details
  console.log("Incoming headers:", req.headers);
  console.log("Target URL:", targetUrl);

  try {
    const headers = {};

    // Add Content-Type
    headers["Content-Type"] = "application/json";

    // Add x-authorization-token
    headers["x-authorization-token"] = process.env.VITE_POL_AUTH_TOKEN;

    // Add Authorization if present
    if (req.headers.authorization) {
      headers["Authorization"] = req.headers.authorization;
      console.log(
        "Authorization header being forwarded:",
        headers["Authorization"]
      );
    }

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
      ...(req.method !== "GET" && { body: JSON.stringify(req.body) }),
    });

    // Log outgoing response
    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Response data:", data);

    res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({
      error: "Proxy Error",
      message: error.message,
      headers: req.headers, // Log the headers in the error response
    });
  }
}
