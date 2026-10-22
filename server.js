const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Node.js! Visit /greet or /about");
    } else if (req.url === "/greet") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello! Greetings from the Node.js server!");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is a simple Node.js HTTP server built for skill labs.");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
    console.log("Routes: /home | /greet | /about");
});
