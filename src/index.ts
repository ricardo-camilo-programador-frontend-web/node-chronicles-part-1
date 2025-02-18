import http from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";

const server = http.createServer(async (req, res) => {
  try {
    const baseURL = `http://${req.headers.host}/`;
    const parsedUrl = new URL(req.url || "/", baseURL);

    const safePath = parsedUrl.pathname.replace(/\.\./g, "");
    let filePath = path.join(
      process.cwd(),
      "src",
      safePath === "/" ? "index.html" : safePath
    );

    const routeMap: Record<string, string> = {
      "/": "index.html",
      "/about": "about.html",
      "/contact": "contact.html",
      "/404": "404.html"
    };

    if (routeMap[parsedUrl.pathname]) {
      filePath = path.join(process.cwd(), "src", routeMap[parsedUrl.pathname]);
    }

    if (!filePath.endsWith(".html")) {
      filePath += ".html";
    }

    try {
      await fs.access(filePath);
    } catch (error) {
      filePath = path.join(process.cwd(), "src", "404.html");
      res.writeHead(404, { "Content-Type": "text/html" });
      const content = await fs.readFile(filePath);
      return res.end(content);
    }

    const content = await fs.readFile(filePath);

    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(content)
    });
    res.end(content);

  } catch (error) {
    console.error("Server error:", error);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain" });
    }
    res.end("Internal Server Error");
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
