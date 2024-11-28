export default async function handler(req, res) {
  try {
    const targetUrl = `https://web09.pol360.co.za/api${req.url.replace(
      "/pol360/api",
      ""
    )}`;

    // Get headers from original request
    const authHeader = req.headers.authorization;
    const xAuthToken = req.headers["x-authorization-token"];

    // Create headers object
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    // Add auth headers if they exist
    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    if (xAuthToken) {
      headers["X-Authorization-Token"] = xAuthToken;
    }

    // Make the request
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
    });

    const data = await response.json();

    // Return the response
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
