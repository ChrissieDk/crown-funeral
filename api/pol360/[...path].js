export default async function handler(req, res) {
  try {
    const targetUrl = `https://web09.pol360.co.za/api/360API.php${
      req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : ""
    }`;

    // For GenerateAuthToken, only send x-authorization-token
    const isAuthRequest = req.url.includes("GenerateAuthToken");

    const headers = isAuthRequest
      ? {
          "x-authorization-token": req.headers["x-authorization-token"],
        }
      : {
          authorization: req.headers.authorization,
          "x-authorization-token": req.headers["x-authorization-token"],
        };

    console.log("Making request to:", targetUrl);
    console.log("With headers:", headers);

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: headers,
    });

    const text = await response.text();
    console.log("Raw response:", text);

    try {
      const data = JSON.parse(text);
      return res.status(response.status).json(data);
    } catch (e) {
      return res.status(500).json({
        error: "Parse Error",
        raw: text,
      });
    }
  } catch (error) {
    console.error("Request failed:", error);
    return res.status(500).json({
      error: "Request Failed",
      message: error.message,
    });
  }
}
