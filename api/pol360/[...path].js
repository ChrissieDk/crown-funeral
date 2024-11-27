export default async function handler(req, res) {
  const targetUrl = `https://web09.pol360.co.za/api${req.url.replace(
    "/pol360/api",
    ""
  )}`;

  // Log incoming request headers
  console.log("Incoming request headers:", req.headers);

  try {
    const headers = {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "X-Authorization-Token": process.env.VITE_POL_AUTH_TOKEN,
    };

    // Use exact casing from headers
    if (req.headers.authorization) {
      headers["Authorization"] = req.headers.authorization;
      console.log("Setting Authorization header:", headers["Authorization"]);
    } else {
      console.log("No authorization header found in request");
    }

    console.log("Final headers being sent:", headers);

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
      ...(req.method !== "GET" && { body: JSON.stringify(req.body) }),
    });

    const data = await response.json();
    console.log("Response from API:", data);

    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error in proxy:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
