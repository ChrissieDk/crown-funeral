// api/pol360/[...path].js
export default async function handler(req, res) {
  const targetUrl = `https://web09.pol360.co.za/api${req.url.replace(
    "/api/pol360",
    ""
  )}`;

  try {
    // Preserve the exact header casing from the API docs
    const headers = {
      "Content-Type": "application/json",
      "x-authorization-token": process.env.VITE_POL_AUTH_TOKEN,
    };

    // Preserve Authorization header exactly as received
    if (req.headers.authorization) {
      headers["Authorization"] = req.headers.authorization;
    }

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
      ...(req.method !== "GET" && { body: JSON.stringify(req.body) }),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
