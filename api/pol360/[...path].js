export default async function handler(req, res) {
  try {
    const targetUrl = `https://web09.pol360.co.za/api/360API.php${
      req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : ""
    }`;

    // Log incoming request details
    console.log({
      targetUrl,
      originalUrl: req.url,
      method: req.method,
      headers: req.headers,
      query: req.query,
    });

    // Handle OPTIONS request for CORS
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization, X-Authorization-Token, Content-Type, Accept"
      );
      return res.status(204).end();
    }

    // Ensure authorization headers exist
    if (!req.headers.authorization || !req.headers["x-authorization-token"]) {
      console.error("Missing required headers:", req.headers);
      return res
        .status(400)
        .json({ error: "Missing required authorization headers" });
    }

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        Authorization: req.headers.authorization,
        "X-Authorization-Token": req.headers["x-authorization-token"],
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();

    // Log the response for debugging
    console.log("API Response:", {
      status: response.status,
      data: data,
    });

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");

    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
