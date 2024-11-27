// api/pol360/[...path].js
export default async function handler(req, res) {
  const targetUrl = `https://web09.pol360.co.za/api${req.url.replace(
    "/pol360/api",
    ""
  )}`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        host: "web09.pol360.co.za",
        "x-authorization-token": process.env.VITE_POL_AUTH_TOKEN,
      },
      ...(req.method !== "GET" && { body: JSON.stringify(req.body) }),
    });

    const data = await response.json();

    // Forward the response headers
    Object.entries(response.headers.raw()).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
