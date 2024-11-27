export default async function handler(req, res) {
  const targetUrl = `https://web09.pol360.co.za/api${req.url.replace(
    "/pol360/api",
    ""
  )}`;

  try {
    const headers = {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "X-Authorization-Token": process.env.VITE_POL_AUTH_TOKEN,
    };

    // Use exact casing from headers
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
    res.status(500).json({ error: "Internal Server Error" });
  }
}
