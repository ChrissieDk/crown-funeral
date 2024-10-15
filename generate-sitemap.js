import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// An array with your links
const links = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/dashboard", changefreq: "weekly", priority: 0.8 },
  { url: "/products", changefreq: "weekly", priority: 0.8 },
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: "https://crownfuneral.co.za" });

// Generate sitemap and save to file
streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  fs.writeFileSync(
    path.join(__dirname, "public", "sitemap.xml"),
    data.toString()
  );
  console.log("Sitemap generated successfully!");
});
