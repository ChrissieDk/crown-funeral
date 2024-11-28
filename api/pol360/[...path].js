export default async function handler(req, res) {
  try {
    // Construct the target URL
    const targetUrl = `https://web09.pol360.co.za/api/360API.php${
      req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : ""
    }`;

    console.log("Making request to:", targetUrl);

    // Prepare headers
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    // Add auth headers based on request type
    if (req.url.includes("GenerateAuthToken")) {
      headers.append(
        "X-Authorization-Token",
        req.headers["x-authorization-token"]
      );
      console.log("Auth request headers:", Object.fromEntries(headers));
    } else {
      headers.append("Authorization", req.headers.authorization);
      headers.append(
        "X-Authorization-Token",
        req.headers["x-authorization-token"]
      );
      console.log("Member info request headers:", Object.fromEntries(headers));
    }

    try {
      // Make the request with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch(targetUrl, {
        method: "GET",
        headers: headers,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Log response details
      console.log("Response status:", response.status);
      console.log("Response headers:", Object.fromEntries(response.headers));

      const text = await response.text();
      console.log("Raw response:", text);

      // If there's no response text, return an error
      if (!text) {
        console.error("Empty response received from API");
        return res.status(502).json({
          error: "Bad Gateway",
          message: "No response received from upstream server",
        });
      }

      // Try to parse the response
      try {
        const data = JSON.parse(text);
        return res.status(response.status).json(data);
      } catch (parseError) {
        console.error("Parse error:", parseError);
        return res.status(502).json({
          error: "Invalid Response",
          message: "Unable to parse API response",
          rawResponse: text,
        });
      }
    } catch (fetchError) {
      console.error("Fetch error:", {
        name: fetchError.name,
        message: fetchError.message,
        cause: fetchError.cause,
      });

      if (fetchError.name === "AbortError") {
        return res.status(504).json({
          error: "Gateway Timeout",
          message: "Request timed out",
        });
      }

      return res.status(502).json({
        error: "Bad Gateway",
        message: fetchError.message,
      });
    }
  } catch (error) {
    console.error("Handler error:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });

    return res.status(500).json({
      error: "Internal Server Error",
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "An unexpected error occurred",
    });
  }
}
