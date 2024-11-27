// api/pol360/[...path].js
export default async function handler(req, res) {
  const targetUrl = `https://web09.pol360.co.za/api${req.url.replace(
    "/pol360/api",
    ""
  )}`;

  // Log incoming headers for debugging
  console.log("Incoming headers:", req.headers);

  try {
    const headers = {
      ...req.headers,
      host: "web09.pol360.co.za",
      "x-authorization-token": process.env.VITE_POL_AUTH_TOKEN,
    };

    // Make sure to forward the Authorization header if it exists
    if (req.headers.authorization) {
      headers.authorization = req.headers.authorization;
    }

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
      ...(req.method !== "GET" && { body: JSON.stringify(req.body) }),
    });

    const data = await response.json();

    // Forward all response headers
    Object.entries(response.headers).forEach(([key, value]) => {
      res.setHeader(key, value);
      console.log("Setting header:", key, value);
    });

    res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
